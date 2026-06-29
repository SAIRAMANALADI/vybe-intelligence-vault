---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-06-30T01:52:12.456744+05:30'
collected_at: '2026-06-30T01:52:12.456760+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-06-30T01:52:12.456760+05:30'
last_seen: '2026-06-30T01:52:12.456760+05:30'
last_checked: '2026-06-30T01:52:12.456760+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Security Policy**: Hugo enforces a restrictive security policy by default, blocking `os/exec`, remote communication, and other high-risk operations unless explicitly allowed via allowlists (e.g., `exec.allow` for permitted executables like `sass`, `git`, `node`).

- **Content & HTTP Restrictions**: Content formats (e.g., `text/html`) and HTTP operations (methods/URLs) are controlled via regex-based allowlists; negation rules (`!`) enable deny-listing (e.g., blocking `localhost` or `evil.example.com`), with `none` disabling features entirely.

- **Node.js Permissions**: Node.js tools (e.g., `tailwindcss`) are sandboxed via `--permission` flags, restricting file I/O (`allowRead`/`allowWrite`), child processes (`allowChildProcess`), and addons (`allowAddons`), with granular path-based controls.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-30T01:52:12.456744+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
