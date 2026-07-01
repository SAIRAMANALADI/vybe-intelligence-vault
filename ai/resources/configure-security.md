---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/#httpurls
published_at: '2026-07-01T15:50:34.506059+05:30'
collected_at: '2026-07-01T15:50:34.506080+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-01T15:50:34.506080+05:30'
last_seen: '2026-07-01T15:50:34.506080+05:30'
last_checked: '2026-07-01T15:50:34.506080+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a restrictive default security policy (`security.exec`, `security.http`, etc.) via allowlists, blocking `os/exec`, remote operations, and inline shortcodes unless explicitly permitted by regex patterns.

- **Node.js Permissions Model**: Introduced in v0.161.0, the `node.permissions` block controls Node.js tool access (`allowRead`, `allowWrite`, `allowChildProcess`) using `--permission` flags, with granular path and addon restrictions.

- **Negation & Environment Overrides**: Security rules support negation (`!`) for deny-listing, and environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override config settings dynamically.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-01T15:50:34.506059+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/#httpurls
