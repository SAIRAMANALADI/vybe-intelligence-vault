---
title: 'Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/keras-team/keras/issues/18467
published_at: '2026-07-21T22:21:26.638653+05:30'
collected_at: '2026-07-21T22:21:26.638669+05:30'
tags:
- frontend_ui
- models
- rag
- reddit
- web-crawled
status: active
resource_id: github:keras-team/keras
first_seen: '2026-07-21T22:21:26.638669+05:30'
last_seen: '2026-07-21T22:21:26.638669+05:30'
last_checked: '2026-07-21T22:21:26.638669+05:30'
health_score: 100
---

# Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub

## Summary

- **Breaking Changes in Keras 3**: Major API cleanups include removal of deprecated/experimental APIs (e.g., `compat.v1`, `experimental` layers), default `jit_compile=True` (may require `jit_compile=False` for custom ops), and disallowed TF SavedModel save/load via `model.save()`/`load_model()` (use `tf.save_model.save()` or `TFSMLayer` instead).

- **Structural/Behavioral Incompatibilities**: Keras 3 enforces stricter input/output nesting (≤1 level), disables TF autograph in `Layer.call()` (requires `@tf.function` or `keras.ops` ops), and removes support for `tf.Variable` as layer attributes (use `add_weight()` or `keras.Variable`).

- **Removed/Deprecated Features**: Eliminated low-usage APIs (e.g., `RaggedTensor`, `LocallyConnected`/`Kernelized` layers, `metrics`/`dynamic` layer attributes) and deprecated arguments (e.g., `constants`, `time_major` in RNNs, `reset_metrics`). Standalone Keras 3 also lacks backend functions like `backend.random_normal`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T22:21:26.638653+05:30

## Related Tags

- frontend_ui
- models
- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/keras-team/keras/issues/18467
