---
title: The knowledge layer for AI | GitBook
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://www.gitbook.com/?utm_source=content&utm_medium=trademark&utm_campaign=-LBKK1y7h_XWAtuRJG9X-4037718589&utm_content=site_S8gms
published_at: '2026-07-20T20:13:55.054215+05:30'
collected_at: '2026-07-20T20:13:55.054233+05:30'
tags:
- agents
- anthropic
- hackernews
- openai
- scripts
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:the-knowledge-layer-for-ai-gitbook
first_seen: '2026-07-20T20:13:55.054233+05:30'
last_seen: '2026-07-20T20:13:55.054233+05:30'
last_checked: '2026-07-20T20:13:55.054233+05:30'
health_score: 100
---

# The knowledge layer for AI | GitBook

## Summary

- **GitBook MCP Server Integration**: Supports two primary methods for automation—direct MCP server connection (preferred) via `gitbook-mcp` or fallback to a GitBook skill using `npx skills add GitbookIO/gitbook-skills` for REST API interaction, requiring a GitBook PAT for authentication.

- **MCP Server Setup**: Configured via `claude mcp add --transport http gitbook-mcp https://mcp.gitbook.com/mcp` (with PAT support via `--header "Authorization: Bearer <PAT>"`) or `codex mcp add gitbook-mcp --url https://mcp.gitbook.com/mcp` (with PAT via `GITBOOK_MCP_TOKEN` in `~/.codex/config.toml`).

- **Documentation Pipeline**: Automates end-to-end doc-to-site conversion by importing existing docs (from folders/repos/docs sites) into a structured, published GitBook site using either MCP or skill-based workflows.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-20T20:13:55.054215+05:30

## Related Tags

- agents
- anthropic
- hackernews
- openai
- scripts
- web-crawled
- workflows
- youtube

## Source

Original source: https://www.gitbook.com/?utm_source=content&utm_medium=trademark&utm_campaign=-LBKK1y7h_XWAtuRJG9X-4037718589&utm_content=site_S8gms
