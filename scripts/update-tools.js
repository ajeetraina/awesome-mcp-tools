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
    https.get(REDDIT_RSS_URL, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        parseString(data, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

/**
 * Extract GitHub repositories from RSS feed entries
 */
function extractGitHubRepos(rssData) {
  const entries = rssData.feed && rssData.feed.entry ? rssData.feed.entry : [];
  const repos = [];

  entries.forEach(entry => {
    const content = entry.content && entry.content[0] ? entry.content[0]._ : '';
    
    // Look for GitHub links in the content
    const githubRegex = /https:\/\/github\.com\/([\w-]+)\/([\w-]+)/g;
    let match;
    
    while ((match = githubRegex.exec(content)) !== null) {
      repos.push({
        owner: match[1],
        repo: match[2],
        title: entry.title[0],
        url: match[0],
        date: entry.updated[0]
      });
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
    process.exit(1);
  }
}

// Run the script
main();