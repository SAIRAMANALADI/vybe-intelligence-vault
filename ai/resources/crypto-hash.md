---
title: crypto.Hash
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/functions/crypto/hash/
published_at: '2026-08-06T04:01:46.501037+05:30'
collected_at: '2026-08-06T04:01:46.501054+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:crypto-hash
first_seen: '2026-08-06T04:01:46.501054+05:30'
last_seen: '2026-08-06T04:01:46.501054+05:30'
last_checked: '2026-08-06T04:01:46.501054+05:30'
health_score: 100
---

# crypto.Hash

## Summary

- **Hashing Function**: The `crypto.Hash` function in Hugo supports multiple cryptographic hash algorithms (`md5`, `sha1`, `sha256` (default), `sha384`, `sha512`) to generate checksums of input strings, encoded as hexadecimal strings.
- **Default Behavior**: If no algorithm is specified, `sha256` is used by default for hashing operations.
- **SRI Hash Construction**: The function can be combined with `encoding.HexDecode` and `encoding.Base64Encode` to generate Subresource Integrity (SRI) hashes for resources, e.g., `{{ printf "%s-%s" $algo ($input | crypto.Hash $algo | encoding.HexDecode | encoding.Base64Encode) }}`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-06T04:01:46.501037+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://gohugo.io/functions/crypto/hash/
