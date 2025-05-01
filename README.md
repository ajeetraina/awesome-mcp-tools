# Docker MCP Toolkit Portal

A comprehensive web-based portal for exploring and navigating the Docker Model Context Protocol (MCP) servers and clients.

## Overview

This repository hosts a portal designed to catalog and organize the various MCP servers and clients available in the Docker ecosystem. The Model Context Protocol (MCP) is an open protocol that standardizes how applications provide context to Large Language Models (LLMs), functioning like a "USB-C port for AI applications" by connecting AI models to different data sources and tools.

## What is MCP?

Model Context Protocol (MCP) allows LLMs to:

- Access data from diverse sources (files, databases, APIs)
- Use specialized tools to perform actions
- Work with prompt templates for standard workflows
- Operate with enhanced privacy and security

MCP follows a client-server architecture where:
- **MCP Clients**: Programs like Claude Desktop, IDE plugins, or other AI tools that want to access data through MCP
- **MCP Servers**: Lightweight programs that expose specific capabilities (like file access, database queries, or API interactions) through the standardized protocol

## Portal Features

The Docker MCP Toolkit Portal provides:

- **Categorized Server Listings**: Organized by Official Servers, Enterprise Integrations, and Docker MCP Tools
- **Detailed Information**: Descriptions, GitHub repositories, Docker Hub links, and pull counts for each server
- **Search Functionality**: Easily search through all available MCP servers
- **Responsive Design**: Works on desktop and mobile devices

## Categories

The portal organizes MCP servers into three main categories:

1. **Official MCP Servers**: Maintained as reference implementations by Docker/Anthropic
2. **Enterprise Integrations**: MCP servers maintained by companies for their platforms
3. **Docker MCP Tools**: Tools related to Docker MCP ecosystem

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

## Portal Structure

The portal contains the following files:

- `portal/index.html`: Main HTML structure
- `portal/styles.css`: CSS styling for the portal
- `portal/script.js`: JavaScript for dynamic functionality

## Viewing the Portal

To view the portal locally:

1. Clone this repository
2. Open the `portal/index.html` file in your web browser

## Contributing

Contributions are welcome! If you'd like to add or update MCP server information, please submit a pull request with your changes.

## License

This project is licensed under the MIT License.
