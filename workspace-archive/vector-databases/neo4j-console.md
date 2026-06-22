---
title: Neo4j Console
archive_category: vector-databases
source_category: ai/rag
source_url: https://console.neo4j.org/?id=vrs4
resource_id: blog:neo4j-console
local_vault_path: ai/rag/neo4j-console.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
- youtube
selection_reason:
- Valuable developer reference
---

# Neo4j Console

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Interactive Graph Management**: Neo4j Console enables real-time graph construction/deletion via Cypher (`CREATE` for nodes/relationships, `MATCH`/`DELETE` for queries/removals) with integrated visualization.
- **Cypher Query Support**: Supports multiple query compilers (3.0-cost/rule, 2.3-cost/rule) and complex graph traversals (e.g., `MATCH (user)-[:KNOWS]->(friend) WHERE friend.age > 20 RETURN user,friend`).
- **Deployment & Sharing**: Hosted on Heroku with source on GitHub; allows sharing

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://console.neo4j.org/?id=vrs4

## Local Vault File

Path: [neo4j-console.md](../../ai/rag/neo4j-console.md)
