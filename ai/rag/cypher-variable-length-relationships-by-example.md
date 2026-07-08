---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-08T14:21:13.891951+05:30'
collected_at: '2026-07-08T14:21:13.891970+05:30'
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
first_seen: '2026-07-08T14:21:13.891970+05:30'
last_seen: '2026-07-08T14:21:13.891970+05:30'
last_checked: '2026-07-08T14:21:13.891970+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** are defined using the `*n..m` syntax, where `n` is the minimum and `m` the maximum hops; `*2` matches exactly 2 hops, `*2..3` matches 2–3 hops, and `*..5` matches up to 5 hops.

- **Zero-length paths** (`*0`) bind the same node to both ends of the relationship, enabling patterns like `-[:LAST_POST]->()-[:PREVIOUS_POST*0..1]->(post)` to return all posts (including the last one) without `OPTIONAL MATCH` clauses.

- **Performance considerations** require explicit length bounds (e.g., `*..5`) to avoid unbounded traversals that degrade query performance in large, densely connected graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T14:21:13.891951+05:30

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
