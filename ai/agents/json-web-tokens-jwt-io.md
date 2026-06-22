---
title: JSON Web Tokens - jwt.io
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://jwt.io
published_at: '2026-06-23T01:21:46.721162+05:30'
collected_at: '2026-06-23T01:21:46.721171+05:30'
tags:
- agents
- hackernews
- reddit
- web-crawled
status: active
resource_id: blog:json-web-tokens-jwt-io
first_seen: '2026-06-23T01:21:46.721171+05:30'
last_seen: '2026-06-23T01:21:46.721171+05:30'
last_checked: '2026-06-23T01:21:46.721171+05:30'
health_score: 100
---

# JSON Web Tokens - jwt.io

## Summary

- **JWT Structure**: A JWT consists of three parts: **Header** (algorithm & token type, e.g., `{"alg": "HS256", "typ": "JWT"}`), **Payload** (claims like `sub`, `name`, `admin`, and `iat`), and **Signature** (generated using a secret key for verification).

- **Signature Verification**: The JWT signature is verified by decoding the header/payload, encoding them with the provided secret (e.g., `a-string-secret-at-least-256-bits-long`), and comparing the result to the original signature.

- **RFC 7519 Compliance**: JWTs adhere to [RFC 7519](https://tools.ietf.org/html/rfc7519), defining a compact, URL-safe token format for securely transmitting claims between parties via HMAC-SHA256 (`HS256`) or other algorithms.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-23T01:21:46.721162+05:30

## Related Tags

- agents
- hackernews
- reddit
- web-crawled

## Source

Original source: https://jwt.io
