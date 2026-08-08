---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-08-08T21:26:18.004112+05:30'
collected_at: '2026-08-08T21:26:18.004121+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-08-08T21:26:18.004121+05:30'
last_seen: '2026-08-08T21:26:18.004121+05:30'
last_checked: '2026-08-08T21:26:18.004121+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Security Policy**: Hugo enforces a restrictive security policy by default, blocking `os/exec`, remote communication, and similar operations unless explicitly allowed via allowlists; unauthorized operations fail with detailed error messages.

- **Configuration Structure**: Security settings are configured via `security` in `hugo.yaml`/`config.toml`/`config.json`, including `allowContent` (media types), `exec.allow` (permitted executables), `http.urls` (allowed remote URLs), and Node.js permissions (`node.permissions`).

- **Negation & Environment Overrides**: Allowlists support negation (`!`) for deny rules; empty allowlists reject all, while `none` disables features; security settings can be overridden via `HUGO_SECURITY_*` environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-08T21:26:18.004112+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
