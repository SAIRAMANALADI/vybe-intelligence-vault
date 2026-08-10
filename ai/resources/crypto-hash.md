---
title: crypto.Hash
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/functions/crypto/hash/
published_at: '2026-08-11T01:01:09.498073+05:30'
collected_at: '2026-08-11T01:01:09.498095+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:crypto-hash
first_seen: '2026-08-11T01:01:09.498095+05:30'
last_seen: '2026-08-11T01:01:09.498095+05:30'
last_checked: '2026-08-11T01:01:09.498095+05:30'
health_score: 100
---

# crypto.Hash

## Summary

- **Functionality**: The `crypto.Hash` function computes a cryptographic hash of the input string using specified algorithms (`md5`, `sha1`, `sha256`, `sha384`, `sha512`), defaulting to `sha256` if omitted, and returns the checksum as a hexadecimal string.

- **Syntax**: Supports two invocation styles: `crypto.Hash "ALGORITHM" "INPUT"` or via pipeline (`"INPUT" | crypto.Hash "ALGORITHM"`), with algorithm flexibility for Subresource Integrity (SRI) hash construction.

- **Use Case**: Enables SRI hash generation by combining with `encoding.HexDecode` and `encoding.Base64Encode` (e.g., `printf "%s-%s" $algo ("Hello world" | crypto.Hash $algo | encoding.HexDecode | encoding.Base64Encode)`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-11T01:01:09.498073+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/functions/crypto/hash/
