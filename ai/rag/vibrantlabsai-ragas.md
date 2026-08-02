---
title: ragas/docs/getstarted/evals.md at main · vibrantlabsai/ragas · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/vibrantlabsai/ragas/blob/master/docs/getstarted/evals.md
published_at: '2026-08-02T19:30:36.571017+05:30'
collected_at: '2026-08-02T19:30:36.571043+05:30'
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
first_seen: '2026-08-02T19:30:36.571043+05:30'
last_seen: '2026-08-02T19:30:36.571043+05:30'
last_checked: '2026-08-02T19:30:36.571043+05:30'
health_score: 100
---

# ragas/docs/getstarted/evals.md at main · vibrantlabsai/ragas · GitHub

## Summary

- **Project Setup**: The `ragas quickstart` command generates a structured project (`rag_eval/`) with key files (`evals.py`, `rag.py`) and directories (`evals/datasets/`, `evals/experiments/`, `evals/logs/`) for evaluation workflows, RAG/LLM application code, and results storage.

- **LLM Provider Integration**: Supports multiple LLM providers (OpenAI, Anthropic, Google, Ollama, or custom) via `llm_factory` in `_init_clients()`, enabling flexible API key configuration and model selection (e.g., `gpt-4o`, `claude-3-5-sonnet-20241022`).

- **Evaluation Workflow**: Uses `SingleTurnSample` and `EvaluationDataset` to load test cases, query the RAG system, evaluate responses against ground truth using pre-built metrics (e.g., `DiscreteMetric` for aspect critique), and save results to CSV in `evals/experiments/`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-02T19:30:36.571017+05:30

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
