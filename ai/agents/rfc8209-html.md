---
title: rfc8209.html
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://www.rfc-editor.org/rfc/rfc8209.html
published_at: '2026-06-22T11:34:12.825834+05:30'
collected_at: '2026-06-22T11:34:12.825843+05:30'
tags:
- agents
- hackernews
- web-crawled
status: active
resource_id: blog:rfc8209-html
first_seen: '2026-06-22T11:34:12.825843+05:30'
last_seen: '2026-06-22T11:34:12.825843+05:30'
last_checked: '2026-06-22T11:34:12.825843+05:30'
health_score: 100
---

# rfc8209.html

## Summary

- **Certificate Profile**: Defines X.509 BGPsec Router Certificates as EE certificates under RPKI CA, requiring AS Resource extensions and an `id-kp-bgpsec-router` EKU OID (`1.3.6.1.5.5.7.3.30`), with `anyExtendedKeyUsage` explicitly rejected.

- **Subject & Key Constraints**: Subject name must include `"ROUTER-" + 32-bit ASN (hex)` in commonName and router ID (BGP Identifier) in serialNumber; public key must comply with [RFC8208]; Basic Constraints extension must be absent.

- **Validation & Requests**: Specifies RP certificate path validation for BGPsec Router Certificates and profiles certification requests, mandating that CAs ignore `cA=TRUE` in Basic Constraints if present.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-22T11:34:12.825834+05:30

## Related Tags

- agents
- hackernews
- web-crawled

## Source

Original source: https://www.rfc-editor.org/rfc/rfc8209.html
