---
title: "rasatpetabit/masterplan"
category: "Orchestrator"
tech_stack: ["JavaScript", "Claude Code", "Codex CLI", "YAML", "JSON", "Git", "Node.js"]
quality_score: 9
rag_relevance: 8
tags: ["workflow automation", "multi-agent orchestration", "durable state management", "engineering lifecycle", "CLI plugin"]
source: "https://github.com/rasatpetabit/masterplan"
discovered_at: "2026-06-25T21:27:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
masterplan is a CLI plugin for Claude Code and Codex CLI that orchestrates a durable multi-hour engineering workflow using a brainstorm → plan → execute → finish lifecycle. It manages state on disk, enabling seamless resumption after crashes or session compactions.

## Key Features
- Four-phase lifecycle (brainstorm → plan → execute → finish) with deterministic planning and wave-based execution
- State persistence on disk (not in chat sessions) for crash-resilient resumption
- Modular architecture with 5 layers (L0-L4) enforcing separation of concerns and durability invariants
- Integration with obra/superpowers skills suite for task execution and verification
- Built-in structural linting (doctor) and scope verification to ensure task alignment with codebase changes

## Why It Matters for RAG Builders
It provides a robust framework for orchestrating long-running AI-driven engineering tasks, ensuring durability, resumability, and alignment with codebase changes, which is critical for RAG/AI stack builders managing complex workflows.

## Tech Stack Deep Dive
### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex CLI
Automated review identified **Codex CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### YAML
Automated review identified **YAML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
