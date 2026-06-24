---
title: '"Same-site" and "same-origin" | Articles | web.dev'
category: web-development
source_type: web
source_name: Web Discovery
source_url: https://web.dev/articles/same-site-same-origin#same-site-cross-site
published_at: '2026-06-24T20:54:58.308219+05:30'
collected_at: '2026-06-24T20:54:58.308232+05:30'
tags:
- animation
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:same-site-and-same-origin-articles-web-dev
first_seen: '2026-06-24T20:54:58.308232+05:30'
last_seen: '2026-06-24T20:54:58.308232+05:30'
last_checked: '2026-06-24T20:54:58.308232+05:30'
health_score: 100
---

# "Same-site" and "same-origin" | Articles | web.dev

## Summary

- **Origin Definition**: An origin is a combination of the URL's scheme (protocol), hostname, and port (if specified). Two URLs are same-origin only if all three components match exactly (e.g., `https://www.example.com:443` vs. `https://www.example.com` are same-origin due to implicit port `443`).

- **Site Definition**: A site is defined by the scheme and the eTLD+1 (effective Top-Level Domain + 1 label, e.g., `example.com`). Subdomains (e.g., `login.example.com`) do not affect same-site status. Ports are irrelevant for site comparison.

- **Same-Site vs. Same-Origin**: Same-site includes scheme comparison (e.g., `http://example.com` and `https://example.com` are cross-site), while same-origin requires exact scheme, hostname, and port matches. Schemeless same-site ignores the scheme (e.g., both HTTP/HTTPS are considered same-site).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: web-development
- Published: 2026-06-24T20:54:58.308219+05:30

## Related Tags

- animation
- reddit
- web-crawled
- youtube

## Source

Original source: https://web.dev/articles/same-site-same-origin#same-site-cross-site
