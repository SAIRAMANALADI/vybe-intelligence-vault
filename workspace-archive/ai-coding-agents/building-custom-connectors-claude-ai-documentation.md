---
title: Building custom connectors - Claude.ai Documentation
archive_category: ai-coding-agents
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

- Matched archive category: `AI Coding Agents`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Transport & Authentication**:
  - Supports Streamable HTTP (legacy HTTP+SSE deprecated) and OAuth 2.0 with Dynamic Client Registration (DCR).
  - Valid auth specs: `2025-03-26`, `2025-06-18`, `2025-11-25`; includes token refresh, expiry, and custom credentials.

- **Protocol Features**:
  - Supports tools, prompts, resources (text/binary), and image-based tool results.
  - Excludes resource subscriptions, sampling, and draft capabilities.

- **Technical Limits**:
  - Max tool result size: 15

## Use Cases

- Assisted programming workflows
- Auto-debugging codebases
- Autonomous feature building

## Source

Original source URL: https://claude.com/docs/connectors/building

## Local Vault File

Path: [building-custom-connectors-claude-ai-documentation.md](../../ai/resources/building-custom-connectors-claude-ai-documentation.md)
