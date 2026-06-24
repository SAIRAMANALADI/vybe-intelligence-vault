---
title: Configuring your environment - Mastodon documentation
archive_category: rag-systems
source_category: ai/rag
source_url: https://docs.joinmastodon.org/admin/config/#authorized_fetch
resource_id: blog:configuring-your-environment-mastodon-documentatio
local_vault_path: ai/rag/configuring-your-environment-mastodon-documentatio.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- paper
- rag
- reddit
- scripts
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Configuring your environment - Mastodon documentation

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Federation & Domain Configuration**:
  - `LOCAL_DOMAIN` defines the server's unique identifier (e.g., `example.com`), immutable post-deployment.
  - `WEB_DOMAIN` enables separate web access (e.g., `mastodon.example.com`) from user handles (`@user@example.com`), requiring CORS-enabled redirects for `.well-known/webfinger`.
  - `ALTERNATE_DOMAINS` allows Mastodon to recognize additional domains pointed at the server (comma-separated).

- **Security & Access Control**:
  - `AUTHORIZED_FETCH` (s

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://docs.joinmastodon.org/admin/config/#authorized_fetch

## Local Vault File

Path: [configuring-your-environment-mastodon-documentatio.md](../../ai/rag/configuring-your-environment-mastodon-documentatio.md)
