---
title: ragas/docs/getstarted/evals.md at main · vibrantlabsai/ragas · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/vibrantlabsai/ragas/blob/master/docs/getstarted/evals.md
published_at: '2026-06-28T22:12:32.299823+05:30'
collected_at: '2026-06-28T22:12:32.299840+05:30'
tags:
- anthropic
- benchmark
- dataset
- meta-ai
- mistral
- models
- openai
- rag
- web-crawled
- workflows
status: active
resource_id: github:vibrantlabsai/ragas
first_seen: '2026-06-28T22:12:32.299840+05:30'
last_seen: '2026-06-28T22:12:32.299840+05:30'
last_checked: '2026-06-28T22:12:32.299840+05:30'
health_score: 100
---

# ragas/docs/getstarted/evals.md at main · vibrantlabsai/ragas · GitHub

## Summary

- **Project Initialization**: Quickstart command generates a structured project (`rag_eval/`) with `evals.py` (evaluation workflow), `rag.py` (RAG/LLM app), and evaluation artifacts (datasets, experiments, logs) via `uvx ragas quickstart rag_eval`.

- **LLM Provider Integration**: Supports multiple providers (OpenAI, Anthropic, Google, Ollama) via `llm_factory` in `_init_clients()`, with API keys configured via environment variables and model-specific initialization.

- **Evaluation Workflow**: Uses `SingleTurnSample` to define test cases, queries the RAG system, evaluates responses against ground truth using pre-built metrics (e.g., `DiscreteMetric`), and saves results to CSV in `evals/experiments/`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T22:12:32.299823+05:30

## Related Tags

- anthropic
- benchmark
- dataset
- meta-ai
- mistral
- models
- openai
- rag
- web-crawled
- workflows

## Source

Original source: https://github.com/vibrantlabsai/ragas/blob/master/docs/getstarted/evals.md
