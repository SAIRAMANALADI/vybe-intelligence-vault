---
title: Security model
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/about/security/
published_at: '2026-07-03T03:57:20.542704+05:30'
collected_at: '2026-07-03T03:57:20.542714+05:30'
tags:
- rag
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:security-model
first_seen: '2026-07-03T03:57:20.542714+05:30'
last_seen: '2026-07-03T03:57:20.542714+05:30'
last_checked: '2026-07-03T03:57:20.542714+05:30'
health_score: 100
---

# Security model

## Summary

- **Trust Model**: Hugo distinguishes between trusted (templates, static assets, `layouts`, `archetypes`, `data`, `i18n`, `resources`) and untrusted (content, content adapters in `content`) sources, with exceptions for inline shortcodes.

- **Runtime Security**: Implements a virtual file system, read-only access for user-defined components, controlled external binaries, and no arbitrary command execution; relies on Go modules with `go.sum` for dependency integrity.

- **Web Security**: Follows OWASP standards, escapes untrusted data by default, provides `safe` functions for trusted content, and sanitizes Markdown output; static generation inherently reduces attack surface.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T03:57:20.542704+05:30

## Related Tags

- rag
- reddit
- web-crawled
- workflows

## Source

Original source: https://gohugo.io/about/security/
