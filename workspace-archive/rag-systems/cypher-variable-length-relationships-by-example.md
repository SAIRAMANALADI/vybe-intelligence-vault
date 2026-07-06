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

- **Variable-length relationships in Cypher** are defined using the `*n..m` syntax, where `n` is the minimum hop count and `m` is the maximum (e.g., `-[:KNOWS*2..3]->` matches paths with 2-3 hops).
- **Zero-length paths** (`*0`) bind the same node to variables, enabling optional relationship traversal without `OPTIONAL MATCH` (e.g., `-[:PREVIOUS_POST*0..1]->` includes nodes with no outgoing relationships).
- **Performance considerations** dictate avoiding infinite-length paths (`*`) and using ex

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html

## Local Vault File

Path: [cypher-variable-length-relationships-by-example.md](../../ai/rag/cypher-variable-length-relationships-by-example.md)
