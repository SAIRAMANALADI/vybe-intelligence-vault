---
title: Introduction
archive_category: automation-workflows
source_category: ai/agents
source_url: https://eve.dev/docs/introduction
resource_id: blog:introduction
local_vault_path: ai/agents/introduction.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- agents
- frontend_ui
- web-crawled
- workflows
- youtube
selection_reason:
- Strong keyword match
- Useful for project building
---

# Introduction

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **File-based agent structure**: Eve agents are defined through a TypeScript project with a strict filesystem-first layout (`agent.ts`, `instructions.md`, `tools/`, `skills/`, `channels/`), where file locations determine functionality (e.g., `tools/get_weather.ts` defines a tool named `get_weather`).

- **Unified message processing pipeline**: Incoming messages (from HTTP, Slack, etc.) are normalized into a portable format, processed with instructions/tools/skills/history, and executed via the

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://eve.dev/docs/introduction

## Local Vault File

Path: [introduction.md](../../ai/agents/introduction.md)
