---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-03T20:07:17.626662+05:30'
collected_at: '2026-07-03T20:07:17.626675+05:30'
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
first_seen: '2026-07-03T20:07:17.626675+05:30'
last_seen: '2026-07-03T20:07:17.626675+05:30'
last_checked: '2026-07-03T20:07:17.626675+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** are defined using the `*n..m` syntax, where `n` and `m` specify minimum and maximum path lengths (e.g., `-[:KNOWS*2..3]->` matches paths with 2 to 3 `KNOWS` relationships).

- **Zero-length paths** (`*0`) allow binding a node to itself in patterns, enabling unified handling of nodes with or without specific relationships (e.g., `-[:PREVIOUS_POST*0..1]->` includes nodes with no `PREVIOUS_POST` links).

- **Performance considerations** require explicit length limits (e.g., `-[:KNOWS*..5]->`) to avoid unbounded traversals, as infinite-length paths (`*`) can degrade query performance in large or densely connected graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T20:07:17.626662+05:30

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
