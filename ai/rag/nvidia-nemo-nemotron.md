---
title: Nemotron/use-case-examples/nemotron-voice-rag-agent-example at main · NVIDIA-NeMo/Nemotron
  · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/NVIDIA-NeMo/Nemotron/tree/main/use-case-examples/nemotron-voice-rag-agent-example
published_at: '2026-08-01T14:13:17.300483+05:30'
collected_at: '2026-08-01T14:13:17.300496+05:30'
tags:
- agents
- frontend_ui
- meta-ai
- models
- paper
- rag
- web-crawled
- workflows
status: active
resource_id: github:nvidia-nemo/nemotron
first_seen: '2026-08-01T14:13:17.300496+05:30'
last_seen: '2026-08-01T14:13:17.300496+05:30'
last_checked: '2026-08-01T14:13:17.300496+05:30'
health_score: 100
---

# Nemotron/use-case-examples/nemotron-voice-rag-agent-example at main · NVIDIA-NeMo/Nemotron · GitHub

## Summary

- **Voice-to-Text & Multimodal RAG Pipeline**: Uses NVIDIA Nemotron Speech ASR (`nvidia/nemotron-speech-streaming-en-0.6b`) for real-time transcription and `nvidia/llama-nemotron-embed-vl-1b-v2` embeddings for multimodal (text + images) retrieval with cross-encoder reranking (`nvidia/llama-nemotron-rerank-vl-1b-v2`) for 6-7% accuracy improvement.

- **LangGraph ReAct Agent Architecture**: Implements an autonomous agent loop (`langgraph.prebuilt.create_react_agent`) with Nemotron-3-Nano-30B reasoning model, dynamically invoking RAG tools (vector search, image description via `nvidia/nemotron-nano-12b-v2-vl`) until sufficient context is gathered, all within a 1M-token context window.

- **Safety Guardrails & Deployment**: Enforces PII detection and content moderation via `nvidia/Llama-3.1-Nemotron-Safety-Guard-8B-v3` on all inputs/outputs; supports self-hosted (NeMo/Transformers) and NVIDIA API-based models with hardware requirements (≥24GB VRAM GPU, CUDA 11.8+).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T14:13:17.300483+05:30

## Related Tags

- agents
- frontend_ui
- meta-ai
- models
- paper
- rag
- web-crawled
- workflows

## Source

Original source: https://github.com/NVIDIA-NeMo/Nemotron/tree/main/use-case-examples/nemotron-voice-rag-agent-example
