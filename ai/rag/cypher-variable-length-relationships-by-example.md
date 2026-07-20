---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-20T15:09:57.414538+05:30'
collected_at: '2026-07-20T15:09:57.414549+05:30'
tags:
- agents
- hackernews
- models
- paper
- rag
- scripts
- web-crawled
- youtube
status: active
resource_id: blog:cypher-variable-length-relationships-by-example
first_seen: '2026-07-20T15:09:57.414549+05:30'
last_seen: '2026-07-20T15:09:57.414549+05:30'
last_checked: '2026-07-20T15:09:57.414549+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** are defined using the `*n..m` syntax (e.g., `-[:KNOWS*2..3]->`), where `n` is the minimum and `m` the maximum path length; omitting `n` defaults to `0`, and omitting `m` defaults to infinity.
- **Zero-length paths** (`-[:REL*0]->`) bind the same node to both start and end variables, enabling unified handling of nodes with/without outgoing relationships (e.g., `()-[:PREVIOUS_POST*0..1]->(post)` captures all posts, including the latest).
- **Performance considerations** require explicit length limits (e.g., `-[:KNOWS*..5]->`) to avoid unbounded traversals, as infinite-length queries (`-[:KNOWS*]->`) can degrade performance in large, densely connected graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-20T15:09:57.414538+05:30

## Related Tags

- agents
- hackernews
- models
- paper
- rag
- scripts
- web-crawled
- youtube

## Source

Original source: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
