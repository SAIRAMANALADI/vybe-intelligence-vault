---
title: VideoDecoder — TorchCodec 0.15 Documentation
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://meta-pytorch.org/torchcodec/stable/generated/torchcodec.decoders.VideoDecoder.html#torchcodec.decoders.VideoDecoder
published_at: '2026-08-08T21:28:57.550089+05:30'
collected_at: '2026-08-08T21:28:57.550102+05:30'
tags:
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:videodecoder-torchcodec-0-15-documentation
first_seen: '2026-08-08T21:28:57.550102+05:30'
last_seen: '2026-08-08T21:28:57.550102+05:30'
last_checked: '2026-08-08T21:28:57.550102+05:30'
health_score: 100
---

# VideoDecoder — TorchCodec 0.15 Documentation

## Summary

- **Input Flexibility**: Supports decoding from diverse sources including local/remote file paths, raw bytes/Tensor, or file-like objects with `read()`/`seek()` methods; `stream_index` selects a specific video stream (default: best stream).

- **Performance & Precision Controls**: Configurable via `num_ffmpeg_threads` (CPU decoding), `device` (GPU/NVDEC or CUDA fallback), `seek_mode` ("exact" for precise frame access or "approximate" for faster metadata-based seeking), and `custom_frame_mappings` (JSON metadata for optimized seeking).

- **Output Customization**: Decoded frames can be reordered via `dimension_order` ("NCHW"/"NHWC"), transformed in-flight using `transforms`, and output in `uint8` (0-255) or `float32` (0-1) formats with `output_dtype` ("auto" for SDR/HDR auto-detection).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-08T21:28:57.550089+05:30

## Related Tags

- reddit
- web-crawled
- youtube

## Source

Original source: https://meta-pytorch.org/torchcodec/stable/generated/torchcodec.decoders.VideoDecoder.html#torchcodec.decoders.VideoDecoder
