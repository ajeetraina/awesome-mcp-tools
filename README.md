# Awesome MCP Tools

A curated list of awesome Model Context Protocol (MCP) tools, servers, and clients.

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

- [MCP Development SDKs](#mcp-development-sdks)
- [MCP Tools](#mcp-tools)
- [MCP Integration Services](#mcp-integration-services)
- [MCP Clients](#mcp-clients)
- [MCP Servers](#mcp-servers)
  - [Data & Files Servers](#data--files-servers)
  - [Dev Tools Servers](#dev-tools-servers)
  - [Web & Browser Servers](#web--browser-servers)
  - [Communication Servers](#communication-servers)
  - [Utility Servers](#utility-servers)
  - [MCP Development Tools](#mcp-development-tools)
  - [MCP Server Directories and Aggregators](#mcp-server-directories-and-aggregators)
- [Open Source MCP Servers](#open-source-mcp-servers)
- [Commercial MCP Solutions](#commercial-mcp-solutions)
- [Self-Hosted Solutions](#self-hosted-solutions)
- [Emerging Projects](#emerging-projects)
- [Learning Resources](#learning-resources)
- [Community](#community)

## MCP Development SDKs

| Name | Description | Stars | Language | URL |
|------|-------------|-------|----------|-----|
| TypeScript SDK | Official TypeScript SDK for MCP servers and clients | 1.5k | TypeScript | [modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) |
| Python SDK | Official Python SDK for MCP servers and clients | 1.2k | Python | [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) |
| Java SDK | Official Java SDK for MCP servers and clients | 430 | Java | [modelcontextprotocol/java-sdk](https://github.com/modelcontextprotocol/java-sdk) |
| C# SDK | Official C# SDK for MCP servers and clients | 280 | C# | [modelcontextprotocol/csharp-sdk](https://github.com/modelcontextprotocol/csharp-sdk) |

## MCP Tools

| Name | Description | Stars | URL |
|------|-------------|-------|-----|
| MCP CLI | Command-line inspector for MCP servers | 642 | [wong2/mcp-cli](https://github.com/wong2/mcp-cli) |
| MCP Get | Tool for installing and managing MCP servers | 325 | [mcp-get.com](https://mcp-get.com) |
| MCP Inspector | Interactive debugging tool for MCP servers | 184 | [modelcontextprotocol.io/docs/tools/inspector](https://modelcontextprotocol.io/docs/tools/inspector) |
| Supergateway | Run MCP stdio servers over SSE | 195 | [supercorp-ai/supergateway](https://github.com/supercorp-ai/supergateway) |
| fast-agent | Python Agent framework with multi-modal MCP support | 216 | [evalstate/fast-agent](https://github.com/evalstate/fast-agent) |

## MCP Integration Services

| Name | Description | URL |
|------|-------------|-----|
| Pipedream MCP | MCP servers with auth for 3,000+ APIs | [mcp.pipedream.com](https://mcp.pipedream.com) |
| Zapier MCP | MCP Server with 7,000+ apps and 30,000+ actions | [zapier.com/mcp](https://zapier.com/mcp) |
| Klavis AI | Infrastructure for Slack/Discord/web MCP integration | [klavis.ai](https://klavis.ai) |

## MCP Clients

| Name | Description | Stars | URL |
|------|-------------|-------|-----|
| Claude Desktop App | Official Anthropic client with MCP support | N/A | [claude.ai/download](https://claude.ai/download) |
| Continue | Open-source AI code assistant | 14.3k | [continuedev/continue](https://github.com/continuedev/continue) |
| Cline | Autonomous coding agent for VS Code | 2.8k | [cline/cline](https://github.com/cline/cline) |
| Cursor | AI code editor with MCP tools support | 18.5k | [cursor.com](https://cursor.com) |
| Zed | High-performance code editor | 13.2k | [zed.dev](https://zed.dev) |
| Lutra | AI agent for automated workflows | 3.2k | [lutra.ai](https://lutra.ai) |
| LibreChat | Open-source customizable AI chat UI | 19.7k | [danny-avila/LibreChat](https://github.com/danny-avila/LibreChat) |
| MCPHub | Neovim plugin for MCP integration | 475 | [ravitemer/mcphub.nvim](https://github.com/ravitemer/mcphub.nvim) |
| TypingMind App | Advanced frontend for LLMs with MCP support | 1.2k | [typingmind.com](https://typingmind.com) |

## MCP Servers

### Data & Files Servers

| Server | Description |
|--------|-------------|
| Filesystem | Secure file operations with configurable access controls |
| PostgreSQL | Read-only database access with schema inspection |
| SQLite | Database interaction and business intelligence features |
| Google Drive | File access and search capabilities |
| [MySQL Server](https://github.com/designcomputer/mysql_mcp_server) | A MCP server that enables secure interaction with MySQL databases |
| [Supabase](https://github.com/alexander-zuev/supabase-mcp-server) | End-to-end management of Supabase via chat interface with query executions, management API, migration versioning, and logs access |
| [Notion](https://github.com/makenotion/notion-mcp-server) | Official Notion MCP Server for interacting with Notion workspaces |
| [Alternate Notion MCP](https://github.com/suekou/mcp-notion-server) | Community-built Notion MCP server implementation |

### Dev Tools Servers

| Server | Description |
|--------|-------------|
| Git | Tools to read, search, and manipulate Git repositories |
| GitHub | Repository management and GitHub API integration |
| GitLab | GitLab API integration for project management |
| Sentry | Error tracking and analysis from Sentry.io |
| [AWS](https://github.com/awslabs/mcp) | Specialized MCP servers bringing AWS best practices to your development workflow |
| [IDA Pro](https://github.com/mrexodia/ida-pro-mcp) | MCP Server for IDA Pro reverse engineering tool |
| [Atlassian](https://github.com/sooperset/mcp-atlassian) | MCP server for Atlassian tools (Confluence, Jira) |
| [Cloudflare](https://github.com/cloudflare/mcp-server-cloudflare) | Cloudflare MCP server for interacting with Cloudflare services |

### Web & Browser Servers

| Server | Description |
|--------|-------------|
| Brave Search | Web search using Brave's Search API |
| Fetch | Web content fetching optimized for LLM usage |
| Puppeteer | Browser automation and web scraping |
| [Playwright](https://github.com/microsoft/playwright-mcp) | Official Microsoft Playwright MCP server for browser automation and testing |
| [Firecrawl](https://github.com/mendableai/firecrawl-mcp-server) | Powerful web scraping capabilities for LLM clients |
| [Exa](https://github.com/exa-labs/exa-mcp-server) | Web search capabilities for LLMs using Exa |
| [Browser MCP](https://github.com/BrowserMCP/mcp) | Allows AI applications to control your browser |
| [Browserbase](https://github.com/browserbase/mcp-server-browserbase) | Enables LLMs to control a browser with Browserbase and Stagehand |
| [Execute Automation Playwright](https://github.com/executeautomation/mcp-playwright) | Tool to automate browsers and APIs in various LLM clients |
| [Figma Context](https://github.com/GLips/Figma-Context-MCP) | Provides Figma layout information to AI coding agents |
| [Baidu Maps](https://github.com/baidu-maps/mcp) | Baidu Maps MCP Server for mapping and location services |

### Communication Servers

| Server | Description |
|--------|-------------|
| Slack | Channel management and messaging capabilities |
| Google Maps | Location services and place details |
| Memory | Knowledge graph-based persistent memory system |
| [ElevenLabs](https://github.com/elevenlabs/elevenlabs-mcp) | Official ElevenLabs MCP server for voice and audio capabilities |
| [ChatSum](https://github.com/chatmcp/mcp-server-chatsum) | Query and summarize chat messages |

### Utility Servers

| Server | Description |
|--------|-------------|
| [MCP Proxy](https://github.com/sparfenyuk/mcp-proxy) | Connect to MCP servers that run on SSE transport, or expose stdio servers as an SSE server |
| [MCP to OpenAPI Proxy (MCPO)](https://github.com/open-webui/mcpo) | A simple, secure MCP-to-OpenAPI proxy server for integrating with REST APIs |
| [MCP Installer](https://github.com/anaisbetts/mcp-installer) | An MCP server that installs other MCP servers |
| [MCP-Use](https://github.com/mcp-use/mcp-use) | The easiest way to interact with MCP servers with custom agents |
| [FastMCP](https://github.com/jlowin/fastmcp) | Fast, Pythonic way to build MCP servers and clients |
| [Markdownify MCP](https://github.com/zcaceres/markdownify-mcp) | A MCP server for converting almost anything to Markdown |
| [Desktop Commander](https://github.com/wonderwhy-er/DesktopCommanderMCP) | Gives LLMs terminal control, file system search and diff file editing capabilities |
| [ArXiv MCP](https://github.com/blazickjp/arxiv-mcp-server) | A MCP server for searching and analyzing arXiv papers |
| [Create Python Server](https://github.com/modelcontextprotocol/create-python-server) | Tool to create a Python MCP server |

### MCP Development Tools

| Server | Description |
|--------|-------------|
| [MCP Inspector](https://github.com/modelcontextprotocol/inspector) | Visual testing tool for MCP servers |
| [Damn Vulnerable MCP Server](https://github.com/harishsg993010/damn-vulnerable-MCP-server) | A deliberately vulnerable MCP server for security testing and education |

### MCP Server Directories and Aggregators

| Service | Description |
|---------|-------------|
| [MCP Server Directory (MCPSO)](https://github.com/chatmcp/mcpso) | Directory for Awesome MCP Servers |
| [MCP-Get](https://mcp-get.com) | Tool for installing and managing MCP servers |

## Open Source MCP Servers

- [Hugging Face Hub](https://github.com/huggingface/huggingface_hub) - Popular platform for sharing and documenting ML models
- [MLflow Model Registry](https://github.com/mlflow/mlflow) - Open source platform for the ML lifecycle, including model documentation
- [ModelCard Toolkit](https://github.com/tensorflow/model-card-toolkit) - Google's open source toolkit for creating model cards
- [OSML Model Metadata Repository](https://github.com/osml-dev/metadata-repository) - Repository designed for ML model metadata management

## Commercial MCP Solutions

- [Weights & Biases](https://wandb.ai/site) - MLOps platform with model registry and documentation features
- [Determined AI](https://www.determined.ai/) - Comprehensive MLOps platform with model documentation
- [Verta.ai](https://www.verta.ai/) - ML model management platform with versioning and documentation
- [Neptune.ai](https://neptune.ai/) - Metadata store for MLOps, supporting model documentation

## Self-Hosted Solutions

- [DVC](https://dvc.org/) - Open-source version control system for ML projects
- [ClearML](https://github.com/allegroai/clearml) - Open source MLOps and data management solution
- [Pachyderm](https://github.com/pachyderm/pachyderm) - Data versioning and pipelines for MLOps

## Emerging Projects

- [Modelbit](https://www.modelbit.com/) - Deploy ML models with documentation
- [Giskard](https://github.com/Giskard-AI/giskard) - Open source governance for AI systems

## Learning Resources

| Name | Description | URL |
|------|-------------|-----|
| MCP Workshop Video | Full workshop with Mahesh Murag of Anthropic | [youtube.com/watch?v=kQmXtrmQ5Zg](https://youtube.com/watch?v=kQmXtrmQ5Zg) |
| Building Effective Agents Guide | Guide to building effective agents | [anthropic.com/research/building-effective-agents](https://anthropic.com/research/building-effective-agents) |
| MCP Documentation | Official MCP documentation | [modelcontextprotocol.io](https://modelcontextprotocol.io) |
| Awesome MCP Servers | Curated list of MCP servers | [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) |

## Community

- [GitHub Discussions](https://github.com/orgs/modelcontextprotocol/discussions)
- [MCP Subreddit](https://reddit.com/r/mcp)
- [Discord Server](https://discord.gg/mcp-community)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License
