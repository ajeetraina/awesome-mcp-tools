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
- [Core MCP Reference Servers](mcp-servers.md)
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