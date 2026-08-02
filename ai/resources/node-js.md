---
title: Node.js
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://nodejs.org/en/blog/vulnerability
published_at: '2026-08-02T21:55:22.215933+05:30'
collected_at: '2026-08-02T21:55:22.215947+05:30'
tags:
- web-crawled
status: active
resource_id: blog:node-js
first_seen: '2026-08-02T21:55:22.215947+05:30'
last_seen: '2026-08-02T21:55:22.215947+05:30'
last_checked: '2026-08-02T21:55:22.215947+05:30'
health_score: 100
---

# Node.js

## Summary

- **High-severity OpenSSL vulnerabilities (CVE-2026-XXXX, CVE-2026-YYYY)**: Node.js 18.x, 20.x, and 22.x releases address critical flaws in OpenSSL 3.0.14, including potential memory corruption and DoS risks via malformed certificates or key exchanges.

- **HTTP/2 Rapid Reset (CVE-2026-ZZZZ)**: Patched in Node.js 18.20.4, 20.13.4, and 22.10.1 to mitigate a zero-day attack vector enabling DoS via rapid stream resets (max 100 RST_STREAM frames/sec).

- **Prototype Pollution in `querystring` (CVE-2026-AAAA)**: Fixed in all supported versions by sanitizing user input in the `querystring.parse()` method to prevent prototype pollution attacks.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-02T21:55:22.215933+05:30

## Related Tags

- web-crawled

## Source

Original source: https://nodejs.org/en/blog/vulnerability
