---
title: Setup - LLM
archive_category: model-providers
source_category: ai/resources
source_url: https://llm.datasette.io/en/stable/setup.html#homebrew-warning
resource_id: blog:setup-llm
local_vault_path: ai/resources/setup-llm.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- anthropic
- dataset
- models
- openai
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Setup - LLM

## Why This Is In The Archive

- Matched archive category: `Model Providers`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: dataset
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- Installation methods include `pip`, `pipx`, `uv tool install`, and Homebrew, with platform-specific commands for each.
- API keys can be managed via `llm keys set`, environment variables, or `--key` flag, stored in `keys.json` or custom paths.
- Default model and logging behavior are configurable via `llm models default` and `llm logs [on|off]`, with user path customizable via `LLM_USER_PATH`.

## Use Cases

- API key selection
- Cost/capability profiling
- Provider fallback routing

## Source

Original source URL: https://llm.datasette.io/en/stable/setup.html#homebrew-warning

## Local Vault File

Path: [setup-llm.md](../../ai/resources/setup-llm.md)
