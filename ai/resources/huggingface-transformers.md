---
title: transformers/docs/source/en/model_doc/auto.md at main · huggingface/transformers
  · GitHub
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/huggingface/transformers/blob/main/docs/source/en/model_doc/auto.md
published_at: '2026-08-05T01:37:49.483652+05:30'
collected_at: '2026-08-05T01:37:49.483660+05:30'
tags:
- models
- web-crawled
- youtube
status: active
resource_id: github:huggingface/transformers
first_seen: '2026-08-05T01:37:49.483660+05:30'
last_seen: '2026-08-05T01:37:49.483660+05:30'
last_checked: '2026-08-05T01:37:49.483660+05:30'
health_score: 100
---

# transformers/docs/source/en/model_doc/auto.md at main · huggingface/transformers · GitHub

## Summary

- `AutoClasses` in Transformers automatically instantiate the correct model architecture (e.g., `BertModel`) from a pretrained model name/path via `from_pretrained()`, eliminating manual class selection.
- Custom models can be registered with `AutoConfig.register()` and `AutoModel.register()`, requiring `model_type` in `PreTrainedConfig` and `config_class` in the model class for proper linkage.
- Transformers provides specialized `AutoModel` variants (e.g., `AutoModelForCausalLM`, `AutoModelForImageClassification`) for task-specific architectures across NLP, vision, audio, multimodal, and time-series domains.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T01:37:49.483652+05:30

## Related Tags

- models
- web-crawled
- youtube

## Source

Original source: https://github.com/huggingface/transformers/blob/main/docs/source/en/model_doc/auto.md
