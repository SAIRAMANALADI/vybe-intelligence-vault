---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-07-18T01:12:21.288804+05:30'
collected_at: '2026-07-18T01:12:21.288818+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-18T01:12:21.288818+05:30'
last_seen: '2026-07-18T01:12:21.288818+05:30'
last_checked: '2026-07-18T01:12:21.288818+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Security Policy**: Hugo enforces a restrictive default security policy via allowlists, blocking `os/exec`, remote communication, and other sensitive operations unless explicitly permitted; violations trigger detailed failure messages.

- **Configurable Security Parameters**:
  - `exec.allow`: Regex list of permitted external executables (e.g., `^(dart-)?sass(-embedded)?$`, `^go$`).
  - `http.urls`: Regex list controlling allowed remote URLs (e.g., `^(?i)^https?://[a-z0-9]` with negation rules for `localhost`/`IP` prefixes).
  - `node.permissions`: Fine-grained controls for Node.js tools (e.g., `allowRead: ["."]`, `allowWrite: []`).

- **Negation & Override Rules**:
  - Prefix patterns with `! ` to deny (e.g., `! ^https?://evil\.example\.com`).
  - Environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override settings.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-18T01:12:21.288804+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
