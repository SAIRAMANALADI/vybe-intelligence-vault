---
title: AI SDK Integration | OpenAI Agents SDK
archive_category: ai-browser-computer-use
source_category: ai/agents
source_url: https://openai.github.io/openai-agents-js/extensions/ai-sdk
resource_id: blog:ai-sdk-integration-openai-agents-sdk
local_vault_path: ai/agents/ai-sdk-integration-openai-agents-sdk.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- agents
- anthropic
- frontend_ui
- openai
- web-crawled
selection_reason:
- Useful for project building
---

# AI SDK Integration | OpenAI Agents SDK

## Why This Is In The Archive

- Matched archive category: `AI Browser and Computer Use`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: framework
- Selection reasons:
  - Useful for project building

## Summary

- **Integration Setup**: The `@openai/agents-extensions` package enables AI SDK model integration via `aisdk()` adapter, requiring installation of both the extension (`npm install @openai/agents-extensions`) and a model-specific package (e.g., `npm install @ai-sdk/openai`). The adapter bridges Vercel AI SDK models (v2/v3 spec) with OpenAI Agents SDK.

- **Output Normalization & Metadata**: The `transformOutputText` callback in `aisdk()` cleans provider-specific output (e.g., stripping JSON code

## Use Cases

- Browser web automation
- GUI action orchestration
- Agent computer control

## Source

Original source URL: https://openai.github.io/openai-agents-js/extensions/ai-sdk

## Local Vault File

Path: [ai-sdk-integration-openai-agents-sdk.md](../../ai/agents/ai-sdk-integration-openai-agents-sdk.md)
