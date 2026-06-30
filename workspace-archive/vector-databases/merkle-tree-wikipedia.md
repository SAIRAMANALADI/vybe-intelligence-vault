---
title: Merkle tree - Wikipedia
archive_category: vector-databases
source_category: ai/rag
source_url: https://en.wikipedia.org/wiki/Merkle_tree
resource_id: blog:merkle-tree-wikipedia
local_vault_path: ai/rag/merkle-tree-wikipedia.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- paper
- rag
- semantic-scholar
- web-crawled
- youtube
selection_reason:
- Valuable developer reference
---

# Merkle tree - Wikipedia

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Structure & Construction**: A Merkle tree is a binary (or n-ary) tree where leaf nodes store cryptographic hashes of data blocks, and non-leaf nodes store hashes of their child nodes' hashes (e.g., `hash(parent) = hash(hash(child1) || hash(child2))`), enabling efficient integrity verification.

- **Efficiency & Security**: Verification of a leaf node requires computing `O(log n)` hashes (vs. `O(n)` for a hash list), leveraging logarithmic proof size for scalable integrity checks in distribut

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://en.wikipedia.org/wiki/Merkle_tree

## Local Vault File

Path: [merkle-tree-wikipedia.md](../../ai/rag/merkle-tree-wikipedia.md)
