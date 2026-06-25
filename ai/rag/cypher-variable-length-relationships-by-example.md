---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-25T20:48:09.482934+05:30'
collected_at: '2026-06-25T20:48:09.482947+05:30'
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
first_seen: '2026-06-25T20:48:09.482947+05:30'
last_seen: '2026-06-25T20:48:09.482947+05:30'
last_checked: '2026-06-25T20:48:09.482947+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** use `*n..m` syntax to match paths with 1+ to unbounded (`*`) or bounded (`*n..m`) relationship lengths, enabling flexible traversal (e.g., `-[:KNOWS*2..3]->` for friends-of-friends or friends-of-friends-of-friends).
- **Zero-length paths** (`*0`) bind a node to itself, simplifying queries by avoiding `OPTIONAL MATCH` for edge cases (e.g., retrieving all blog posts of friends regardless of count).
- **Performance considerations** require explicit length bounds (e.g., `-[:KNOWS*..5]->`) to prevent unbounded traversals from degrading query performance in dense graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T20:48:09.482934+05:30

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
