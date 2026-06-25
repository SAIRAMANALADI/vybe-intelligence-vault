---
title: Security model
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/about/security/
published_at: '2026-06-26T04:26:43.568690+05:30'
collected_at: '2026-06-26T04:26:43.568697+05:30'
tags:
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:security-model
first_seen: '2026-06-26T04:26:43.568697+05:30'
last_seen: '2026-06-26T04:26:43.568697+05:30'
last_checked: '2026-06-26T04:26:43.568697+05:30'
health_score: 100
---

# Security model

## Summary

- **Trust Boundaries**: Hugo distinguishes between trusted (e.g., `layouts`, `static`) and untrusted (e.g., `content`, content adapters) directories; `hugo server` is strictly for local development.
- **Runtime Security**: Uses a virtual file system, read-only access, and controlled external binaries (e.g., Asciidoctor) with strict sandboxing; avoids arbitrary OS command execution.
- **Dependency & Output Security**: Enforces checksum validation via `go.sum` for dependencies; sanitizes untrusted content by default (e.g., Markdown rendering) and provides `safe` functions for explicit trust marking.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T04:26:43.568690+05:30

## Related Tags

- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://gohugo.io/about/security/
