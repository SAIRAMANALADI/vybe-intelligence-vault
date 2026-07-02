---
title: 'Cypher: Variable-length relationships by example'
archive_category: rag-systems
source_category: ai/rag
source_url: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html
resource_id: blog:cypher-variable-length-relationships-by-example
local_vault_path: ai/rag/cypher-variable-length-relationships-by-example.md
quality_score: 70
archive_score: 72
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
- Strong keyword match
- Valuable developer reference
---

# Cypher: Variable-length relationships by example

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Variable-length path syntax** in Cypher allows matching paths of dynamic length using `*min..max` notation, e.g., `-[:KNOWS*2..3]->` for paths of 2-3 hops, with `*` alone implying infinite length (use with caution for performance).
- **Zero-length paths** (`*0`) bind a node to itself, enabling optional relationship traversal without `OPTIONAL MATCH`, simplifying queries like retrieving all posts from friends regardless of post count.
- **Performance considerations** require explicit length b

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html

## Local Vault File

Path: [cypher-variable-length-relationships-by-example.md](../../ai/rag/cypher-variable-length-relationships-by-example.md)
