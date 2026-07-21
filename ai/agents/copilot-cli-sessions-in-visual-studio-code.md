---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-07-21T16:58:21.345773+05:30'
collected_at: '2026-07-21T16:58:21.345781+05:30'
tags:
- agents
- openai
- scripts
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-07-21T16:58:21.345781+05:30'
last_seen: '2026-07-21T16:58:21.345781+05:30'
last_checked: '2026-07-21T16:58:21.345781+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: Background agent sessions in VS Code run autonomously via GitHub Copilot CLI, managed through the Chat view; support parallel execution, worktree/folder isolation modes, and slash commands (`/research`, `/yolo`, etc.) for task automation.

- **Isolation Modes**: Worktree mode creates a separate Git worktree for agent changes (auto-approved), while Folder mode applies changes directly to the workspace; permissions vary (Bypass Approvals enforced in Worktree, configurable in Folder).

- **Permissions & Integration**: Copilot CLI sessions inherit GitHub authentication context; permission levels (Default/Bypass/Autopilot) depend on isolation mode; VS Code integrates via Copilot SDK for session lifecycle management.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-21T16:58:21.345773+05:30

## Related Tags

- agents
- openai
- scripts
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
