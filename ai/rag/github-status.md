---
title: GitHub Status
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.githubstatus.com
published_at: '2026-08-08T15:38:31.171520+05:30'
collected_at: '2026-08-08T15:38:31.171536+05:30'
tags:
- agents
- anthropic
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:github-status
first_seen: '2026-08-08T15:38:31.171536+05:30'
last_seen: '2026-08-08T15:38:31.171536+05:30'
last_checked: '2026-08-08T15:38:31.171536+05:30'
health_score: 100
---

# GitHub Status

## Summary

- **GitHub Actions Incident (Aug 6-7, 2026)**: A major outage affected GitHub Actions, Pages, Copilot services, and Enterprise Importer migrations due to runners being assigned invalid jobs and self-hosted runners failing to recover, causing workflow failures, queued jobs, and throttled webhook triggers (~15% throughput). Root cause involved Kubernetes ARC (Actions Runner Controller) pods stuck in idle states, with manual recovery steps required (e.g., `kubectl` pod deletion or ARC redeployment).

- **Service Uptime Metrics**: GitHub’s status page reports 90-day uptime for core services: Git Operations (99.99%), Webhooks (100%), API Requests (99.91%), Issues/PRs (99.98%), Actions (99.42%), Packages (100%), Pages (99.64%), Copilot (99.93%), and Codespaces (99.97%). Regional status pages (AU/EU/JP/US) provide localized service monitoring.

- **Notification & Integration Channels**: GitHub Status supports multi-channel incident notifications via email, SMS (global), Slack, and webhooks. Subscribers receive real-time updates for incident creation/resolution, with OTP-based authentication for security. Historical uptime data is available via Atom/RSS feeds or the status page’s 90-day uptime dashboard.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T15:38:31.171520+05:30

## Related Tags

- agents
- anthropic
- hackernews
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube

## Source

Original source: https://www.githubstatus.com
