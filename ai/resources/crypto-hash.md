---
title: crypto.Hash
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/functions/crypto/hash/
published_at: '2026-08-02T14:16:32.182780+05:30'
collected_at: '2026-08-02T14:16:32.182788+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:crypto-hash
first_seen: '2026-08-02T14:16:32.182788+05:30'
last_seen: '2026-08-02T14:16:32.182788+05:30'
last_checked: '2026-08-02T14:16:32.182788+05:30'
health_score: 100
---

# crypto.Hash

## Summary

- **Hashing Functionality**: The `crypto.Hash` function in Hugo supports multiple cryptographic hash algorithms (`md5`, `sha1`, `sha256`, `sha384`, `sha512`), defaulting to `sha256` if unspecified, and outputs the checksum as a hexadecimal string.

- **SRI Hash Construction**: Combines `crypto.Hash` with `encoding.HexDecode` and `encoding.Base64Encode` to generate Subresource Integrity (SRI) hashes for resources, e.g., `{{ $algo := "sha256" }}{{ $integrity := printf "%s-%s" $algo ("Hello world" | crypto.Hash $algo | encoding.HexDecode | encoding.Base64Encode) }}`.

- **Syntax & Usage**: Accepts input via direct argument or pipeline (`{{ crypto.Hash "sha256" "Hello world" }}` or `{{ "Hello world" | crypto.Hash "sha512" }}`), producing deterministic checksums for data integrity verification.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-02T14:16:32.182780+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/functions/crypto/hash/
