---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-29T10:35:58.522482+05:30'
collected_at: '2026-06-29T10:35:58.522494+05:30'
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
first_seen: '2026-06-29T10:35:58.522494+05:30'
last_seen: '2026-06-29T10:35:58.522494+05:30'
last_checked: '2026-06-29T10:35:58.522494+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** are defined using `*min..max` syntax (e.g., `-[:KNOWS*2..3]->`), enabling traversal of paths with dynamic relationship counts between nodes.
- **Zero-length paths** (`*0`) bind the same node to multiple variables in a single pattern, simplifying queries for nodes with optional relationships (e.g., retrieving all blog posts regardless of `PREVIOUS_POST` existence).
- **Performance considerations** require explicit length limits (e.g., `-[:KNOWS*..5]->`) to avoid unbounded traversals, which can degrade query performance in densely connected graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T10:35:58.522482+05:30

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
