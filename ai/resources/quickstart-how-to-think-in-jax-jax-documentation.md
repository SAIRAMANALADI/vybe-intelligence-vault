---
title: 'Quickstart: How to think in JAX — JAX documentation'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.jax.dev/en/latest/notebooks/thinking_in_jax.html
published_at: '2026-06-22T10:33:18.971207+05:30'
collected_at: '2026-06-22T10:33:18.971219+05:30'
tags:
- benchmark
- hackernews
- web-crawled
status: active
resource_id: blog:quickstart-how-to-think-in-jax-jax-documentation
first_seen: '2026-06-22T10:33:18.971219+05:30'
last_seen: '2026-06-22T10:33:18.971219+05:30'
last_checked: '2026-06-22T10:33:18.971219+05:30'
health_score: 100
---

# Quickstart: How to think in JAX — JAX documentation

## Summary

- **JAX core features**: Provides NumPy-like API with automatic differentiation (`jax.grad`), JIT compilation via XLA (`jax.jit`), and auto-vectorization (`jax.vmap`) for high-performance ML research on CPU/GPU/TPU.
- **Immutable JAX arrays**: JAX arrays (`jax.Array`) are immutable and statically typed, requiring functional updates (e.g., `x.at[idx].set(y)`) instead of in-place modifications like NumPy.
- **Transformation composability**: JAX transformations (`jit`, `grad`, `vmap`, etc.) compose arbitrarily, enabling efficient, optimized pipelines (e.g., `jit(grad(f))` or `jacfwd(jacrev(f))` for Hessians).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T10:33:18.971207+05:30

## Related Tags

- benchmark
- hackernews
- web-crawled

## Source

Original source: https://docs.jax.dev/en/latest/notebooks/thinking_in_jax.html
