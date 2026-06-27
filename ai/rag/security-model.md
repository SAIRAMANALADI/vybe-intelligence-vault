---
title: Security model
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/about/security/
published_at: '2026-06-27T09:53:52.707554+05:30'
collected_at: '2026-06-27T09:53:52.707586+05:30'
tags:
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:security-model
first_seen: '2026-06-27T09:53:52.707586+05:30'
last_seen: '2026-06-27T09:53:52.707586+05:30'
last_checked: '2026-06-27T09:53:52.707586+05:30'
health_score: 100
---

# Security model

## Summary

- **Trust Boundaries**: Hugo distinguishes between trusted (e.g., `layouts`, `static`, `data`) and untrusted (e.g., `content`, content adapters) directories; inline shortcodes require explicit trust of embedded logic.
- **Runtime Protections**: Uses a virtual, read-only filesystem, restricts external binaries, and avoids arbitrary command execution; default security policy balances usability with safety but may tighten in future releases.
- **Dependency & Output Security**: Enforces checksum validation via `go.sum` for Go modules, sanitizes unsafe Markdown by default, and provides `safe` functions (e.g., `safe.HTML`) to explicitly trust trusted data in templates.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T09:53:52.707554+05:30

## Related Tags

- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://gohugo.io/about/security/
