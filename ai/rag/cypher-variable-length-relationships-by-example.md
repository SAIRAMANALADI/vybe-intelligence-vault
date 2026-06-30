---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-30T15:36:13.041831+05:30'
collected_at: '2026-06-30T15:36:13.041854+05:30'
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
first_seen: '2026-06-30T15:36:13.041854+05:30'
last_seen: '2026-06-30T15:36:13.041854+05:30'
last_checked: '2026-06-30T15:36:13.041854+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** are defined using the `*n..m` syntax, where `n` is the minimum and `m` the maximum path length (e.g., `-[:KNOWS*2..3]->` matches paths with 2 or 3 `KNOWS` relationships).

- **Zero-length paths** (`*0`) allow binding a node to itself, enabling unified result handling (e.g., `()-[:REL*0..1]->(post)` includes nodes with/without outgoing `REL` relationships).

- **Performance considerations** require explicit length limits (e.g., `-[:KNOWS*..5]->`) to avoid unbounded traversals, which can degrade query performance in large graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T15:36:13.041831+05:30

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
