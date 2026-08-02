---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-08-02T16:29:08.408594+05:30'
collected_at: '2026-08-02T16:29:08.408602+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-08-02T16:29:08.408602+05:30'
last_seen: '2026-08-02T16:29:08.408602+05:30'
last_checked: '2026-08-02T16:29:08.408602+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a default-deny security model via allowlists for `os/exec`, remote operations, and environment access, with detailed failure messages for disallowed actions.

- **Granular Security Configuration**: Supports regex-based allowlists for executable names (`exec.allow`), OS environment variables (`exec.osEnv`), HTTP methods/URLs (`http.methods`, `http.urls`), Node.js permissions (`node.permissions`), and content types (`allowContent`), with negation rules (`!`) for explicit denials.

- **Environment Overrides**: Security settings can be dynamically overridden via environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`), and Node.js tools are restricted by default using `--permission` flags unless explicitly allowed.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-02T16:29:08.408594+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
