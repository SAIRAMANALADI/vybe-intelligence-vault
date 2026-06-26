---
title: 'Cypher: Variable-length relationships by example'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
published_at: '2026-06-26T15:26:56.647582+05:30'
collected_at: '2026-06-26T15:26:56.647598+05:30'
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
first_seen: '2026-06-26T15:26:56.647598+05:30'
last_seen: '2026-06-26T15:26:56.647598+05:30'
last_checked: '2026-06-26T15:26:56.647598+05:30'
health_score: 100
---

# Cypher: Variable-length relationships by example

## Summary

*   Cypher's variable-length relationship syntax `[:REL_TYPE*min..max]` enables matching paths with a specified range of relationship lengths, including exact lengths (`*N`) or unbounded lengths (`*`).
*   Unbounded variable-length paths (`*`) are discouraged for performance reasons; explicit upper bounds (`*..max`) should always be used.
*   Zero-length paths (`*0..max`) allow the start and end nodes of a variable-length segment to be identical, facilitating the retrieval of nodes even when intermediate relationships are absent, thereby simplifying queries that would otherwise require `OPTIONAL MATCH`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T15:26:56.647582+05:30

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
