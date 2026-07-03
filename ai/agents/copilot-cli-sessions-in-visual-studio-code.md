---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-07-03T20:11:05.217804+05:30'
collected_at: '2026-07-03T20:11:05.217819+05:30'
tags:
- agents
- openai
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-07-03T20:11:05.217819+05:30'
last_seen: '2026-07-03T20:11:05.217819+05:30'
last_checked: '2026-07-03T20:11:05.217819+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: Background agent sessions in VS Code run autonomously via Copilot CLI, managed through the Chat view, with support for multi-repository workspaces and custom agents; sessions persist outside the editor and use Git worktree or folder isolation modes for code changes.

- **Isolation Modes**: Worktree isolation creates a separate Git worktree for agent changes, auto-approving tool calls (Bypass Approvals), while folder isolation applies changes directly to the workspace with configurable permission levels (Default Approvals, Bypass Approvals, Autopilot).

- **Permissions & Slash Commands**: Permission levels depend on isolation mode (worktree enforces Bypass Approvals), and Copilot CLI sessions support slash commands (`/research`, `/compact`, `/yolo`) for managing tasks, context, and auto-approvals directly in chat.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-03T20:11:05.217804+05:30

## Related Tags

- agents
- openai
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
