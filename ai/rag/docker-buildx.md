---
title: Releases · docker/buildx · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/docker/buildx/releases
published_at: '2026-06-29T10:38:18.491144+05:30'
collected_at: '2026-06-29T10:38:18.491159+05:30'
tags:
- benchmark
- frontend_ui
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: github:docker/buildx
first_seen: '2026-06-29T10:38:18.491159+05:30'
last_seen: '2026-06-29T10:38:18.491159+05:30'
last_checked: '2026-06-29T10:38:18.491159+05:30'
health_score: 100
---

# Releases · docker/buildx · GitHub

## Summary

- **Local Output Mode Enhancement**: Introduced `mode=delete` for build/bake commands to replace destination directories with build results (requires BuildKit v0.31.0+ for multi-platform exports and `--allow=buildx.local.delete` for non-subdirectory paths).

- **Source Policy & Network Proxy Support**: Added exec proxy feature in BuildKit v0.31.0+ to capture network traffic of build steps; requires `caps: { "exec.proxy": true }` in Dockerfile.rego policies and `--buildkitd-flags '--proxy-network'` for builder-level opt-in.

- **Resource Limits & Bug Fixes**: Implemented `--resource` flag for CPU/memory limits (requires BuildKit v0.31.0+ and Dockerfile v1.25.0+); resolved "closed channel" panic issue.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T10:38:18.491144+05:30

## Related Tags

- benchmark
- frontend_ui
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://github.com/docker/buildx/releases
