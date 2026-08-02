---
title: ragas/docs/getstarted/evals.md at main · vibrantlabsai/ragas · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/vibrantlabsai/ragas/blob/master/docs/getstarted/evals.md
published_at: '2026-08-02T09:29:09.278914+05:30'
collected_at: '2026-08-02T09:29:09.278927+05:30'
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
first_seen: '2026-08-02T09:29:09.278927+05:30'
last_seen: '2026-08-02T09:29:09.278927+05:30'
last_checked: '2026-08-02T09:29:09.278927+05:30'
health_score: 100
---

# ragas/docs/getstarted/evals.md at main · vibrantlabsai/ragas · GitHub

## Summary

- **Quickstart Setup**: The `ragas quickstart` command generates a modular project with `evals.py` (evaluation workflow), `rag.py` (RAG/LLM application), and structured directories (`datasets/`, `experiments/`, `logs/`) for test data, results, and logs.

- **LLM Provider Integration**: Supports multiple LLM providers (OpenAI, Anthropic, Google, Ollama, custom) via `llm_factory` in `_init_clients()`, with provider-specific API key configurations and model selection.

- **Evaluation Workflow**: Uses `SingleTurnSample` to define test cases, queries the RAG system for responses, evaluates against ground truth using pre-built metrics (e.g., `DiscreteMetric`), and saves results to CSV in `evals/experiments/`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T09:29:09.278914+05:30

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
