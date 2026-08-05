---
title: Configure security
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://gohugo.io/configuration/security/
published_at: '2026-08-06T01:34:50.180574+05:30'
collected_at: '2026-08-06T01:34:50.180587+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: blog:configure-security
first_seen: '2026-08-06T01:34:50.180587+05:30'
last_seen: '2026-08-06T01:34:50.180587+05:30'
last_checked: '2026-08-06T01:34:50.180587+05:30'
health_score: 100
---

# Configure security

## Summary

- **Default Deny Policy**: Hugo enforces a strict default-deny security model via allowlists, restricting operations like `os/exec`, remote HTTP calls, and file system access; unauthorized attempts trigger explicit failure messages.

- **Configurable Allowlists**: Security policies (e.g., `exec.allow`, `http.urls`, `node.permissions`) are defined via regex-based allowlists in YAML/TOML/JSON, with negation rules (`!`) to explicitly deny specific patterns (e.g., `! ^localhost`).

- **Environment Overrides**: Security settings can be dynamically overridden via environment variables (e.g., `HUGO_SECURITY_HTTP_URLS=none`), and Node.js tools are restricted by `--permission` flags for granular filesystem/process control.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-06T01:34:50.180574+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://gohugo.io/configuration/security/
