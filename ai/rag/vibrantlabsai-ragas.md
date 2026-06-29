---
title: ragas/docs/getstarted/evals.md at main · vibrantlabsai/ragas · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/vibrantlabsai/ragas/blob/master/docs/getstarted/evals.md
published_at: '2026-06-29T10:37:18.098862+05:30'
collected_at: '2026-06-29T10:37:18.098875+05:30'
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
first_seen: '2026-06-29T10:37:18.098875+05:30'
last_seen: '2026-06-29T10:37:18.098875+05:30'
last_checked: '2026-06-29T10:37:18.098875+05:30'
health_score: 100
---

# ragas/docs/getstarted/evals.md at main · vibrantlabsai/ragas · GitHub

## Summary

- **Project Setup**: The `ragas quickstart` command generates a structured project (`rag_eval/`) with `evals.py` (evaluation workflow), `rag.py` (RAG/LLM application), and directories for datasets, experiments, and logs.

- **LLM Integration**: Supports multiple providers (OpenAI, Anthropic, Google, Ollama) via `llm_factory` in `evals.py`, allowing flexible model swapping with minimal code changes.

- **Evaluation Workflow**: Uses `SingleTurnSample` to define test cases, queries the RAG system, evaluates responses against ground truth using metrics (e.g., `DiscreteMetric`), and saves results to CSV in `evals/experiments/`.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-29T10:37:18.098862+05:30

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
