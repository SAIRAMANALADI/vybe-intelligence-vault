---
title: "zqiren/Orbital"
category: "Orchestrator"
tech_stack: ["Python", "FastAPI", "React", "TypeScript", "Node.js", "Electron", "Claude Code", "Gemini CLI", "LLM Providers (Anthropic, OpenAI, DeepSeek, etc.)", "Browser Automation (Patchright)", "Sandboxing (Windows Sandbox, macOS Seatbelt)", "Keychain Credential Storage"]
quality_score: 9
rag_relevance: 8
tags: ["persistent memory", "agent orchestration", "local-first", "sub-agent delegation", "project state management"]
source: "https://github.com/zqiren/Orbital"
discovered_at: "2026-07-05T06:36:54Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Orbital is a local-first agentic system that maintains persistent project context across sessions, enabling agents to build upon previous work rather than starting from zero. It orchestrates sub-agents (e.g., Claude Code, Codex) to execute tasks while preserving project state, decisions, and artifacts in structured markdown files.

## Key Features
- Persistent project context (PROJECT_STATE.md, DECISIONS.md, LESSONS.md) maintained across sessions
- Sub-agent delegation to external CLI agents (Claude Code, Codex, Gemini CLI) with shared context
- OS-level sandboxing (Windows Sandbox, macOS Seatbelt) for secure execution
- Task queue with approval workflows and budget controls for autonomous operation
- Triggers (cron/file watch) for automated agent activation without manual intervention

## Why It Matters for RAG Builders
Orbital enables RAG builders to create systems where agents retain long-term project memory and context, eliminating the need to re-explain or re-establish context across sessions, thus significantly improving continuity and efficiency in AI-driven workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini CLI
Automated review identified **Gemini CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM Providers (Anthropic, OpenAI, DeepSeek, etc.)
Automated review identified **LLM Providers (Anthropic, OpenAI, DeepSeek, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Browser Automation (Patchright)
Automated review identified **Browser Automation (Patchright)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Sandboxing (Windows Sandbox, macOS Seatbelt)
Automated review identified **Sandboxing (Windows Sandbox, macOS Seatbelt)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Keychain Credential Storage
Automated review identified **Keychain Credential Storage** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
