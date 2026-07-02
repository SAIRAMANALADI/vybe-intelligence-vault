---
title: Building custom connectors - Claude.ai Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://claude.com/docs/connectors/building
published_at: '2026-07-03T03:58:13.392149+05:30'
collected_at: '2026-07-03T03:58:13.392161+05:30'
tags:
- anthropic
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:building-custom-connectors-claude-ai-documentation
first_seen: '2026-07-03T03:58:13.392161+05:30'
last_seen: '2026-07-03T03:58:13.392161+05:30'
last_checked: '2026-07-03T03:58:13.392161+05:30'
health_score: 100
---

# Building custom connectors - Claude.ai Documentation

## Summary

- **Transport & Authentication**:
  - Supports **Streamable HTTP** (legacy HTTP+SSE deprecated) and multiple auth specs (2025-03-26, 2025-06-18, 2025-11-25).
  - Features **Dynamic Client Registration (DCR)**, OAuth callbacks (`https://claude.ai/api/mcp/auth_callback`), token refresh, and custom credentials.

- **Protocol Features**:
  - **Supported**: Tools, prompts, resources (text/binary), and image-based tool results.
  - **Unsupported**: Resource subscriptions, sampling, and advanced/draft capabilities.

- **Technical Constraints**:
  - **Tool result limits**: ~150k chars (Claude.ai/Desktop), 25k tokens (Claude Code, configurable via `MAX_MCP_OUTPUT_TOKENS`).
  - **Timeouts**: 300s (Claude.ai/Desktop), configurable via `MCP_TOOL_TIMEOUT` (Claude Code).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-03T03:58:13.392149+05:30

## Related Tags

- anthropic
- hackernews
- reddit
- web-crawled

## Source

Original source: https://claude.com/docs/connectors/building
