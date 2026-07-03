---
title: Use the Gemini Code Assist agent mode | Google for Developers
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://developers.google.com/gemini-code-assist/docs/use-agentic-chat-pair-programmer#before-you-begin
published_at: '2026-07-03T15:16:14.122323+05:30'
collected_at: '2026-07-03T15:16:14.122332+05:30'
tags:
- agents
- reddit
- scripts
- web-crawled
status: active
resource_id: blog:use-the-gemini-code-assist-agent-mode-google-for-d
first_seen: '2026-07-03T15:16:14.122332+05:30'
last_seen: '2026-07-03T15:16:14.122332+05:30'
last_checked: '2026-07-03T15:16:14.122332+05:30'
health_score: 100
---

# Use the Gemini Code Assist agent mode | Google for Developers

## Summary

- **Agent Mode Functionality**: Gemini Code Assist agent mode acts as a pair programmer in IDEs (VS Code/IntelliJ), enabling code generation, task automation, MCP server integration, and tool-based execution with contextual awareness, but lacks recitation and source citations compared to standard chat mode.
- **Configuration & Security**: Tools (built-in/external) are controlled via `coreTools`/`excludeTools` in `settings.json` (VS Code) or `mcp.json` (IntelliJ), with MCP servers requiring explicit authentication (e.g., GitHub tokens) and posing security risks due to arbitrary code execution permissions.
- **Context Management**: Custom context files (`GEMINI.md`/`AGENT.md`) define project-specific rules or style guides, loaded hierarchically (global → project → subdirectory) to refine agent responses, while agent operations lack undo functionality for external resource changes.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-03T15:16:14.122323+05:30

## Related Tags

- agents
- reddit
- scripts
- web-crawled

## Source

Original source: https://developers.google.com/gemini-code-assist/docs/use-agentic-chat-pair-programmer#before-you-begin
