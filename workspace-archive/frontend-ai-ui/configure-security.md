---
title: Configure security
archive_category: frontend-ai-ui
source_category: ai/resources
source_url: https://gohugo.io/configuration/security/
resource_id: blog:configure-security
local_vault_path: ai/resources/configure-security.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- frontend_ui
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Configure security

## Why This Is In The Archive

- Matched archive category: `Frontend AI UI`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Default Deny Policy**: Hugo enforces a restrictive default security policy via allowlists, blocking `os/exec`, remote communication, and other high-risk operations unless explicitly permitted; violations trigger detailed failure messages.

- **Configurable Security Parameters**:
  - `allowContent`: Regex-based allowlist for content media types (e.g., `text/html` denied by default).
  - `exec.allow`: Whitelists external executables (e.g., `^(dart-)?sass(-embedded)?$`, `^go$`).
  - `http.urls`

## Use Cases

- AI chat bubbled views
- Tailwind bento dashboards
- Aesthetic layout templates

## Source

Original source URL: https://gohugo.io/configuration/security/

## Local Vault File

Path: [configure-security.md](../../ai/resources/configure-security.md)
