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

- **Variable-length relationships in Cypher** allow pattern matching with dynamic path lengths using syntax like `-[:KNOWS*2..3]->`, enabling queries for friends of friends (2 hops) or friends of friends of friends (3 hops) in a single traversal.
- **Zero-length paths** (`-[:REL*0..1]->`) bind the same node to variables in both ends, simplifying queries for optional relationships (e.g., retrieving all blog posts, including the latest one, without `OPTIONAL MATCH`).
- **Performance considerations

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html

## Local Vault File

Path: [cypher-variable-length-relationships-by-example.md](../../ai/rag/cypher-variable-length-relationships-by-example.md)
