---
title: What does AUTHORIZED_FETCH actually do? | Sunny Garden Hub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://hub.sunny.garden/2023/06/28/what-does-authorized_fetch-actually-do
published_at: '2026-06-24T21:07:12.864238+05:30'
collected_at: '2026-06-24T21:07:12.864251+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
status: active
resource_id: blog:what-does-authorized-fetch-actually-do-sunny-garde
first_seen: '2026-06-24T21:07:12.864251+05:30'
last_seen: '2026-06-24T21:07:12.864251+05:30'
last_checked: '2026-06-24T21:07:12.864251+05:30'
health_score: 100
---

# What does AUTHORIZED_FETCH actually do? | Sunny Garden Hub

## Summary

- **Enforcement of Server Suspensions**: `AUTHORIZED_FETCH` requires remote servers to authenticate requests, enabling a server to deny access to suspended servers attempting to fetch public posts/profiles anonymously via ActivityPub.

- **Disruption of Inbox Forwarding**: Enabling `AUTHORIZED_FETCH` disables inbox forwarding in ActivityPub, preventing replies from being forwarded to blocked servers, which may result in incomplete conversation threads for remote users.

- **Increased Server Load**: `AUTHORIZED_FETCH` disables HTTP request caching for public posts, leading to higher computational overhead per request, particularly impacting low-resource servers during viral content distribution.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T21:07:12.864238+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled

## Source

Original source: https://hub.sunny.garden/2023/06/28/what-does-authorized_fetch-actually-do
