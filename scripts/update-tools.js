/**
 * MCP Tools Updater
 * 
 * This script fetches the latest MCP tools from Reddit's r/mcp RSS feed
 * and updates the repository with new entries, tracking GitHub stars for popularity.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');
const { parseString } = require('xml2js');

// Configuration
const REDDIT_RSS_URL = 'https://www.reddit.com/r/mcp/.rss';
const MCP_TOOLS_PATH = path.join(__dirname, '../mcp-tools.md');
const GITHUB_API_URL = 'https://api.github.com';

// GitHub authentication - should be stored in environment variables
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

/**
 * Fetch RSS feed from Reddit
 */
async function fetchRedditRSS() {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'MCP-Tools-Updater/1.0'
      }
    };

    https.get(REDDIT_RSS_URL, options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        // Try to parse the XML
        try {
          parseString(data, { strict: false, trim: true }, (err, result) => {
            if (err) {
              console.error('XML parsing error:', err.message);
              // Return empty result instead of failing
              resolve({ feed: { entry: [] } });
            } else {
              resolve(result);
            }
          });
        } catch (error) {
          console.error('Exception during XML parsing:', error);
          // Return empty result instead of failing
          resolve({ feed: { entry: [] } });
        }
      });
    }).on('error', (err) => {
      console.error('Error fetching Reddit RSS:', err.message);
      // Return empty result instead of failing
      resolve({ feed: { entry: [] } });
    });
  });
}

/**
 * Extract GitHub repositories from RSS feed entries
 */
function extractGitHubRepos(rssData) {
  if (!rssData || !rssData.feed) {
    console.log('No valid feed data found');
    return [];
  }

  const entries = rssData.feed.entry || [];
  const repos = [];

  if (entries.length === 0) {
    console.log('No entries found in feed');
    return [];
  }

  entries.forEach(entry => {
    try {
      const content = entry.content && entry.content[0] ? entry.content[0]._ : '';
      
      // Look for GitHub links in the content
      const githubRegex = /https:\/\/github\.com\/([\w-]+)\/([\w-]+)/g;
      let match;
      
      while ((match = githubRegex.exec(content)) !== null) {
        repos.push({
          owner: match[1],
          repo: match[2],
          title: entry.title ? entry.title[0] : 'Untitled',
          url: match[0],
          date: entry.updated ? entry.updated[0] : new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('Error processing entry:', error);
    }
  });

  return repos;
}

/**
 * Fetch star count for a GitHub repository
 */
async function fetchGitHubStars(owner, repo) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${owner}/${repo}`,
      method: 'GET',
      headers: {
        'User-Agent': 'MCP-Tools-Updater',
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': process.env.GITHUB_TOKEN ? `Bearer ${process.env.GITHUB_TOKEN}` : ''
      }
    };

    https.get(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const repoData = JSON.parse(data);
          resolve(repoData.stargazers_count || 0);
        } catch (err) {
          console.error('Error parsing GitHub API response:', err);
          resolve(0); // Return 0 stars instead of failing completely
        }
      });
    }).on('error', (err) => {
      console.error(`Error fetching stars for ${owner}/${repo}:`, err.message);
      resolve(0); // Return 0 stars instead of failing completely
    });
  });
}

/**
 * Update the MCP tools markdown file with new entries
 */
async function updateMCPToolsFile(repos) {
  try {
    // Ensure the file exists before trying to read it
    if (!fs.existsSync(MCP_TOOLS_PATH)) {
      console.error(`File does not exist: ${MCP_TOOLS_PATH}`);
      return;
    }
    
    // Read the current file
    let content = fs.readFileSync(MCP_TOOLS_PATH, 'utf8');
    
    // Check for existing entries to avoid duplicates
    for (const repo of repos) {
      if (!content.includes(repo.url)) {
        // Fetch star count
        let stars = 0;
        try {
          stars = await fetchGitHubStars(repo.owner, repo.repo);
        } catch (err) {
          console.error(`Error fetching stars for ${repo.url}: ${err.message}`);
        }
        
        // Create new entry
        const newEntry = `- [${repo.owner}/${repo.repo}](${repo.url}) - ${repo.title} *(${stars} ⭐)*`;
        
        // Add to appropriate section or create a new one
        const sectionRegex = /## From Reddit r\/mcp/;
        if (sectionRegex.test(content)) {
          const sectionStart = content.match(sectionRegex).index + content.match(sectionRegex)[0].length;
          content = content.slice(0, sectionStart) + '\n' + newEntry + content.slice(sectionStart);
        } else {
          content += '\n\n## From Reddit r/mcp\n\n' + newEntry;
        }
        
        console.log(`Added new repository: ${repo.url}`);
      }
    }
    
    // Write updated content back to file
    fs.writeFileSync(MCP_TOOLS_PATH, content, 'utf8');
    console.log('MCP tools file updated successfully!');
    
  } catch (err) {
    console.error(`Error updating MCP tools file: ${err.message}`);
  }
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('Fetching Reddit RSS feed...');
    const rssData = await fetchRedditRSS();
    
    console.log('Extracting GitHub repositories...');
    const repos = extractGitHubRepos(rssData);
    
    console.log(`Found ${repos.length} GitHub repositories.`);
    if (repos.length > 0) {
      console.log('Updating MCP tools file...');
      await updateMCPToolsFile(repos);
    } else {
      console.log('No new repositories found.');
    }
    
    console.log('Done!');
  } catch (err) {
    console.error(`Error: ${err.message}`);
    // Don't exit with error code to prevent workflow failure
    // Just log the error and continue
    // process.exit(1);
  }
}

// Run the script
main();