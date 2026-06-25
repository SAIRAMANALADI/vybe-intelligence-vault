---
title: Graphics Processing Unit (GPU) - PlayStation Specifications - psx-spx
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://psx-spx.consoledev.net/graphicsprocessingunitgpu
published_at: '2026-06-24T23:12:17.209896+05:30'
collected_at: '2026-06-24T23:12:17.209906+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:graphics-processing-unit-gpu-playstation-specifica
first_seen: '2026-06-24T23:12:17.209906+05:30'
last_seen: '2026-06-24T23:12:17.209906+05:30'
last_checked: '2026-06-24T23:12:17.209906+05:30'
health_score: 100
---

# Graphics Processing Unit (GPU) - PlayStation Specifications - psx-spx

## Summary

- **GPU Command Structure & Execution**: GPU commands are 32-bit words processed via GP0/GP1 ports or DMA (DMA2 for rendering/VRAM, DMA6 for link lists). Top 3 bits of GP0 commands dictate command type (misc, polygon/line/rectangle primitives, VRAM blits, or environment commands), with additional parameters sent as subsequent 32-bit words. Execution begins after all parameters are received (e.g., vertices for polygons/lines).

- **VRAM Architecture & Addressing**: VRAM (1MB/2MB) is non-CPU-mapped, used for framebuffers, texture pages, and palettes. Addressing is line-based (512/1024 lines) with horizontal units in 4/8/16/24-bit or halfwords. VRAM transfers (GP0 A0h/C0h) bypass clipping/transparency but lack texture cache benefits.

- **Polygon/Line/Rectangle Rendering**:
  - **Polygons**: Support flat/gouraud shading, texturing, and semi-transparency. Quads are split into two triangles; vertex order affects interpolation.
  - **Lines**: Flat/gouraud shading with polyline support (terminated by `0x50005000`). Overlapping vertices render as 1x1 rectangles.
  - **Rectangles**: Faster than polygons; no gouraud shading/dithering. Fixed sizes (1x1, 8x8, 16x16) or variable (max 1023x511). Textured rectangles require even UV/width and separate Texpage setup.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-24T23:12:17.209896+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://psx-spx.consoledev.net/graphicsprocessingunitgpu
