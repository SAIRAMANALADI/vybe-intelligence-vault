---
title: Building best practices | Docker Docs
archive_category: evals-and-benchmarks
source_category: ai/rag
source_url: https://docs.docker.com/develop/dev-best-practices
resource_id: blog:building-best-practices-docker-docs
local_vault_path: ai/rag/building-best-practices-docker-docs.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- benchmark
- rag
- reddit
- scripts
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Building best practices | Docker Docs

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Multi-stage builds**: Optimize final image size by separating build and runtime dependencies; enables parallel execution and reduces final artifact bloat.
- **Pin base image versions**: Use digest references (`@sha256:...`) instead of mutable tags to ensure reproducible builds and supply chain integrity.
- **Leverage build cache strategically**: Order Dockerfile instructions to maximize cache reuse while invalidating selectively (e.g., `RUN` after `COPY`) to balance speed and consistency.

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://docs.docker.com/develop/dev-best-practices

## Local Vault File

Path: [building-best-practices-docker-docs.md](../../ai/rag/building-best-practices-docker-docs.md)
