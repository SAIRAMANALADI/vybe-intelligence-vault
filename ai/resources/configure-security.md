---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-07-08T01:52:29.911401+05:30'
collected_at: '2026-07-08T01:52:29.911416+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-08T01:52:29.911416+05:30'
last_seen: '2026-07-08T01:52:29.911416+05:30'
last_checked: '2026-07-08T01:52:29.911416+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Security Policy**: Hugo enforces a restrictive default security policy via allowlists, blocking `os/exec`, remote communication, and similar operations unless explicitly permitted; violations trigger detailed error messages.

- **Key Security Configurations**:
  - **`exec.allow`**: Whitelists external executables (e.g., `^(dart-)?sass(-embedded)?$`, `^go$`, `^git$`).
  - **`http.urls`**: Restricts `resources.GetRemote` to specific URL patterns (e.g., `^(?i)^https?://[a-z0-9]`, excluding `localhost` and IP-based URLs).
  - **`node.permissions`**: Controls Node.js tool access (e.g., `allowRead: ["."]`, `allowWrite: []`).

- **Negation & Environment Overrides**:
  - Prefix patterns with `!` to deny (e.g., `! ^text/html$` blocks HTML content).
  - Environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override configurations dynamically.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-08T01:52:29.911401+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
