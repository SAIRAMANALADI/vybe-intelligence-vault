---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-07-04T16:37:16.928993+05:30'
collected_at: '2026-07-04T16:37:16.929007+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-04T16:37:16.929007+05:30'
last_seen: '2026-07-04T16:37:16.929007+05:30'
last_checked: '2026-07-04T16:37:16.929007+05:30'
health_score: 100
---

# Configure security

## Summary

- **Security Policy**: Hugo enforces a default-deny security policy via allowlists for `os/exec`, remote communication, and environment access, blocking operations not explicitly permitted (e.g., `os/exec` restricts executables like `git`, `node`, and `tailwindcss`).

- **Content & HTTP Restrictions**: `allowContent` denies non-HTML formats by default (e.g., `text/html` is blocked unless explicitly allowed), while `http.urls` and `http.methods` restrict remote resource access to specific patterns (e.g., disallowing `localhost` or `evil.example.com`).

- **Node.js Permissions**: Node.js tools (e.g., `tailwindcss`) run with granular filesystem and process restrictions via `--permission` flags, controlled by `node.permissions` (e.g., `allowRead`, `allowWrite`, `allowChildProcess`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-04T16:37:16.928993+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
