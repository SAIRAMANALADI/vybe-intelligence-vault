---
title: Python | Weaviate Documentation
archive_category: inference-local-llm
source_category: ai/rag
source_url: https://weaviate.io/developers/weaviate/client-libraries/python
resource_id: blog:python-weaviate-documentation
local_vault_path: ai/rag/python-weaviate-documentation.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- hackernews
- meta-ai
- models
- rag
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Python | Weaviate Documentation

## Why This Is In The Archive

- Matched archive category: `Inference and Local LLM`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Version & Compatibility**: Weaviate Python client `v4.22.0` requires Weaviate `1.23.7+`; Docker deployments must expose gRPC port `50051` for RPC communication.
- **Installation & Async Support**: Installed via `pip install -U weaviate-client` (or `--pre` for beta), with async API available via `WeaviateAsyncClient` (v4.7.0+).
- **Vectorization & Error Handling**: Uses `Configure.Vectors.text2vec_ollama()` for embedding; batch imports track errors (`batch.number_errors`) and expose failed ob

## Use Cases

- Private AI execution
- Offline model serving
- Quantization setups

## Source

Original source URL: https://weaviate.io/developers/weaviate/client-libraries/python

## Local Vault File

Path: [python-weaviate-documentation.md](../../ai/rag/python-weaviate-documentation.md)
