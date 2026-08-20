---
title: Security model
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/about/security/
published_at: '2026-08-09T15:37:28.213649+05:30'
collected_at: '2026-08-09T15:37:28.213663+05:30'
tags:
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:security-model
first_seen: '2026-08-09T15:37:28.213663+05:30'
last_seen: '2026-08-09T15:37:28.213663+05:30'
last_checked: '2026-08-09T15:37:28.213663+05:30'
health_score: 100
---

# Security model

## Summary

- **Trust Model**: Hugo distinguishes between trusted (templates, assets, development server) and untrusted (content, content adapters) components, with explicit exceptions for inline shortcodes and scoped content adapters.

- **Runtime Security**: Implements a virtual file system, read-only access for user-defined components, controlled external binaries, and no arbitrary command execution; relies on Go modules with `go.sum` for dependency integrity checks.

- **Web Security**: Follows OWASP standards, sanitizes untrusted data by default, provides `safe` functions for trusted content, and leverages static site generation to minimize dynamic attack surfaces.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T15:37:28.213649+05:30

## Related Tags

- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://gohugo.io/about/security/
