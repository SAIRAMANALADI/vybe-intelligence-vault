---
title: 'RFC 7235 - Hypertext Transfer Protocol (HTTP/1.1): Authentication'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://datatracker.ietf.org/doc/html/rfc7235
published_at: '2026-06-23T01:23:16.469013+05:30'
collected_at: '2026-06-23T01:23:16.469023+05:30'
tags:
- agents
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:rfc-7235-hypertext-transfer-protocol-http-1-1-auth
first_seen: '2026-06-23T01:23:16.469023+05:30'
last_seen: '2026-06-23T01:23:16.469023+05:30'
last_checked: '2026-06-23T01:23:16.469023+05:30'
health_score: 100
---

# RFC 7235 - Hypertext Transfer Protocol (HTTP/1.1): Authentication

## Summary

- **HTTP Authentication Framework**: Defines a stateless challenge-response mechanism for HTTP/1.1 authentication, extending prior schemes (Basic/Digest) via extensible authentication schemes, using `401 Unauthorized` and `407 Proxy Authentication Required` status codes with `WWW-Authenticate`/`Proxy-Authenticate` headers.

- **Header Field Syntax**: Authentication schemes (`auth-scheme`) use `token68` (base64/base64url/base32/base16 encoded) or `auth-param` (name=value pairs) in challenges/credentials, with strict case-insensitive matching and single-occurrence constraints per challenge.

- **Security & Registry**: Mandates confidentiality of credentials (Section 6.1), client selection of most secure understood scheme, and IANA-managed authentication scheme registry (Section 5.1) for standardized scheme registration and management.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T01:23:16.469013+05:30

## Related Tags

- agents
- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://datatracker.ietf.org/doc/html/rfc7235
