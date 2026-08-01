---
title: TLS / SSL
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://www.chromium.org/Home/chromium-security/education/tls#TOC-What-security-properties-does-TLS-give-me-
published_at: '2026-08-01T09:33:18.774932+05:30'
collected_at: '2026-08-01T09:33:18.774947+05:30'
tags:
- agents
- hackernews
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:tls-ssl
first_seen: '2026-08-01T09:33:18.774947+05:30'
last_seen: '2026-08-01T09:33:18.774947+05:30'
last_checked: '2026-08-01T09:33:18.774947+05:30'
health_score: 100
---

# TLS / SSL

## Summary

- **TLS Security Properties**: Provides server identification (via X.509 certificates), confidentiality (via encryption), and integrity (tamper-proofing) to secure client-server communications against MITM attacks.
- **Chrome TLS Enforcement**: Implements HSTS preloading, certificate pinning, SHA-1 deprecation (red/yellow lock warnings), and blocks weak cipher suites (e.g., RC4, SSLv3, DHE <1024-bit).
- **Certificate Management**: Uses CRLSets for revocation, enforces SHA-256 certificates, and treats HSTS/certificate-pinning errors as fatal to mitigate MITM risks.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-01T09:33:18.774932+05:30

## Related Tags

- agents
- hackernews
- reddit
- web-crawled
- youtube

## Source

Original source: https://www.chromium.org/Home/chromium-security/education/tls#TOC-What-security-properties-does-TLS-give-me-
