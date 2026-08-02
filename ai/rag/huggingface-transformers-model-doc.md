---
title: Auto Classes · Hugging Face
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://huggingface.co/transformers/model_doc/auto.html
published_at: '2026-08-02T19:31:17.107287+05:30'
collected_at: '2026-08-02T19:31:17.107304+05:30'
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
first_seen: '2026-08-02T19:31:17.107304+05:30'
last_seen: '2026-08-02T19:31:17.107304+05:30'
last_checked: '2026-08-02T19:31:17.107304+05:30'
health_score: 100
---

# Auto Classes · Hugging Face

## Summary

- **Auto Classes** in Transformers dynamically instantiate the correct model, tokenizer, or config class from a pretrained model identifier using `from_pretrained()`, inferring architecture from metadata or path.

- **Extensibility** is supported via `AutoConfig.register()` and `AutoModel.register()`, enabling custom architectures by mapping `NewModelConfig` to `NewModel` for seamless integration with existing Auto Classes.

- **AutoConfig** resolves model-specific configurations (e.g., `BertConfig`, `BartConfig`) from pretrained weights, with fallback to pattern matching if `model_type` is unspecified, and supports advanced kwargs for cache, proxies, and revision control.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T19:31:17.107287+05:30

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
