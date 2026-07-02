---
title: Site Isolation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.chromium.org/Home/chromium-security/site-isolation/
published_at: '2026-07-02T22:43:33.527961+05:30'
collected_at: '2026-07-02T22:43:33.527973+05:30'
tags:
- hackernews
- paper
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:site-isolation
first_seen: '2026-07-02T22:43:33.527973+05:30'
last_seen: '2026-07-02T22:43:33.527973+05:30'
last_checked: '2026-07-02T22:43:33.527973+05:30'
health_score: 100
---

# Site Isolation

## Summary

- **Process Isolation**: Site Isolation enforces cross-site documents (including iframes) to run in separate sandboxed processes, mitigating attacks like UXSS and Spectre by preventing cross-site data leakage even if renderer processes are compromised.

- **Cross-Origin Data Blocking**: Implements Cross-Origin Read Blocking (CORB) to restrict delivery of cross-site resources (HTML, XML, JSON, PDF) unless explicitly permitted via CORS, reducing exposure to sensitive data.

- **Platform-Specific Deployment**: Enabled by default on desktop (Chrome 67+) and select Android devices (2GB+ RAM, Chrome 77+), with ongoing expansion to include extensions (Chrome 92) and `<webview>` tags (Chrome 110), while excluding low-RAM Android and WebView environments.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T22:43:33.527961+05:30

## Related Tags

- hackernews
- paper
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://www.chromium.org/Home/chromium-security/site-isolation/
