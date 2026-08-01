---
title: ChatGoogleGenerativeAI integration - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://python.langchain.com/docs/integrations/chat/google_generative_ai
published_at: '2026-08-01T21:50:07.987517+05:30'
collected_at: '2026-08-01T21:50:07.987532+05:30'
tags:
- agents
- anthropic
- rag
- reddit
- scripts
- web-crawled
- youtube
status: active
resource_id: blog:chatgooglegenerativeai-integration-docs-by-langcha
first_seen: '2026-08-01T21:50:07.987532+05:30'
last_seen: '2026-08-01T21:50:07.987532+05:30'
last_checked: '2026-08-01T21:50:07.987532+05:30'
health_score: 100
---

# ChatGoogleGenerativeAI integration - Docs by LangChain

## Summary

- **Integration & Backend Support**: The `ChatGoogleGenerativeAI` class in `langchain-google-genai` supports Google’s Generative AI models (Gemini family) via **Gemini Developer API** (API key-based) or **Vertex AI** (GCP integration), with automatic backend detection based on credentials (`GOOGLE_GENAI_USE_VERTEXAI`, `credentials`, or `project` parameters).

- **Multimodal & Advanced Features**: Supports **tool calling**, **structured output**, **multimodal inputs** (images, audio, video, PDFs), **token-level streaming**, **native async**, **thinking budgets** (Gemini 2.5+), **built-in tools** (Google Search, Maps, code execution), and **safety settings** with context caching.

- **Authentication & Configuration**: Requires `GOOGLE_API_KEY` (or `GEMINI_API_KEY`) for API access. Vertex AI supports **ADC** (Application Default Credentials) or service accounts. Proxy/configurable HTTP options (`base_url`, `additional_headers`, `http_options`) and environment variables (`GOOGLE_CLOUD_PROJECT`, `GOOGLE_CLOUD_LOCATION`) enable flexible deployment.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-01T21:50:07.987517+05:30

## Related Tags

- agents
- anthropic
- rag
- reddit
- scripts
- web-crawled
- youtube

## Source

Original source: https://python.langchain.com/docs/integrations/chat/google_generative_ai
