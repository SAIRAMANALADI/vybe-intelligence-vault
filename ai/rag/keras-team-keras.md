---
title: 'Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/keras-team/keras/issues/18467
published_at: '2026-06-25T16:44:27.163754+05:30'
collected_at: '2026-06-25T16:44:27.163762+05:30'
tags:
- frontend_ui
- models
- rag
- reddit
- web-crawled
status: active
resource_id: github:keras-team/keras
first_seen: '2026-06-25T16:44:27.163762+05:30'
last_seen: '2026-06-25T16:44:27.163762+05:30'
last_checked: '2026-06-25T16:44:27.163762+05:30'
health_score: 100
---

# Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub

## Summary

- **Breaking Changes in Keras 3**: Major updates include removal of deprecated/experimental APIs, default `jit_compile=True` (may require `jit_compile=False` for custom models), and disallowed `tf.Variable` usage as layer attributes (must use `self.add_weight()` or `keras.Variable`).
- **TF SavedModel Compatibility**: `model.save()` no longer supports TF SavedModel format; use `tf.save_model.save(model)`. Loading SavedModel via `keras.models.load_model()` is also unsupported; use `keras.layers.TFSMLayer(filepath, call_endpoint="serving_default")` instead.
- **Structural & Functional Restrictions**: Keras 3 enforces stricter input/output nesting limits, disallows `None` in nested tensor arguments, removes `RaggedTensor` support, and deprecates locally-connected/kernelized layers (requires manual reimplementation).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-25T16:44:27.163754+05:30

## Related Tags

- frontend_ui
- models
- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/keras-team/keras/issues/18467
