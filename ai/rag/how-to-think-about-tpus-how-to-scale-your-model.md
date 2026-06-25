---
title: How to Think About TPUs | How To Scale Your Model
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://jax-ml.github.io/scaling-book/tpus
published_at: '2026-06-23T09:55:58.007666+05:30'
collected_at: '2026-06-23T09:55:58.007673+05:30'
tags:
- deepmind
- meta-ai
- models
- rag
- web-crawled
- youtube
status: active
resource_id: blog:how-to-think-about-tpus-how-to-scale-your-model
first_seen: '2026-06-23T09:55:58.007673+05:30'
last_seen: '2026-06-23T09:55:58.007673+05:30'
last_checked: '2026-06-23T09:55:58.007673+05:30'
health_score: 100
---

# How to Think About TPUs | How To Scale Your Model

## Summary

- **TPU Architecture**: TPUs are specialized hardware accelerators optimized for matrix multiplication (MXU), featuring a systolic array (e.g., 128x128 or 256x256 in TPU v6e) with high compute throughput (e.g., 5e13 bf16 FLOPs/s per MXU at 1.5GHz on TPU v5e). They include a Vector Processing Unit (VPU) for general ops (e.g., ReLU, reductions) and Vector Memory (VMEM, 128 MiB on TPU v5e) for fast scratchpad access, while High Bandwidth Memory (HBM) stores tensors (e.g., 16 GiB on TPU v5e).

- **TPU Networking**: Chips are interconnected via ICI (Inter-Chip Interconnect) in a toroidal topology (2D for TPU v5e/v6e, 3D for TPU v4/v5p), enabling low-latency nearest-neighbor communication. Superpods scale to 16x16x16 (TPU v4) or 16x20x28 (TPU v5p) with optical wraparound links for reconfigurable topologies, while smaller topologies may lack wraparounds, doubling communication time.

- **Bandwidth Hierarchy**: TPUs prioritize compute-bound operations through pipelined memory transfers (HBM → VMEM → MXU/VPU → VMEM → HBM), with VMEM bandwidth (~22x higher than HBM) enabling efficient execution of low arithmetic intensity workloads. PCIe bandwidth (e.g., 16 GB/s for TPU v4) is a bottleneck for host ↔ HBM transfers, and ICI bandwidth (faster than DCN but slower than HBM) limits multi-chip communication.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-23T09:55:58.007666+05:30

## Related Tags

- deepmind
- meta-ai
- models
- rag
- web-crawled
- youtube

## Source

Original source: https://jax-ml.github.io/scaling-book/tpus
