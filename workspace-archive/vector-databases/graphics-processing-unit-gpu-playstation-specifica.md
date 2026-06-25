---
title: Graphics Processing Unit (GPU) - PlayStation Specifications - psx-spx
archive_category: vector-databases
source_category: ai/rag
source_url: https://psx-spx.consoledev.net/graphicsprocessingunitgpu
resource_id: blog:graphics-processing-unit-gpu-playstation-specifica
local_vault_path: ai/rag/graphics-processing-unit-gpu-playstation-specifica.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- hackernews
- rag
- reddit
- web-crawled
- youtube
selection_reason:
- Valuable developer reference
---

# Graphics Processing Unit (GPU) - PlayStation Specifications - psx-spx

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Valuable developer reference

## Summary

- **GPU Command Structure & Execution**: GPU commands are 32-bit words processed via GP0/GP1 ports or DMA (DMA2 for rendering/VRAM, DMA6 for link lists). Top 3 bits of GP0 commands dictate command type (misc, polygon/line/rectangle primitives, VRAM blits, or environment commands), with additional parameters sent as subsequent 32-bit words. Execution begins after all parameters are received (e.g., vertices for polygons/lines).

- **VRAM Architecture & Addressing**: VRAM (1MB/2MB) is non-CPU-mappe

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://psx-spx.consoledev.net/graphicsprocessingunitgpu

## Local Vault File

Path: [graphics-processing-unit-gpu-playstation-specifica.md](../../ai/rag/graphics-processing-unit-gpu-playstation-specifica.md)
