---
title: capabilities(7) - Linux manual page
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://man7.org/linux/man-pages/man7/capabilities.7.html
published_at: '2026-06-24T21:05:28.690149+05:30'
collected_at: '2026-06-24T21:05:28.690162+05:30'
tags:
- hackernews
- producthunt
- web-crawled
status: active
resource_id: blog:capabilities-7-linux-manual-page
first_seen: '2026-06-24T21:05:28.690162+05:30'
last_seen: '2026-06-24T21:05:28.690162+05:30'
last_checked: '2026-06-24T21:05:28.690162+05:30'
health_score: 100
---

# capabilities(7) - Linux manual page

## Summary

- **Linux Capabilities Overview**: Linux divides traditional superuser privileges into granular *capabilities* (per-thread attributes), replacing binary root/superuser model since kernel 2.2. Each capability controls specific privileged operations (e.g., `CAP_NET_ADMIN` for network config, `CAP_SYS_ADMIN` for system admin tasks).

- **Key Capabilities**:
  - `CAP_BPF` (Linux 5.8+): Enables privileged BPF operations (separated from `CAP_SYS_ADMIN`).
  - `CAP_CHECKPOINT_RESTORE` (Linux 5.9+): Allows PID namespace manipulation and `/proc/pid/map_files` access.
  - `CAP_PERFMON` (Linux 5.8+): Grants performance monitoring (e.g., `perf_event_open`), decoupled from `CAP_SYS_ADMIN`.

- **Privilege Escalation Risks**: `CAP_SYS_ADMIN` is overloaded (combines 50+ operations), making it a high-risk target. Modern kernels introduce specialized capabilities (e.g., `CAP_BPF`, `CAP_PERFMON`) to reduce attack surface by splitting monolithic privileges.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T21:05:28.690149+05:30

## Related Tags

- hackernews
- producthunt
- web-crawled

## Source

Original source: https://man7.org/linux/man-pages/man7/capabilities.7.html
