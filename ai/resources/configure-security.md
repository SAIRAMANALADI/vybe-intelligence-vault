---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-07-21T14:23:11.138883+05:30'
collected_at: '2026-07-21T14:23:11.138898+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-21T14:23:11.138898+05:30'
last_seen: '2026-07-21T14:23:11.138898+05:30'
last_checked: '2026-07-21T14:23:11.138898+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Security Policy**: Hugo enforces a restrictive default security policy via allowlists, blocking `os/exec`, remote communication, and other high-risk operations unless explicitly permitted; builds fail with detailed errors if unallowed features are accessed.

- **Configuration Structure**: Security settings are defined under `security` in `hugo.yaml`/`config.toml`/`config.json`, including `allowContent` (media type restrictions), `exec.allow` (permitted binaries), `http` (URL/method restrictions), and `node.permissions` (Node.js tool sandboxing).

- **Negation & Overrides**: Allowlists support negation (`!`) for deny rules (precedence over allows), and environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override configurations dynamically.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-21T14:23:11.138883+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
