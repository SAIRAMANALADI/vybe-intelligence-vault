---
title: Improve performance and UX for client-side AI | web.dev
archive_category: vector-databases
source_category: ai/rag
source_url: https://web.dev/articles/client-side-ai-performance
resource_id: blog:improve-performance-and-ux-for-client-side-ai-web
local_vault_path: ai/rag/improve-performance-and-ux-for-client-side-ai-web.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- hackernews
- models
- rag
- reddit
- threejs
- web-crawled
selection_reason:
- Valuable developer reference
---

# Improve performance and UX for client-side AI | web.dev

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **Model Selection & Optimization**: Choose task-specific models (e.g., BudouX at 9.4KB GZipped) over generic LLMs (e.g., Gemma 2B at 1.3GB) to balance size and accuracy; apply model shrinking techniques to reduce size while maintaining performance.

- **Hardware & Compatibility Checks**: Verify WebGPU support (fallback to Wasm if unavailable) and use `Navigator.hardwareConcurrency`/`deviceMemory` to rule out underpowered devices; explicitly cache models via Cache API to avoid redundant downloa

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://web.dev/articles/client-side-ai-performance

## Local Vault File

Path: [improve-performance-and-ux-for-client-side-ai-web.md](../../ai/rag/improve-performance-and-ux-for-client-side-ai-web.md)
