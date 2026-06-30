---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-06-30T22:53:11.398880+05:30'
collected_at: '2026-06-30T22:53:11.398897+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-06-30T22:53:11.398897+05:30'
last_seen: '2026-06-30T22:53:11.398897+05:30'
last_checked: '2026-06-30T22:53:11.398897+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a restrictive security model by default, blocking `os/exec`, remote communication, and other sensitive operations unless explicitly allowed via allowlists (regex-based).

- **Configurable Allowlists**:
  - `exec.allow`: Whitelists external executables (e.g., `^(dart-)?sass(-embedded)?$`, `^go$`).
  - `http.urls`: Restricts remote resource access (e.g., `^(?i)^https?://[a-z0-9]`).
  - `node.permissions`: Controls Node.js tool access (e.g., `allowRead = ["."]`, `allowWrite = []`).

- **Negation & Overrides**:
  - Prefix rules with `!` to deny (e.g., `! ^https?://evil\.example\.com`).
  - Environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override config.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-30T22:53:11.398880+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
