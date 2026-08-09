---
title: content/files/en-us/web/security/defenses/subresource_integrity/index.md at
  main · mdn/content · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
published_at: '2026-08-10T03:34:17.800872+05:30'
collected_at: '2026-08-10T03:34:17.800886+05:30'
tags:
- web-crawled
- youtube
status: active
resource_id: github:mdn/content
first_seen: '2026-08-10T03:34:17.800886+05:30'
last_seen: '2026-08-10T03:34:17.800886+05:30'
last_checked: '2026-08-10T03:34:17.800886+05:30'
health_score: 100
---

# content/files/en-us/web/security/defenses/subresource_integrity/index.md at main · mdn/content · GitHub

## Summary

- **Purpose & Mechanism**: Subresource Integrity (SRI) verifies fetched resources (e.g., from CDNs) by comparing cryptographic hashes (`sha256`, `sha384`, `sha512`) embedded in the `integrity` attribute against the resource's computed hash, blocking mismatches to prevent supply chain attacks.

- **CORS Dependency & Enforcement**: SRI requires CORS-enabled cross-origin requests; the `crossorigin` attribute must be set, and the server must include `Access-Control-Allow-Origin` headers (wildcard `*` allowed). `no-cors` mode is explicitly blocked to prevent hash-based side-channel attacks.

- **Policy & Tooling**: HTTP headers (`Integrity-Policy`/`Integrity-Policy-Report-Only`) enforce SRI requirements, blocking or reporting violations. Hashes can be generated via tools like `SRI Hash Generator`, OpenSSL (`openssl dgst -sha384 -binary | openssl base64 -A`), or `shasum` with post-processing.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T03:34:17.800872+05:30

## Related Tags

- web-crawled
- youtube

## Source

Original source: https://github.com/mdn/content/blob/main/files/en-us/web/security/defenses/subresource_integrity/index.md?plain=1
