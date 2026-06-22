---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-22T15:17:48.641686+05:30'
collected_at: '2026-06-22T15:17:48.641702+05:30'
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
first_seen: '2026-06-22T15:17:48.641702+05:30'
last_seen: '2026-06-22T15:17:48.641702+05:30'
last_checked: '2026-06-22T15:17:48.641702+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** allow pattern matching with dynamic path lengths using syntax like `-[:KNOWS*2..3]->`, enabling queries for friends of friends (2 hops) or friends of friends of friends (3 hops) in a single traversal.
- **Zero-length paths** (`-[:REL*0..1]->`) bind the same node to variables in both ends, simplifying queries for optional relationships (e.g., retrieving all blog posts, including the latest one, without `OPTIONAL MATCH`).
- **Performance considerations** require explicit length limits (e.g., `-[:KNOWS*..5]->`) to avoid unbounded traversals, as infinite-length paths (`-[:KNOWS*]->`) can degrade performance in large, dense graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T15:17:48.641686+05:30

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
