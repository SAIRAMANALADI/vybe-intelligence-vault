---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-02T15:07:40.733941+05:30'
collected_at: '2026-07-02T15:07:40.733953+05:30'
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
first_seen: '2026-07-02T15:07:40.733953+05:30'
last_seen: '2026-07-02T15:07:40.733953+05:30'
last_checked: '2026-07-02T15:07:40.733953+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationship syntax** in Cypher uses `-[REL_TYPE*min..max]->` where `min` and `max` define path length bounds; `*2` matches exactly 2 hops, `*2..3` matches 2-3 hops, and `*` matches any length (with performance caveats).

- **Zero-length paths** (`-[REL_TYPE*0..1]->`) bind the same node to both ends of the pattern, enabling conditional traversal without `OPTIONAL MATCH`; e.g., `()-[:LAST_POST]->()-[:PREVIOUS_POST*0..1]->(post)` captures all posts regardless of prior relationships.

- **Performance considerations** require explicit length limits (e.g., `*..5`) to avoid unbounded traversals in dense graphs, as infinite-length patterns (`*`) can degrade query performance significantly.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-02T15:07:40.733941+05:30

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
