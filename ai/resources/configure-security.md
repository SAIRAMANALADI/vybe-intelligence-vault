---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-08-09T12:57:20.354336+05:30'
collected_at: '2026-08-09T12:57:20.354350+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-08-09T12:57:20.354350+05:30'
last_seen: '2026-08-09T12:57:20.354350+05:30'
last_checked: '2026-08-09T12:57:20.354350+05:30'
health_score: 100
---

# Configure security

## Summary

- **Security Policy**: Hugo enforces a default-deny security policy via allowlists, restricting operations like `os/exec`, remote communication, and inline shortcodes (`enableInlineShortcodes: false`). Builds fail if unlisted features are used, with detailed error messages.

- **Executable & Environment Control**: The `exec.allow` list permits specific binaries (e.g., `sass`, `go`, `git`), while `exec.osEnv` and `funcs.getenv` restrict environment variable access (e.g., `HUGO_`, `CI`). Remote HTTP access is limited to allowed methods/URLs via regex patterns.

- **Node.js Permissions & Negation Rules**: Node.js tools (e.g., `tailwindcss`) require explicit permissions (`allowRead`, `allowWrite`, etc.). Negation rules (prefixed with `!`) override allowlists, and environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override configurations dynamically.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T12:57:20.354336+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
