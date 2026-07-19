---
title: x0c/ui-prototyper-skill
category: daily-digests/2026-07-10
tech_stack:
- Claude Code
- Codex CLI
- Mobbin API
- AI Image Generation
- MCP Server
quality_score: 8
rag_relevance: 7
tags:
- UI prototyping
- AI-driven design
- reference-grounded generation
- Claude Code skill
- Codex CLI integration
source: https://github.com/x0c/ui-prototyper-skill
discovered_at: '2026-07-10T06:15:19Z'
evaluated_by: mistral-small-latest
---

## Summary
A Claude Code/Codex CLI skill that generates high-fidelity UI/UX prototype images from product ideas using real-world app references from Mobbin and AI image generation. It ensures grounded, diverse design directions with user approval at every step to avoid generic or hallucinated outputs.

## Key Features
- Generates three distinct UI design directions grounded in real Mobbin app references
- Requires user approval for every prompt before image generation to ensure alignment
- Supports targeted in-place corrections without full regeneration
- Orchestrates external tools (Mobbin MCP and image generation) for a seamless workflow
- Optimized for high-fidelity, confirmable outputs rather than generic templates

## Why It Matters for RAG Builders
It bridges the gap between abstract AI-generated UI ideas and practical, reference-grounded prototypes, ensuring RAG builders can produce visually consistent and user-approved designs efficiently.

## Tech Stack Deep Dive
### Claude Code
Automated review identified **Claude Code** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Codex CLI
Automated review identified **Codex CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mobbin API
Automated review identified **Mobbin API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AI Image Generation
Automated review identified **AI Image Generation** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP Server
Automated review identified **MCP Server** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
