---
title: HTTP authentication - HTTP | MDN
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
published_at: '2026-06-23T01:22:29.550747+05:30'
collected_at: '2026-06-23T01:22:29.550760+05:30'
tags:
- agents
- hackernews
- web-crawled
status: active
resource_id: blog:http-authentication-http-mdn
first_seen: '2026-06-23T01:22:29.550760+05:30'
last_seen: '2026-06-23T01:22:29.550760+05:30'
last_checked: '2026-06-23T01:22:29.550760+05:30'
health_score: 100
---

# HTTP authentication - HTTP | MDN

## Summary

- **HTTP Authentication Framework (RFC 7235)**: Defines challenge-response mechanism where servers respond with `401 Unauthorized` and `WWW-Authenticate` headers, while clients provide credentials via `Authorization` headers; proxy authentication uses `407`, `Proxy-Authenticate`, and `Proxy-Authorization` headers.

- **Basic Authentication Scheme (RFC 7617)**: Transmits credentials as base64-encoded `user:password` pairs; inherently insecure without TLS, vulnerable to CSRF, and requires HTTPS to prevent credential interception.

- **Server Configuration (Apache/Nginx)**: Apache uses `.htaccess` with `AuthType Basic`, `AuthUserFile`, and `Require valid-user`; Nginx uses `auth_basic` and `auth_basic_user_file` directives to restrict access via `.htpasswd` hashed credentials.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-23T01:22:29.550747+05:30

## Related Tags

- agents
- hackernews
- web-crawled

## Source

Original source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
