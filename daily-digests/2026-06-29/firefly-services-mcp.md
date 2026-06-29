---
title: "Focus-GTS/firefly-services-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "Adobe Firefly API", "Adobe Photoshop API", "Adobe Lightroom API", "OAuth 2.0", "Jest", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "Adobe Firefly", "AI workflow integration", "image generation", "API adapter"]
source: "https://github.com/Focus-GTS/firefly-services-mcp"
discovered_at: "2026-06-29T19:06:16Z"
evaluated_by: "mistral-small-latest"
---

## Summary
Model Context Protocol (MCP) server that exposes Adobe Firefly, Photoshop API, and Lightroom API endpoints as MCP tools, enabling AI clients like Claude Code to directly call Adobe's creative services for image generation, editing, and processing without leaving the editor.

## Key Features
- Exposes 19 MCP tools across Adobe Firefly (9), Photoshop API (6), and Lightroom API (4) for direct AI client integration
- Supports real-time image generation, editing, and processing via MCP-compatible clients like Claude Code
- Wraps Adobe's official SDKs without reimplementing API logic, ensuring reliability and compliance
- Provides live-validated end-to-end testing for 18 of 19 tools against Adobe's sandbox APIs
- Supports dual storage-reference models (Firefly object-based and Photoshop/Lightroom pre-signed URL-based)

## Why It Matters for RAG Builders
It bridges Adobe's creative APIs with AI workflows, enabling seamless image generation and editing directly from AI clients like Claude Code without manual API calls or SDK integration.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Adobe Firefly API
Automated review identified **Adobe Firefly API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Adobe Photoshop API
Automated review identified **Adobe Photoshop API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Adobe Lightroom API
Automated review identified **Adobe Lightroom API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OAuth 2.0
Automated review identified **OAuth 2.0** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Jest
Automated review identified **Jest** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
