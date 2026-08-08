---
title: 'Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/keras-team/keras/issues/18467
published_at: '2026-08-08T15:37:04.089249+05:30'
collected_at: '2026-08-08T15:37:04.089263+05:30'
tags:
- frontend_ui
- models
- rag
- reddit
- web-crawled
status: active
resource_id: github:keras-team/keras
first_seen: '2026-08-08T15:37:04.089263+05:30'
last_seen: '2026-08-08T15:37:04.089263+05:30'
last_checked: '2026-08-08T15:37:04.089263+05:30'
health_score: 100
---

# Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub

## Summary

- Keras 3 introduces breaking changes from Keras 2, including default `jit_compile=True`, removal of `tf.keras` SavedModel save/load support, and disallowing deeply nested inputs/outputs in `Model()`.
- Deprecated APIs (e.g., `compat.v1`, experimental layers) are removed; replacements include updated import paths (e.g., `keras.layers` for preprocessing) and `keras.layers.TFSMLayer` for SavedModel reloading.
- Keras 3 drops support for `RaggedTensor`, `tf.Variable` layer attributes, symbolic `add_loss()`, and legacy RNN arguments (`constants`, `time_major`), requiring code migration to `keras.ops` or updated layer implementations.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-08T15:37:04.089249+05:30

## Related Tags

- frontend_ui
- models
- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/keras-team/keras/issues/18467
