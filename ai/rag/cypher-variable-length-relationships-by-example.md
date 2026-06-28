---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-28T19:50:56.274036+05:30'
collected_at: '2026-06-28T19:50:56.274050+05:30'
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
first_seen: '2026-06-28T19:50:56.274050+05:30'
last_seen: '2026-06-28T19:50:56.274050+05:30'
last_checked: '2026-06-28T19:50:56.274050+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- Variable-length relationships in Cypher are specified using the `*n..m` syntax, where `n` is the minimum and `m` the maximum path length (e.g., `-[:KNOWS*2..3]->` matches paths with 2 or 3 `KNOWS` relationships).
- Zero-length paths (`*0`) allow binding the same node to multiple variables in a single pattern, simplifying queries for optional relationships (e.g., `-[:PREVIOUS_POST*0..1]->` matches 0 or 1 relationships).
- Infinite-length paths (`*`) should be avoided in production due to performance risks; always specify upper bounds (e.g., `-[:KNOWS*..5]->`) to constrain query execution.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T19:50:56.274036+05:30

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
