---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-04T19:33:11.140042+05:30'
collected_at: '2026-07-04T19:33:11.140057+05:30'
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
first_seen: '2026-07-04T19:33:11.140057+05:30'
last_seen: '2026-07-04T19:33:11.140057+05:30'
last_checked: '2026-07-04T19:33:11.140057+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationship syntax** in Cypher allows specifying path lengths using `*minHops..maxHops` (e.g., `-[:KNOWS*2..3]->` for 2-3 hops), enabling flexible traversal depth control in graph queries.

- **Zero-length paths** (`*0`) bind the same node to multiple variables in a pattern, simplifying queries by avoiding `OPTIONAL MATCH` clauses (e.g., `-[:PREVIOUS_POST*0..1]->` captures posts with/without prior posts).

- **Performance considerations** dictate avoiding infinite-length paths (`*`) in production; always use bounded lengths (e.g., `-[:KNOWS*..5]->`) to prevent excessive computation on large, dense graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T19:33:11.140042+05:30

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
