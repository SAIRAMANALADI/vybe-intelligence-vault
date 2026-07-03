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

- **Variable-length relationships in Cypher** are defined using the `*n..m` syntax, where `n` and `m` specify minimum and maximum path lengths (e.g., `-[:KNOWS*2..3]->` matches paths with 2 to 3 `KNOWS` relationships).

- **Zero-length paths** (`*0`) allow binding a node to itself in patterns, enabling unified handling of nodes with or without specific relationships (e.g., `-[:PREVIOUS_POST*0..1]->` includes nodes with no `PREVIOUS_POST` links).

- **Performance considerations** require explicit

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html

## Local Vault File

Path: [cypher-variable-length-relationships-by-example.md](../../ai/rag/cypher-variable-length-relationships-by-example.md)
