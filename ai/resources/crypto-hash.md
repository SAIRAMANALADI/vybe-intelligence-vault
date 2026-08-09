---
title: crypto.Hash
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/functions/crypto/hash/
published_at: '2026-08-09T18:57:13.878580+05:30'
collected_at: '2026-08-09T18:57:13.878589+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:crypto-hash
first_seen: '2026-08-09T18:57:13.878589+05:30'
last_seen: '2026-08-09T18:57:13.878589+05:30'
last_checked: '2026-08-09T18:57:13.878589+05:30'
health_score: 100
---

# crypto.Hash

## Summary

- **Functionality**: The `crypto.Hash` function computes a checksum of the input string using a specified cryptographic hash algorithm (`md5`, `sha1`, `sha256` (default), `sha384`, or `sha512`) and returns the result as a hexadecimal string.

- **Syntax**: `crypto.Hash [ALGORITHM] INPUT` where `ALGORITHM` is optional and defaults to `sha256`; supports piped input (`"Hello world" | crypto.Hash "sha512"`).

- **Integration**: Can be combined with `encoding.HexDecode` and `encoding.Base64Encode` to generate Subresource Integrity (SRI) hashes for resources (e.g., `printf "%s-%s" $algo ("Hello world" | crypto.Hash $algo | encoding.HexDecode | encoding.Base64Encode)`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T18:57:13.878580+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/functions/crypto/hash/
