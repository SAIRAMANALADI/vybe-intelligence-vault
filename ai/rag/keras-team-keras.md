---
title: 'Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/keras-team/keras/issues/18467
published_at: '2026-08-07T09:01:10.210945+05:30'
collected_at: '2026-08-07T09:01:10.210955+05:30'
tags:
- frontend_ui
- models
- rag
- reddit
- web-crawled
status: active
resource_id: github:keras-team/keras
first_seen: '2026-08-07T09:01:10.210955+05:30'
last_seen: '2026-08-07T09:01:10.210955+05:30'
last_checked: '2026-08-07T09:01:10.210955+05:30'
health_score: 100
---

# Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub

## Summary

- **Breaking Changes in Keras 3**: Keras 3 introduces major breaking changes from Keras 2, including removal of deprecated APIs (`compat.v1`, `experimental` namespaces), default `jit_compile=True`, unsupported TF SavedModel format for `model.save()`, and disallowed deeply nested inputs/outputs in `Model()`.

- **API and Behavior Incompatibilities**: Key incompatibilities include disallowance of `tf.Variable` as layer attributes (use `add_weight()` or `keras.Variable`), removal of symbolic `add_loss()`, unsupported `None` entries in nested tensor arguments, and removal of low-usage layers (e.g., locally-connected, kernelized layers).

- **Keras 3 Standalone vs. `tf.keras`**: Keras 3 standalone lacks certain backend functions (e.g., `backend.random_normal`) and removes layers like `AlphaDropout`, `ThresholdedReLU`, and `RandomHeight`/`RandomWidth`, which are retained in `tf.keras`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-07T09:01:10.210945+05:30

## Related Tags

- frontend_ui
- models
- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/keras-team/keras/issues/18467
