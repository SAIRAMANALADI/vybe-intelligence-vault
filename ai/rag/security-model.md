---
title: Security model
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/about/security/
published_at: '2026-08-08T12:53:58.297522+05:30'
collected_at: '2026-08-08T12:53:58.297534+05:30'
tags:
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:security-model
first_seen: '2026-08-08T12:53:58.297534+05:30'
last_seen: '2026-08-08T12:53:58.297534+05:30'
last_checked: '2026-08-08T12:53:58.297534+05:30'
health_score: 100
---

# Security model

## Summary

- **Trust Model**: Hugo distinguishes between trusted (templates, assets) and untrusted (content, content adapters) sources; inline shortcodes and the `hugo server` are exceptions, with the latter restricted to local development.

- **Runtime Security**: Hugo employs a virtual file system, read-only access for user-defined components, controlled external binaries, and lacks arbitrary command execution; default security policies balance usability and protection.

- **Dependency & Output Security**: Hugo uses Go modules with `go.sum` for dependency integrity checks; HTML output follows OWASP standards with default escaping, while `safe` functions allow explicit trust marking; Markdown renderer sanitizes unsafe content by default.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T12:53:58.297522+05:30

## Related Tags

- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://gohugo.io/about/security/
