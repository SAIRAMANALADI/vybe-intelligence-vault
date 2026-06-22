---
title: Getting started | CHI@Edge
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://chameleoncloud.gitbook.io/chi-edge/getting-started
published_at: '2026-06-22T15:56:44.440624+05:30'
collected_at: '2026-06-22T15:56:44.440642+05:30'
tags:
- frontend_ui
- hackernews
- producthunt
- reddit
- web-crawled
status: active
resource_id: blog:getting-started-chi-edge
first_seen: '2026-06-22T15:56:44.440642+05:30'
last_seen: '2026-06-22T15:56:44.440642+05:30'
last_checked: '2026-06-22T15:56:44.440642+05:30'
health_score: 100
---

# Getting started | CHI@Edge

## Summary

- **Authentication & Project Setup**: Access requires federated login (e.g., InCommon/Google) with Chameleon’s terms acceptance; users must join/lead a project with an active allocation (PI status required for new projects, reviewed within 1 business day).

- **Resource Reservation & Container Deployment**: Edge devices are reserved via the CHI@Edge dashboard/CLI (`blazar` with OpenStack RC file) using lease creation (`lease-create`) with device-specific filters; containers (ARM64-compatible) are deployed via GUI/CLI with scheduler hints (reservation ID, `platform_version=2`) and optional device profiles (e.g., `cap_net_admin`).

- **Networking & Access**: Containers require floating IP association (via *Network > Floating IPs*) for external access; container interaction occurs via assigned IP (e.g., `http://<IP>:<PORT>`) or direct CLI/Python (`python-chi`) management.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T15:56:44.440624+05:30

## Related Tags

- frontend_ui
- hackernews
- producthunt
- reddit
- web-crawled

## Source

Original source: https://chameleoncloud.gitbook.io/chi-edge/getting-started
