---
title: 'Cypher: Variable-length relationships by example'
archive_category: vector-databases
source_category: ai/rag
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
resource_id: blog:cypher-variable-length-relationships-by-example
local_vault_path: ai/rag/cypher-variable-length-relationships-by-example.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
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
selection_reason:
- Valuable developer reference
---

# Cypher: Variable-length relationships by example

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Variable-length relationship syntax in Cypher**: Uses `-[REL_TYPE*minHops..maxHops]->` to match paths with flexible relationship counts (e.g., `[:KNOWS*2..3]` for friends-of-friends or friends-of-friends-of-friends), with `*N` equivalent to `*N..N` and `*` defaulting to `*0..∞` (performance-risky).

- **Zero-length path utility**: Enables binding to the same node via `-[REL_TYPE*0..N]->` (e.g., `[:PREVIOUS_POST*0..1]`), simplifying queries by avoiding `OPTIONAL MATCH` for optional relationsh

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html

## Local Vault File

Path: [cypher-variable-length-relationships-by-example.md](../../ai/rag/cypher-variable-length-relationships-by-example.md)
