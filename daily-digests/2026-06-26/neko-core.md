---
title: "meiiie/neko-core"
category: "Agent Framework"
tech_stack: ["TypeScript", "Bun", "Ink (TUI library)", "Model Context Protocol (MCP)", "Ripgrep", "Node.js (via Bun)"]
quality_score: 9
rag_relevance: 7
tags: ["terminal agent", "local-first", "extensible", "MCP integration", "self-improving"]
source: "https://github.com/meiiie/neko-core"
discovered_at: "2026-06-26T22:08:33Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Neko Core is a local-first, extensible terminal agent that performs tasks like coding, browsing, and automation through a pluggable architecture. It supports provider-agnostic LLM interactions, offline capabilities, and self-improving memory, making it adaptable for diverse roles beyond coding.

## Key Features
- Pluggable skills and MCP tools for domain-specific tasks (e.g., purchasing, browser automation)
- Provider-agnostic LLM interactions with offline support (e.g., local models via llama.cpp)
- Streaming agent loop with bounded autonomy modes and safety guards (e.g., seatbelt, approval gates)
- Self-improving memory system (facts, workflows, playbooks) and session persistence
- Remote control via end-to-end-encrypted relay and QR-based pairing

## Why It Matters for RAG Builders
Neko Core provides a flexible, local-first framework for building and extending AI agents with pluggable tools and memory, reducing dependency on cloud services while enabling customizable automation workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bun
Automated review identified **Bun** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ink (TUI library)
Automated review identified **Ink (TUI library)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ripgrep
Automated review identified **Ripgrep** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js (via Bun)
Automated review identified **Node.js (via Bun)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
