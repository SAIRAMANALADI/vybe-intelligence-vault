---
title: "PsychQuant/che-word-mcp"
category: "Tooling"
tech_stack: ["Swift", "Model Context Protocol (MCP)", "Office Open XML (OOXML)", "XML", "Concurrency (Actor Model)"]
quality_score: 9
rag_relevance: 8
tags: ["docx manipulation", "OOXML", "MCP server", "Swift-native", "document automation"]
source: "https://github.com/PsychQuant/che-word-mcp"
discovered_at: "2026-07-05T15:14:48Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Swift-native MCP server for direct manipulation of Microsoft Word (.docx) documents via Office Open XML (OOXML) without requiring Microsoft Word or external dependencies. It provides 234+ tools for comprehensive document editing, including tables, hyperlinks, styles, track changes, and equations.

## Key Features
- Pure Swift implementation with no external Word dependencies
- 234+ MCP tools for comprehensive document manipulation (tables, hyperlinks, styles, track changes, etc.)
- Direct OOXML manipulation with byte-preserving round-trip fidelity
- Programmatic Track Changes generation with redline markup
- Cross-platform support (macOS universal binary) and session-based state management

## Why It Matters for RAG Builders
It enables AI systems to programmatically generate, edit, and analyze Word documents at scale without requiring Microsoft Word, expanding RAG pipelines to handle rich document formats natively.

## Tech Stack Deep Dive
### Swift
Automated review identified **Swift** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Office Open XML (OOXML)
Automated review identified **Office Open XML (OOXML)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### XML
Automated review identified **XML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Concurrency (Actor Model)
Automated review identified **Concurrency (Actor Model)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
