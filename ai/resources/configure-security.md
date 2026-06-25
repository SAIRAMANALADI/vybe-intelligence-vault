---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-06-25T23:00:30.937316+05:30'
collected_at: '2026-06-25T23:00:30.937330+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-06-25T23:00:30.937330+05:30'
last_seen: '2026-06-25T23:00:30.937330+05:30'
last_checked: '2026-06-25T23:00:30.937330+05:30'
health_score: 100
---

# Configure security

## Summary

- **Security Policy**: Hugo enforces a default-deny security policy via allowlists for `os/exec`, remote operations, and environment access, with granular regex-based controls for executables (`exec.allow`), OS env vars (`exec.osEnv`), and Node.js permissions (`node.permissions`).

- **Content & HTTP Restrictions**: `allowContent` denies non-HTML content by default; `http` restricts `resources.GetRemote` to allowed methods/URLs (e.g., blocking localhost/private IPs) and media types, with negation rules (`!`) for explicit denials.

- **Node.js Sandboxing**: Node.js tools (e.g., TailwindCSS) run with `--permission` flags, where `allowRead`/`allowWrite` restrict filesystem access, and `disable: true` bypasses the permission model entirely. Environment overrides (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can dynamically disable features.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-25T23:00:30.937316+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
