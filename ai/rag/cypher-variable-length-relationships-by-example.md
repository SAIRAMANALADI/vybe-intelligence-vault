---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-26T20:22:13.184567+05:30'
collected_at: '2026-06-26T20:22:13.184579+05:30'
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
first_seen: '2026-06-26T20:22:13.184579+05:30'
last_seen: '2026-06-26T20:22:13.184579+05:30'
last_checked: '2026-06-26T20:22:13.184579+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length path syntax in Cypher** enables traversal of relationships with dynamic depth using `*min..max` notation (e.g., `-[:KNOWS*2..3]->`), where `min` and `max` define inclusive bounds; omitting bounds defaults to `*1` (single relationship).
- **Zero-length paths** (`*0`) bind the same node to both start and end variables, simplifying queries for optional relationships (e.g., `()-[:REL*0..1]->()` captures nodes with/without outgoing relationships uniformly).
- **Performance considerations** require explicit length limits (e.g., `*..5`) to avoid unbounded traversals, as infinite-length paths (`*`) can degrade performance in densely connected graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T20:22:13.184567+05:30

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
