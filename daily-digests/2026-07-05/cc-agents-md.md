---
title: "GeiserX/cc-agents-md"
category: "Tooling"
tech_stack: ["JavaScript", "Bash", "PowerShell", "Node.js", "Git", "JSON"]
quality_score: 9
rag_relevance: 7
tags: ["Claude Code", "AGENTS.md", "context injection", "monorepo support", "automation"]
source: "https://github.com/GeiserX/cc-agents-md"
discovered_at: "2026-07-05T23:00:44Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cc-agents-md enables automatic loading of AGENTS.md files into Claude Code sessions, eliminating the need for CLAUDE.md wrappers or symlinks. It dynamically injects project-specific agent instructions based on directory traversal, supporting monorepos and nested configurations.

## Key Features
- Dynamic AGENTS.md injection via SessionStart, UserPromptSubmit, and PreCompact hooks
- Cross-platform support (macOS, Linux, Windows) with platform-specific loaders
- Configurable file patterns, thresholds, and exclusions for flexible deployment
- Experimental internal patching for native AGENTS.md support in Claude Code
- Auto-repatch watcher for seamless updates after Claude Code upgrades

## Why It Matters for RAG Builders
It streamlines AI agent instruction management in Claude Code by automating AGENTS.md loading, reducing setup overhead and improving context consistency for RAG pipelines.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash
Automated review identified **Bash** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
