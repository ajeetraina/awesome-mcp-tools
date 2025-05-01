// MCP Server Data
const enterpriseServers = [
    {
        name: "21st.dev Magic",
        description: "Create crafted UI components inspired by the best 21st.dev design engineers",
        type: "Enterprise",
        github: "https://github.com/21st-dev/magic-mcp",
        dockerHub: null,
        pulls: null,
        category: "AI Tools"
    },
    {
        name: "Adfin",
        description: "The only platform you need to get paid - all payments in one place",
        type: "Enterprise",
        github: "https://github.com/Adfin-Engineering/mcp-server-adfin",
        dockerHub: null,
        pulls: null,
        category: "API Integration"
    },
    {
        name: "AgentQL",
        description: "Enable AI agents to get structured data from unstructured web with AgentQL",
        type: "Enterprise",
        github: "https://github.com/tinyfish-io/agentql-mcp",
        dockerHub: null,
        pulls: null,
        category: "Web Automation"
    },
    {
        name: "AgentRPC",
        description: "Connect to any function, any language, across network boundaries",
        type: "Enterprise",
        github: "https://github.com/agentrpc/agentrpc",
        dockerHub: null,
        pulls: null,
        category: "API Integration"
    },
    {
        name: "Aiven",
        description: "Navigate your Aiven projects and interact with PostgreSQL, Apache Kafka, etc.",
        type: "Enterprise",
        github: "https://github.com/Aiven-Open/mcp-aiven",
        dockerHub: null,
        pulls: null,
        category: "Database Access"
    },
    {
        name: "Apify",
        description: "Use 3,000+ pre-built cloud tools to extract data from websites",
        type: "Enterprise",
        github: "https://github.com/apify/actors-mcp-server",
        dockerHub: null,
        pulls: null,
        category: "Web Automation"
    },
    {
        name: "Audiense Insights",
        description: "Marketing insights and audience analysis",
        type: "Enterprise",
        github: "https://github.com/AudienseCo/mcp-audiense-insights",
        dockerHub: null,
        pulls: null,
        category: "API Integration"
    },
    {
        name: "Axiom",
        description: "Query and analyze your Axiom logs, traces, and event data",
        type: "Enterprise",
        github: "https://github.com/axiomhq/mcp-server-axiom",
        dockerHub: null,
        pulls: null,
        category: "Database Access"
    },
    {
        name: "Bankless Onchain",
        description: "Query Onchain data, like ERC20 tokens, transaction history",
        type: "Enterprise",
        github: "https://github.com/bankless/onchain-mcp",
        dockerHub: null,
        pulls: null,
        category: "API Integration"
    },
    {
        name: "Box",
        description: "Interact with the Intelligent Content Management platform",
        type: "Enterprise",
        github: "https://github.com/box-community/mcp-server-box",
        dockerHub: null,
        pulls: null,
        category: "File Operations"
    },
    {
        name: "Browserbase",
        description: "Automate browser interactions in the cloud",
        type: "Enterprise",
        github: "https://github.com/browserbase/mcp-server-browserbase",
        dockerHub: null,
        pulls: null,
        category: "Web Automation"
    },
    {
        name: "Chroma",
        description: "Embeddings, vector search, document storage, and full-text search",
        type: "Enterprise",
        github: "https://github.com/chroma-core/chroma-mcp",
        dockerHub: null,
        pulls: null,
        category: "Database Access"
    },
    {
        name: "Chronulus AI",
        description: "Predict anything with Chronulus AI forecasting",
        type: "Enterprise",
        github: "https://github.com/ChronulusAI/chronulus-mcp",
        dockerHub: null,
        pulls: null,
        category: "AI Tools"
    },
    {
        name: "ClickHouse",
        description: "Query your ClickHouse database server",
        type: "Enterprise",
        github: "https://github.com/ClickHouse/mcp-clickhouse",
        dockerHub: null,
        pulls: null,
        category: "Database Access"
    },
    {
        name: "Cloudflare",
        description: "Deploy, configure & interrogate your resources on the Cloudflare platform",
        type: "Enterprise",
        github: "https://github.com/cloudflare/mcp-server-cloudflare",
        dockerHub: null,
        pulls: null,
        category: "API Integration"
    },
    {
        name: "Grafana",
        description: "MCP server for Grafana",
        type: "Enterprise",
        github: "https://github.com/grafana/mcp-server",
        dockerHub: "https://hub.docker.com/r/mcp/grafana",
        pulls: "556+",
        category: "API Integration"
    },
    {
        name: "Notion",
        description: "Official Notion MCP Server",
        type: "Enterprise",
        github: null,
        dockerHub: "https://hub.docker.com/r/mcp/notion",
        pulls: "1.2K+",
        category: "API Integration"
    }
];

const mcpTools = [
    {
        name: "Docker MCP Server",
        description: "MCP server for Docker",
        type: "Tool",
        github: "https://github.com/ckreiling/mcp-server-docker",
        dockerHub: null,
        pulls: null,
        category: "API Integration"
    },
    {
        name: "Docker Labs AI Tools for Devs",
        description: "Home for discovering MCP tools, seamlessly integrated into Docker",
        type: "Tool",
        github: "https://github.com/docker/labs-ai-tools-for-devs",
        dockerHub: null,
        pulls: "10K+",
        category: "AI Tools"
    },
    {
        name: "MCP Code Sandbox",
        description: "MCP server for executing code within Docker containers",
        type: "Tool",
        github: "https://github.com/Automata-Labs-team/code-sandbox-mcp",
        dockerHub: null,
        pulls: null,
        category: "Development"
    },
    {
        name: "MCP Containers",
        description: "Containerized versions of hundreds of MCP servers",
        type: "Tool",
        github: "https://github.com/metorial/mcp-containers",
        dockerHub: null,
        pulls: null,
        category: "Development"
    },
    {
        name: "MCP Gateway",
        description: "Gateway service that transforms existing APIs into MCP servers",
        type: "Tool",
        github: "https://github.com/mcp-ecosystem/mcp-gateway",
        dockerHub: null,
        pulls: null,
        category: "API Integration"
    }
];

// Official MCP servers with categories
const officialServers = [
    {
        name: "AWS KB Retrieval",
        description: "Retrieval from AWS Knowledge Base using Bedrock Agent Runtime",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/aws-kb-retrieval-server",
        dockerHub: "https://hub.docker.com/r/mcp/aws-kb-retrieval-server",
        pulls: "960+",
        category: "API Integration"
    },
    {
        name: "Brave Search",
        description: "Web and local search using Brave's Search API",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/brave-search",
        dockerHub: null,
        pulls: null,
        category: "Web Automation"
    },
    {
        name: "EverArt",
        description: "AI image generation using various models",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/everart",
        dockerHub: null,
        pulls: null,
        category: "AI Tools"
    },
    {
        name: "Everything",
        description: "Reference / test server with prompts, resources, and tools",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/everything",
        dockerHub: null,
        pulls: null,
        category: "Development"
    },
    {
        name: "Fetch",
        description: "Web content fetching and conversion for efficient LLM usage",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/fetch",
        dockerHub: null,
        pulls: null,
        category: "Web Automation"
    },
    {
        name: "Filesystem",
        description: "Secure file operations with configurable access controls",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/filesystem",
        dockerHub: null,
        pulls: null,
        category: "File Operations"
    },
    {
        name: "Git",
        description: "Tools to read, search, and manipulate Git repositories",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/git",
        dockerHub: null,
        pulls: null,
        category: "Development"
    },
    {
        name: "GitHub",
        description: "Repository management, file operations, and GitHub API integration",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/github",
        dockerHub: "https://hub.docker.com/r/mcp/github-mcp-server",
        pulls: "914+",
        category: "API Integration"
    },
    {
        name: "GitLab",
        description: "GitLab API, enabling project management",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/gitlab",
        dockerHub: "https://hub.docker.com/r/mcp/gitlab",
        pulls: "3.9K+",
        category: "API Integration"
    },
    {
        name: "Google Drive",
        description: "File access and search capabilities for Google Drive",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/gdrive",
        dockerHub: null,
        pulls: null,
        category: "File Operations"
    },
    {
        name: "Google Maps",
        description: "Location services, directions, and place details",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/google-maps",
        dockerHub: null,
        pulls: null,
        category: "API Integration"
    },
    {
        name: "Memory",
        description: "Knowledge graph-based persistent memory system",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/memory",
        dockerHub: null,
        pulls: null,
        category: "AI Tools"
    },
    {
        name: "PostgreSQL",
        description: "Read-only database access with schema inspection",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/postgres",
        dockerHub: null,
        pulls: null,
        category: "Database Access"
    },
    {
        name: "Playwright",
        description: "Browser automation and web scraping",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/puppeteer",
        dockerHub: "https://hub.docker.com/r/mcp/playwright",
        pulls: "411+",
        category: "Web Automation"
    },
    {
        name: "Redis",
        description: "Interact with Redis key-value stores",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/redis",
        dockerHub: null,
        pulls: null,
        category: "Database Access"
    },
    {
        name: "Sentry",
        description: "Retrieving and analyzing issues from Sentry.io",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/sentry",
        dockerHub: null,
        pulls: null,
        category: "API Integration"
    },
    {
        name: "Sequential Thinking",
        description: "Dynamic and reflective problem-solving through thought sequences",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/sequentialthinking",
        dockerHub: null,
        pulls: null,
        category: "AI Tools"
    },
    {
        name: "Slack",
        description: "Channel management and messaging capabilities",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/slack",
        dockerHub: null,
        pulls: null,
        category: "API Integration"
    },
    {
        name: "Sqlite",
        description: "Database interaction and business intelligence capabilities",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/sqlite",
        dockerHub: null,
        pulls: null,
        category: "Database Access"
    },
    {
        name: "Time",
        description: "Time and timezone conversion capabilities",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/time",
        dockerHub: null,
        pulls: null,
        category: "Development"
    }
];

// Define feature categories
const featureCategories = [
    "File Operations",
    "Database Access",
    "API Integration",
    "Web Automation",
    "AI Tools",
    "Development"
];

// Function to create card HTML
function createCardHTML(server) {
    const badgeHTML = server.type === 'Enterprise' 
        ? '<span class="badge popular">Enterprise</span>' 
        : '<span class="badge official">Official</span>';
    
    const pullsHTML = server.pulls ? `<span class="badge pulls">${server.pulls} pulls</span>` : '';
    
    const linksHTML = [];
    if (server.github) {
        linksHTML.push(`<a href="${server.github}" target="_blank" class="github-link">GitHub</a>`);
    }
    if (server.dockerHub) {
        linksHTML.push(`<a href="${server.dockerHub}" target="_blank" class="dockerhub-link">Docker Hub</a>`);
    }
    
    return `
        <div class="card" data-category="${server.category || ''}">
            <div class="card-header">${server.name}</div>
            <div class="card-body">
                <div class="card-description">
                    ${badgeHTML}
                    ${pullsHTML}
                    <p>${server.description}</p>
                </div>
                <div class="card-links">
                    ${linksHTML.join('')}
                </div>
            </div>
        </div>
    `;
}

// Function to render servers to containers
function renderServers() {
    const enterpriseContainer = document.getElementById('enterprise-cards');
    const toolsContainer = document.getElementById('tool-cards');
    const officialContainer = document.getElementById('official-servers');

    if (officialContainer) {
        // Clear existing content
        let officialCardsContainer = officialContainer.querySelector('.cards-container');
        
        // If it doesn't exist, create it
        if (!officialCardsContainer) {
            officialCardsContainer = document.createElement('div');
            officialCardsContainer.className = 'cards-container';
            officialContainer.appendChild(officialCardsContainer);
        } else {
            officialCardsContainer.innerHTML = '';
        }

        // Add official servers
        officialServers.forEach(server => {
            const cardHTML = createCardHTML(server);
            officialCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
    
    if (enterpriseContainer) {
        // Clear existing content
        enterpriseContainer.innerHTML = '';
        
        // Add enterprise servers
        enterpriseServers.forEach(server => {
            const cardHTML = createCardHTML(server);
            enterpriseContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
    
    if (toolsContainer) {
        // Clear existing content
        toolsContainer.innerHTML = '';
        
        // Add MCP tools
        mcpTools.forEach(server => {
            const cardHTML = createCardHTML(server);
            toolsContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }
}

// Function to setup feature filtering
function setupFeatureFiltering() {
    const featureLinks = document.querySelectorAll('.features-list a');
    
    featureLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the selected feature category
            const featureCategory = this.getAttribute('data-feature');
            
            // Remove active class from all feature links
            featureLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to the clicked feature link
            this.classList.add('active');
            
            // Filter cards
            const allCards = document.querySelectorAll('.card');
            
            if (featureCategory === 'all') {
                // Show all cards
                allCards.forEach(card => {
                    card.style.display = 'flex';
                });
            } else {
                // Show only cards matching the selected category
                allCards.forEach(card => {
                    if (card.getAttribute('data-category') === featureCategory) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        });
    });
}

// Function to implement search
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                const cardTitle = card.querySelector('.card-header').textContent.toLowerCase();
                const cardDesc = card.querySelector('.card-description p').textContent.toLowerCase();
                
                if (cardTitle.includes(searchTerm) || cardDesc.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Function to setup smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('data-feature')) {
                // Don't apply smooth scrolling to feature filtering links
                return;
            }
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active state in sidebar
                document.querySelectorAll('.sidebar a:not([data-feature])').forEach(link => {
                    link.classList.remove('active');
                });
                
                const sidebarLink = document.querySelector(`.sidebar a[href="${targetId}"]:not([data-feature])`);
                if (sidebarLink) {
                    sidebarLink.classList.add('active');
                }
            }
        });
    });
}

// Function to check for updates from GitHub
function checkForUpdates() {
    // URL to the Docker MCP servers repository
    const repoUrl = 'https://api.github.com/repos/docker/mcp-servers/contents/src';
    
    fetch(repoUrl)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                // Check for new servers that aren't in our list
                const existingServerNames = officialServers.map(server => server.name.toLowerCase());
                const newServers = [];
                
                data.forEach(item => {
                    if (item.type === 'dir' && !existingServerNames.includes(item.name.toLowerCase())) {
                        // This is a new server not in our list
                        newServers.push({
                            name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
                            description: `[New] MCP server for ${item.name}`,
                            type: 'Official',
                            github: `https://github.com/docker/mcp-servers/blob/main/src/${item.name}`,
                            dockerHub: null,
                            pulls: null,
                            category: 'Development' // Default category for new servers
                        });
                    }
                });
                
                // If there are new servers, add them to our list and re-render
                if (newServers.length > 0) {
                    officialServers.push(...newServers);
                    renderServers();
                    
                    // Notify the user about new servers
                    const notification = document.createElement('div');
                    notification.className = 'update-notification';
                    notification.innerHTML = `<p>${newServers.length} new server(s) detected and added to the list!</p>`;
                    document.body.appendChild(notification);
                    
                    // Remove the notification after 5 seconds
                    setTimeout(() => {
                        notification.classList.add('fade-out');
                        setTimeout(() => {
                            notification.remove();
                        }, 1000);
                    }, 5000);
                }
            }
        })
        .catch(error => {
            console.error('Error checking for updates:', error);
        });
}

// Initialize on document load
document.addEventListener('DOMContentLoaded', function() {
    // Create features list in the sidebar
    const featuresList = document.querySelector('.features-list');
    
    if (featuresList) {
        // Add "All" option first
        const allOption = document.createElement('li');
        allOption.innerHTML = '<a href="#" data-feature="all" class="active">All Features</a>';
        featuresList.appendChild(allOption);
        
        // Add each feature category
        featureCategories.forEach(category => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#" data-feature="${category}">${category}</a>`;
            featuresList.appendChild(listItem);
        });
    }
    
    renderServers();
    setupSearch();
    setupSmoothScrolling();
    setupFeatureFiltering();
    
    // Check for updates from GitHub
    checkForUpdates();
    
    // Set up periodic checks for updates (every hour)
    setInterval(checkForUpdates, 3600000);
});
