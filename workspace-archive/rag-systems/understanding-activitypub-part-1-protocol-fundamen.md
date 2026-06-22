---
title: 'Understanding ActivityPub - Part 1: Protocol Fundamentals - Sebastian Jambor''s
  blog'
archive_category: rag-systems
source_category: ai/rag
source_url: https://seb.jambor.dev/posts/understanding-activitypub
resource_id: blog:understanding-activitypub-part-1-protocol-fundamen
local_vault_path: ai/rag/understanding-activitypub-part-1-protocol-fundamen.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- models
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Understanding ActivityPub - Part 1: Protocol Fundamentals - Sebastian Jambor's blog

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Actor Identification**: ActivityPub uses **actor IDs** (URIs like `https://mastodon.social/users/crepels`) instead of full mentions (e.g., `@crepels@mastodon.social`). WebFinger (`RFC 7033`) resolves full mentions to actor IDs via a `GET` request to `/.well-known/webfinger?resource=acct:user@instance`.

- **Inbox Architecture**: Actors have **personal inboxes** (e.g., `https://instance/users/user/inbox`) and **shared inboxes** (e.g., `https://instance/inbox`) for receiving Activities. Inboxe

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://seb.jambor.dev/posts/understanding-activitypub

## Local Vault File

Path: [understanding-activitypub-part-1-protocol-fundamen.md](../../ai/rag/understanding-activitypub-part-1-protocol-fundamen.md)
