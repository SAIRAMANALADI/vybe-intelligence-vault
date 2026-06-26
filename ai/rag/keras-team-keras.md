---
title: 'Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/keras-team/keras/issues/18467
published_at: '2026-06-26T15:30:47.071152+05:30'
collected_at: '2026-06-26T15:30:47.071168+05:30'
tags:
- frontend_ui
- models
- rag
- reddit
- web-crawled
status: active
resource_id: github:keras-team/keras
first_seen: '2026-06-26T15:30:47.071168+05:30'
last_seen: '2026-06-26T15:30:47.071168+05:30'
last_checked: '2026-06-26T15:30:47.071168+05:30'
health_score: 100
---

# Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub

## Summary

- **Breaking Changes in Keras 3**: Keras 3 introduces major breaking changes from Keras 2, including removal of deprecated APIs (`compat.v1`, `experimental` namespaces), default `jit_compile=True`, disallowed `tf.Variable` usage as layer attributes, and unsupported `None` entries in nested tensor arguments.

- **TF-Specific Incompatibilities**: Keras 3 drops support for saving/loading TF SavedModel format via `model.save()`/`keras.models.load_model()`, requires `tf.save_model.save()` and `keras.layers.TFSMLayer` instead, and enforces stricter input/output nesting rules in functional models.

- **Removed Features & Workarounds**: Keras 3 removes low-usage layers (`LocallyConnected`, `Kernelized`, `AlphaDropout`, `ThresholdedReLU`) and RNN arguments (`constants`, `time_major`), while requiring manual migration for niche cases (e.g., copying layer implementations or using `keras.ops` for TF ops).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T15:30:47.071152+05:30

## Related Tags

- frontend_ui
- models
- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/keras-team/keras/issues/18467
