---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-06-26T22:44:16.526538+05:30'
collected_at: '2026-06-26T22:44:16.526545+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-06-26T22:44:16.526545+05:30'
last_seen: '2026-06-26T22:44:16.526545+05:30'
last_checked: '2026-06-26T22:44:16.526545+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a default-deny security model where `os/exec`, remote HTTP requests, and other sensitive operations are blocked unless explicitly allowed via regex-based allowlists in `security.exec`, `security.funcs.getenv`, `security.http`, and `security.node.permissions`.

- **Regex-Based Allowlists**: Security policies use regex patterns to whitelist permitted executables (`security.exec.allow`), environment variables (`security.exec.osEnv`, `security.funcs.getenv`), HTTP methods/URLs (`security.http.methods`, `security.http.urls`), and Node.js permissions (`security.node.permissions.*`), with negation rules (`!`) for explicit denials.

- **Environment Overrides**: Security settings can be dynamically overridden via environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none` to block all remote URLs), and Node.js tools are restricted by default unless explicitly permitted for addons, child processes, or file system access.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-26T22:44:16.526538+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
