---
title: 'Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/keras-team/keras/issues/18467
published_at: '2026-07-04T01:28:29.198647+05:30'
collected_at: '2026-07-04T01:28:29.198660+05:30'
tags:
- benchmark
- frontend_ui
- models
- rag
- reddit
- web-crawled
status: active
resource_id: github:keras-team/keras
first_seen: '2026-07-04T01:28:29.198660+05:30'
last_seen: '2026-07-04T01:28:29.198660+05:30'
last_checked: '2026-07-04T01:28:29.198660+05:30'
health_score: 100
---

# Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub

## Summary

- **Breaking Changes in Keras 3**: Major API cleanups and modernizations introduce incompatibilities with Keras 2, including removal of deprecated APIs (`compat.v1`, `experimental` namespaces), default `jit_compile=True`, disallowed `TF SavedModel` save/load via `model.save()`/`load_model()`, and stricter input/output nesting rules.
- **TensorFlow-Specific Adjustments**: Keras 3 disables TF autograph in custom layers by default, disallows TF ops on Keras tensors during functional model construction, and deprecates `tf.Variable` as layer attributes (replaced with `add_weight()` or `keras.Variable`).
- **Removed Features/Attributes**: Keras 3 eliminates niche features (e.g., `RaggedTensor` support, `AlphaDropout`, `ThresholdedReLU`, `RandomHeight/Width`), deprecated layer attributes (`metrics`, `dynamic`), and legacy RNN arguments (`constants`, `time_major`). Multioutput model evaluation and metric tracking also require explicit configuration.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T01:28:29.198647+05:30

## Related Tags

- benchmark
- frontend_ui
- models
- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/keras-team/keras/issues/18467
