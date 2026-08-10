---
title: Use the Gemini Code Assist agent mode | Gemini for Google Cloud | Google Cloud
  Documentation
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://developers.google.com/gemini-code-assist/docs/use-agentic-chat-pair-programmer#before-you-begin
published_at: '2026-08-10T10:41:56.516433+05:30'
collected_at: '2026-08-10T10:41:56.516447+05:30'
tags:
- agents
- producthunt
- reddit
- web-crawled
status: active
resource_id: blog:use-the-gemini-code-assist-agent-mode-gemini-for-g
first_seen: '2026-08-10T10:41:56.516447+05:30'
last_seen: '2026-08-10T10:41:56.516447+05:30'
last_checked: '2026-08-10T10:41:56.516447+05:30'
health_score: 100
---

# Use the Gemini Code Assist agent mode | Gemini for Google Cloud | Google Cloud Documentation

## Summary

- **Agent Mode Configuration**: Enables pair programming in VS Code/IntelliJ via `Gemini Code Assist` agent toggle, supporting high-level tasks (code generation, multi-step solutions) with tool access (file ops, terminal, MCP servers) but lacking recitation/citation features.

- **Tool Control & MCP Integration**: Restrict built-in tools via `coreTools`/`excludeTools` in `~/.gemini/settings.json` (VS Code) or `mcp.json` (IntelliJ); MCP servers extend capabilities (e.g., GitHub, GitLab) with authentication via env vars/headers.

- **Context Management**: Use `GEMINI.md`/`AGENT.md` files for project-specific rules; `/tools` and `/mcp` commands monitor active tools/MCP servers, while caution is advised for auto-approvals due to filesystem/terminal access.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-10T10:41:56.516433+05:30

## Related Tags

- agents
- producthunt
- reddit
- web-crawled

## Source

Original source: https://developers.google.com/gemini-code-assist/docs/use-agentic-chat-pair-programmer#before-you-begin
