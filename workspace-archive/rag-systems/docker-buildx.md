---
title: Releases · docker/buildx · GitHub
archive_category: rag-systems
source_category: ai/rag
source_url: https://github.com/docker/buildx/releases
resource_id: github:docker/buildx
local_vault_path: ai/rag/docker-buildx.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- benchmark
- frontend_ui
- rag
- reddit
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Active open-source repository
---

# Releases · docker/buildx · GitHub

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- **Local Output Mode Enhancement**: Introduced `mode=delete` for build/bake commands to replace destination directories with build results (requires BuildKit v0.31.0+ for multi-platform exports and `--allow=buildx.local.delete` for non-subdirectory paths).

- **Source Policy & Network Proxy Support**: Added exec proxy feature in BuildKit v0.31.0+ to capture network traffic of build steps; requires `caps: { "exec.proxy": true }` in Dockerfile.rego policies and `--buildkitd-flags '--proxy-network

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://github.com/docker/buildx/releases

## Local Vault File

Path: [docker-buildx.md](../../ai/rag/docker-buildx.md)
