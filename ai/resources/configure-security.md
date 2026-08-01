---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-08-01T16:26:22.946501+05:30'
collected_at: '2026-08-01T16:26:22.946514+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-08-01T16:26:22.946514+05:30'
last_seen: '2026-08-01T16:26:22.946514+05:30'
last_checked: '2026-08-01T16:26:22.946514+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a default-deny security model where `os/exec`, remote communication, and similar operations are restricted via allowlists; unauthorized operations fail with detailed error messages.

- **Configurable Allowlists**:
  - `exec.allow`: Regex patterns for permitted executables (e.g., `^(dart-)?sass(-embedded)?$`, `^go$`).
  - `http.urls`: Regex patterns for allowed remote URLs (e.g., `^(?i)^https?://[a-z0-9]` with negation rules like `! ^https?://\d+\.`).
  - `node.permissions`: Fine-grained controls for Node.js tools (e.g., `allowRead = ["."]`, `allowWrite = []`).

- **Negation & Overrides**:
  - Deny rules (prefixed with `!`) override allow rules; empty allowlists reject all.
  - Environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`) can override configurations dynamically.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-01T16:26:22.946501+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
