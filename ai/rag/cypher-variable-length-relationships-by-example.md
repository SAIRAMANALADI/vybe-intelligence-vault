---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-02T20:04:14.000360+05:30'
collected_at: '2026-07-02T20:04:14.000377+05:30'
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
first_seen: '2026-07-02T20:04:14.000377+05:30'
last_seen: '2026-07-02T20:04:14.000377+05:30'
last_checked: '2026-07-02T20:04:14.000377+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationship syntax** in Cypher allows path traversal with dynamic depth using `*min..max` notation (e.g., `-[:KNOWS*2..3]->` for 2-3 hops), enabling flexible graph traversal without hardcoding path lengths.

- **Zero-length paths** (`*0`) bind a node to itself, useful for unifying results in queries where optional relationships may or may not exist (e.g., combining `LAST_POST` and `PREVIOUS_POST` into a single collection).

- **Performance considerations** require explicit length limits (`*..5`) to prevent unbounded traversals, as infinite-length paths (`*`) can degrade performance in large, densely connected graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T20:04:14.000360+05:30

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
