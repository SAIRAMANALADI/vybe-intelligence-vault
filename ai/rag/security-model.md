---
title: Security model
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/about/security/
published_at: '2026-06-25T23:00:30.793506+05:30'
collected_at: '2026-06-25T23:00:30.793515+05:30'
tags:
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:security-model
first_seen: '2026-06-25T23:00:30.793515+05:30'
last_seen: '2026-06-25T23:00:30.793515+05:30'
last_checked: '2026-06-25T23:00:30.793515+05:30'
health_score: 100
---

# Security model

## Summary

- **Trust Boundaries**: Hugo distinguishes between trusted (e.g., `layouts`, `static`) and untrusted (e.g., `content`, content adapters) sources, with inline shortcodes requiring explicit trust. The `hugo server` is restricted to local development.

- **Runtime Security**: Hugo enforces sandboxing via a virtual file system, read-only access for user-defined components, and strict control over external binaries (e.g., Asciidoctor). Arbitrary OS command execution is disabled by design.

- **Dependency & Output Security**: Hugo uses Go modules with `go.sum` for dependency integrity checks. HTML output follows OWASP-aligned defaults, escaping untrusted data unless explicitly marked as safe via `safe` functions. Markdown rendering sanitizes unsafe content by default.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T23:00:30.793506+05:30

## Related Tags

- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://gohugo.io/about/security/
