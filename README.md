# Awesome MCP Tools

A curated list of awesome Model Context Protocol (MCP) tools, servers, and clients.

## What is an MCP?

Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context to LLMs. It's like a "USB-C port for AI applications" - providing a standardized way to connect AI models to different data sources and tools, allowing LLMs to:

- Access data from diverse sources (files, databases, APIs)
- Use specialized tools to perform actions
- Work with prompt templates for standard workflows
- Operate with enhanced privacy and security

MCP follows a client-server architecture where:
- **MCP Clients**: Programs like Claude Desktop, IDE plugins, or other AI tools that want to access data through MCP
- **MCP Servers**: Lightweight programs that expose specific capabilities (like file access, database queries, or API interactions) through the standardized protocol

## Contents

- [MCP Servers](mcp-servers.md)
- [MCP Tools](mcp-tools.md)
- [MCP Clients](#mcp-clients)
- [Articles](#articles)
- [Community](#community)

## MCP Clients

- [Claude Desktop App](https://claude.ai/download) - Official Anthropic desktop client with comprehensive MCP support
- [Continue](https://github.com/continuedev/continue) - Open-source AI code assistant with MCP support
- [VS Code GitHub Copilot](https://code.visualstudio.com/) - AI coding assistant integrated with VS Code
- [Cline](https://github.com/cline/cline) - Autonomous coding agent for VS Code
- [Cursor](https://cursor.com/) - AI code editor with MCP tools support
- [Zed](https://zed.dev/) - High-performance code editor with built-in MCP support
- [Lutra](https://lutra.ai/) - AI agent for automated workflows
- [LibreChat](https://github.com/danny-avila/LibreChat) - Open-source customizable AI chat UI
- [MCPHub](https://github.com/ravitemer/mcphub.nvim) - Neovim plugin for MCP integration
- [TypingMind App](https://www.typingmind.com/) - Advanced frontend for LLMs with MCP support

See more clients at [modelcontextprotocol.io/clients](https://modelcontextprotocol.io/clients)

## Articles

- [Introduction to Model Context Protocol](https://modelcontextprotocol.io/introduction) - Official MCP introduction
- [Building Agents with Model Context Protocol](https://www.youtube.com/watch?v=kQmXtrmQ5Zg) - Full workshop with Mahesh Murag of Anthropic

## Community

- [GitHub Discussions](https://github.com/orgs/modelcontextprotocol/discussions) - Official MCP community discussions
- [GitHub Organization](https://github.com/modelcontextprotocol) - Official MCP GitHub organization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License
