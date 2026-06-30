---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-01T04:15:07.148722+05:30'
collected_at: '2026-07-01T04:15:07.148735+05:30'
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
first_seen: '2026-07-01T04:15:07.148735+05:30'
last_seen: '2026-07-01T04:15:07.148735+05:30'
last_checked: '2026-07-01T04:15:07.148735+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationship syntax** in Cypher allows pattern matching with dynamic path lengths using `*min..max` notation (e.g., `-[:KNOWS*2..3]->` for 2-3 hops), enabling flexible traversal depth control in graph queries.

- **Zero-length paths** (`*0`) bind a node to itself, useful for unifying results (e.g., matching blog posts regardless of `PREVIOUS_POST` existence) without `OPTIONAL MATCH` complexity.

- **Performance considerations** mandate explicit length limits (e.g., `-[:KNOWS*..5]->`) over infinite traversals (`*`) to prevent unbounded query execution and optimize graph database performance.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T04:15:07.148722+05:30

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
