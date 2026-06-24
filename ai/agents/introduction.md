---
title: Introduction
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://eve.dev/docs/introduction
published_at: '2026-06-24T10:16:56.049426+05:30'
collected_at: '2026-06-24T10:16:56.049436+05:30'
tags:
- agents
- frontend_ui
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:introduction
first_seen: '2026-06-24T10:16:56.049436+05:30'
last_seen: '2026-06-24T10:16:56.049436+05:30'
last_checked: '2026-06-24T10:16:56.049436+05:30'
health_score: 100
---

# Introduction

## Summary

- **File-based agent structure**: Eve agents are defined through a TypeScript project with a strict filesystem-first layout (`agent.ts`, `instructions.md`, `tools/`, `skills/`, `channels/`), where file locations determine functionality (e.g., `tools/get_weather.ts` defines a tool named `get_weather`).

- **Unified message processing pipeline**: Incoming messages (from HTTP, Slack, etc.) are normalized into a portable format, processed with instructions/tools/skills/history, and executed via the Workflow SDK for durable, resumable sessions with tool/subagent calls and state persistence.

- **Modular scalability**: Additional capabilities (MCP connections, hooks, subagents, schedules) are added via predictable paths (`connections/`, `hooks/`, `subagents/`, etc.), maintaining readability while enabling complex agent behaviors without configuration bloat.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-06-24T10:16:56.049426+05:30

## Related Tags

- agents
- frontend_ui
- web-crawled
- workflows
- youtube

## Source

Original source: https://eve.dev/docs/introduction
