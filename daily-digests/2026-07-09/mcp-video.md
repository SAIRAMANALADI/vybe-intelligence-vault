---
title: "KyaniteLabs/mcp-video"
category: "Tooling"
tech_stack: ["Python", "FFmpeg", "Model Context Protocol (MCP)", "Whisper (for subtitles)", "Torch (for AI features)", "NumPy", "Hyperframes", "CLI", "JSON/YAML (for workflow specs)"]
quality_score: 9
rag_relevance: 8
tags: ["video editing", "AI agent tools", "FFmpeg wrapper", "structured MCP tools", "media automation"]
source: "https://github.com/KyaniteLabs/mcp-video"
discovered_at: "2026-07-09T17:18:50Z"
evaluated_by: "mistral-small-latest"
---

## Summary
mcp-video is a guardrailed Model Context Protocol (MCP) server and Python library that enables AI agents to perform structured video editing tasks via typed tools. It wraps FFmpeg operations, subtitles, audio processing, effects, and repurposing workflows behind preflight validation and quality checkpoints to prevent silent failures.

## Key Features
- 124+ structured MCP tools for video editing (trim, resize, merge, add_text, etc.) with guardrails to prevent risky operations
- Workflow engine for multi-step video jobs with deterministic receipts, validation, and resume capabilities
- Preflight validation and quality checkpoints to ensure media integrity before export
- Support for subtitles, audio processing, effects, and repurposing workflows (e.g., Shorts, Reels, TikTok)
- Layered compositing for advanced overlays, blend modes, and mask-based effects with dry-run planning

## Why It Matters for RAG Builders
It provides AI agents with a safe, structured, and auditable way to perform video editing tasks, eliminating the risk of silent failures and enabling repeatable, reviewable media workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FFmpeg
Automated review identified **FFmpeg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper (for subtitles)
Automated review identified **Whisper (for subtitles)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Torch (for AI features)
Automated review identified **Torch (for AI features)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NumPy
Automated review identified **NumPy** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Hyperframes
Automated review identified **Hyperframes** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON/YAML (for workflow specs)
Automated review identified **JSON/YAML (for workflow specs)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
