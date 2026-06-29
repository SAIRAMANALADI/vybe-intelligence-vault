---
title: "JoaoBerne/cli-bridge-mcp"
category: "Orchestrator"
tech_stack: ["Python", "Model Context Protocol (MCP)", "Git", "Subprocess Management", "CLI Integration"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "AI delegation", "multi-model orchestration", "cross-vendor integration", "task offloading"]
source: "https://github.com/JoaoBerne/cli-bridge-mcp"
discovered_at: "2026-06-29T12:31:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cli-bridge is an MCP server that enables AI assistants to delegate tasks to other AI CLIs, extending their capabilities without requiring additional API keys or token extraction. It acts as a bridge between different AI tools, allowing assistants to borrow features like vision, large context windows, or image generation from other models.

## Key Features
- Delegates tasks to other AI CLIs (e.g., Codex, Gemini, Ollama) without API key sharing or token extraction
- Supports borrowing capabilities like vision, large context reads, image generation, and parallel builds
- Implements safe delegation with throwaway git worktrees and reviewable diffs
- Provides cost-safe defaults and budget controls for managing multi-vendor usage
- Offers cross-vendor verification and consensus workflows to reduce bias and improve reliability

## Why It Matters for RAG Builders
It enables AI assistants to overcome their inherent limitations by leveraging other specialized AI tools, significantly expanding their functional range for RAG and AI stack builders.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Git
Automated review identified **Git** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Subprocess Management
Automated review identified **Subprocess Management** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI Integration
Automated review identified **CLI Integration** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
