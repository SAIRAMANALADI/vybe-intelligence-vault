---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-07-09T01:32:23.936440+05:30'
collected_at: '2026-07-09T01:32:23.936452+05:30'
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
first_seen: '2026-07-09T01:32:23.936452+05:30'
last_seen: '2026-07-09T01:32:23.936452+05:30'
last_checked: '2026-07-09T01:32:23.936452+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- **Variable-length relationships in Cypher** are specified using `*min..max` syntax (e.g., `-[:KNOWS*2..3]->`), enabling traversal of paths with dynamic relationship counts between nodes.
- **Zero-length paths** (`-[:REL*0]->`) allow binding the same node to multiple variables in a pattern, simplifying queries for optional relationships (e.g., retrieving all blog posts regardless of `PREVIOUS_POST` existence).
- **Performance considerations** dictate avoiding infinite-length paths (`*`) in favor of bounded ranges (e.g., `-[:KNOWS*..5]->`) to prevent excessive computational overhead in large graphs.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-09T01:32:23.936440+05:30

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
