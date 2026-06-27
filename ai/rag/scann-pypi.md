---
title: scann · PyPI
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pypi.org/project/scann/
published_at: '2026-06-28T03:56:15.200447+05:30'
collected_at: '2026-06-28T03:56:15.200462+05:30'
tags:
- benchmark
- dataset
- hackernews
- models
- rag
- reddit
- web-crawled
status: active
resource_id: blog:scann-pypi
first_seen: '2026-06-28T03:56:15.200462+05:30'
last_seen: '2026-06-28T03:56:15.200462+05:30'
last_checked: '2026-06-28T03:56:15.200462+05:30'
health_score: 100
---

# scann · PyPI

## Summary

- **Optimized Nearest Neighbor Search**: ScaNN implements anisotropic vector quantization and search space pruning for **Maximum Inner Product Search (MIPS)** and supports Euclidean distance, achieving state-of-the-art performance on benchmarks like `glove-100-angular`.

- **Hardware-Specific Optimization**: Requires **AVX/FMA** for x86 and **NEON** for ARM; builds leverage **Bazel** with thinLTO and AVX flags (`-mavx --mfma` for x86, `-march=armv8-a+simd` for ARM).

- **TensorFlow Integration**: Optional TensorFlow bindings (`scann[tf]`) available; TensorFlow ops are disabled by default in v1.4.0+ and require explicit installation.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T03:56:15.200447+05:30

## Related Tags

- benchmark
- dataset
- hackernews
- models
- rag
- reddit
- web-crawled

## Source

Original source: https://pypi.org/project/scann/
