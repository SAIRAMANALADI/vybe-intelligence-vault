---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-06-27T01:45:15.422611+05:30'
collected_at: '2026-06-27T01:45:15.422625+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-06-27T01:45:15.422625+05:30'
last_seen: '2026-06-27T01:45:15.422625+05:30'
last_checked: '2026-06-27T01:45:15.422625+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a restrictive default security policy via allowlists, blocking `os/exec`, remote communication, and other high-risk operations unless explicitly permitted (e.g., `sass`, `git`, `node`).

- **Granular Allowlists**: Security policies are configurable via regex-based allowlists for:
  - **Exec**: Restricts external commands (e.g., `^(dart-)?sass(-embedded)?$`).
  - **HTTP**: Limits `resources.GetRemote` to specific methods/URLs (e.g., `GET|POST`, excluding `localhost`).
  - **Node.js Permissions**: Controls file system access (`allowRead`, `allowWrite`) and tool execution (`allowChildProcess`).

- **Negation & Overrides**: Deny rules (prefixed with `!`) take precedence; environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override configurations dynamically.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-27T01:45:15.422611+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
