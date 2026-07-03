---
title: "hayashiii-ghub/hikizan"
category: "Agent Framework"
tech_stack: ["Shell", "Claude Code Plugin", "Agent Skills Framework", "Git Hooks", "Markdown", "Bash Scripting", "JSON", "Semantic Versioning"]
quality_score: 9
rag_relevance: 8
tags: ["AI agent workflows", "deterministic safety", "skill-based automation", "Claude Code plugin", "code review automation"]
source: "https://github.com/hayashiii-ghub/hikizan"
discovered_at: "2026-07-03T03:56:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
hikizan is a Claude Code plugin and Agent Skills-compatible skill pack designed to optimize AI agent workflows by balancing guided execution and flexibility. It provides verb-split skills for tasks like exploration, code review, design, execution, PR submission, and writing, while enforcing deterministic safety floors (hooks) to prevent destructive operations.

## Key Features
- Verb-split skills (tansaku, sadoku, sekkei, jikkou, teishutsu, kaku) for modular task execution
- Two-tier system (standard/guided) to balance guided execution with opt-out flexibility
- Deterministic hooks (floors) to prevent destructive operations like force pushes or irreversible file deletions
- Standardized PR submission workflow with 6-section exit contract for traceability
- Cross-harness compatibility (Claude Code plugin, Cursor/Codex skill pack)

## Why It Matters for RAG Builders
It provides a structured yet flexible framework for AI agents to execute tasks reliably while enforcing safety constraints, reducing cognitive load and improving consistency in automated workflows.

## Tech Stack Deep Dive
### Shell
Automated review identified **Shell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code Plugin
Automated review identified **Claude Code Plugin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Agent Skills Framework
Automated review identified **Agent Skills Framework** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git Hooks
Automated review identified **Git Hooks** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bash Scripting
Automated review identified **Bash Scripting** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic Versioning
Automated review identified **Semantic Versioning** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
