---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-25T16:40:10.325689+05:30'
collected_at: '2026-06-25T16:40:10.325696+05:30'
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
first_seen: '2026-06-25T16:40:10.325696+05:30'
last_seen: '2026-06-25T16:40:10.325696+05:30'
last_checked: '2026-06-25T16:40:10.325696+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** are defined using `*n..m` syntax (e.g., `-[:KNOWS*2..3]->`), where `n` is the minimum and `m` the maximum path length; omitting `m` (e.g., `*2..`) implies infinite upper bound, while `*n` defaults to exact length.
- **Zero-length paths** (`*0`) bind the same node to both start and end variables, enabling conditional pattern matching without `OPTIONAL MATCH` (e.g., `-[:PREVIOUS_POST*0..1]->` captures 0 or 1 relationships).
- **Performance considerations** require explicit length bounds (e.g., `*..5`) to avoid unbounded traversals, as infinite-length queries (`*`) can degrade performance in dense graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T16:40:10.325689+05:30

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
