// MCP Server Data
const enterpriseServers = [
    {
        name: "21st.dev Magic",
        description: "Create crafted UI components inspired by the best 21st.dev design engineers",
        type: "Enterprise",
        github: "https://github.com/21st-dev/magic-mcp",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Adfin",
        description: "The only platform you need to get paid - all payments in one place",
        type: "Enterprise",
        github: "https://github.com/Adfin-Engineering/mcp-server-adfin",
        dockerHub: null,
        pulls: null
    },
    {
        name: "AgentQL",
        description: "Enable AI agents to get structured data from unstructured web with AgentQL",
        type: "Enterprise",
        github: "https://github.com/tinyfish-io/agentql-mcp",
        dockerHub: null,
        pulls: null
    },
    {
        name: "AgentRPC",
        description: "Connect to any function, any language, across network boundaries",
        type: "Enterprise",
        github: "https://github.com/agentrpc/agentrpc",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Aiven",
        description: "Navigate your Aiven projects and interact with PostgreSQL, Apache Kafka, etc.",
        type: "Enterprise",
        github: "https://github.com/Aiven-Open/mcp-aiven",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Apify",
        description: "Use 3,000+ pre-built cloud tools to extract data from websites",
        type: "Enterprise",
        github: "https://github.com/apify/actors-mcp-server",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Audiense Insights",
        description: "Marketing insights and audience analysis",
        type: "Enterprise",
        github: "https://github.com/AudienseCo/mcp-audiense-insights",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Axiom",
        description: "Query and analyze your Axiom logs, traces, and event data",
        type: "Enterprise",
        github: "https://github.com/axiomhq/mcp-server-axiom",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Bankless Onchain",
        description: "Query Onchain data, like ERC20 tokens, transaction history",
        type: "Enterprise",
        github: "https://github.com/bankless/onchain-mcp",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Box",
        description: "Interact with the Intelligent Content Management platform",
        type: "Enterprise",
        github: "https://github.com/box-community/mcp-server-box",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Browserbase",
        description: "Automate browser interactions in the cloud",
        type: "Enterprise",
        github: "https://github.com/browserbase/mcp-server-browserbase",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Chroma",
        description: "Embeddings, vector search, document storage, and full-text search",
        type: "Enterprise",
        github: "https://github.com/chroma-core/chroma-mcp",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Chronulus AI",
        description: "Predict anything with Chronulus AI forecasting",
        type: "Enterprise",
        github: "https://github.com/ChronulusAI/chronulus-mcp",
        dockerHub: null,
        pulls: null
    },
    {
        name: "ClickHouse",
        description: "Query your ClickHouse database server",
        type: "Enterprise",
        github: "https://github.com/ClickHouse/mcp-clickhouse",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Cloudflare",
        description: "Deploy, configure & interrogate your resources on the Cloudflare platform",
        type: "Enterprise",
        github: "https://github.com/cloudflare/mcp-server-cloudflare",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Grafana",
        description: "MCP server for Grafana",
        type: "Enterprise",
        github: "https://github.com/grafana/mcp-server",
        dockerHub: "https://hub.docker.com/r/mcp/grafana",
        pulls: "556+"
    },
    {
        name: "Notion",
        description: "Official Notion MCP Server",
        type: "Enterprise",
        github: null,
        dockerHub: "https://hub.docker.com/r/mcp/notion",
        pulls: "1.2K+"
    }
];

const mcpTools = [
    {
        name: "Docker MCP Server",
        description: "MCP server for Docker",
        type: "Tool",
        github: "https://github.com/ckreiling/mcp-server-docker",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Docker Labs AI Tools for Devs",
        description: "Home for discovering MCP tools, seamlessly integrated into Docker",
        type: "Tool",
        github: "https://github.com/docker/labs-ai-tools-for-devs",
        dockerHub: null,
        pulls: "10K+"
    },
    {
        name: "MCP Code Sandbox",
        description: "MCP server for executing code within Docker containers",
        type: "Tool",
        github: "https://github.com/Automata-Labs-team/code-sandbox-mcp",
        dockerHub: null,
        pulls: null
    },
    {
        name: "MCP Containers",
        description: "Containerized versions of hundreds of MCP servers",
        type: "Tool",
        github: "https://github.com/metorial/mcp-containers",
        dockerHub: null,
        pulls: null
    },
    {
        name: "MCP Gateway",
        description: "Gateway service that transforms existing APIs into MCP servers",
        type: "Tool",
        github: "https://github.com/mcp-ecosystem/mcp-gateway",
        dockerHub: null,
        pulls: null
    }
];

// Additional official MCP servers - those not already in the HTML
const additionalOfficialServers = [
    {
        name: "Google Drive",
        description: "File access and search capabilities for Google Drive",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/gdrive",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Google Maps",
        description: "Location services, directions, and place details",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/google-maps",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Memory",
        description: "Knowledge graph-based persistent memory system",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/memory",
        dockerHub: null,
        pulls: null
    },
    {
        name: "PostgreSQL",
        description: "Read-only database access with schema inspection",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/postgres",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Playwright",
        description: "Browser automation and web scraping",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/puppeteer",
        dockerHub: "https://hub.docker.com/r/mcp/playwright",
        pulls: "411+"
    },
    {
        name: "Redis",
        description: "Interact with Redis key-value stores",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/redis",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Sentry",
        description: "Retrieving and analyzing issues from Sentry.io",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/sentry",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Sequential Thinking",
        description: "Dynamic and reflective problem-solving through thought sequences",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/sequentialthinking",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Slack",
        description: "Channel management and messaging capabilities",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/slack",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Sqlite",
        description: "Database interaction and business intelligence capabilities",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/sqlite",
        dockerHub: null,
        pulls: null
    },
    {
        name: "Time",
        description: "Time and timezone conversion capabilities",
        type: "Official",
        github: "https://github.com/docker/mcp-servers/blob/main/src/time",
        dockerHub: null,
        pulls: null
    }
];

// Function to create card HTML
function createCardHTML(server) {
    const badgeHTML = server.type === 'Enterprise' 
        ? '<span class="badge popular">Enterprise</span>' 
        : '<span class="badge official">Official</span>';
    
    const pullsHTML = server.pulls ? `<span class="badge pulls">${server.pulls} pulls</span>` : '';
    
    const linksHTML = [];
    if (server.github) {
        linksHTML.push(`<a href="${server.github}">GitHub</a>`);
    }
    if (server.dockerHub) {
        linksHTML.push(`<a href="${server.dockerHub}">Docker Hub</a>`);
    }
    
    return `
        <div class="card">
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

    // Add additional official servers
    const officialCardsContainer = officialContainer.querySelector('.cards-container');
    additionalOfficialServers.forEach(server => {
        const cardHTML = createCardHTML(server);
        officialCardsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
    
    // Add enterprise servers
    enterpriseContainer.innerHTML = '';
    enterpriseServers.forEach(server => {
        const cardHTML = createCardHTML(server);
        enterpriseContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
    
    // Add MCP tools
    toolsContainer.innerHTML = '';
    mcpTools.forEach(server => {
        const cardHTML = createCardHTML(server);
        toolsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Function to implement search
function setupSearch() {
    const searchInput = document.querySelector('.search-input');
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

// Function to setup smooth scrolling for anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active state in sidebar
                document.querySelectorAll('.sidebar a').forEach(link => {
                    link.classList.remove('active');
                });
                
                const sidebarLink = document.querySelector(`.sidebar a[href="${targetId}"]`);
                if (sidebarLink) {
                    sidebarLink.classList.add('active');
                }
            }
        });
    });
}

// Initialize on document load
document.addEventListener('DOMContentLoaded', function() {
    renderServers();
    setupSearch();
    setupSmoothScrolling();
});
