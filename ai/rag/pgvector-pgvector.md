---
title: pgvector/pgvector
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/pgvector/pgvector
collected_at: '2026-09-02T10:22:00.422076+05:30'
published_at: '2026-09-02T02:01:59Z'
tags:
- c
- github-repo
- hackernews
- rag
- reddit
- workflows
stars: 22855
language: C
status: active
license: NOASSERTION
archived: false
created_at: '2021-04-20T21:13:52Z'
pushed_at: '2026-08-20T03:47:50Z'
resource_id: github:pgvector/pgvector
first_seen: '2026-09-02T10:22:00.422076+05:30'
last_seen: '2026-09-02T10:22:00.422076+05:30'
last_checked: '2026-09-02T10:22:00.422076+05:30'
health_score: 100
---

# pgvector/pgvector

## Summary

- **Purpose**: Extends PostgreSQL with vector similarity search capabilities via approximate nearest neighbor (ANN) algorithms, enabling efficient similarity queries on high-dimensional vectors.
- **Implementation**: Written in C as a PostgreSQL extension, supporting L2 distance, inner product, and cosine distance metrics with optimized indexing (e.g., HNSW, IVFFlat) for scalability.
- **Integration**: Seamlessly embeds into PostgreSQL workflows, allowing vector storage, indexing, and querying directly within SQL (e.g., `CREATE EXTENSION pgvector; SELECT * FROM items ORDER BY embedding <-> query_vector LIMIT 5;`).

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: pgvector
- Stars: 22855
- Forks: 1305
- Language: C
- Topics: approximate-nearest-neighbor-search, nearest-neighbor-search
- Last Updated: 2026-09-02T02:01:59Z
- License: NOASSERTION
- Archived: No
- Created At: 2021-04-20T21:13:52Z
- Pushed At: 2026-08-20T03:47:50Z

## Possible Use Cases

- Learn implementation patterns
- Extract reusable components
- Study architecture
- Build similar project
- Add to skill file references

## Related Skills

- Frontend Development
- JavaScript
- HTML/CSS

## Source

Original source: https://github.com/pgvector/pgvector
