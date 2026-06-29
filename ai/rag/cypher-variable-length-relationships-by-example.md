---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-30T01:50:52.496548+05:30'
collected_at: '2026-06-30T01:50:52.496563+05:30'
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
first_seen: '2026-06-30T01:50:52.496563+05:30'
last_seen: '2026-06-30T01:50:52.496563+05:30'
last_checked: '2026-06-30T01:50:52.496563+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** allow traversal of paths with dynamic hop counts using syntax like `-[:REL_TYPE*minHops..maxHops]->`, enabling flexible graph traversals (e.g., friends of friends with `-[:KNOWS*2..3]->`).

- **Zero-length paths** (`-[:REL_TYPE*0..1]->`) bind the same node to both ends of the pattern, simplifying queries for optional relationships (e.g., retrieving all blog posts regardless of `PREVIOUS_POST` existence).

- **Performance considerations** require explicit length limits (`*..5`) to avoid unbounded traversals, as infinite-length paths (`*`) can degrade performance in large, dense graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T01:50:52.496548+05:30

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
