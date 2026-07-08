---
title: Deep Agents Code - Docs by LangChain
archive_category: automation-workflows
source_category: ai/rag
source_url: https://docs.langchain.com/oss/python/deepagents/code/overview
resource_id: blog:deep-agents-code-docs-by-langchain
local_vault_path: ai/rag/deep-agents-code-docs-by-langchain.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- agents
- anthropic
- models
- openai
- producthunt
- rag
- scripts
- web-crawled
- workflows
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Deep Agents Code - Docs by LangChain

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Multi-Provider LLM Integration**: Supports dynamic switching between any tool-calling LLM (e.g., OpenAI, Anthropic, Google) mid-session via `/model` command, with credentials managed via `/auth` and optional model-specific parameters.

- **Human-in-the-Loop & Approval Controls**: Enforces mandatory user approval for destructive operations (e.g., `write_file`, `edit_file`, `execute`) unless bypassed via `--auto-approve` (`-y`), with granular shell command allowlisting (`--shell-allow-list`).

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://docs.langchain.com/oss/python/deepagents/code/overview

## Local Vault File

Path: [deep-agents-code-docs-by-langchain.md](../../ai/rag/deep-agents-code-docs-by-langchain.md)
