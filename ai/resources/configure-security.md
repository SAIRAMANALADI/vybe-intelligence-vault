---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-08-09T08:10:17.342310+05:30'
collected_at: '2026-08-09T08:10:17.342326+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-08-09T08:10:17.342326+05:30'
last_seen: '2026-08-09T08:10:17.342326+05:30'
last_checked: '2026-08-09T08:10:17.342326+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a default-deny security model via allowlists, restricting `os/exec`, remote communication, and OS environment access; unauthorized operations fail with detailed error messages.

- **Granular Security Controls**:
  - **Content**: Allows/denies content formats (e.g., `text/html` blocked by default).
  - **Exec**: Whitelists external commands (`sass`, `go`, `git`, etc.) and OS env vars (e.g., `PATH`, `HOME`).
  - **HTTP**: Restricts `resources.GetRemote` to specific methods (`GET|POST`), URLs, and media types.
  - **Node.js**: Configures permissions for addons, child processes, file I/O, and workers (e.g., `tailwindcss`).

- **Negation & Override Rules**:
  - Prefix patterns with `!` to deny (e.g., `! ^https?://evil\.example\.com`).
  - Environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override settings dynamically.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T08:10:17.342310+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
