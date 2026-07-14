---
title: crypto.Hash
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/functions/crypto/hash/
published_at: '2026-07-14T13:06:21.550044+05:30'
collected_at: '2026-07-14T13:06:21.550056+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:crypto-hash
first_seen: '2026-07-14T13:06:21.550056+05:30'
last_seen: '2026-07-14T13:06:21.550056+05:30'
last_checked: '2026-07-14T13:06:21.550056+05:30'
health_score: 100
---

# crypto.Hash

## Summary

- **Hashing Function**: `crypto.Hash` computes checksums of input strings using cryptographic hash algorithms (`md5`, `sha1`, `sha256`, `sha384`, or `sha512`), defaulting to `sha256` if unspecified, and returns the result as a hexadecimal string.

- **Algorithm Flexibility**: Supports multiple hash algorithms (e.g., `sha256`, `sha512`) and can be chained with `encoding.HexDecode` and `encoding.Base64Encode` to generate Subresource Integrity (SRI) hashes.

- **Syntax & Usage**: Accepts direct string inputs or piped values, with examples demonstrating default (`sha256`) and explicit algorithm selection (e.g., `{{ crypto.Hash "sha512" "Hello world" }}`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-14T13:06:21.550044+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/functions/crypto/hash/
