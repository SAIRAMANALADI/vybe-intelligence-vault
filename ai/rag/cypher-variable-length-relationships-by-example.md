---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-03T22:20:34.221081+05:30'
collected_at: '2026-07-03T22:20:34.221091+05:30'
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
first_seen: '2026-07-03T22:20:34.221091+05:30'
last_seen: '2026-07-03T22:20:34.221091+05:30'
last_checked: '2026-07-03T22:20:34.221091+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationship syntax in Cypher** allows specifying path lengths using `*minHops..maxHops` (e.g., `-[:KNOWS*2..3]->` for 2-3 hops), enabling flexible traversal depth control in graph queries.

- **Zero-length paths** (`*0`) bind the same node to multiple variables in a pattern, simplifying queries for nodes with optional relationships (e.g., retrieving all blog posts regardless of count).

- **Performance considerations** dictate avoiding infinite-length paths (`*`) in production; explicit upper bounds (e.g., `*..5`) should be used to prevent unbounded traversals and ensure query efficiency.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T22:20:34.221081+05:30

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
