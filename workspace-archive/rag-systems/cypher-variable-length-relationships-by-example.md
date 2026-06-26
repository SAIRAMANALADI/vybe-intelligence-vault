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
resource_kind: benchmark
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
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

*   Cypher's variable-length relationship syntax `[:REL_TYPE*min..max]` enables matching paths with a specified range of relationship lengths, including exact lengths (`*N`) or unbounded lengths (`*`).
*   Unbounded variable-length paths (`*`) are discouraged for performance reasons; explicit upper bounds (`*..max`) should always be used.
*   Zero-length paths (`*0..max`) allow the start and end nodes of a variable-length segment to be identical, facilitating the retrieval of nodes even when int

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://graphaware.com/graphaware/2015/05/19/neo4j-cypher-variable-length-relationships-by-example.html

## Local Vault File

Path: [cypher-variable-length-relationships-by-example.md](../../ai/rag/cypher-variable-length-relationships-by-example.md)
