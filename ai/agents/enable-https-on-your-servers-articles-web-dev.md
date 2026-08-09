---
title: Enable HTTPS on your servers | Articles | web.dev
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://web.dev/articles/enable-https
published_at: '2026-08-09T10:21:23.225156+05:30'
collected_at: '2026-08-09T10:21:23.225163+05:30'
tags:
- agents
- reddit
- web-crawled
status: active
resource_id: blog:enable-https-on-your-servers-articles-web-dev
first_seen: '2026-08-09T10:21:23.225163+05:30'
last_seen: '2026-08-09T10:21:23.225163+05:30'
last_checked: '2026-08-09T10:21:23.225163+05:30'
health_score: 100
---

# Enable HTTPS on your servers | Articles | web.dev

## Summary

- **Key Generation & CSR Creation**: Generate a 2048-bit RSA key pair using `openssl genrsa -out www.example.com.key 2048` and create a CSR with `openssl req -new -sha256 -key www.example.com.key -out www.example.com.csr`, embedding organizational metadata and public key.

- **Certificate Acquisition & Installation**: Submit the CSR to a Certificate Authority (CA) to obtain a signed certificate or chain, then install it in a non-web-accessible directory (e.g., `/etc/ssl` on Linux/Unix or IIS on Windows).

- **HTTPS Enforcement & Optimization**: Enable HTTPS via server configuration (e.g., Mozilla’s SSL Config Generator), enforce HSTS (`Strict-Transport-Security` header), set `Secure` flag on cookies, and use protocol-relative URLs to avoid mixed-content issues.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-09T10:21:23.225156+05:30

## Related Tags

- agents
- reddit
- web-crawled

## Source

Original source: https://web.dev/articles/enable-https
