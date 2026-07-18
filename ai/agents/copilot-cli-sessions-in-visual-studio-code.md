---
title: Copilot CLI sessions in Visual Studio Code
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://code.visualstudio.com/docs/copilot/agents/background-agents
published_at: '2026-07-18T01:16:26.442620+05:30'
collected_at: '2026-07-18T01:16:26.442634+05:30'
tags:
- agents
- openai
- web-crawled
- workflows
status: active
resource_id: blog:copilot-cli-sessions-in-visual-studio-code
first_seen: '2026-07-18T01:16:26.442634+05:30'
last_seen: '2026-07-18T01:16:26.442634+05:30'
last_checked: '2026-07-18T01:16:26.442634+05:30'
health_score: 100
---

# Copilot CLI sessions in Visual Studio Code

## Summary

- **Copilot CLI Sessions**: VS Code supports autonomous background agent sessions via GitHub Copilot CLI, managed through the Chat view; sessions run locally (using Copilot SDK) or in isolated Git worktrees, enabling parallel task execution without blocking the editor.

- **Isolation Modes**: Copilot CLI supports **Worktree** (isolated Git worktree for safe changes) and **Folder** (direct workspace modifications) isolation, with Worktree enforcing auto-approvals and Folder allowing configurable permission levels (Default/Bypass/Autopilot).

- **Permissions & Workflow**: Worktree isolation bypasses approvals automatically, while Folder isolation supports granular permissions; sessions can be forked, monitored, and controlled via slash commands (`/research`, `/autoApprove`, etc.) in the unified Chat interface.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-07-18T01:16:26.442620+05:30

## Related Tags

- agents
- openai
- web-crawled
- workflows

## Source

Original source: https://code.visualstudio.com/docs/copilot/agents/background-agents
