---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-07T00:51:17.169177+05:30'
collected_at: '2026-07-07T00:51:17.169193+05:30'
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
first_seen: '2026-07-07T00:51:17.169193+05:30'
last_seen: '2026-07-07T00:51:17.169193+05:30'
last_checked: '2026-07-07T00:51:17.169193+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** are defined using the `*n..m` syntax, where `n` is the minimum hop count and `m` is the maximum (e.g., `-[:KNOWS*2..3]->` matches paths with 2-3 hops).
- **Zero-length paths** (`*0`) bind the same node to variables, enabling optional relationship traversal without `OPTIONAL MATCH` (e.g., `-[:PREVIOUS_POST*0..1]->` includes nodes with no outgoing relationships).
- **Performance considerations** dictate avoiding infinite-length paths (`*`) and using explicit bounds (e.g., `-[:KNOWS*..5]->`) to prevent unbounded traversals in large graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T00:51:17.169177+05:30

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
