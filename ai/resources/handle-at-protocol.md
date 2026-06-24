---
title: Handle - AT Protocol
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://atproto.com/specs/handle#handle-resolution
published_at: '2026-06-24T20:58:53.888640+05:30'
collected_at: '2026-06-24T20:58:53.888652+05:30'
tags:
- hackernews
- web-crawled
status: active
resource_id: blog:handle-at-protocol
first_seen: '2026-06-24T20:58:53.888652+05:30'
last_seen: '2026-06-24T20:58:53.888652+05:30'
last_checked: '2026-06-24T20:58:53.888652+05:30'
health_score: 100
---

# Handle - AT Protocol

## Summary

- **Handle Syntax & Constraints**: Handles are ASCII-only, case-insensitive, max 253 chars, split into 2+ labels (1-63 chars each) separated by `.`, with no leading/trailing hyphens or periods. Top-level domain (TLD) cannot start with a digit. Regex: `/^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$/`.

- **Resolution Mechanisms**: Handles must bi-directionally link to a DID via DNS TXT (`_atproto.<handle>` with `did=<DID>`) or HTTPS (`/.well-known/atproto-did` returning raw DID). DNSSEC not required; HTTPS must use TLS. Conflicting resolutions default to DNS TXT.

- **Restrictions & Best Practices**: Disallowed TLDs include `.local`, `.onion`, `.arpa`, etc. Handles should normalize to lowercase, avoid impersonation risks, and cache resolution results. PDS may block repo mutation if handle becomes invalid (`handle.invalid`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T20:58:53.888640+05:30

## Related Tags

- hackernews
- web-crawled

## Source

Original source: https://atproto.com/specs/handle#handle-resolution
