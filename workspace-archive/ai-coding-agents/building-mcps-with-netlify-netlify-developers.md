---
title: Building MCPs with Netlify | Netlify Developers
archive_category: ai-coding-agents
source_category: ai/agents
source_url: https://developers.netlify.com/guides/write-mcps-on-netlify
resource_id: blog:building-mcps-with-netlify-netlify-developers
local_vault_path: ai/agents/building-mcps-with-netlify-netlify-developers.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: mcp-server
importance: medium
tags:
- agents
- anthropic
- hackernews
- reddit
- web-crawled
- workflows
selection_reason:
- Useful for project building
---

# Building MCPs with Netlify | Netlify Developers

## Why This Is In The Archive

- Matched archive category: `AI Coding Agents`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: mcp-server
- Selection reasons:
  - Useful for project building

## Summary

- **MCP Architecture**: MCP servers expose tools/resources via JSON-RPC over HTTP/SSE/STDIO; Netlify serverless functions host MCP servers using `@modelcontextprotocol/sdk` with `StreamableHTTPServerTransport` for stateless HTTP interactions.
- **Implementation**: MCP server (`McpServer`) defines tools (e.g., `run-analysis-report`) and resources (e.g., `interpreting-reports`) with Zod schemas for input validation and structured responses.
- **Deployment**: MCP servers deploy to Netlify via Git/C

## Use Cases

- Assisted programming workflows
- Auto-debugging codebases
- Autonomous feature building

## Source

Original source URL: https://developers.netlify.com/guides/write-mcps-on-netlify

## Local Vault File

Path: [building-mcps-with-netlify-netlify-developers.md](../../ai/agents/building-mcps-with-netlify-netlify-developers.md)
