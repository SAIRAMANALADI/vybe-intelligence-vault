---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-06-28T03:52:20.210233+05:30'
collected_at: '2026-06-28T03:52:20.210248+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-06-28T03:52:20.210248+05:30'
last_seen: '2026-06-28T03:52:20.210248+05:30'
last_checked: '2026-06-28T03:52:20.210248+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a restrictive security model by default, blocking `os/exec`, remote communication, and similar operations unless explicitly allowed via allowlists; unauthorized operations fail with detailed error messages.

- **Configurable Allowlists**:
  - `exec.allow`: Whitelists executables (e.g., `sass`, `go`, `git`, `node`).
  - `http.urls`: Restricts remote resource access via regex (e.g., blocks `localhost`, IP-based URLs).
  - `node.permissions`: Controls Node.js tool access (e.g., `allowRead`, `allowWrite`, `allowAddons`).

- **Negation & Overrides**:
  - Prefix rules with `!` to deny (e.g., `! ^text/html$` blocks HTML content).
  - Environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override configurations dynamically.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-28T03:52:20.210233+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
