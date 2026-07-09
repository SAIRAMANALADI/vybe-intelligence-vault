---
title: crypto.Hash
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/functions/crypto/hash/
published_at: '2026-07-10T04:22:13.790174+05:30'
collected_at: '2026-07-10T04:22:13.790188+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:crypto-hash
first_seen: '2026-07-10T04:22:13.790188+05:30'
last_seen: '2026-07-10T04:22:13.790188+05:30'
last_checked: '2026-07-10T04:22:13.790188+05:30'
health_score: 100
---

# crypto.Hash

## Summary

- **Functionality**: The `crypto.Hash` function computes a cryptographic hash of the given input string using specified algorithms (`md5`, `sha1`, `sha256` (default), `sha384`, or `sha512`) and returns the checksum as a hexadecimal string.

- **Syntax**: Supports two forms: `crypto.Hash [ALGORITHM] INPUT` or as a pipe: `INPUT | crypto.Hash [ALGORITHM]`. Defaults to `sha256` if no algorithm is specified.

- **Use Case**: Enables Subresource Integrity (SRI) hash generation when combined with `encoding.HexDecode` and `encoding.Base64Encode`, e.g., `printf "%s-%s" $algo ("Hello world" | crypto.Hash $algo | encoding.HexDecode | encoding.Base64Encode)`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-10T04:22:13.790174+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/functions/crypto/hash/
