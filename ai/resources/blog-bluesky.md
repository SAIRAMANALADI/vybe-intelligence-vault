---
title: Blog | Bluesky
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.bsky.app/blog
published_at: '2026-06-24T22:56:34.823426+05:30'
collected_at: '2026-06-24T22:56:34.823434+05:30'
tags:
- web-crawled
status: active
resource_id: blog:blog-bluesky
first_seen: '2026-06-24T22:56:34.823434+05:30'
last_seen: '2026-06-24T22:56:34.823434+05:30'
last_checked: '2026-06-24T22:56:34.823434+05:30'
health_score: 100
---

# Blog | Bluesky

## Summary

- **Transition Date & Endpoint**: The `bsky.network` firehose will switch from `narelay.pop2.bsky.network` to `relay1.us-west.bsky.network` on **January 27, 2026 (US/Pacific)**, with sequence numbers jumping from ~17.5B to ~26.6B.
- **Consumer Impact**: WebSocket connections may drop with cursor jumps, but auto-reconnection should mitigate issues; minor event duplication may occur, resolvable via `rev` field or direct relay targeting (`relay1.us-east.bsky.network` as fallback).
- **Protocol & Operational Changes**: New relay supports **Sync 1.1** (MST inversion proofs, `#sync` messages) and removes deprecated archival relay code; PDS hosts remain unaffected due to pre-synchronized rate limits and mirrored crawl requests.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T22:56:34.823426+05:30

## Related Tags

- web-crawled

## Source

Original source: https://docs.bsky.app/blog
