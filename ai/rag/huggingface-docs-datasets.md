---
title: Main classes · Hugging Face
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://huggingface.co/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset
published_at: '2026-08-09T03:27:28.033501+05:30'
collected_at: '2026-08-09T03:27:28.033524+05:30'
tags:
- agents
- benchmark
- dataset
- deepmind
- leaderboard
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: huggingface:docs/datasets
first_seen: '2026-08-09T03:27:28.033524+05:30'
last_seen: '2026-08-09T03:27:28.033524+05:30'
last_checked: '2026-08-09T03:27:28.033524+05:30'
health_score: 100
---

# Main classes · Hugging Face

## Summary

- **DatasetInfo Class**: Metadata container for datasets, including `description`, `citation`, `features`, `splits`, `version`, and size metrics (`download_size`, `dataset_size`). Supports serialization via `from_directory()` and `write_to_directory()`.

- **Dataset Class**: Arrow-backed dataset implementation with methods for column manipulation (`add_column()`), item insertion (`add_item()`), and file-based I/O (`from_file()`). Enforces schema via `features` and supports fingerprinting for caching.

- **Arrow Integration**: Datasets leverage Apache Arrow tables for efficient in-memory storage and processing, enabling zero-copy data sharing and compatibility with PyTorch/TensorFlow/JAX via optimized conversion utilities.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T03:27:28.033501+05:30

## Related Tags

- agents
- benchmark
- dataset
- deepmind
- leaderboard
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://huggingface.co/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset
