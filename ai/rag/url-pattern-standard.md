---
title: URL Pattern Standard
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://urlpattern.spec.whatwg.org/#url-pattern
published_at: '2026-06-24T20:57:15.278815+05:30'
collected_at: '2026-06-24T20:57:15.278828+05:30'
tags:
- agents
- hackernews
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:url-pattern-standard
first_seen: '2026-06-24T20:57:15.278828+05:30'
last_seen: '2026-06-24T20:57:15.278828+05:30'
last_checked: '2026-06-24T20:57:15.278828+05:30'
health_score: 100
---

# URL Pattern Standard

## Summary

- `URLPattern` enables component-wise URL matching via structured patterns (protocol, hostname, pathname, etc.) with support for wildcards (`*`), optional segments (`?`), and regex groups (e.g., `:id([0-9]+)`).
- Constructors accept either shorthand strings (e.g., `"https://example.com/:category/*"`) or `URLPatternInit` objects, with optional `baseURL` resolution and `ignoreCase` flag for case-insensitive matching.
- Methods `test()` and `exec()` validate matches or return structured results (e.g., `URLPatternResult` with `groups` for regex captures), while getters expose normalized pattern strings for each URL component.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T20:57:15.278815+05:30

## Related Tags

- agents
- hackernews
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://urlpattern.spec.whatwg.org/#url-pattern
