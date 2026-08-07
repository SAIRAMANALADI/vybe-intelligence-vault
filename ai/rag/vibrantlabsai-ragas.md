---
title: ragas/docs/getstarted/evals.md at main · vibrantlabsai/ragas · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/vibrantlabsai/ragas/blob/master/docs/getstarted/evals.md
published_at: '2026-08-05T09:10:16.381677+05:30'
collected_at: '2026-08-05T09:10:16.381687+05:30'
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
first_seen: '2026-08-05T09:10:16.381687+05:30'
last_seen: '2026-08-05T09:10:16.381687+05:30'
last_checked: '2026-08-05T09:10:16.381687+05:30'
health_score: 100
---

# ragas/docs/getstarted/evals.md at main · vibrantlabsai/ragas · GitHub

## Summary

- **Project Setup**: Quickstart command generates a structured project (`rag_eval/`) with `evals.py` (evaluation workflow), `rag.py` (RAG/LLM app), and artifacts in `evals/` (datasets, experiments, logs).

- **LLM Integration**: Supports multiple providers (OpenAI, Anthropic, Google, Ollama, custom) via `llm_factory` in `_init_clients()`, with async evaluation using pre-built metrics like `DiscreteMetric`.

- **Evaluation Workflow**: Loads test datasets (e.g., `SingleTurnSample`), queries the RAG system, evaluates responses against ground truth using metrics, and saves results to CSV in `evals/experiments/`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-05T09:10:16.381677+05:30

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
