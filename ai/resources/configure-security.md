---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-07-20T15:12:09.768448+05:30'
collected_at: '2026-07-20T15:12:09.768460+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-20T15:12:09.768460+05:30'
last_seen: '2026-07-20T15:12:09.768460+05:30'
last_checked: '2026-07-20T15:12:09.768460+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a restrictive default security policy via allowlists, blocking `os/exec`, remote communication, and similar operations unless explicitly permitted; unauthorized attempts trigger detailed failure messages.

- **Security Configuration Structure**: Configurable via `security` block in YAML/TOML/JSON, with key controls including `allowContent` (media type restrictions), `exec.allow` (permitted binaries), `http.urls` (remote URL access), and `node.permissions` (Node.js sandboxing for tools like TailwindCSS).

- **Negation Rules & Environment Overrides**: Allowlists support negation (`!`) for deny rules (e.g., `! ^text/html$`), and security settings can be overridden via environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-20T15:12:09.768448+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
