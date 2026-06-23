---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-23T09:54:37.973521+05:30'
collected_at: '2026-06-23T09:54:37.973528+05:30'
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
first_seen: '2026-06-23T09:54:37.973528+05:30'
last_seen: '2026-06-23T09:54:37.973528+05:30'
last_checked: '2026-06-23T09:54:37.973528+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

- Cypher supports **variable-length relationships** in patterns using `*minHops..maxHops` syntax (e.g., `-[:KNOWS*2..3]->`), enabling traversal of paths with dynamic or unbounded depth.
- **Zero-length paths** (`*0`) bind the same node to both ends of a relationship pattern, simplifying queries where optional relationships may not exist (e.g., retrieving all posts regardless of prior/next links).
- Infinite-length paths (`*`) should be avoided in production due to performance risks; always specify upper bounds (e.g., `*..5`) to constrain traversal depth.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T09:54:37.973521+05:30

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
