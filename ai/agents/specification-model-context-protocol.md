---
title: Specification - Model Context Protocol
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://modelcontextprotocol.io/specification/latest
published_at: '2026-08-03T09:36:28.943233+05:30'
collected_at: '2026-08-03T09:36:28.943245+05:30'
tags:
- agents
- web-crawled
- workflows
- youtube
status: active
resource_id: blog:specification-model-context-protocol
first_seen: '2026-08-03T09:36:28.943245+05:30'
last_seen: '2026-08-03T09:36:28.943245+05:30'
last_checked: '2026-08-03T09:36:28.943245+05:30'
health_score: 100
---

# Specification - Model Context Protocol

## Summary

- **Protocol Architecture**: MCP standardizes LLM integration via JSON-RPC 2.0, defining three roles: **Hosts** (LLM apps initiating connections), **Clients** (connectors within hosts), and **Servers** (providers of context/tools/resources).

- **Core Features & Extensions**: Servers expose **Resources** (data/context), **Prompts** (templated workflows), and **Tools** (executable functions); optional extensions include **Tasks** (async ops), **Skills** (agent workflows), and **MCP Apps** (inline UI elements).

- **Security Requirements**: Mandates **explicit user consent** for data/tool access, **privacy controls** (no unauthorized data sharing), and **tool safety** (untrusted tool descriptions require validation); implementors must enforce consent flows and access controls.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-03T09:36:28.943233+05:30

## Related Tags

- agents
- web-crawled
- workflows
- youtube

## Source

Original source: https://modelcontextprotocol.io/specification/latest
