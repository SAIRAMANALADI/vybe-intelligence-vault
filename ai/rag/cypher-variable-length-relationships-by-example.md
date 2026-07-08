---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-08T09:21:03.408190+05:30'
collected_at: '2026-07-08T09:21:03.408203+05:30'
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
first_seen: '2026-07-08T09:21:03.408203+05:30'
last_seen: '2026-07-08T09:21:03.408203+05:30'
last_checked: '2026-07-08T09:21:03.408203+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationship syntax** in Cypher allows path traversal with dynamic depth using `*min..max` notation, where `min` and `max` define the range of hops (e.g., `-[:KNOWS*2..3]->` matches 2-3 hops).

- **Zero-length paths** (`*0`) enable self-referential matching, binding a node to itself to simplify queries (e.g., `-[:PREVIOUS_POST*0..1]->` includes the starting node if no relationship exists).

- **Performance considerations** require explicit length limits (e.g., `-[:KNOWS*..5]->`) to avoid unbounded traversals, which can degrade query performance in large or dense graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T09:21:03.408190+05:30

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
