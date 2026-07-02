---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-07-02T10:00:46.407263+05:30'
collected_at: '2026-07-02T10:00:46.407280+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-02T10:00:46.407280+05:30'
last_seen: '2026-07-02T10:00:46.407280+05:30'
last_checked: '2026-07-02T10:00:46.407280+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a restrictive security model by default, blocking `os/exec`, remote communication, and other sensitive operations unless explicitly allowed via allowlists (regex-based).

- **Configurable Allowlists**:
  - `exec.allow`: Permits specific binaries (e.g., `sass`, `go`, `git`).
  - `http.urls`: Restricts remote resource fetching to whitelisted domains (negation rules supported).
  - `node.permissions`: Controls Node.js tool access (e.g., `tailwindcss` file I/O, child processes).

- **Environment Overrides**: Security settings can be dynamically adjusted via env vars (e.g., `HUGO_SECURITY_HTTP_URLS=none` to block all remote requests).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-02T10:00:46.407263+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
