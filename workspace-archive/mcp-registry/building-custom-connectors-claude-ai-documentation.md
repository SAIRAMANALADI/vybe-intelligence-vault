---
title: Building custom connectors - Claude.ai Documentation
archive_category: mcp-registry
source_category: ai/resources
source_url: https://claude.com/docs/connectors/building
resource_id: blog:building-custom-connectors-claude-ai-documentation
local_vault_path: ai/resources/building-custom-connectors-claude-ai-documentation.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- anthropic
- hackernews
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Building custom connectors - Claude.ai Documentation

## Why This Is In The Archive

- Matched archive category: `MCP Registry`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Transport & Authentication**:
  - Supports **Streamable HTTP** (legacy HTTP+SSE deprecated) and multiple auth specs (2025-03-26, 2025-06-18, 2025-11-25).
  - Features **Dynamic Client Registration (DCR)**, OAuth callbacks (`https://claude.ai/api/mcp/auth_callback`), token refresh, and custom credentials.

- **Protocol Features**:
  - **Supported**: Tools, prompts, resources (text/binary), and image-based tool results.
  - **Unsupported**: Resource subscriptions, sampling, and advanced/draft

## Use Cases

- IDE extension
- Assistant tools discovery
- Context injection config

## Source

Original source URL: https://claude.com/docs/connectors/building

## Local Vault File

Path: [building-custom-connectors-claude-ai-documentation.md](../../ai/resources/building-custom-connectors-claude-ai-documentation.md)
