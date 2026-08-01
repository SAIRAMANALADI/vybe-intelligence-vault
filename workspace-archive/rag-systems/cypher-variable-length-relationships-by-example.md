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
- hackernews
- models
- paper
- rag
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

- Variable-length relationships in Cypher are defined using `*minHops..maxHops` syntax, enabling flexible traversal of paths with dynamic depth (e.g., `-[:KNOWS*2..3]->` for 2-3 hops).
- Zero-length paths (`*0`) allow binding a node to itself, simplifying queries by avoiding `OPTIONAL MATCH` for optional relationships (e.g., `-[:PREVIOUS_POST*0..1]->`).
- Infinite-length paths (`*`) should be avoided in production due to performance risks; always specify a finite upper bound (e.g., `-[:KNOWS*..5

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html

## Local Vault File

Path: [cypher-variable-length-relationships-by-example.md](../../ai/rag/cypher-variable-length-relationships-by-example.md)
