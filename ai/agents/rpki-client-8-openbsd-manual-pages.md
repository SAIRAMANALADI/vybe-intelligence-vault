---
title: rpki-client(8) - OpenBSD manual pages
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://man.openbsd.org/rpki-client
published_at: '2026-06-22T11:32:22.530870+05:30'
collected_at: '2026-06-22T11:32:22.530878+05:30'
tags:
- agents
- benchmark
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:rpki-client-8-openbsd-manual-pages
first_seen: '2026-06-22T11:32:22.530878+05:30'
last_seen: '2026-06-22T11:32:22.530878+05:30'
last_checked: '2026-06-22T11:32:22.530878+05:30'
health_score: 100
---

# rpki-client(8) - OpenBSD manual pages

## Summary

- `rpki-client` validates RPKI-signed objects (X.509 certs, manifests, CRLs) from RPKI repositories via HTTPS or `openrsync`, constructing and verifying certification paths, and outputs VRPs, BRKs, and VAPs in formats like BIRD, JSON, CSV, or OpenBGPD-compatible.

- Supports fine-grained control via CLI flags (`-t` for TALs, `-H` for host shortlisting, `-S` for skiplist, `-P` for timestamp override) and constraints files (`*.constraints`) to restrict trust anchor resources, with default paths in `/etc/rpki/` and `/var/cache/rpki-client/`.

- Implements RFC-compliant RPKI validation (RFC 6480–9691), supports RRDP/RSYNC sync, multi-threaded validation (`-p`), and outputs experimental canonical cache representation (`rpki.ccr`) or OpenMetrics metrics (`-m`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-22T11:32:22.530870+05:30

## Related Tags

- agents
- benchmark
- reddit
- scripts
- web-crawled

## Source

Original source: https://man.openbsd.org/rpki-client
