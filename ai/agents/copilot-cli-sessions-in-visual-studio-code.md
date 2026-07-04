---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-07-05T01:16:10.679404+05:30'
collected_at: '2026-07-05T01:16:10.679412+05:30'
tags:
- agents
- openai
- web-crawled
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-07-05T01:16:10.679412+05:30'
last_seen: '2026-07-05T01:16:10.679412+05:30'
last_checked: '2026-07-05T01:16:10.679412+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: Background agent sessions in VS Code, running autonomously via Copilot CLI harness (SDK-integrated) with local machine persistence independent of VS Code editor state; supports parallel execution and Git worktree/folder isolation modes for code change isolation.

- **Isolation Modes**: Worktree isolation creates a separate Git worktree for agent changes (auto-bypassing approvals), while folder isolation applies changes directly to the workspace; worktree requires Git repository and persists across session forks until last linked session is deleted.

- **Permissions & Slash Commands**: Worktree mode enforces bypass approvals, whereas folder mode supports default/bypass/autopilot levels; slash commands (`/research`, `/yolo`, `/compact`) enable task-specific agent control, with auto-approval toggles for tool execution.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-05T01:16:10.679404+05:30

## Related Tags

- agents
- openai
- web-crawled

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
