---
title: crypto.Hash
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/functions/crypto/hash/
published_at: '2026-08-05T17:12:39.185418+05:30'
collected_at: '2026-08-05T17:12:39.185433+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:crypto-hash
first_seen: '2026-08-05T17:12:39.185433+05:30'
last_seen: '2026-08-05T17:12:39.185433+05:30'
last_checked: '2026-08-05T17:12:39.185433+05:30'
health_score: 100
---

# crypto.Hash

## Summary

- **Functionality**: The `crypto.Hash` function computes a cryptographic hash of the given input string using specified algorithms (`md5`, `sha1`, `sha256` (default), `sha384`, or `sha512`) and returns the checksum as a hexadecimal string.
- **Usage**: Supports both direct invocation (`crypto.Hash "sha256" "Hello world"`) and pipeline syntax (`"Hello world" | crypto.Hash`), with `sha256` as the default algorithm if unspecified.
- **Integration**: Can be combined with `encoding.HexDecode` and `encoding.Base64Encode` to generate Subresource Integrity (SRI) hashes for fingerprinted resources, e.g., `printf "%s-%s" $algo ("Hello world" | crypto.Hash $algo | encoding.HexDecode | encoding.Base64Encode)`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T17:12:39.185418+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/functions/crypto/hash/
