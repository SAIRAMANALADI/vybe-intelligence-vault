---
title: Indexing on ndarrays — NumPy v2.4 Manual
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://numpy.org/doc/stable/user/basics.indexing.html
published_at: '2026-06-24T23:18:12.530241+05:30'
collected_at: '2026-06-24T23:18:12.530254+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:indexing-on-ndarrays-numpy-v2-4-manual
first_seen: '2026-06-24T23:18:12.530254+05:30'
last_seen: '2026-06-24T23:18:12.530254+05:30'
last_checked: '2026-06-24T23:18:12.530254+05:30'
health_score: 100
---

# Indexing on ndarrays — NumPy v2.4 Manual

## Summary

- **Basic Indexing**: NumPy supports 0-based indexing with negative indices allowed; multidimensional arrays can be indexed using comma-separated indices (e.g., `x[1, 3]`). Slicing (`start:stop:step`) is supported per dimension, returning views (not copies) of the original array, with default values for omitted indices (`0` for start when step > 0, `n-1` for start when step < 0, etc.).

- **Advanced Indexing**: Triggered by non-tuple sequences, `ndarray` (integer/bool), or tuples containing such objects; always returns a copy (unlike basic slicing). Integer array indexing selects arbitrary elements (e.g., `x[np.array([0, 2, 4])]`), while Boolean indexing uses a mask (e.g., `x[x > 5]`). Broadcasting rules apply to index arrays, and mismatched shapes raise `IndexError`.

- **Dimensional Tools**: `Ellipsis` (`...`) expands to fill missing dimensions (e.g., `x[..., 0]`), while `newaxis` (or `None`) inserts a new axis (e.g., `x[:, np.newaxis, :]`). Advanced indexing with multidimensional index arrays follows broadcasted iteration rules (e.g., `y[ind1, ind2]` where `ind1` and `ind2` are broadcastable arrays).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-24T23:18:12.530241+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://numpy.org/doc/stable/user/basics.indexing.html
