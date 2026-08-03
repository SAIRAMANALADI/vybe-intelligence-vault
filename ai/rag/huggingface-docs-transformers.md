---
title: PEFT · Hugging Face
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://huggingface.co/docs/transformers/main/en/main_classes/peft#transformers.integrations.PeftAdapterMixin.load_adapter
published_at: '2026-08-03T09:35:52.812996+05:30'
collected_at: '2026-08-03T09:35:52.813010+05:30'
tags:
- agents
- dataset
- leaderboard
- models
- rag
- web-crawled
- youtube
status: active
resource_id: huggingface:docs/transformers
first_seen: '2026-08-03T09:35:52.813010+05:30'
last_seen: '2026-08-03T09:35:52.813010+05:30'
last_checked: '2026-08-03T09:35:52.813010+05:30'
health_score: 100
---

# PEFT · Hugging Face

## Summary

- **PEFT Integration**: The `PeftAdapterMixin` class enables parameter-efficient fine-tuning (PEFT) methods (e.g., LoRA, IA³, AdaLoRA) in Transformers models by injecting trainable adapters into PyTorch modules, excluding prompt-based methods (e.g., prompt tuning) due to incompatibility with torch module injection.

- **Adapter Management**: Supports dynamic operations including loading adapters from local/Hugging Face Hub paths (`load_adapter`), adding trainable adapters (`add_adapter`), activating/deactivating adapters (`set_adapter`/`disable_adapters`), and retrieving adapter state dicts (`get_adapter_state_dict`), with multi-adapter support for combined inference.

- **Hotswapping & Optimization**: Implements adapter hotswapping (`enable_peft_hotswap`) to replace adapters in-place (e.g., for LoRA) without recompilation when ranks match or model is compiled, optimizing memory/performance while maintaining compatibility with `torch.compile`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-03T09:35:52.812996+05:30

## Related Tags

- agents
- dataset
- leaderboard
- models
- rag
- web-crawled
- youtube

## Source

Original source: https://huggingface.co/docs/transformers/main/en/main_classes/peft#transformers.integrations.PeftAdapterMixin.load_adapter
