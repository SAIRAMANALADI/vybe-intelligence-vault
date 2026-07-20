---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-07-20T22:23:12.443131+05:30'
collected_at: '2026-07-20T22:23:12.443144+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-07-20T22:23:12.443144+05:30'
last_seen: '2026-07-20T22:23:12.443144+05:30'
last_checked: '2026-07-20T22:23:12.443144+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a default-deny security model where `os/exec`, remote communication, and similar operations are restricted unless explicitly allowed via allowlists; unauthorized operations fail with detailed error messages.

- **Granular Allowlists**: Security policies include regex-based allowlists for executable commands (`exec.allow`), environment variables (`exec.osEnv`, `funcs.getenv`), HTTP methods/URLs (`http.methods`, `http.urls`), and Node.js permissions (`node.permissions.*`), with negation rules (`!`) and `none` override support.

- **Node.js Sandboxing**: Node.js tools are sandboxed by default (`node.permissions.disable=false`) with restricted filesystem and resource access, configurable via `allowRead`, `allowWrite`, `allowAddons`, etc., relative to the working directory.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-20T22:23:12.443131+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
