---
title: SciPy Roadmap — SciPy v1.19.0.dev Manual
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://scipy.github.io/devdocs/dev/roadmap.html
published_at: '2026-06-22T11:29:46.038684+05:30'
collected_at: '2026-06-22T11:29:46.038696+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:scipy-roadmap-scipy-v1-19-0-dev-manual
first_seen: '2026-06-22T11:29:46.038696+05:30'
last_seen: '2026-06-22T11:29:46.038696+05:30'
last_checked: '2026-06-22T11:29:46.038696+05:30'
health_score: 100
---

# SciPy Roadmap — SciPy v1.19.0.dev Manual

## Summary

- **Distributed/GPU Array Support**: Leverage NumPy's `__array_function__` and `__array_ufunc__` protocols to enable SciPy functions to accept distributed (e.g., `dask.array.Array`) and GPU arrays (e.g., `cupy.ndarray`). Map and improve algorithm compatibility and performance for these array types.

- **Performance Enhancements**: Adopt multiprocessing via the `workers` keyword API, integrate Numba’s `@njit` for JIT compilation, and optimize specific functions (e.g., in `scipy.optimize` and `scipy.interpolate`) for speed and memory efficiency.

- **Sparse Arrays Expansion**: Replace sparse matrices with sparse arrays (COO, CSR, DOK formats) supporting nD arrays, broadcasting, and NumPy-like behavior. Plan deprecation of sparse matrices and collaborate with NumPy on `numpy.matrix` removal.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:29:46.038684+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://scipy.github.io/devdocs/dev/roadmap.html
