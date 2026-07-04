---
title: Prompt engineering | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/prompt-engineering
published_at: '2026-07-04T19:33:10.898354+05:30'
collected_at: '2026-07-04T19:33:10.898369+05:30'
tags:
- agents
- benchmark
- frontend_ui
- hackernews
- models
- openai
- paper
- rag
- reddit
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:prompt-engineering-openai-api
first_seen: '2026-07-04T19:33:10.898369+05:30'
last_seen: '2026-07-04T19:33:10.898369+05:30'
last_checked: '2026-07-04T19:33:10.898369+05:30'
health_score: 100
---

# Prompt engineering | OpenAI API

## Summary

- OpenAI's Responses API and Chat Completions API support generating text, structured JSON, and code from prompts, with responses structured in `output` or `choices` arrays containing message objects and metadata (e.g., `role`, `content`, `finish_reason`).

- Structured Outputs enable forcing JSON-formatted responses via schema validation, while reasoning models (e.g., `gpt-5.5`) generate internal chain-of-thought before final output, trading speed for interpretability.

- Message roles (`developer`, `user`, `assistant`) enforce priority in instruction hierarchy, with `developer` messages taking precedence; `instructions` parameter provides high-level guidance overriding `input` content.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-04T19:33:10.898354+05:30

## Related Tags

- agents
- benchmark
- frontend_ui
- hackernews
- models
- openai
- paper
- rag
- reddit
- web-crawled
- workflows
- youtube

## Source

Original source: https://platform.openai.com/docs/guides/prompt-engineering
