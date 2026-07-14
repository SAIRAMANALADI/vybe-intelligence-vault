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

- **Default Deny Policy**: Hugo enforces a default-deny security model via allowlists for `os/exec`, remote HTTP access, and environment variables, blocking operations not explicitly permitted (e.g., `text/html` content is denied by default).

- **Node.js Permissions**: New in v0.161.0, the `node.permissions` config restricts Node.js tools (e.g., TailwindCSS) via `--permission` flags, controlling file I/O (`allowRead`/`allowWrite`), child processes (`allowChildProcess`), and native addons (`allo

## Use Cases

- AI chat bubbled views
- Tailwind bento dashboards
- Aesthetic layout templates

## Source

Original source URL: https://gohugo.io/configuration/security/

## Local Vault File

Path: [configure-security.md](../../ai/resources/configure-security.md)
