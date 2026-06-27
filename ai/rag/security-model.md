---
title: Security model
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/about/security/
published_at: '2026-06-27T14:26:41.571315+05:30'
collected_at: '2026-06-27T14:26:41.571324+05:30'
tags:
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:security-model
first_seen: '2026-06-27T14:26:41.571324+05:30'
last_seen: '2026-06-27T14:26:41.571324+05:30'
last_checked: '2026-06-27T14:26:41.571324+05:30'
health_score: 100
---

# Security model

## Summary

- **Trust Model**: Hugo distinguishes between trusted (e.g., `layouts`, `static`, `data`) and untrusted (e.g., `content`, content adapters) sources, with exceptions for inline shortcodes. The `hugo server` is restricted to local development only.

- **Runtime Security**: Uses a virtual file system, read-only access for user-defined components, and strict sandboxing to prevent arbitrary OS command execution. External binaries (e.g., Asciidoctor) are predefined and disabled by default.

- **Dependency & Output Security**: Enforces Go modules with `go.sum` for dependency integrity checks; sanitizes HTML/Markdown output by default (configurable via `safe` functions) and aligns with OWASP standards for static site generation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T14:26:41.571315+05:30

## Related Tags

- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://gohugo.io/about/security/
