---
title: pnpm link | pnpm
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://pnpm.io/cli/link
published_at: '2026-08-10T16:20:31.297314+05:30'
collected_at: '2026-08-10T16:20:31.297330+05:30'
tags:
- web-crawled
status: active
resource_id: blog:pnpm-link-pnpm
first_seen: '2026-08-10T16:20:31.297330+05:30'
last_seen: '2026-08-10T16:20:31.297330+05:30'
last_checked: '2026-08-10T16:20:31.297330+05:30'
health_score: 100
---

# pnpm link | pnpm

## Summary

- **Symlinking Local Packages**: `pnpm link <dir>` symlinks a local package from `<dir>` into the project's `node_modules`, enabling real-time source code modifications without reinstallation; dependencies must be manually installed in the source package.

- **Breaking Changes in v11**: `pnpm link` no longer resolves global store packages or supports `--global` flag; requires explicit path (`pnpm link ./foo`) and uses `pnpm add -g .` for global binary registration.

- **Comparison with `file:` Protocol**: `pnpm link` creates symlinks (no dependency installation), while `file:` protocol hard-links packages (installs dependencies, overriding linked package's `node_modules`), with the latter recommended for peer dependencies to ensure consistent resolution.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-10T16:20:31.297314+05:30

## Related Tags

- web-crawled

## Source

Original source: https://pnpm.io/cli/link
