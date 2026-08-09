---
title: Get Started
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://pytorch.org/get-started/locally/
published_at: '2026-08-09T21:33:03.993393+05:30'
collected_at: '2026-08-09T21:33:03.993409+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:get-started
first_seen: '2026-08-09T21:33:03.993409+05:30'
last_seen: '2026-08-09T21:33:03.993409+05:30'
last_checked: '2026-08-09T21:33:03.993409+05:30'
health_score: 100
---

# Get Started

## Summary

- **PyTorch Installation Requirements**: PyTorch requires Python 3.10+ for stable builds; macOS 10.15+, Linux (glibc ≥2.28), or Windows 10+; and `pip` for package management. GPU support (CUDA/ROCm) is optional but recommended for acceleration.

- **Installation Commands**: For Linux (CUDA 11.8), use `pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118`. For macOS/Windows (CPU-only), use `pip3 install torch torchvision`.

- **Verification & GPU Check**: Post-installation, validate with `torch.rand(5,3)` output; check GPU access via `torch.cuda.is_available()` (returns `True` if CUDA/ROCm is enabled and functional).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T21:33:03.993393+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://pytorch.org/get-started/locally/
