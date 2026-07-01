---
title: "zhoucoolboy/vision-relay-mcp"
category: "Tooling"
tech_stack: ["Node.js", "JavaScript", "MCP (Model Context Protocol)", "Anthropic API", "OpenAI API", "Base64 Encoding"]
quality_score: 9
rag_relevance: 8
tags: ["MCP Server", "Vision API", "Image Processing", "Claude Code", "OCR"]
source: "https://github.com/zhoucoolboy/vision-relay-mcp"
discovered_at: "2026-07-01T15:42:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight MCP server that enables Claude Code to process local images by relaying them to vision-capable APIs (Anthropic or OpenAI-compatible). It handles image reading, validation, and API communication in a single Node.js file without storing images or caching results.

## Key Features
- Single-tool interface (`process_images`) for all image tasks (OCR, comparison, structured extraction)
- Supports Anthropic and OpenAI-compatible vision APIs with configurable endpoints
- Concurrent local image reading and base64 encoding for efficiency
- No image storage, caching, or external service calls beyond the configured vision API
- Environment-variable-driven configuration with fallback key support

## Why It Matters for RAG Builders
It bridges the gap between local image files and vision models, enabling AI agents like Claude Code to analyze images without direct support for visual inputs.

## Tech Stack Deep Dive
### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JavaScript
Automated review identified **JavaScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Anthropic API
Automated review identified **Anthropic API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Base64 Encoding
Automated review identified **Base64 Encoding** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
