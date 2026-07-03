---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-07-04T01:26:22.460125+05:30'
collected_at: '2026-07-04T01:26:22.460134+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-04T01:26:22.460134+05:30'
last_seen: '2026-07-04T01:26:22.460134+05:30'
last_checked: '2026-07-04T01:26:22.460134+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a restrictive default security policy via allowlists, blocking `os/exec`, remote communication, and other sensitive operations unless explicitly permitted; violations trigger detailed error messages.

- **Configurable Security Parameters**:
  - **Content/Execution**: `allowContent` (denies HTML by default), `exec.allow` (whitelists binaries like `sass`, `git`, `node`), `exec.osEnv` (restricts OS env vars).
  - **HTTP/Node.js**: `http.urls` (whitelists/blacklists URLs), `node.permissions` (controls Node.js tool access to FS/addons/workers).

- **Negation & Override Rules**:
  - Patterns prefixed with `!` act as deny rules (e.g., `! ^text/html$` blocks HTML content).
  - Environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override settings dynamically.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-04T01:26:22.460125+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
