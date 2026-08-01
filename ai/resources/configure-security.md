---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-08-01T19:32:06.873641+05:30'
collected_at: '2026-08-01T19:32:06.873649+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-08-01T19:32:06.873649+05:30'
last_seen: '2026-08-01T19:32:06.873649+05:30'
last_checked: '2026-08-01T19:32:06.873649+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Security Policy**: Hugo enforces a restrictive security policy by default, blocking `os/exec`, remote communication, and other sensitive operations unless explicitly allowed via allowlists, with detailed failure messages for unauthorized attempts.

- **Configurable Allowlists**: Security settings are defined via regex-based allowlists for content types (`allowContent`), executables (`exec.allow`), OS env vars (`exec.osEnv`/`funcs.getenv`), HTTP methods/URLs (`http.methods`/`urls`), and Node.js permissions (`node.permissions`), with negation rules (`!`) for explicit denials.

- **Environment Overrides**: Security policies can be dynamically adjusted via environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) or disabled entirely for specific features (e.g., `none` in allowlists), with Node.js tools restricted by `--permission` flags when enabled.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T19:32:06.873641+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
