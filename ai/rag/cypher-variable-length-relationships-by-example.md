---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-20T03:46:20.285749+05:30'
collected_at: '2026-07-20T03:46:20.285767+05:30'
tags:
- agents
- hackernews
- models
- paper
- rag
- scripts
- web-crawled
- youtube
status: active
resource_id: blog:cypher-variable-length-relationships-by-example
first_seen: '2026-07-20T03:46:20.285767+05:30'
last_seen: '2026-07-20T03:46:20.285767+05:30'
last_checked: '2026-07-20T03:46:20.285767+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationship syntax in Cypher**: Uses `-[REL_TYPE*min..max]->` where `min` and `max` define path length bounds (e.g., `-[:KNOWS*2..3]->` for 2-3 hops), with `*` alone implying unbounded traversal (performance risk).
- **Zero-length path utility**: Enables self-referential matching via `-[REL_TYPE*0..N]->` to bind nodes to themselves (e.g., `(friend)-[:LAST_POST]->()-[:PREVIOUS_POST*0..1]->(post)` captures all posts regardless of `PREVIOUS_POST` existence).
- **Performance considerations**: Explicit length bounds (e.g., `-[:KNOWS*..5]->`) are critical to prevent unbounded traversals in dense graphs, while infinite lengths (`-[:KNOWS*]->`) should be avoided due to exponential computational overhead.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T03:46:20.285749+05:30

## Related Tags

- agents
- hackernews
- models
- paper
- rag
- scripts
- web-crawled
- youtube

## Source

Original source: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
