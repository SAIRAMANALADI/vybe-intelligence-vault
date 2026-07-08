---
title: Use Supervisor Agent to create a coordinated multi-agent system | Databricks
  on AWS
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.databricks.com/aws/en/generative-ai/agent-bricks/multi-agent-supervisor
published_at: '2026-07-08T14:26:12.331431+05:30'
collected_at: '2026-07-08T14:26:12.331446+05:30'
tags:
- agents
- dataset
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:use-supervisor-agent-to-create-a-coordinated-multi
first_seen: '2026-07-08T14:26:12.331446+05:30'
last_seen: '2026-07-08T14:26:12.331446+05:30'
last_checked: '2026-07-08T14:26:12.331446+05:30'
health_score: 100
---

# Use Supervisor Agent to create a coordinated multi-agent system | Databricks on AWS

## Summary

- **Supervisor Agent** orchestrates multi-agent systems by coordinating specialized agents (e.g., Genie Spaces, Unity Catalog functions, MCP servers) via AI-driven task delegation, interaction management, and result synthesis, with built-in access controls to enforce data and tool permissions.

- **Requirements** include a Databricks workspace with Unity Catalog, serverless compute, Model Serving access, and explicit permissions for subagents (e.g., `CAN_QUERY`, `EXECUTE`, `SELECT`) to enable cross-domain task execution and human-in-the-loop feedback loops.

- **Supported subagents/tools** range from Genie Spaces and Knowledge Assistant endpoints to Unity Catalog objects (tables, functions, volumes) and external MCP servers, with granular permission models (e.g., `USE_CONNECTION`, `READ_VOLUME`) to ensure secure, role-based access.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-08T14:26:12.331431+05:30

## Related Tags

- agents
- dataset
- hackernews
- rag
- web-crawled

## Source

Original source: https://docs.databricks.com/aws/en/generative-ai/agent-bricks/multi-agent-supervisor
