---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-08-10T10:38:28.819649+05:30'
collected_at: '2026-08-10T10:38:28.819662+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-08-10T10:38:28.819662+05:30'
last_seen: '2026-08-10T10:38:28.819662+05:30'
last_checked: '2026-08-10T10:38:28.819662+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a restrictive default security policy via allowlists, blocking `os/exec`, remote communication, and similar operations unless explicitly permitted; unauthorized operations fail with detailed error messages.

- **Configurable Security Parameters**:
  - `allowContent`: Regex-based allowlist for content media types (e.g., `! ^text/html$` denies HTML by default).
  - `exec.allow`: Restricts external executables (e.g., `^(dart-)?sass(-embedded)?$`).
  - `http.urls`: Limits remote resource access (e.g., `! ^https?://\d+\.` blocks IP-based URLs).
  - `node.permissions`: Granular Node.js tool access control (e.g., `allowRead = ["."]` restricts file reads to the working directory).

- **Negation & Override Rules**:
  - Prefix patterns with `!` to create deny rules (e.g., `['.*', '! ^https?://evil\.example\.com']`).
  - Environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override configurations dynamically.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T10:38:28.819649+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
