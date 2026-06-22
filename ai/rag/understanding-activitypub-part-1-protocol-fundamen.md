---
title: 'Understanding ActivityPub - Part 1: Protocol Fundamentals - Sebastian Jambor''s
  blog'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://seb.jambor.dev/posts/understanding-activitypub
published_at: '2026-06-22T10:44:31.008160+05:30'
collected_at: '2026-06-22T10:44:31.008173+05:30'
tags:
- hackernews
- models
- rag
- reddit
- web-crawled
status: active
resource_id: blog:understanding-activitypub-part-1-protocol-fundamen
first_seen: '2026-06-22T10:44:31.008173+05:30'
last_seen: '2026-06-22T10:44:31.008173+05:30'
last_checked: '2026-06-22T10:44:31.008173+05:30'
health_score: 100
---

# Understanding ActivityPub - Part 1: Protocol Fundamentals - Sebastian Jambor's blog

## Summary

- **Actor Identification**: ActivityPub uses **actor IDs** (URIs like `https://mastodon.social/users/crepels`) instead of full mentions (e.g., `@crepels@mastodon.social`). WebFinger (`RFC 7033`) resolves full mentions to actor IDs via a `GET` request to `/.well-known/webfinger?resource=acct:user@instance`.

- **Inbox Architecture**: Actors have **personal inboxes** (e.g., `https://instance/users/user/inbox`) and **shared inboxes** (e.g., `https://instance/inbox`) for receiving Activities. Inboxes are central to ActivityPub, handling inter-instance communication (e.g., `Follow`/`Accept` exchanges).

- **Activity Exchange**: Follow requests generate `POST` requests with JSON-LD payloads (e.g., `{"type": "Follow", "actor": "...", "object": "..."}`) to the target’s inbox. Responses (e.g., `Accept`) are similarly transmitted, forming the protocol’s core for building social graphs and distributing content.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T10:44:31.008160+05:30

## Related Tags

- hackernews
- models
- rag
- reddit
- web-crawled

## Source

Original source: https://seb.jambor.dev/posts/understanding-activitypub
