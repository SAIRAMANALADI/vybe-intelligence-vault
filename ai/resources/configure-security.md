---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-07-14T13:04:07.092020+05:30'
collected_at: '2026-07-14T13:04:07.092037+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-14T13:04:07.092037+05:30'
last_seen: '2026-07-14T13:04:07.092037+05:30'
last_checked: '2026-07-14T13:04:07.092037+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a default-deny security model via allowlists for `os/exec`, remote HTTP access, and environment variables, blocking operations not explicitly permitted (e.g., `text/html` content is denied by default).

- **Node.js Permissions**: New in v0.161.0, the `node.permissions` config restricts Node.js tools (e.g., TailwindCSS) via `--permission` flags, controlling file I/O (`allowRead`/`allowWrite`), child processes (`allowChildProcess`), and native addons (`allowAddons`).

- **Negation & Environment Overrides**: Allowlists support negation (`!`) for deny rules (e.g., block `evil.example.com` while allowing others), and security settings can be overridden via `HUGO_SECURITY_*` environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-14T13:04:07.092020+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
