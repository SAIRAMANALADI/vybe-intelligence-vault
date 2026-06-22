---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-22T11:17:14.422702+05:30'
collected_at: '2026-06-22T11:17:14.422715+05:30'
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
first_seen: '2026-06-22T11:17:14.422715+05:30'
last_seen: '2026-06-22T11:17:14.422715+05:30'
last_checked: '2026-06-22T11:17:14.422715+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** allow querying paths with dynamic relationship counts using `*min..max` syntax (e.g., `-[:KNOWS*2..3]->` for 2-3 hops), enabling flexible traversal depth.
- **Zero-length paths** (`*0`) bind the same node to multiple variables, simplifying queries for optional relationships (e.g., `-[:PREVIOUS_POST*0..1]->` to include nodes with/without prior posts).
- **Performance considerations** require explicit length limits (e.g., `*..5`) to avoid unbounded traversals, balancing query completeness with computational efficiency.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:17:14.422702+05:30

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
