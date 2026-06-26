---
title: AzureChatOpenAI integration - Docs by LangChain
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://python.langchain.com/docs/integrations/chat/azure_chat_openai/
published_at: '2026-06-26T20:23:17.572482+05:30'
collected_at: '2026-06-26T20:23:17.572499+05:30'
tags:
- agents
- anthropic
- meta-ai
- mistral
- models
- openai
- web-crawled
- youtube
status: active
resource_id: blog:azurechatopenai-integration-docs-by-langchain
first_seen: '2026-06-26T20:23:17.572499+05:30'
last_seen: '2026-06-26T20:23:17.572499+05:30'
last_checked: '2026-06-26T20:23:17.572499+05:30'
health_score: 100
---

# AzureChatOpenAI integration - Docs by LangChain

## Summary

- **Integration Support**: LangChain's `AzureChatOpenAI` and `ChatOpenAI` (v1 API) integrate with Azure OpenAI models, supporting tool calling, structured output, image input, token-level streaming, async operations, token usage tracking, and logprobs. The v1 API simplifies authentication via Microsoft Entra ID or API keys, eliminating legacy `api-version` parameters.

- **Authentication Methods**: Supports keyless Microsoft Entra ID authentication (recommended) with automatic token refresh via `azure-identity` package, or traditional API key authentication via `AZURE_OPENAI_API_KEY` and `AZURE_OPENAI_ENDPOINT` environment variables.

- **Model Invocation & Features**: Models are instantiated with deployment names and endpoints; supports streaming usage metadata via `stream_usage=True`, Responses API integration via `use_responses_api=True`, and agent creation with tools for stateful interactions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-26T20:23:17.572482+05:30

## Related Tags

- agents
- anthropic
- meta-ai
- mistral
- models
- openai
- web-crawled
- youtube

## Source

Original source: https://python.langchain.com/docs/integrations/chat/azure_chat_openai/
