---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-03T15:11:53.421656+05:30'
collected_at: '2026-07-03T15:11:53.421665+05:30'
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
first_seen: '2026-07-03T15:11:53.421665+05:30'
last_seen: '2026-07-03T15:11:53.421665+05:30'
last_checked: '2026-07-03T15:11:53.421665+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationship syntax in Cypher**: Uses `-[REL_TYPE*minHops..maxHops]->` to match paths with flexible relationship counts (e.g., `[:KNOWS*2..3]` for friends-of-friends or friends-of-friends-of-friends), with `*N` equivalent to `*N..N` and `*` defaulting to `*0..∞` (performance-risky).

- **Zero-length path utility**: Enables binding to the same node via `-[REL_TYPE*0..N]->` (e.g., `[:PREVIOUS_POST*0..1]`), simplifying queries by avoiding `OPTIONAL MATCH` for optional relationships while consolidating results.

- **Performance considerations**: Infinite-length paths (`*`) should be avoided in production; always specify upper bounds (e.g., `*..5`) to prevent unbounded graph traversals and ensure query efficiency.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-03T15:11:53.421656+05:30

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
