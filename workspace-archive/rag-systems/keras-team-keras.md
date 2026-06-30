---
title: 'Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub'
archive_category: rag-systems
source_category: ai/rag
source_url: https://github.com/keras-team/keras/issues/18467
resource_id: github:keras-team/keras
local_vault_path: ai/rag/keras-team-keras.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- frontend_ui
- models
- rag
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Active open-source repository
---

# Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Active open-source repository

## Summary

- **Breaking Changes in Keras 3**: Major API cleanups and modernizations introduce incompatibilities with Keras 2, including default `jit_compile=True`, removal of `tf.keras` SavedModel support, and disallowed nested inputs/outputs in `Model()`.
- **Removed/Deprecated Features**: Keras 3 drops rarely used APIs (e.g., `compat.v1`, `RaggedTensor`, `LocallyConnected`/`Kernelized` layers) and enforces stricter naming rules (e.g., no `/` in layer/variable names).
- **Backend & Functional Shifts**: Ke

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://github.com/keras-team/keras/issues/18467

## Local Vault File

Path: [keras-team-keras.md](../../ai/rag/keras-team-keras.md)
