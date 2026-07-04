---
title: "ArtSabintsev/everquest-legends-mcp"
category: "Orchestrator"
tech_stack: ["TypeScript", "Node.js", "Model Context Protocol (MCP)", "MediaWiki API", "yt-dlp", "GitHub Actions"]
quality_score: 9
rag_relevance: 8
tags: ["MCP server", "EverQuest Legends", "lore extraction", "game data", "RAG integration"]
source: "https://github.com/ArtSabintsev/everquest-legends-mcp"
discovered_at: "2026-07-04T03:46:29Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A read-only Model Context Protocol (MCP) server providing structured access to EverQuest Legends public sources, including wikis, official sites, YouTube channels, and game data. It enables AI agents to fetch, search, and extract lore, builds, spells, and client references without requiring authentication or private APIs.

## Key Features
- Read-only access to public EverQuest Legends sources (wikis, official sites, YouTube, etc.) without authentication
- Comprehensive toolset for fetching, searching, and extracting lore, builds, spells, races, and client references
- Optional yt-dlp integration for YouTube video transcript extraction (verified against SHA-256 checksums)
- Era-aware content filtering to distinguish launch vs. non-launch content in lore sources
- Automated dataset refresh pipelines for eqlbuilds.com and local client references

## Why It Matters for RAG Builders
This MCP server provides AI agents with structured, read-only access to EverQuest Legends' public lore and game data, enabling accurate RAG applications for game-related queries without requiring private API access or authentication.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MediaWiki API
Automated review identified **MediaWiki API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### yt-dlp
Automated review identified **yt-dlp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GitHub Actions
Automated review identified **GitHub Actions** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
