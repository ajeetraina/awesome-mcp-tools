/**
 * MCP Tools Updater
 * 
 * This script updates the repository with curated MCP tools.
 * Uses a curated list of known MCP repositories.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const MCP_TOOLS_PATH = path.join(__dirname, '../mcp-tools.md');

// GitHub authentication - should be stored in environment variables
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// List of MCP repositories to check and potentially add
const MCP_REPOSITORIES = [
  {
    owner: 'modelcontextprotocol',
    repo: 'typescript-sdk',
    title: 'TypeScript SDK for MCP'
  },
  {
    owner: 'modelcontextprotocol',
    repo: 'python-sdk',
    title: 'Python SDK for MCP'
  },
  {
    owner: 'modelcontextprotocol',
    repo: 'java-sdk',
    title: 'Java SDK for MCP'
  },
  {
    owner: 'klaviyo',
    repo: 'modelcontextprotocol-js',
    title: 'Klaviyo Model Context Protocol JavaScript Implementation'
  },
  {
    owner: 'wong2',
    repo: 'mcp-cli',
    title: 'CLI tool for Model Context Protocol'
  },
  {
    owner: 'supabase',
    repo: 'mcp',
    title: 'Supabase MCP Implementation'
  },
  {
    owner: 'infisical',
    repo: 'mcp',
    title: 'Infisical MCP Server'
  },
  {
    owner: 'AnthropicLabs',
    repo: 'mcp-serverless-template-js',
    title: 'Serverless MCP Server Template'
  }
];

/**
 * Prepare repositories list with URLs
 */
function getRepositories() {
  console.log('Getting repositories list...');
  return MCP_REPOSITORIES.map(repo => ({
    ...repo,
    url: `https://github.com/${repo.owner}/${repo.repo}`
  }));
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
          if (repoData.message && repoData.message.includes('API rate limit exceeded')) {
            console.warn('GitHub API rate limit exceeded. Returning 0 stars.');
            resolve(0);
          } else {
            resolve(repoData.stargazers_count || 0);
          }
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
    let updated = false;
    
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
        const sectionRegex = /## From GitHub/;
        if (sectionRegex.test(content)) {
          const sectionStart = content.match(sectionRegex).index + content.match(sectionRegex)[0].length;
          content = content.slice(0, sectionStart) + '\n' + newEntry + content.slice(sectionStart);
        } else {
          content += '\n\n## From GitHub\n\n' + newEntry;
        }
        
        console.log(`Added new repository: ${repo.url}`);
        updated = true;
      }
    }
    
    if (updated) {
      // Write updated content back to file
      fs.writeFileSync(MCP_TOOLS_PATH, content, 'utf8');
      console.log('MCP tools file updated successfully!');
    } else {
      console.log('No new repositories to add.');
    }
    
  } catch (err) {
    console.error(`Error updating MCP tools file: ${err.message}`);
  }
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('Starting MCP repository update process...');
    const repos = getRepositories();
    
    console.log(`Found ${repos.length} GitHub repositories to check.`);
    if (repos.length > 0) {
      console.log('Updating MCP tools file...');
      await updateMCPToolsFile(repos);
    } else {
      console.log('No repositories found to check.');
    }
    
    console.log('Done!');
  } catch (err) {
    console.error(`Error: ${err.message}`);
    // Don't exit with error code to prevent workflow failure
  }
}

// Run the script
main();