---
title: VideoDecoder — TorchCodec 0.15 Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://meta-pytorch.org/torchcodec/stable/generated/torchcodec.decoders.VideoDecoder.html#torchcodec.decoders.VideoDecoder
published_at: '2026-08-09T21:32:57.806826+05:30'
collected_at: '2026-08-09T21:32:57.806842+05:30'
tags:
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:videodecoder-torchcodec-0-15-documentation
first_seen: '2026-08-09T21:32:57.806842+05:30'
last_seen: '2026-08-09T21:32:57.806842+05:30'
last_checked: '2026-08-09T21:32:57.806842+05:30'
health_score: 100
---

# VideoDecoder — TorchCodec 0.15 Documentation

## Summary

- **Input Flexibility**: Supports decoding from diverse sources including local/remote file paths (`str`, `Path`), raw bytes/`torch.Tensor`, or file-like objects (with `read`/`seek` methods), enabling streaming or direct memory-based access.

- **Performance & Precision Tuning**: Configurable via `num_ffmpeg_threads` (CPU multi-threading), `device` (GPU acceleration via `nvdec`/CUDA), and `seek_mode` (`exact` for frame-precise access with initial scan or `approximate` for faster metadata-based seeking).

- **Output Customization**: Decoded frames can be reordered (`NCHW`/`NHWC`), transformed in-stream (via `DecoderTransform`/`torchvision` transforms), and output in `uint8` (0-255) or `float32` (0-1) formats, with auto-detection for HDR/SDR content (`output_dtype="auto"`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-09T21:32:57.806826+05:30

## Related Tags

- reddit
- web-crawled
- youtube

## Source

Original source: https://meta-pytorch.org/torchcodec/stable/generated/torchcodec.decoders.VideoDecoder.html#torchcodec.decoders.VideoDecoder
