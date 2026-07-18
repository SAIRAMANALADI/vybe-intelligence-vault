---
title: Security model
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/about/security/
published_at: '2026-07-14T19:57:49.745177+05:30'
collected_at: '2026-07-14T19:57:49.745190+05:30'
tags:
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:security-model
first_seen: '2026-07-14T19:57:49.745190+05:30'
last_seen: '2026-07-14T19:57:49.745190+05:30'
last_checked: '2026-07-14T19:57:49.745190+05:30'
health_score: 100
---

# Security model

## Summary

- **Trust Model**: Hugo distinguishes between trusted (templates, assets) and untrusted (content, content adapters) sources, with exceptions for inline shortcodes; the `hugo server` is trusted but restricted to local development.
- **Runtime Security**: Hugo employs a virtual file system, read-only access for user-defined components, controlled external binaries, and a strict security policy with default protections to minimize vulnerabilities during the build process.
- **Dependency & Output Security**: Hugo uses Go modules with `go.sum` for dependency integrity checks, aligns with OWASP standards for HTML output, and sanitizes unsafe content by default while allowing explicit trust via `safe` functions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-14T19:57:49.745177+05:30

## Related Tags

- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://gohugo.io/about/security/
