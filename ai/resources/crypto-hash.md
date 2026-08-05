---
title: crypto.Hash
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/functions/crypto/hash/
published_at: '2026-08-05T09:11:51.768941+05:30'
collected_at: '2026-08-05T09:11:51.768949+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:crypto-hash
first_seen: '2026-08-05T09:11:51.768949+05:30'
last_seen: '2026-08-05T09:11:51.768949+05:30'
last_checked: '2026-08-05T09:11:51.768949+05:30'
health_score: 100
---

# crypto.Hash

## Summary

- **Functionality**: The `crypto.Hash` function in Hugo hashes input strings using specified algorithms (`md5`, `sha1`, `sha256`, `sha384`, or `sha512`), defaulting to `sha256` if unspecified, and returns the checksum as a hexadecimal string.
- **SRI Integration**: Supports Subresource Integrity (SRI) hashes by combining with `encoding.HexDecode` and `encoding.Base64Encode` to generate SRI-compatible hashes from strings.
- **Syntax**: Accepts either piped or direct input with optional algorithm specification, e.g., `{{ crypto.Hash "sha256" "Hello world" }}` or `{{ "Hello world" | crypto.Hash "sha512" }}`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T09:11:51.768941+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/functions/crypto/hash/
