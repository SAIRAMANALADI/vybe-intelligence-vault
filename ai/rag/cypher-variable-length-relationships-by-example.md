---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-28T01:19:29.590189+05:30'
collected_at: '2026-06-28T01:19:29.590202+05:30'
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
first_seen: '2026-06-28T01:19:29.590202+05:30'
last_seen: '2026-06-28T01:19:29.590202+05:30'
last_checked: '2026-06-28T01:19:29.590202+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** allow traversal of paths with dynamic depth using `*min..max` syntax (e.g., `-[:KNOWS*2..3]->` for 2-3 hops), enabling flexible graph exploration without hardcoding path lengths.
- **Zero-length paths** (`*0`) bind a node to itself, simplifying queries where optional relationships may not exist (e.g., returning all blog posts of a user’s friends regardless of post count).
- **Performance considerations** require explicit length limits (e.g., `-[:KNOWS*..5]->`) to avoid unbounded traversals, as infinite-length paths (`*`) can degrade performance in dense or large graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T01:19:29.590189+05:30

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
