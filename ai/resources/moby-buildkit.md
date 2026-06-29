---
title: Releases · moby/buildkit · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/moby/buildkit/releases
published_at: '2026-06-29T10:38:17.605459+05:30'
collected_at: '2026-06-29T10:38:17.605473+05:30'
tags:
- frontend_ui
- reddit
- web-crawled
status: active
resource_id: github:moby/buildkit
first_seen: '2026-06-29T10:38:17.605473+05:30'
last_seen: '2026-06-29T10:38:17.605473+05:30'
last_checked: '2026-06-29T10:38:17.605473+05:30'
health_score: 100
---

# Releases · moby/buildkit · GitHub

## Summary

- **Security Fixes**: Addressed two low-severity security vulnerabilities in v0.31.1: (1) Custom frontend bypass of Seccomp/AppArmor restrictions ([GHSA-7236-3392-c5c6](https://github.com/moby/buildkit/security/advisories/GHSA-7236-3392-c5c6)), and (2) Potential runtime DoS via unbounded group parsing ([GHSA-72x6-4j93-7w86](https://github.com/moby/buildkit/security/advisories/GHSA-72x6-4j93-7w86)).

- **LLB & Execution Enhancements**: Introduced per-step resource limits (CPU/memory) in LLB APIs, added `Passthrough` operation for dependency build graph branches, and enabled network proxy for exec steps with HTTP proxy routing and source policy enforcement ([#6858](https://github.com/moby/buildkit/pull/6858), [#6569](https://github.com/moby/buildkit/pull/6569), [#6829](https://github.com/moby/buildkit/pull/6829)).

- **OCI Media Types & Compatibility**: Defaulted to OCI media types for all image results (configurable via `oci-mediatypes=false`), upgraded embedded QEMU to v10.2.3, and updated runc to v1.3.6, raising BuildKit compatibility version to 30 ([#6824](https://github.com/moby/buildkit/pull/6824), [#6846](https://github.com/moby/buildkit/pull/6846)).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-29T10:38:17.605459+05:30

## Related Tags

- frontend_ui
- reddit
- web-crawled

## Source

Original source: https://github.com/moby/buildkit/releases
