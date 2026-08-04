---
title: Use the Gemini Code Assist agent mode | Google for Developers
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://developers.google.com/gemini-code-assist/docs/use-agentic-chat-pair-programmer#before-you-begin
published_at: '2026-08-04T20:21:54.985200+05:30'
collected_at: '2026-08-04T20:21:54.985216+05:30'
tags:
- agents
- reddit
- web-crawled
status: active
resource_id: blog:use-the-gemini-code-assist-agent-mode-google-for-d
first_seen: '2026-08-04T20:21:54.985216+05:30'
last_seen: '2026-08-04T20:21:54.985216+05:30'
last_checked: '2026-08-04T20:21:54.985216+05:30'
health_score: 100
---

# Use the Gemini Code Assist agent mode | Google for Developers

## Summary

- **Agent Mode Functionality**: Gemini Code Assist agent mode acts as a pair programmer in your IDE, enabling multi-step task execution, code generation from design docs/issues, MCP server configuration, and tool-based context-aware responses, while lacking recitation and source citation features present in standard chat mode.

- **Tool Configuration**: Agent mode supports granular control over built-in tools (e.g., file I/O, shell commands) via `coreTools`/`excludeTools` settings in `settings.json` (VS Code) or `mcp.json` (IntelliJ), with command-specific restrictions possible (e.g., `ShellTool(ls -l)`).

- **MCP Server Integration**: MCP servers (local/remote) are configured in IDE-specific files (`settings.json` for VS Code, `mcp.json` for IntelliJ) with authentication handled via environment variables or HTTP headers, enabling extended agent capabilities (e.g., GitHub/GitLab integrations).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-04T20:21:54.985200+05:30

## Related Tags

- agents
- reddit
- web-crawled

## Source

Original source: https://developers.google.com/gemini-code-assist/docs/use-agentic-chat-pair-programmer#before-you-begin
