---
title: crypto.Hash
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/functions/crypto/hash/
published_at: '2026-07-07T15:40:22.050317+05:30'
collected_at: '2026-07-07T15:40:22.050328+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:crypto-hash
first_seen: '2026-07-07T15:40:22.050328+05:30'
last_seen: '2026-07-07T15:40:22.050328+05:30'
last_checked: '2026-07-07T15:40:22.050328+05:30'
health_score: 100
---

# crypto.Hash

## Summary

- `crypto.Hash` computes checksums using supported algorithms (`md5`, `sha1`, `sha256` (default), `sha384`, or `sha512`) on input strings, returning hex-encoded results.
- Defaults to `sha256` if no algorithm is specified; supports chaining with `encoding.HexDecode` and `encoding.Base64Encode` for SRI hash construction.
- Example: `{{ crypto.Hash "sha256" "Hello world" }}` → `64ec88ca00b268e5ba1a35678a1b5316d212f4f366b2477232534a8aeca37f3c`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-07T15:40:22.050317+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/functions/crypto/hash/
