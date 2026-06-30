---
title: 'Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/keras-team/keras/issues/18467
published_at: '2026-07-01T04:19:19.408406+05:30'
collected_at: '2026-07-01T04:19:19.408422+05:30'
tags:
- frontend_ui
- models
- rag
- reddit
- web-crawled
status: active
resource_id: github:keras-team/keras
first_seen: '2026-07-01T04:19:19.408422+05:30'
last_seen: '2026-07-01T04:19:19.408422+05:30'
last_checked: '2026-07-01T04:19:19.408422+05:30'
health_score: 100
---

# Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub

## Summary

- **Breaking Changes in Keras 3**: Major API cleanups and modernizations introduce incompatibilities with Keras 2, including default `jit_compile=True`, removal of `tf.keras` SavedModel support, and disallowed nested inputs/outputs in `Model()`.
- **Removed/Deprecated Features**: Keras 3 drops rarely used APIs (e.g., `compat.v1`, `RaggedTensor`, `LocallyConnected`/`Kernelized` layers) and enforces stricter naming rules (e.g., no `/` in layer/variable names).
- **Backend & Functional Shifts**: Keras 3 disables TF autograph in custom layers by default, prohibits TF ops on Keras tensors during functional model construction, and removes symbolic `add_loss()` while requiring explicit metric tracking for multioutput models.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-01T04:19:19.408406+05:30

## Related Tags

- frontend_ui
- models
- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/keras-team/keras/issues/18467
