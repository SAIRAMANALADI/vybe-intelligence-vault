---
title: Use Supervisor Agent to create a coordinated multi-agent system | Databricks
  on AWS
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://docs.databricks.com/aws/en/generative-ai/agent-bricks/multi-agent-supervisor
published_at: '2026-06-26T10:19:27.969184+05:30'
collected_at: '2026-06-26T10:19:27.969198+05:30'
tags:
- agents
- dataset
- hackernews
- rag
- web-crawled
status: active
resource_id: blog:use-supervisor-agent-to-create-a-coordinated-multi
first_seen: '2026-06-26T10:19:27.969198+05:30'
last_seen: '2026-06-26T10:19:27.969198+05:30'
last_checked: '2026-06-26T10:19:27.969198+05:30'
health_score: 100
---

# Use Supervisor Agent to create a coordinated multi-agent system | Databricks on AWS

## Summary

- **Supervisor Agent** orchestrates multi-agent systems (Genie Spaces, MCP servers, custom agents, etc.) using AI-driven task delegation, interaction management, and result synthesis across specialized domains, with built-in access controls restricting subagent/data access based on user permissions.

- **Requirements** include a Databricks workspace with Unity Catalog enabled, serverless compute, Model Serving access, and explicit permissions (`CAN_QUERY`, `EXECUTE`, `SELECT`, etc.) for subagents/tools like Genie Spaces, UC functions, or external MCP servers.

- **Data handling** uses default storage for temporary transformations/checkpoints, with all agent-associated data purged upon deletion; web search requires user approval and Foundation Model APIs, while MCP servers require `USE_CONNECTION` permissions.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-26T10:19:27.969184+05:30

## Related Tags

- agents
- dataset
- hackernews
- rag
- web-crawled

## Source

Original source: https://docs.databricks.com/aws/en/generative-ai/agent-bricks/multi-agent-supervisor
