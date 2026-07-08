---
title: crypto.Hash
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/functions/crypto/hash/
published_at: '2026-07-08T09:23:26.916527+05:30'
collected_at: '2026-07-08T09:23:26.916538+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:crypto-hash
first_seen: '2026-07-08T09:23:26.916538+05:30'
last_seen: '2026-07-08T09:23:26.916538+05:30'
last_checked: '2026-07-08T09:23:26.916538+05:30'
health_score: 100
---

# crypto.Hash

## Summary

- **Functionality**: The `crypto.Hash` function computes a checksum of the given input string using specified cryptographic hash algorithms (`md5`, `sha1`, `sha256` (default), `sha384`, or `sha512`) and returns the result as a hexadecimal string.

- **Default Behavior**: If no algorithm is specified, `sha256` is used by default for hashing the input.

- **Use Cases**: Supports Subresource Integrity (SRI) hash construction when combined with `encoding.HexDecode` and `encoding.Base64Encode`, enabling secure resource verification (e.g., `printf "%s-%s" $algo ("Hello world" | crypto.Hash $algo | encoding.HexDecode | encoding.Base64Encode)`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-08T09:23:26.916527+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/functions/crypto/hash/
