---
title: Building MCPs with Netlify | Netlify Developers
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://developers.netlify.com/guides/write-mcps-on-netlify
published_at: '2026-06-24T21:17:45.305567+05:30'
collected_at: '2026-06-24T21:17:45.305580+05:30'
tags:
- agents
- anthropic
- hackernews
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:building-mcps-with-netlify-netlify-developers
first_seen: '2026-06-24T21:17:45.305580+05:30'
last_seen: '2026-06-24T21:17:45.305580+05:30'
last_checked: '2026-06-24T21:17:45.305580+05:30'
health_score: 100
---

# Building MCPs with Netlify | Netlify Developers

## Summary

- **MCP Architecture**: MCP servers expose tools/resources via JSON-RPC over HTTP/SSE/STDIO; Netlify serverless functions host MCP servers using `@modelcontextprotocol/sdk` with `StreamableHTTPServerTransport` for stateless HTTP interactions.
- **Implementation**: MCP server (`McpServer`) defines tools (e.g., `run-analysis-report`) and resources (e.g., `interpreting-reports`) with Zod schemas for input validation and structured responses.
- **Deployment**: MCP servers deploy to Netlify via Git/CLI/AI tools; clients (e.g., Claude) connect via `/mcp` endpoint using hybrid `mcp-remote` proxy for compatibility.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-24T21:17:45.305567+05:30

## Related Tags

- agents
- anthropic
- hackernews
- reddit
- web-crawled
- workflows

## Source

Original source: https://developers.netlify.com/guides/write-mcps-on-netlify
