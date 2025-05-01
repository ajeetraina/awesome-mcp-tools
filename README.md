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

The Docker MCP Toolkit is a Docker Desktop Extension allowing to connect dockerized MCP servers to MCP clients.

- **[Docker MCP Toolkit](https://hub.docker.com/extensions/docker/labs-ai-tools-for-devs)** - Downloads: 10K+
  - Official Docker Desktop Extension for MCP servers
  - Seamlessly integrates with Docker Desktop 4.10 or higher
  - Browse and connect Dockerized MCP servers to your favorite MCP clients

### Official MCP Servers

The following MCP servers are maintained as reference implementations by Docker/Anthropic:

1. **[AWS KB Retrieval](https://github.com/docker/mcp-servers/blob/main/src/aws-kb-retrieval-server)** - Retrieval from AWS Knowledge Base using Bedrock Agent Runtime
2. **[Brave Search](https://github.com/docker/mcp-servers/blob/main/src/brave-search)** - Web and local search using Brave's Search API
3. **[EverArt](https://github.com/docker/mcp-servers/blob/main/src/everart)** - AI image generation using various models
4. **[Everything](https://github.com/docker/mcp-servers/blob/main/src/everything)** - Reference / test server with prompts, resources, and tools
5. **[Fetch](https://github.com/docker/mcp-servers/blob/main/src/fetch)** - Web content fetching and conversion for efficient LLM usage
6. **[Filesystem](https://github.com/docker/mcp-servers/blob/main/src/filesystem)** - Secure file operations with configurable access controls
7. **[Git](https://github.com/docker/mcp-servers/blob/main/src/git)** - Tools to read, search, and manipulate Git repositories
8. **[GitHub](https://github.com/docker/mcp-servers/blob/main/src/github)** - Repository management, file operations, and GitHub API integration
9. **[GitLab](https://github.com/docker/mcp-servers/blob/main/src/gitlab)** - GitLab API, enabling project management
10. **[Google Drive](https://github.com/docker/mcp-servers/blob/main/src/gdrive)** - File access and search capabilities for Google Drive
11. **[Google Maps](https://github.com/docker/mcp-servers/blob/main/src/google-maps)** - Location services, directions, and place details
12. **[Memory](https://github.com/docker/mcp-servers/blob/main/src/memory)** - Knowledge graph-based persistent memory system
13. **[PostgreSQL](https://github.com/docker/mcp-servers/blob/main/src/postgres)** - Read-only database access with schema inspection
14. **[Puppeteer](https://github.com/docker/mcp-servers/blob/main/src/puppeteer)** - Browser automation and web scraping
15. **[Redis](https://github.com/docker/mcp-servers/blob/main/src/redis)** - Interact with Redis key-value stores
16. **[Sentry](https://github.com/docker/mcp-servers/blob/main/src/sentry)** - Retrieving and analyzing issues from Sentry.io
17. **[Sequential Thinking](https://github.com/docker/mcp-servers/blob/main/src/sequentialthinking)** - Dynamic and reflective problem-solving through thought sequences
18. **[Slack](https://github.com/docker/mcp-servers/blob/main/src/slack)** - Channel management and messaging capabilities
19. **[Sqlite](https://github.com/docker/mcp-servers/blob/main/src/sqlite)** - Database interaction and business intelligence capabilities
20. **[Time](https://github.com/docker/mcp-servers/blob/main/src/time)** - Time and timezone conversion capabilities

### Official Enterprise Integrations

These MCP servers are maintained by companies for their platforms:

1. **[21st.dev Magic](https://github.com/21st-dev/magic-mcp)** - Create crafted UI components inspired by the best 21st.dev design engineers
2. **[Adfin](https://github.com/Adfin-Engineering/mcp-server-adfin)** - The only platform you need to get paid - all payments in one place
3. **[AgentQL](https://github.com/tinyfish-io/agentql-mcp)** - Enable AI agents to get structured data from unstructured web with AgentQL
4. **[AgentRPC](https://github.com/agentrpc/agentrpc)** - Connect to any function, any language, across network boundaries
5. **[Aiven](https://github.com/Aiven-Open/mcp-aiven)** - Navigate your Aiven projects and interact with PostgreSQL, Apache Kafka, ClickHouse and OpenSearch services
6. **[Apify](https://github.com/apify/actors-mcp-server)** - Use 3,000+ pre-built cloud tools to extract data from websites, e-commerce and more
7. **[Audiense Insights](https://github.com/AudienseCo/mcp-audiense-insights)** - Marketing insights and audience analysis from Audiense reports
8. **[Axiom](https://github.com/axiomhq/mcp-server-axiom)** - Query and analyze your Axiom logs, traces, and all other event data 
9. **[Bankless Onchain](https://github.com/bankless/onchain-mcp)** - Query Onchain data, like ERC20 tokens, transaction history, smart contract state
10. **[Box](https://github.com/box-community/mcp-server-box)** - Interact with the Intelligent Content Management platform through Box AI
11. **[Browserbase](https://github.com/browserbase/mcp-server-browserbase)** - Automate browser interactions in the cloud
12. **[Chroma](https://github.com/chroma-core/chroma-mcp)** - Embeddings, vector search, document storage, and full-text search
13. **[Chronulus AI](https://github.com/ChronulusAI/chronulus-mcp)** - Predict anything with Chronulus AI forecasting and prediction agents
14. **[ClickHouse](https://github.com/ClickHouse/mcp-clickhouse)** - Query your ClickHouse database server
15. **[Cloudflare](https://github.com/cloudflare/mcp-server-cloudflare)** - Deploy, configure & interrogate your resources on the Cloudflare developer platform

### Docker MCP-Related Tools

1. **[Docker MCP Server](https://github.com/ckreiling/mcp-server-docker)** - MCP server for Docker
2. **[Docker Labs AI Tools for Devs](https://github.com/docker/labs-ai-tools-for-devs)** - Your trusted home for discovering MCP tools – seamlessly integrated into Docker
3. **[MCP Code Sandbox](https://github.com/Automata-Labs-team/code-sandbox-mcp)** - An MCP server to create secure code sandbox environment for executing code within Docker containers

## Using Docker MCP Toolkit

To use Docker MCP Toolkit, you need:
1. Docker Desktop 4.10 or higher
2. Install the extension from Docker Hub
3. Browse available MCP servers and connect them to your MCP client (like Claude Desktop)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License
