---
title: Gamma-Software/figma-llm-export
category: world/public/vault/daily-digests/2026-06-24
tech_stack:
- TypeScript
- Figma Plugin API
- esbuild
- Node.js
- Base64 Encoding
- JSON Schema
quality_score: 8
rag_relevance: 9
tags:
- Figma plugin
- LLM integration
- design export
- multimodal payload
- AI agent tooling
source: https://github.com/Gamma-Software/figma-llm-export
discovered_at: '2026-06-24T20:47:08Z'
evaluated_by: mistral-small-latest
---

## Summary
A Figma plugin that exports the current selection into an LLM-ready payload, including compact node JSON with geometry, text, and styling details, plus rendered PNG crops of each selected layer. Designed to bridge Figma design files with AI agents for seamless integration.

## Key Features
- Exports selected Figma layers as compact JSON with geometry, text, and styling data
- Generates cropped PNG images for each meaningful element, optimized for AI agent consumption
- Supports variable bindings and exports referenced variables with per-mode values
- Configurable export parameters (min crop size, skip types, max exports, PNG scale)
- Provides multiple export options: copy payload, download JSON, download PNGs, or full LLM bundle

## Why It Matters for RAG Builders
It streamlines the process of converting Figma designs into AI-ready multimodal payloads, enabling seamless integration between design tools and RAG/AI agent workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Figma Plugin API
Automated review identified **Figma Plugin API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### esbuild
Automated review identified **esbuild** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Base64 Encoding
Automated review identified **Base64 Encoding** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON Schema
Automated review identified **JSON Schema** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
