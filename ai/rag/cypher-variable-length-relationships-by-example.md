---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-27T09:51:16.244003+05:30'
collected_at: '2026-06-27T09:51:16.244018+05:30'
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
first_seen: '2026-06-27T09:51:16.244018+05:30'
last_seen: '2026-06-27T09:51:16.244018+05:30'
last_checked: '2026-06-27T09:51:16.244018+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationship syntax in Cypher**: Uses `*n` for fixed-length (`-[:KNOWS*2]->`), `*m..n` for range (`-[:KNOWS*2..3]->`), and `*` for unbounded (`-[:KNOWS*]->`) paths, enabling flexible traversal depth in graph queries.

- **Zero-length path utility**: Implemented via `*0..n` (e.g., `-[:PREVIOUS_POST*0..1]->`), binding nodes to the same variable without traversal, simplifying queries for optional relationships (e.g., retrieving all blog posts regardless of count).

- **Performance considerations**: Unbounded paths (`*`) risk exponential runtime in dense graphs; explicit limits (e.g., `*..5`) are recommended to balance expressiveness and computational efficiency.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T09:51:16.244003+05:30

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
