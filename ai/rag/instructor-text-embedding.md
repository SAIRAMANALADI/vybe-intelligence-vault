---
title: Instructor Text Embedding
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://instructor-embedding.github.io/
published_at: '2026-08-09T03:29:29.665403+05:30'
collected_at: '2026-08-09T03:29:29.665420+05:30'
tags:
- agents
- benchmark
- dataset
- leaderboard
- meta-ai
- models
- paper
- rag
- reddit
- web-crawled
status: active
resource_id: blog:instructor-text-embedding
first_seen: '2026-08-09T03:29:29.665420+05:30'
last_seen: '2026-08-09T03:29:29.665420+05:30'
last_checked: '2026-08-09T03:29:29.665420+05:30'
health_score: 100
---

# Instructor Text Embedding

## Summary

- **Instruction-Finetuned Embeddings**: Introduces **INSTRUCTOR**, a single embedder model that generates task- and domain-specific text embeddings by incorporating natural language instructions (e.g., "Retrieve relevant reviews for this Amazon title"), achieving SOTA across **70 diverse tasks** (classification, retrieval, STS, etc.) without additional fine-tuning.

- **Training & Data**: Trained on **330 annotated tasks** (MEDI dataset) using contrastive loss, leveraging **Super-NaturalInstructions**, sentence-transformer data, and KILT; instruction tuning improves robustness to domain shifts and prompt paraphrasing, with performance gains scaling with model size and instruction detail.

- **Performance & Efficiency**: Outperforms models with **10x more parameters** (e.g., Sent-T5-XXL) by **3.4–4.1%**, while being **335M–1.5B parameters**; instruction-aware embeddings resolve ambiguities (e.g., sentiment differentiation) and enhance domain adaptation, validated via T-SNE and leaderboard evaluations (MTEB, Billboard, Prompt Retrieval).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-09T03:29:29.665403+05:30

## Related Tags

- agents
- benchmark
- dataset
- leaderboard
- meta-ai
- models
- paper
- rag
- reddit
- web-crawled

## Source

Original source: https://instructor-embedding.github.io/
