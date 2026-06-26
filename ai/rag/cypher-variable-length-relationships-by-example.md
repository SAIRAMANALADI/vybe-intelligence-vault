---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-27T01:44:01.593570+05:30'
collected_at: '2026-06-27T01:44:01.593585+05:30'
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
first_seen: '2026-06-27T01:44:01.593585+05:30'
last_seen: '2026-06-27T01:44:01.593585+05:30'
last_checked: '2026-06-27T01:44:01.593585+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** are specified using `*min..max` syntax (e.g., `-[:KNOWS*2..3]->`), enabling traversal of paths with dynamic depth between nodes.
- **Zero-length paths** (`*0`) bind a node to itself, useful for unifying results (e.g., returning all blog posts of a user’s friends regardless of count).
- **Performance considerations** require explicit length limits (e.g., `*..5`) to avoid unbounded traversals, which can degrade query efficiency in large graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-27T01:44:01.593570+05:30

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
