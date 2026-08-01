---
title: crypto.Hash
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/functions/crypto/hash/
published_at: '2026-08-01T19:32:27.861540+05:30'
collected_at: '2026-08-01T19:32:27.861549+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:crypto-hash
first_seen: '2026-08-01T19:32:27.861549+05:30'
last_seen: '2026-08-01T19:32:27.861549+05:30'
last_checked: '2026-08-01T19:32:27.861549+05:30'
health_score: 100
---

# crypto.Hash

## Summary

- **Functionality**: The `crypto.Hash` function computes a cryptographic hash of the input string using specified algorithms (`md5`, `sha1`, `sha256`, `sha384`, `sha512`), defaulting to `sha256` if unspecified, and returns the checksum as a hexadecimal string.
- **Syntax**: Supports two forms: `crypto.Hash "ALGORITHM" "INPUT"` or piped input `{{ "INPUT" | crypto.Hash "ALGORITHM" }}`.
- **Use Case**: Enables Subresource Integrity (SRI) hash generation by combining with `encoding.HexDecode` and `encoding.Base64Encode` for fingerprinting resources.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T19:32:27.861540+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/functions/crypto/hash/
