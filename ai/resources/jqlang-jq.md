---
title: Release jq 1.8.2 · jqlang/jq · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/jqlang/jq/releases/tag/jq-1.8.2
published_at: '2026-07-01T02:05:06.521376+05:30'
collected_at: '2026-07-01T02:05:06.521392+05:30'
tags:
- frontend_ui
- hackernews
- scripts
- web-crawled
status: active
resource_id: github:jqlang/jq
first_seen: '2026-07-01T02:05:06.521392+05:30'
last_seen: '2026-07-01T02:05:06.521392+05:30'
last_checked: '2026-07-01T02:05:06.521392+05:30'
health_score: 100
---

# Release jq 1.8.2 · jqlang/jq · GitHub

## Summary

- **Security fixes**: Patched 16 CVEs in jq 1.8.2, including heap buffer overflows (`jvp_string_append`, `jvp_string_copy_replace_bad`), stack overflows (`jv_setpath`, `contains`), NUL truncation in JSON parser, and hash collision DoS mitigation via randomized hash seed.

- **New architectures & signing**: Added Windows arm64 builds and Docker arm/v7 support; updated GPG signing key and introduced GitHub Actions artifact attestation for release verification.

- **Performance & correctness**: Increased max printing depth to 10000, fixed `tonumber`/`toboolean` null-byte handling, resolved year 2038 issue on 32-bit platforms, and corrected UTF-8 corruption in `@uri`/`@urid` functions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-01T02:05:06.521376+05:30

## Related Tags

- frontend_ui
- hackernews
- scripts
- web-crawled

## Source

Original source: https://github.com/jqlang/jq/releases/tag/jq-1.8.2
