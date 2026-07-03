---
title: 'Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub'
archive_category: vector-databases
source_category: ai/rag
source_url: https://github.com/keras-team/keras/issues/18467
resource_id: github:keras-team/keras
local_vault_path: ai/rag/keras-team-keras.md
quality_score: 70
archive_score: 75
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- benchmark
- frontend_ui
- models
- rag
- reddit
- web-crawled
selection_reason:
- Active open-source repository
---

# Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 75 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Active open-source repository

## Summary

- **Breaking Changes in Keras 3**: Major API cleanups and modernizations introduce incompatibilities with Keras 2, including removal of deprecated APIs (`compat.v1`, `experimental` namespaces), default `jit_compile=True`, disallowed `TF SavedModel` save/load via `model.save()`/`load_model()`, and stricter input/output nesting rules.
- **TensorFlow-Specific Adjustments**: Keras 3 disables TF autograph in custom layers by default, disallows TF ops on Keras tensors during functional model construct

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://github.com/keras-team/keras/issues/18467

## Local Vault File

Path: [keras-team-keras.md](../../ai/rag/keras-team-keras.md)
