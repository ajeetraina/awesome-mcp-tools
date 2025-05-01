# Docker MCP Toolkit Portal

A comprehensive web-based portal for exploring and navigating the Docker Model Context Protocol (MCP) servers and clients.

🔗 **Live Site**: [mcptoolkits.com](https://mcptoolkits.com)

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
- **Feature Filtering**: Filter servers by functionality (Database Access, API Integration, etc.)
- **Auto-Updates**: Automatically checks for new servers added to the Docker repository
- **Search Functionality**: Easily search through all available MCP servers
- **Detailed Information**: Descriptions, GitHub repositories, Docker Hub links, and pull counts
- **Responsive Design**: Works on desktop and mobile devices

## Categories

The portal organizes MCP servers into three main categories:

1. **Official MCP Servers**: Maintained as reference implementations by Docker/Anthropic
2. **Enterprise Integrations**: MCP servers maintained by companies for their platforms
3. **Docker MCP Tools**: Tools related to Docker MCP ecosystem

## Feature Categories

Servers are additionally categorized by functionality:

- **File Operations**: For file access and manipulation
- **Database Access**: For interacting with databases
- **API Integration**: For connecting to various APIs
- **Web Automation**: For web scraping and browser automation
- **AI Tools**: For artificial intelligence and machine learning
- **Development**: For developer tools and utilities

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
- `index.html`: A redirect file at the root to ensure users get to the portal

## Automatic Updates

The portal includes a feature that checks for new MCP servers in the Docker repository and automatically adds them to the listing. This ensures the portal stays up-to-date with the latest servers without manual intervention.

## Viewing the Portal

To view the portal:

1. Visit [mcptoolkits.com](https://mcptoolkits.com), or
2. Clone this repository and open the `portal/index.html` file in your web browser

## Contributing

Contributions are welcome! If you'd like to add or update MCP server information, please submit a pull request with your changes.

## Future Enhancements

Planned improvements for the portal:

- Server usage statistics and popularity metrics
- User reviews and comments for servers
- Tutorial section for getting started with specific servers
- Advanced filtering options
- Categorized documentation for each server

## License

This project is licensed under the MIT License.
