---
title: 'Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/keras-team/keras/issues/18467
published_at: '2026-08-11T01:03:05.094826+05:30'
collected_at: '2026-08-11T01:03:05.094840+05:30'
tags:
- frontend_ui
- models
- rag
- reddit
- web-crawled
status: active
resource_id: github:keras-team/keras
first_seen: '2026-08-11T01:03:05.094840+05:30'
last_seen: '2026-08-11T01:03:05.094840+05:30'
last_checked: '2026-08-11T01:03:05.094840+05:30'
health_score: 100
---

# Keras 2 <> Keras 3 incompatibilities · Issue #18467 · keras-team/keras · GitHub

## Summary

- **Breaking Changes in Keras 3**: Major incompatibilities include default `jit_compile=True`, removal of `tf.keras` SavedModel support, disallowance of deeply nested inputs/outputs, and disuse of `tf.Variable` as layer attributes.
- **Removed APIs**: Deprecated/experimental APIs (e.g., `compat.v1`, `experimental.preprocessing`), `RaggedTensor` support, locally-connected/kernelized layers, and legacy RNN arguments (`constants`, `time_major`).
- **Standalone Keras 3 Specifics**: Missing backend functions (e.g., `backend.random_normal`), removed layers (`AlphaDropout`, `ThresholdedReLU`), and functional model output handling changes (e.g., dict losses/metrics).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-11T01:03:05.094826+05:30

## Related Tags

- frontend_ui
- models
- rag
- reddit
- web-crawled

## Source

Original source: https://github.com/keras-team/keras/issues/18467
