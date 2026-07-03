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

- **Default Security Policy**: Hugo enforces a restrictive security policy by default, blocking `os/exec`, remote communication, and other sensitive operations unless explicitly allowed via allowlists (e.g., `exec.allow` permits `^(dart-)?sass(-embedded)?$`, `^go$`, `^git$`).

- **Content & Environment Controls**: `allowContent` restricts HTML content in `content/` (denied by default), while `exec.osEnv` and `funcs.getenv` whitelist OS environment variables (e.g., `^HUGO_`, `^CI$`) for security-

## Use Cases

- AI chat bubbled views
- Tailwind bento dashboards
- Aesthetic layout templates

## Source

Original source URL: https://gohugo.io/configuration/security/

## Local Vault File

Path: [configure-security.md](../../ai/resources/configure-security.md)
