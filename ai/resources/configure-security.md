---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-07-02T22:41:29.103856+05:30'
collected_at: '2026-07-02T22:41:29.103870+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-02T22:41:29.103870+05:30'
last_seen: '2026-07-02T22:41:29.103870+05:30'
last_checked: '2026-07-02T22:41:29.103870+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Security Policy**: Hugo enforces a restrictive security policy by default, blocking `os/exec`, remote communication, and other sensitive operations unless explicitly allowed via allowlists; violations trigger detailed failure messages.

- **Configurable Allowlists**: Security policies are defined via regex-based allowlists for content types (`allowContent`), executables (`exec.allow`), OS env vars (`exec.osEnv`/`funcs.getenv`), HTTP methods/URLs (`http.methods`/`urls`), and Node.js permissions (`node.permissions`), with negation rules (`!`) and environment variable overrides (e.g., `HUGO_SECURITY_HTTP_URLS=none`).

- **Node.js Sandboxing**: Node.js tools (e.g., TailwindCSS) are sandboxed by default (`node.permissions.disable=false`) with granular controls for addons, child processes, file I/O (`allowRead`/`allowWrite`), and workers, restricting access to explicitly permitted paths/resources.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-02T22:41:29.103856+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
