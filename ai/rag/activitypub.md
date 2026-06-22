---
title: ActivityPub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://w3c.github.io/activitypub
published_at: '2026-06-22T11:01:20.320228+05:30'
collected_at: '2026-06-22T11:01:20.320237+05:30'
tags:
- agents
- hackernews
- paper
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:activitypub
first_seen: '2026-06-22T11:01:20.320237+05:30'
last_seen: '2026-06-22T11:01:20.320237+05:30'
last_checked: '2026-06-22T11:01:20.320237+05:30'
health_score: 100
---

# ActivityPub

## Summary

- **Protocol Layers**: ActivityPub defines two core layers—**client-to-server** (Social API) for user-agent interactions (e.g., mobile apps) and **server-to-server** (Federation Protocol) for decentralized content distribution between servers, with conformance classes for each.

- **Actor Model & Endpoints**: Users are represented as **Actors** with `inbox` (receives messages) and `outbox` (sends messages) endpoints; objects (e.g., `Note`, `Create`) are exchanged via HTTP POST/GET, with server-to-server federation using `inbox` delivery and client-to-server actions via `outbox`.

- **Object & Activity Vocabulary**: Built on **ActivityStreams 2.0** (extended via JSON-LD), all objects require globally unique, dereferencable URIs (HTTPS); activities wrap objects (e.g., `Like`, `Create`), and servers must validate object integrity to prevent spoofing.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:01:20.320228+05:30

## Related Tags

- agents
- hackernews
- paper
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://w3c.github.io/activitypub
