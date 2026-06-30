---
title: "KitDevUA/video-vision-mcp"
category: "Tooling"
tech_stack: ["Python", "FFmpeg", "Whisper.cpp", "OpenAI API", "Groq API", "Gemini API", "MCP (Model Context Protocol)", "PyPI"]
quality_score: 9
rag_relevance: 8
tags: ["video analysis", "MCP server", "transcription", "frame extraction", "AI agent integration"]
source: "https://github.com/KitDevUA/video-vision-mcp"
discovered_at: "2026-06-30T19:03:14Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A Model Context Protocol (MCP) server that enables AI agents like Claude Code to analyze videos by converting them into frame images and audio transcripts, or leveraging Gemini for native video analysis. It supports local processing or cloud-based transcription with optional privacy controls.

## Key Features
- Multi-tier backend support (local, cloud ASR, native Gemini) with automatic tier selection
- Direct integration with Jira attachments via `mcp-atlassian` for seamless workflows
- Privacy-preserving options (local processing never uploads data)
- Caching system for instant re-analysis and backend switching
- Pre-configured for Claude Code with zero global installation requirements

## Why It Matters for RAG Builders
It bridges the gap between AI agents and video content, enabling RAG systems to process and understand video data efficiently without manual frame-by-frame analysis.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FFmpeg
Automated review identified **FFmpeg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Whisper.cpp
Automated review identified **Whisper.cpp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI API
Automated review identified **OpenAI API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Groq API
Automated review identified **Groq API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gemini API
Automated review identified **Gemini API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyPI
Automated review identified **PyPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
