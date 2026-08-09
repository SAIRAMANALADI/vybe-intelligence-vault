---
title: sentence-transformers/docs/sentence_transformer/pretrained_models.md at main
  · huggingface/sentence-transformers · GitHu
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/huggingface/sentence-transformers/blob/main/docs/sentence_transformer/pretrained_models.md
published_at: '2026-08-10T00:45:37.875468+05:30'
collected_at: '2026-08-10T00:45:37.875482+05:30'
tags:
- benchmark
- dataset
- leaderboard
- paper
- rag
- reddit
- web-crawled
- youtube
status: active
resource_id: github:huggingface/sentence-transformers
first_seen: '2026-08-10T00:45:37.875482+05:30'
last_seen: '2026-08-10T00:45:37.875482+05:30'
last_checked: '2026-08-10T00:45:37.875482+05:30'
health_score: 100
---

# sentence-transformers/docs/sentence_transformer/pretrained_models.md at main · huggingface/sentence-transformers · GitHu

## Summary

- **Model Availability & Usage**:
  - Pretrained Sentence Transformers models are available via the [Sentence Transformers Hugging Face organization](https://huggingface.co/sentence-transformers) (original models) and the [Hugging Face Hub](https://huggingface.co/models?library=sentence-transformers) (6,000+ community models), loaded via `SentenceTransformer("model-name")` and used for encoding sentences/queries into embeddings with similarity computation via `model.encode()` and `model.similarity()`.

- **Specialized Model Families**:
  - **Semantic Search Models**: Include Multi-QA models (trained on 215M QA pairs, optimized for dot-product/cosine similarity) and MSMARCO Passage Models (trained on Bing queries, evaluated on MSMARCO MRR@10 and semantic search benchmarks), with trade-offs between performance (e.g., `multi-qa-mpnet-base-dot-v1` at 57.60) and inference speed (e.g., `multi-qa-MiniLM-L6-dot-v1` at 18,000 queries/sec on GPU).

- **Multilingual & Multimodal Support**:
  - **Multilingual Models**: Support 50+ languages (e.g., `distiluse-base-multilingual-cased-v2`, `LaBSE` for 109 languages) for semantic similarity and bitext mining, with performance varying by language coverage.
  - **Multimodal Models**: Support joint embedding of text with images, audio, or video (e.g., CLIP-based `clip-ViT-L-14` with 75.4% Top-1 ImageNet accuracy, or Qwen3-VL-Embedding-2B for interleaved text-image inputs), verified via `model.modalities` and `model.supports()`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-10T00:45:37.875468+05:30

## Related Tags

- benchmark
- dataset
- leaderboard
- paper
- rag
- reddit
- web-crawled
- youtube

## Source

Original source: https://github.com/huggingface/sentence-transformers/blob/main/docs/sentence_transformer/pretrained_models.md
