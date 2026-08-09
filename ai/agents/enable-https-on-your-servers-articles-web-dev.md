---
title: Enable HTTPS on your servers | Articles | web.dev
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://web.dev/articles/enable-https
published_at: '2026-08-09T08:12:51.293376+05:30'
collected_at: '2026-08-09T08:12:51.293391+05:30'
tags:
- agents
- reddit
- web-crawled
status: active
resource_id: blog:enable-https-on-your-servers-articles-web-dev
first_seen: '2026-08-09T08:12:51.293391+05:30'
last_seen: '2026-08-09T08:12:51.293391+05:30'
last_checked: '2026-08-09T08:12:51.293391+05:30'
health_score: 100
---

# Enable HTTPS on your servers | Articles | web.dev

## Summary

- **Key Generation & CSR Creation**: Generate a 2048-bit RSA key pair using `openssl genrsa -out www.example.com.key 2048`, then create a CSR with `openssl req -new -sha256 -key www.example.com.key -out www.example.com.csr`, embedding organizational metadata and public key for CA submission.

- **Certificate Installation & HTTPS Enablement**: Install the CA-issued certificate in a non-web-accessible directory (e.g., `/etc/ssl`), configure the web server (e.g., Apache/Nginx) to use it, and enable HTTPS without HTTP-to-HTTPS redirection initially, validating with Qualys' SSL Server Test (target: A/A+ rating).

- **Security Hardening & Migration**: Enable HSTS via `Strict-Transport-Security` header (start with low `max-age`), set `Secure` flag on cookies, and ensure protocol-relative or HTTPS URLs for intrasite resources to prevent mixed content; later enforce HTTP→HTTPS redirection with 301 status.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-09T08:12:51.293376+05:30

## Related Tags

- agents
- reddit
- web-crawled

## Source

Original source: https://web.dev/articles/enable-https
