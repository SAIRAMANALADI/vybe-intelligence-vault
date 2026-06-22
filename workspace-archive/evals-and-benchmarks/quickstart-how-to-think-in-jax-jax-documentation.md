---
title: 'Quickstart: How to think in JAX — JAX documentation'
archive_category: evals-and-benchmarks
source_category: ai/resources
source_url: https://docs.jax.dev/en/latest/notebooks/thinking_in_jax.html
resource_id: blog:quickstart-how-to-think-in-jax-jax-documentation
local_vault_path: ai/resources/quickstart-how-to-think-in-jax-jax-documentation.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: benchmark
importance: medium
tags:
- benchmark
- hackernews
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Quickstart: How to think in JAX — JAX documentation

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: benchmark
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **JAX core features**: Provides NumPy-like API with automatic differentiation (`jax.grad`), JIT compilation via XLA (`jax.jit`), and auto-vectorization (`jax.vmap`) for high-performance ML research on CPU/GPU/TPU.
- **Immutable JAX arrays**: JAX arrays (`jax.Array`) are immutable and statically typed, requiring functional updates (e.g., `x.at[idx].set(y)`) instead of in-place modifications like NumPy.
- **Transformation composability**: JAX transformations (`jit`, `grad`, `vmap`, etc.) compose

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://docs.jax.dev/en/latest/notebooks/thinking_in_jax.html

## Local Vault File

Path: [quickstart-how-to-think-in-jax-jax-documentation.md](../../ai/resources/quickstart-how-to-think-in-jax-jax-documentation.md)
