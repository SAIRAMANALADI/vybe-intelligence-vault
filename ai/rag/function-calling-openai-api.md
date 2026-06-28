---
title: Function calling | OpenAI API
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://platform.openai.com/docs/guides/gpt/function-calling
published_at: '2026-06-28T10:27:18.322322+05:30'
collected_at: '2026-06-28T10:27:18.322334+05:30'
tags:
- agents
- models
- openai
- rag
- web-crawled
status: active
resource_id: blog:function-calling-openai-api
first_seen: '2026-06-28T10:27:18.322334+05:30'
last_seen: '2026-06-28T10:27:18.322334+05:30'
last_checked: '2026-06-28T10:27:18.322334+05:30'
health_score: 100
---

# Function calling | OpenAI API

## Summary

- **Tool Calling Architecture**: Enables models to interface with external systems via structured function tools (JSON schema) or custom tools (free-form text), facilitating multi-step interactions where the model requests tool execution, receives outputs, and generates final responses.

- **Five-Step Flow**: The process involves (1) providing tools in the API request, (2) receiving a tool call from the model, (3) executing the tool logic in the application, (4) sending the tool output back to the model, and (5) generating the final response or additional tool calls.

- **Function Definition Schema**: Tools are defined with `type: "function"`, `name`, `description`, `parameters` (JSON schema), and `strict` mode; example includes `get_weather` with required `location` and `units` parameters, supporting strict validation and rich schema features like enums and nested objects.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T10:27:18.322322+05:30

## Related Tags

- agents
- models
- openai
- rag
- web-crawled

## Source

Original source: https://platform.openai.com/docs/guides/gpt/function-calling
