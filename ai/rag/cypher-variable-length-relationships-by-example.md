---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-05T01:12:15.439999+05:30'
collected_at: '2026-07-05T01:12:15.440010+05:30'
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
first_seen: '2026-07-05T01:12:15.440010+05:30'
last_seen: '2026-07-05T01:12:15.440010+05:30'
last_checked: '2026-07-05T01:12:15.440010+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** are specified using the `*n..m` syntax, where `n` is the minimum and `m` the maximum path length (e.g., `-[:KNOWS*2..3]->` matches paths with 2 or 3 `KNOWS` relationships).

- **Zero-length paths** (`-[:REL*0]->`) bind the same node to both ends of the relationship, enabling inclusion of nodes without traversing edges (e.g., matching a user’s blog posts regardless of `PREVIOUS_POST` relationships).

- **Performance considerations** require explicit length bounds (e.g., `-[:KNOWS*..5]->`) to avoid unbounded traversals, which can degrade query performance in large or densely connected graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-05T01:12:15.439999+05:30

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
