---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-07-17T14:08:20.432733+05:30'
collected_at: '2026-07-17T14:08:20.432746+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-17T14:08:20.432746+05:30'
last_seen: '2026-07-17T14:08:20.432746+05:30'
last_checked: '2026-07-17T14:08:20.432746+05:30'
health_score: 100
---

# Configure security

## Summary

- **Security Policy**: Hugo enforces a default-deny security policy via allowlists, restricting operations like `os/exec`, remote communication, and Node.js permissions unless explicitly permitted in the configuration.

- **Key Configuration Fields**:
  - `allowContent`: Regex list of allowed content media types (default denies `text/html`).
  - `exec.allow`: Regex list of permitted external executables (e.g., `^(dart-)?sass(-embedded)?$`, `go`, `git`).
  - `http.urls`: Regex list of allowed remote URLs for `resources.GetRemote` (e.g., `^(?i)^https?://[a-z0-9]`).

- **Negation & Overrides**:
  - Deny rules (prefixed with `!`) take precedence over allow rules (e.g., `! ^https?://evil\.example\.com`).
  - Environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override settings dynamically.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-17T14:08:20.432733+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
