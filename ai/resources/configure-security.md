---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/#httpurls
published_at: '2026-08-03T20:55:01.609381+05:30'
collected_at: '2026-08-03T20:55:01.609394+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-08-03T20:55:01.609394+05:30'
last_seen: '2026-08-03T20:55:01.609394+05:30'
last_checked: '2026-08-03T20:55:01.609394+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Security Policy**: Hugo enforces a restrictive default security policy via allowlists, blocking `os/exec`, remote communication, and other high-risk operations unless explicitly permitted.

- **Key Security Configurations**:
  - `exec.allow`: Whitelists external executables (e.g., `git`, `node`, `tailwindcss`).
  - `http.urls`: Restricts remote resource fetching to trusted domains (e.g., disallows `localhost` and IP-based URLs).
  - `node.permissions`: Controls Node.js tool access (e.g., `allowRead`, `allowWrite`) when `--permission` flag is enabled.

- **Negation & Overrides**:
  - Prefix rules with `!` to deny specific patterns (e.g., `! ^https?://evil\.example\.com`).
  - Environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override configurations dynamically.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-03T20:55:01.609381+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/#httpurls
