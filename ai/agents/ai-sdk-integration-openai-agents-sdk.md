---
title: AI SDK Integration | OpenAI Agents SDK
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://openai.github.io/openai-agents-js/extensions/ai-sdk
published_at: '2026-06-22T15:55:29.794216+05:30'
collected_at: '2026-06-22T15:55:29.794237+05:30'
tags:
- agents
- anthropic
- frontend_ui
- openai
- web-crawled
status: active
resource_id: blog:ai-sdk-integration-openai-agents-sdk
first_seen: '2026-06-22T15:55:29.794237+05:30'
last_seen: '2026-06-22T15:55:29.794237+05:30'
last_checked: '2026-06-22T15:55:29.794237+05:30'
health_score: 100
---

# AI SDK Integration | OpenAI Agents SDK

## Summary

- **Integration Setup**: The `@openai/agents-extensions` package enables AI SDK model integration via `aisdk()` adapter, requiring installation of both the extension (`npm install @openai/agents-extensions`) and a model-specific package (e.g., `npm install @ai-sdk/openai`). The adapter bridges Vercel AI SDK models (v2/v3 spec) with OpenAI Agents SDK.

- **Output Normalization & Metadata**: The `transformOutputText` callback in `aisdk()` cleans provider-specific output (e.g., stripping JSON code fences), while `providerMetadata` forwards provider-specific options (e.g., Anthropic’s `cacheControl`) directly to the underlying AI SDK model.

- **Streaming & UI Helpers**: `@openai/agents-extensions/ai-sdk-ui` provides streaming response helpers (`createAiSdkUiMessageStreamResponse`, `createAiSdkTextStreamResponse`) to convert Agents SDK streams into AI SDK UI-compatible formats, supporting custom headers/status codes for HTTP responses.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-22T15:55:29.794216+05:30

## Related Tags

- agents
- anthropic
- frontend_ui
- openai
- web-crawled

## Source

Original source: https://openai.github.io/openai-agents-js/extensions/ai-sdk
