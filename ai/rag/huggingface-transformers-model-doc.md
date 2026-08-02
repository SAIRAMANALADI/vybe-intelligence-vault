---
title: Auto Classes · Hugging Face
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://huggingface.co/transformers/model_doc/auto.html
published_at: '2026-08-02T14:15:16.765250+05:30'
collected_at: '2026-08-02T14:15:16.765266+05:30'
tags:
- agents
- benchmark
- dataset
- leaderboard
- meta-ai
- mistral
- models
- openai
- rag
- reddit
- threejs
- web-crawled
- youtube
status: active
resource_id: huggingface:transformers/model_doc
first_seen: '2026-08-02T14:15:16.765266+05:30'
last_seen: '2026-08-02T14:15:16.765266+05:30'
last_checked: '2026-08-02T14:15:16.765266+05:30'
health_score: 100
---

# Auto Classes · Hugging Face

## Summary

- **Auto Classes** dynamically instantiate the correct model, tokenizer, or config class from a pretrained model identifier using `from_pretrained()`, inferring architecture from model name/path (e.g., `AutoModel.from_pretrained("bert-base-cased")` → `BertModel`).

- **Extensibility** is supported via `AutoConfig.register()` and `AutoModel.register()`, enabling custom model classes (e.g., `NewModel`) to integrate with the Auto Classes by mapping to their respective config classes (`NewModelConfig`).

- **AutoConfig** loads model configurations dynamically, resolving architecture-specific configs (e.g., `BertConfig`, `RobertaConfig`) from the Hugging Face Hub or local paths, with optional overrides via `kwargs`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T14:15:16.765250+05:30

## Related Tags

- agents
- benchmark
- dataset
- leaderboard
- meta-ai
- mistral
- models
- openai
- rag
- reddit
- threejs
- web-crawled
- youtube

## Source

Original source: https://huggingface.co/transformers/model_doc/auto.html
