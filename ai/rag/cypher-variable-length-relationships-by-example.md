---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-28T10:25:10.345123+05:30'
collected_at: '2026-06-28T10:25:10.345137+05:30'
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
first_seen: '2026-06-28T10:25:10.345137+05:30'
last_seen: '2026-06-28T10:25:10.345137+05:30'
last_checked: '2026-06-28T10:25:10.345137+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationship syntax in Cypher** allows specifying path lengths using `*min..max` notation (e.g., `-[:KNOWS*2..3]->` for 2-3 hops), with `*` alone implying infinite length (use cautiously due to performance impact).
- **Zero-length paths** (`*0`) enable binding the same node to multiple variables in patterns, simplifying queries by avoiding `OPTIONAL MATCH` and ensuring consistent result collections.
- **Performance considerations** dictate always setting explicit bounds (e.g., `-[:KNOWS*..5]->`) rather than infinite lengths (`*`) to prevent unbounded traversals in large graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T10:25:10.345123+05:30

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
