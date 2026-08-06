---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-08-06T09:15:13.287980+05:30'
collected_at: '2026-08-06T09:15:13.287996+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-08-06T09:15:13.287996+05:30'
last_seen: '2026-08-06T09:15:13.287996+05:30'
last_checked: '2026-08-06T09:15:13.287996+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Security Policy**: Hugo enforces a restrictive default security policy via allowlists, blocking `os/exec`, remote communication, and similar operations unless explicitly permitted; violations trigger detailed failure messages.

- **Key Security Configurations**:
  - `exec.allow`: Regex list of permitted external executables (e.g., `^(dart-)?sass(-embedded)?$`, `^go$`).
  - `http.urls`: Regex list of allowed remote URLs for `resources.GetRemote`, with negation rules (e.g., `! ^https?://evil\.example\.com`).
  - `node.permissions`: Fine-grained controls for Node.js tools (e.g., `allowRead: ["."]`, `allowWrite: []`).

- **Environment Overrides**: Security settings can be dynamically adjusted via environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none` to block all remote URL access).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-06T09:15:13.287980+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
