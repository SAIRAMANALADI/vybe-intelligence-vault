---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-01T15:49:13.665569+05:30'
collected_at: '2026-07-01T15:49:13.665582+05:30'
tags:
- agents
- hackernews
- models
- paper
- rag
- reddit
- scripts
- web-crawled
- youtube
status: active
resource_id: blog:cypher-variable-length-relationships-by-example
first_seen: '2026-07-01T15:49:13.665582+05:30'
last_seen: '2026-07-01T15:49:13.665582+05:30'
last_checked: '2026-07-01T15:49:13.665582+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationship syntax** in Cypher allows path traversal with explicit or unbounded depth using `*minHops..maxHops` notation (e.g., `-[:KNOWS*2..3]->` for 2-3 hops, `-[:KNOWS*]->` for infinite hops with caution).

- **Zero-length paths** (`*0`) enable binding a node to itself, simplifying queries where optional relationships may not exist (e.g., `(friend)-[:LAST_POST]->()-[:PREVIOUS_POST*0..1]->(post)`).

- **Performance considerations** dictate avoiding infinite-length paths (`*`) in production; always specify upper bounds (e.g., `-[:KNOWS*..5]->`) to prevent unbounded graph traversals.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T15:49:13.665569+05:30

## Related Tags

- agents
- hackernews
- models
- paper
- rag
- reddit
- scripts
- web-crawled
- youtube

## Source

Original source: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
