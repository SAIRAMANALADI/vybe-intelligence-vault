---
title: "laffeyp/cascade-img"
category: "Agent Framework"
tech_stack: ["Python 3.14", "Model Context Protocol (MCP)", "Midjourney API (via Discord automation)", "Discord API", "CLI", "JSON/structured logging", "Vision-based image evaluation", "HTTP/stdio for MCP communication"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "Midjourney automation", "AI image generation", "vision-based curation", "structured prompts"]
source: "https://github.com/laffeyp/cascade-img"
discovered_at: "2026-06-27T20:59:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
cascade-img is an MCP server that automates Midjourney image generation through structured prompts, vision-based curation, and structured logging. It enables AI assistants to generate, evaluate, and refine images by describing desired outputs, handling Discord interactions, and providing 20 tools for prompt composition, curation, and workflow management.

## Key Features
- 20 MCP tools for end-to-end image generation workflows (prompt composition, generation, curation, and logging)
- Structured prompt composition from reusable parts (subject, style, identity, constraints) instead of raw text
- Vision-based self-curation: AI agents inspect grids, select best quadrants, and refine outputs automatically
- Persistent working memory via append-only prompt logs that persist across sessions
- Pluggable backend architecture with Midjourney as the first backend and Flux/DALL-E/Imagen planned for future releases

## Why It Matters for RAG Builders
It streamlines AI-driven image generation by automating the entire pipeline from prompt to final asset, enabling seamless integration with AI assistants for hands-free creative workflows.

## Tech Stack Deep Dive
### Python 3.14
Automated review identified **Python 3.14** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Midjourney API (via Discord automation)
Automated review identified **Midjourney API (via Discord automation)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Discord API
Automated review identified **Discord API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/structured logging
Automated review identified **JSON/structured logging** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Vision-based image evaluation
Automated review identified **Vision-based image evaluation** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTTP/stdio for MCP communication
Automated review identified **HTTP/stdio for MCP communication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
