---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-02T22:37:22.417738+05:30'
collected_at: '2026-07-02T22:37:22.417750+05:30'
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
first_seen: '2026-07-02T22:37:22.417750+05:30'
last_seen: '2026-07-02T22:37:22.417750+05:30'
last_checked: '2026-07-02T22:37:22.417750+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length path syntax** in Cypher allows matching paths of dynamic length using `*min..max` notation, e.g., `-[:KNOWS*2..3]->` for paths of 2-3 hops, with `*` alone implying infinite length (use with caution for performance).
- **Zero-length paths** (`*0`) bind a node to itself, enabling optional relationship traversal without `OPTIONAL MATCH`, simplifying queries like retrieving all posts from friends regardless of post count.
- **Performance considerations** require explicit length bounds (e.g., `-[:KNOWS*..5]->`) to avoid unbounded traversals, which can degrade query performance in large, dense graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T22:37:22.417738+05:30

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
