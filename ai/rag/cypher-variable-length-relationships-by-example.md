---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-24T10:08:44.159228+05:30'
collected_at: '2026-06-24T10:08:44.159241+05:30'
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
first_seen: '2026-06-24T10:08:44.159241+05:30'
last_seen: '2026-06-24T10:08:44.159241+05:30'
last_checked: '2026-06-24T10:08:44.159241+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** are defined using `*min..max` syntax (e.g., `-[:KNOWS*2..3]->`), enabling traversal of 1-to-N hops between nodes with explicit length constraints.
- **Zero-length paths** (`*0`) bind the same node to multiple variables in a pattern, simplifying queries for optional relationships (e.g., `-[:PREVIOUS_POST*0..1]->`).
- **Performance considerations** require explicit length limits (e.g., `*..5`) to avoid unbounded traversals, mitigating query inefficiency in large graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T10:08:44.159228+05:30

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
