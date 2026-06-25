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

- **Security Policy**: Hugo enforces a default-deny security policy via allowlists for `os/exec`, remote operations, and environment access, with granular regex-based controls for executables (`exec.allow`), OS env vars (`exec.osEnv`), and Node.js permissions (`node.permissions`).

- **Content & HTTP Restrictions**: `allowContent` denies non-HTML content by default; `http` restricts `resources.GetRemote` to allowed methods/URLs (e.g., blocking localhost/private IPs) and media types, with negatio

## Use Cases

- AI chat bubbled views
- Tailwind bento dashboards
- Aesthetic layout templates

## Source

Original source URL: https://gohugo.io/configuration/security/

## Local Vault File

Path: [configure-security.md](../../ai/resources/configure-security.md)
