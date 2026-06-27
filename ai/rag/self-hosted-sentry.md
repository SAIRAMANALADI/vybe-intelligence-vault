---
title: Self-Hosted Sentry
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://develop.sentry.dev/self-hosted/
published_at: '2026-06-27T09:56:29.176829+05:30'
collected_at: '2026-06-27T09:56:29.176844+05:30'
tags:
- hackernews
- rag
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:self-hosted-sentry
first_seen: '2026-06-27T09:56:29.176844+05:30'
last_seen: '2026-06-27T09:56:29.176844+05:30'
last_checked: '2026-06-27T09:56:29.176844+05:30'
health_score: 100
---

# Self-Hosted Sentry

## Summary

- Self-hosted Sentry requires **Docker 19.03.6+** and **Docker Compose 2.32.2+**, with minimum specs: **4 CPU cores, 16GB RAM + 16GB swap, 20GB disk space**; recommended: **32GB RAM** and high-IOPS storage for optimal performance.
- Key missing features in self-hosted vs. SaaS include **billing/quotas (spike protection, spend allocation), AI/ML features (Seer), mobile stack-trace resolution (iOS/Android symbols), and gaming platform support (PlayStation/Nintendo Switch)**.
- Installation uses `./install.sh` from the [self-hosted repo](https://github.com/getsentry/self-hosted/releases/latest), binds to **port 9000**, and supports air-gapped setups via Docker image transfer; optional telemetry/beacon data is retained for **30 days** under Sentry’s privacy policy.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T09:56:29.176829+05:30

## Related Tags

- hackernews
- rag
- reddit
- scripts
- web-crawled

## Source

Original source: https://develop.sentry.dev/self-hosted/
