---
title: 'PostgreSQL: Documentation: 14: 21.5. Password Authentication'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://www.postgresql.org/docs/14/auth-password.html
published_at: '2026-06-22T11:31:17.280491+05:30'
collected_at: '2026-06-22T11:31:17.280504+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:postgresql-documentation-14-21-5-password-authenti
first_seen: '2026-06-22T11:31:17.280504+05:30'
last_seen: '2026-06-22T11:31:17.280504+05:30'
last_checked: '2026-06-22T11:31:17.280504+05:30'
health_score: 100
---

# PostgreSQL: Documentation: 14: 21.5. Password Authentication

## Summary

- **SCRAM-SHA-256** is the most secure PostgreSQL password authentication method (RFC 7677 compliant), using a challenge-response mechanism to prevent password sniffing and storing passwords as cryptographic hashes; requires modern client libraries.
- **MD5 authentication** is deprecated due to MD5's cryptographic weaknesses, storing only hashed passwords but vulnerable if hashes are stolen; auto-fallback to SCRAM-SHA-256 occurs if passwords are stored in SCRAM format.
- **Password encryption mode** (`password_encryption`) in `postgresql.conf` determines stored hash type (SCRAM-SHA-256 or MD5), requiring reconfiguration and password resets to migrate from MD5 to SCRAM-SHA-256.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T11:31:17.280491+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://www.postgresql.org/docs/14/auth-password.html
