---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-07-03T20:10:08.350918+05:30'
collected_at: '2026-07-03T20:10:08.350933+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-03T20:10:08.350933+05:30'
last_seen: '2026-07-03T20:10:08.350933+05:30'
last_checked: '2026-07-03T20:10:08.350933+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Security Policy**: Hugo enforces a restrictive security policy by default, blocking `os/exec`, remote communication, and other sensitive operations unless explicitly allowed via allowlists (e.g., `exec.allow` permits `^(dart-)?sass(-embedded)?$`, `^go$`, `^git$`).

- **Content & Environment Controls**: `allowContent` restricts HTML content in `content/` (denied by default), while `exec.osEnv` and `funcs.getenv` whitelist OS environment variables (e.g., `^HUGO_`, `^CI$`) for security-sensitive functions.

- **Node.js & HTTP Permissions**: Node.js tools (e.g., `tailwindcss`) are sandboxed via `node.permissions` (read/write/child process restrictions), and `http.urls`/`methods` control remote resource access (e.g., blocking `localhost` or `evil.example.com`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-03T20:10:08.350918+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
