---
title: Merkle tree - Wikipedia
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://en.wikipedia.org/wiki/Merkle_tree
published_at: '2026-06-30T20:27:30.837636+05:30'
collected_at: '2026-06-30T20:27:30.837650+05:30'
tags:
- hackernews
- paper
- rag
- semantic-scholar
- web-crawled
- youtube
status: active
resource_id: blog:merkle-tree-wikipedia
first_seen: '2026-06-30T20:27:30.837650+05:30'
last_seen: '2026-06-30T20:27:30.837650+05:30'
last_checked: '2026-06-30T20:27:30.837650+05:30'
health_score: 100
---

# Merkle tree - Wikipedia

## Summary

- **Structure & Construction**: A Merkle tree is a binary (or n-ary) tree where leaf nodes store cryptographic hashes of data blocks, and non-leaf nodes store hashes of their child nodes' hashes (e.g., `hash(parent) = hash(hash(child1) || hash(child2))`), enabling efficient integrity verification.

- **Efficiency & Security**: Verification of a leaf node requires computing `O(log n)` hashes (vs. `O(n)` for a hash list), leveraging logarithmic proof size for scalable integrity checks in distributed systems (e.g., P2P networks, blockchains).

- **Vulnerability & Mitigation**: The root hash alone does not encode tree depth, enabling second-preimage attacks; countermeasures include appending depth metadata or using collision-resistant hash functions (e.g., SHA-256) to ensure uniqueness.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-30T20:27:30.837636+05:30

## Related Tags

- hackernews
- paper
- rag
- semantic-scholar
- web-crawled
- youtube

## Source

Original source: https://en.wikipedia.org/wiki/Merkle_tree
