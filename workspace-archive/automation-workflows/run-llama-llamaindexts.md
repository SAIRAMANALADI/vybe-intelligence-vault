---
title: LlamaIndexTS/CONTRIBUTING.md at main · run-llama/LlamaIndexTS · GitHub
archive_category: automation-workflows
source_category: ai/rag
source_url: https://github.com/run-llama/LlamaIndexTS/blob/main/CONTRIBUTING.md
resource_id: github:run-llama/llamaindexts
local_vault_path: ai/rag/run-llama-llamaindexts.md
quality_score: 70
archive_score: 77
archive_tier: useful
resource_kind: template
importance: medium
tags:
- frontend_ui
- meta-ai
- models
- producthunt
- rag
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Useful for project building
---

# LlamaIndexTS/CONTRIBUTING.md at main · run-llama/LlamaIndexTS · GitHub

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 77 (useful)
- Resource kind: template
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- LlamaIndex.TS uses a **pnpm monorepo** with core packages (`core`, `env`, `providers/*`) and applications (`apps/next`, `examples`), structured for cross-runtime JS compatibility (Node.js, Deno, Cloudflare Workers).
- Development requires **Node.js LTS**, **pnpm**, and **tsx** for hot-reloading; builds/tests are executed via `pnpm build`, `pnpm test`, and `pnpm e2e`.
- New packages must be added under `packages/providers`, follow template configs, and include changesets (`pnpm changeset`) for

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://github.com/run-llama/LlamaIndexTS/blob/main/CONTRIBUTING.md

## Local Vault File

Path: [run-llama-llamaindexts.md](../../ai/rag/run-llama-llamaindexts.md)
