# Contributing to Awesome MCP Tools

Thank you for your interest in contributing to Awesome MCP Tools! This document provides guidelines and instructions for contributing.

## How to Contribute

1. Fork this repository
2. Create a branch for your changes
3. Make your changes
4. Submit a pull request

## Adding a New Tool or Server

When adding a new MCP tool or server, please follow this format:

```markdown
- [Repository Name](https://github.com/username/repository) - Brief description of the tool or server
```

Please ensure:

- The tool or server is related to Model Card Platforms
- The description is concise but informative
- The URL is correct and accessible

## Running the Update Script

The repository includes a script that automatically fetches new MCP tools from Reddit. To run it:

1. Ensure you have Node.js installed
2. Install dependencies with `npm install`
3. Set your GitHub token as an environment variable (optional but recommended)
   ```
   export GITHUB_TOKEN=your_token_here
   ```
4. Run the script
   ```
   node scripts/update-tools.js
   ```

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## Questions?

If you have any questions or need help, please open an issue in the repository.

Thank you for your contributions!