---
title: "Eilen6316/otterpatch"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "React", "Vite", "Electron", "MCP (Model Context Protocol)", "OOXML", "PDF-Lib", "Univer", "DrawIO", "Claude", "OpenAI-compatible LLMs", "Jest"]
quality_score: 9
rag_relevance: 8
tags: ["document editing", "agent orchestration", "surgical write-back", "reviewable diffs", "office automation"]
source: "https://github.com/Eilen6316/otterpatch"
discovered_at: "2026-07-09T11:52:40Z"
evaluated_by: "mistral-small-latest"
---

## Summary
OtterPatch is an agent-driven, reviewable safe-commit layer for office documents that enables agents to propose changes, generate reviewable diffs, and surgically write back only the modified parts while preserving byte-level fidelity. It supports formats like Excel, Word, PowerPoint, PDF, and DrawIO through a modular adapter system.

## Key Features
- Agent-driven change proposal with constrained ChangeSet generation for safety and predictability
- Surgical write-back that preserves byte-level fidelity (validated on 531 KB .docx with 30/31 parts unchanged)
- Multi-format support (Excel, Word, PowerPoint, PDF, DrawIO) via modular adapters
- Reviewable diffs with granular accept/reject per change block and inline tracked changes
- MCP server and headless CLI for integration with AI agents and IDEs

## Why It Matters for RAG Builders
OtterPatch provides a critical safety layer for AI-driven document editing by ensuring changes are reviewable, reversible, and surgically precise, reducing the risk of unintended modifications in RAG pipelines.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### React
Automated review identified **React** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vite
Automated review identified **Vite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Electron
Automated review identified **Electron** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OOXML
Automated review identified **OOXML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PDF-Lib
Automated review identified **PDF-Lib** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Univer
Automated review identified **Univer** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DrawIO
Automated review identified **DrawIO** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude
Automated review identified **Claude** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI-compatible LLMs
Automated review identified **OpenAI-compatible LLMs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest
Automated review identified **Jest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
