---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-03T23:03:10.455975+05:30'
collected_at: '2026-08-03T23:03:10.455986+05:30'
tags:
- web-crawled
status: active
resource_id: github:mdn/content
first_seen: '2026-08-03T23:03:10.455986+05:30'
last_seen: '2026-08-03T23:03:10.455986+05:30'
last_checked: '2026-08-03T23:03:10.455986+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) is a security mechanism enabling browsers to verify the integrity of fetched resources (e.g., from CDNs) by comparing cryptographic hashes (`sha256`, `sha384`, `sha512`) embedded in the `integrity` attribute against the fetched content, blocking mismatched resources to mitigate supply chain attacks.

- **CORS Requirement**: SRI enforces Cross-Origin Resource Sharing (CORS) compliance; resources must include the `crossorigin` attribute (e.g., `crossorigin="anonymous"`) and the server must respond with `Access-Control-Allow-Origin` headers to allow validation.

- **Policy Enforcement**: The `Integrity-Policy` HTTP header (or `Integrity-Policy-Report-Only`) can enforce mandatory `integrity` attributes on `<script>`/`<link>` elements, blocking or reporting violations via the Reporting API, with structured directives like `blocked-destinations` and `endpoints`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T23:03:10.455975+05:30

## Related Tags

- web-crawled

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
