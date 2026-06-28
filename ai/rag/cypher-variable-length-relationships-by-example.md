---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-28T15:07:34.826114+05:30'
collected_at: '2026-06-28T15:07:34.826128+05:30'
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
first_seen: '2026-06-28T15:07:34.826128+05:30'
last_seen: '2026-06-28T15:07:34.826128+05:30'
last_checked: '2026-06-28T15:07:34.826128+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** allow traversal of paths with dynamic depth using syntax like `-[:REL_TYPE*min..max]->`, where `min` and `max` define the range of hops (e.g., `-[:KNOWS*2..3]->` for 2-3 hops).
- **Zero-length paths** (`*0`) enable matching nodes without traversing relationships, useful for binding variables to the same node (e.g., `-[:LAST_POST]->()-[:PREVIOUS_POST*0..1]->(post)`).
- **Performance considerations** require explicit length limits (e.g., `-[:KNOWS*..5]->`) to avoid unbounded traversals, which can degrade query performance in large graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T15:07:34.826114+05:30

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
