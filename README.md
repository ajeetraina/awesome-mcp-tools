# Docker Desktop MCP Catalog and Toolkits

A curated list of Docker Desktop MCP (Model Context Protocol) Catalog and Toolkits

## What is MCP?

Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context to LLMs. It's like a "USB-C port for AI applications" - providing a standardized way to connect AI models to different data sources and tools, allowing LLMs to:

- Access data from diverse sources (files, databases, APIs)
- Use specialized tools to perform actions
- Work with prompt templates for standard workflows
- Operate with enhanced privacy and security

MCP follows a client-server architecture where:
- **MCP Clients**: Programs like Claude Desktop, IDE plugins, or other AI tools that want to access data through MCP
- **MCP Servers**: Lightweight programs that expose specific capabilities (like file access, database queries, or API interactions) through the standardized protocol

## Contents

### Docker Desktop MCP Extension

| Tool | Description | Docker Hub Pulls | Link |
|------|-------------|-----------------|---------|
| **Docker MCP Toolkit** | Official Docker Desktop Extension for MCP servers | 10K+ | [Docker Hub](https://hub.docker.com/extensions/docker/labs-ai-tools-for-devs) |

### Official MCP Servers

The following MCP servers are maintained as reference implementations by Docker/Anthropic:

| Server | Description | Docker Hub Pulls | Link |
|--------|-------------|-----------------|---------|
| **AWS KB Retrieval** | Retrieval from AWS Knowledge Base using Bedrock Agent Runtime | 960+ | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/aws-kb-retrieval-server) / [Docker Hub](https://hub.docker.com/r/mcp/aws-kb-retrieval-server) |
| **Brave Search** | Web and local search using Brave's Search API | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/brave-search) |
| **EverArt** | AI image generation using various models | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/everart) |
| **Everything** | Reference / test server with prompts, resources, and tools | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/everything) |
| **Fetch** | Web content fetching and conversion for efficient LLM usage | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/fetch) |
| **Filesystem** | Secure file operations with configurable access controls | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/filesystem) |
| **Git** | Tools to read, search, and manipulate Git repositories | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/git) |
| **GitHub** | Repository management, file operations, and GitHub API integration | 914+ | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/github) / [Docker Hub](https://hub.docker.com/r/mcp/github-mcp-server) |
| **GitLab** | GitLab API, enabling project management | 3.9K+ | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/gitlab) / [Docker Hub](https://hub.docker.com/r/mcp/gitlab) |
| **Google Drive** | File access and search capabilities for Google Drive | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/gdrive) |
| **Google Maps** | Location services, directions, and place details | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/google-maps) |
| **Memory** | Knowledge graph-based persistent memory system | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/memory) |
| **PostgreSQL** | Read-only database access with schema inspection | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/postgres) |
| **Playwright** | Browser automation and web scraping | 411+ | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/puppeteer) / [Docker Hub](https://hub.docker.com/r/mcp/playwright) |
| **Redis** | Interact with Redis key-value stores | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/redis) |
| **Sentry** | Retrieving and analyzing issues from Sentry.io | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/sentry) |
| **Sequential Thinking** | Dynamic and reflective problem-solving through thought sequences | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/sequentialthinking) |
| **Slack** | Channel management and messaging capabilities | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/slack) |
| **Sqlite** | Database interaction and business intelligence capabilities | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/sqlite) |
| **Time** | Time and timezone conversion capabilities | - | [GitHub](https://github.com/docker/mcp-servers/blob/main/src/time) |

### Popular Official Enterprise Integrations

These MCP servers are maintained by companies for their platforms:

| Server | Description | Docker Hub Pulls | Link |
|--------|-------------|-----------------|---------|
| **21st.dev Magic** | Create crafted UI components inspired by the best 21st.dev design engineers | - | [GitHub](https://github.com/21st-dev/magic-mcp) |
| **Adfin** | The only platform you need to get paid - all payments in one place | - | [GitHub](https://github.com/Adfin-Engineering/mcp-server-adfin) |
| **AgentQL** | Enable AI agents to get structured data from unstructured web with AgentQL | - | [GitHub](https://github.com/tinyfish-io/agentql-mcp) |
| **AgentRPC** | Connect to any function, any language, across network boundaries | - | [GitHub](https://github.com/agentrpc/agentrpc) |
| **Aiven** | Navigate your Aiven projects and interact with PostgreSQL, Apache Kafka, etc. | - | [GitHub](https://github.com/Aiven-Open/mcp-aiven) |
| **Apify** | Use 3,000+ pre-built cloud tools to extract data from websites | - | [GitHub](https://github.com/apify/actors-mcp-server) |
| **Audiense Insights** | Marketing insights and audience analysis | - | [GitHub](https://github.com/AudienseCo/mcp-audiense-insights) |
| **Axiom** | Query and analyze your Axiom logs, traces, and event data | - | [GitHub](https://github.com/axiomhq/mcp-server-axiom) |
| **Bankless Onchain** | Query Onchain data, like ERC20 tokens, transaction history | - | [GitHub](https://github.com/bankless/onchain-mcp) |
| **Box** | Interact with the Intelligent Content Management platform | - | [GitHub](https://github.com/box-community/mcp-server-box) |
| **Browserbase** | Automate browser interactions in the cloud | - | [GitHub](https://github.com/browserbase/mcp-server-browserbase) |
| **Chroma** | Embeddings, vector search, document storage, and full-text search | - | [GitHub](https://github.com/chroma-core/chroma-mcp) |
| **Chronulus AI** | Predict anything with Chronulus AI forecasting | - | [GitHub](https://github.com/ChronulusAI/chronulus-mcp) |
| **ClickHouse** | Query your ClickHouse database server | - | [GitHub](https://github.com/ClickHouse/mcp-clickhouse) |
| **Cloudflare** | Deploy, configure & interrogate your resources on the Cloudflare platform | - | [GitHub](https://github.com/cloudflare/mcp-server-cloudflare) |
| **Grafana** | MCP server for Grafana | 556+ | [GitHub](https://github.com/grafana/mcp-server) / [Docker Hub](https://hub.docker.com/r/mcp/grafana) |
| **Notion** | Official Notion MCP Server | 1.2K+ | [Docker Hub](https://hub.docker.com/r/mcp/notion) |

### Docker MCP-Related Tools

| Tool | Description | Docker Hub Pulls | Link |
|------|-------------|-----------------|---------|
| **Docker MCP Server** | MCP server for Docker | - | [GitHub](https://github.com/ckreiling/mcp-server-docker) |
| **Docker Labs AI Tools for Devs** | Home for discovering MCP tools, seamlessly integrated into Docker | 10K+ | [GitHub](https://github.com/docker/labs-ai-tools-for-devs) |
| **MCP Code Sandbox** | MCP server for executing code within Docker containers | - | [GitHub](https://github.com/Automata-Labs-team/code-sandbox-mcp) |
| **MCP Containers** | Containerized versions of hundreds of MCP servers | - | [GitHub](https://github.com/metorial/mcp-containers) |
| **MCP Gateway** | Gateway service that transforms existing APIs into MCP servers | - | [GitHub](https://github.com/mcp-ecosystem/mcp-gateway) |

## Using Docker MCP Toolkit

To use Docker MCP Toolkit, you need:
1. Docker Desktop 4.10 or higher
2. Install the extension from Docker Hub
3. Browse available MCP servers and connect them to your MCP client (like Claude Desktop)

### Installation Steps

1. Open Docker Desktop
2. Go to Extensions Marketplace
3. Search for "Docker MCP Toolkit"
4. Click Install
5. Once installed, open the extension from the left sidebar
6. Browse the catalog and start using MCP tools with your AI assistant

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License
