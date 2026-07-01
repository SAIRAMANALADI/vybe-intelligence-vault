---
title: capabilities(7) - Linux manual page
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://man7.org/linux/man-pages/man7/capabilities.7.html
published_at: '2026-07-01T10:38:31.806578+05:30'
collected_at: '2026-07-01T10:38:31.806594+05:30'
tags:
- hackernews
- producthunt
- web-crawled
status: active
resource_id: blog:capabilities-7-linux-manual-page
first_seen: '2026-07-01T10:38:31.806594+05:30'
last_seen: '2026-07-01T10:38:31.806594+05:30'
last_checked: '2026-07-01T10:38:31.806594+05:30'
health_score: 100
---

# capabilities(7) - Linux manual page

## Summary

- **Linux Capabilities Overview**: Traditional UNIX privilege model (root vs. non-root) replaced by fine-grained capabilities (per-thread attributes) in Linux 2.2+, enabling selective privilege delegation instead of full root access.

- **Key Capabilities**:
  - **CAP_SYS_ADMIN**: Overloaded system admin operations (mount, quotactl, BPF, checkpoint/restore, etc.).
  - **CAP_NET_RAW**: Raw/Packet sockets, transparent proxying.
  - **CAP_BPF/CHECKPOINT_RESTORE/PERFMON**: Modern capabilities (Linux 5.8+) separating BPF, checkpointing, and perf monitoring from CAP_SYS_ADMIN.

- **Privilege Escalation Controls**:
  - **CAP_SETPCAP**: Modify thread capability sets (bounding/inheritable) or (pre-2.6.24) grant/remove any capability.
  - **CAP_SETUID/SETGID**: Arbitrary UID/GID manipulation, including namespace mapping and socket credential forging.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-01T10:38:31.806578+05:30

## Related Tags

- hackernews
- producthunt
- web-crawled

## Source

Original source: https://man7.org/linux/man-pages/man7/capabilities.7.html
