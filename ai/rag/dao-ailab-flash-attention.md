---
title: Dao-AILab/flash-attention
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/Dao-AILab/flash-attention
collected_at: '2026-08-02T14:16:30.590271+05:30'
published_at: '2026-08-02T02:46:45Z'
tags:
- github-repo
- python
- rag
stars: 24595
language: Python
status: active
license: BSD-3-Clause
archived: false
created_at: '2022-05-19T21:22:06Z'
pushed_at: '2026-08-01T20:57:39Z'
resource_id: github:dao-ailab/flash-attention
first_seen: '2026-08-02T14:16:30.590271+05:30'
last_seen: '2026-08-02T14:16:30.590271+05:30'
last_checked: '2026-08-02T14:16:30.590271+05:30'
health_score: 100
---

# Dao-AILab/flash-attention

## Summary

- **Algorithm**: Implements *FlashAttention*, an exact attention mechanism leveraging tiling and recomputation to reduce memory reads/writes, achieving up to 3-5x speedup and 10-20x memory savings vs. standard attention in Transformers.

- **Key Optimizations**: Uses *online softmax* and *recomputation* during backward pass to minimize memory I/O, while maintaining numerical equivalence to vanilla attention (FP16/BF16 support).

- **Hardware Target**: Optimized for NVIDIA GPUs (A100/H100) via CUDA kernels, with support for variable sequence lengths and multi-head attention (MHA/MQA/GQA).

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: Dao-AILab
- Stars: 24595
- Forks: 2955
- Language: Python
- Topics: None
- Last Updated: 2026-08-02T02:46:45Z
- License: BSD-3-Clause
- Archived: No
- Created At: 2022-05-19T21:22:06Z
- Pushed At: 2026-08-01T20:57:39Z

## Possible Use Cases

- Learn implementation patterns
- Extract reusable components
- Study architecture
- Build similar project
- Add to skill file references

## Related Skills

- Frontend Development
- JavaScript
- HTML/CSS

## Source

Original source: https://github.com/Dao-AILab/flash-attention
