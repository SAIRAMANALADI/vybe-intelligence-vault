---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-09-02T18:29:54.195159+05:30'
collected_at: '2026-09-02T18:29:54.195170+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-09-02T18:29:54.195170+05:30'
last_seen: '2026-09-02T18:29:54.195170+05:30'
last_checked: '2026-09-02T18:29:54.195170+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Security Policy**: Hugo enforces a restrictive security policy by default, blocking `os/exec`, remote communication, and other sensitive operations via allowlists; unauthorized access attempts trigger detailed failure messages.

- **Key Configuration Fields**:
  - `exec.allow`: Regex list of permitted external executables (e.g., `^(dart-)?sass$`, `^go$`).
  - `http.urls`: Regex list of allowed remote URLs for `resources.GetRemote`, with negation rules (e.g., `! ^https?://evil\.example\.com`).

- **Node.js Permissions** (v0.161.0+): Controls Node.js tool access via `--permission` flags, including `allowRead`/`.allowWrite` paths (e.g., `"."` for working directory) and `allowAddons`/`.allowWorker` tool names (e.g., `tailwindcss`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-09-02T18:29:54.195159+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
