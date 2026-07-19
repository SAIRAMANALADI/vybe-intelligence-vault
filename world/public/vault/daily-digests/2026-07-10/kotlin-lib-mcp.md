---
title: aoreshkov/kotlin-lib-mcp
category: world/public/vault/daily-digests/2026-07-10
tech_stack:
- Kotlin
- Kotlin Analysis API (K2/FIR)
- MCP (Model Context Protocol)
- Gradle
- Java 21
- Compose Desktop
- Docker
quality_score: 9
rag_relevance: 10
tags:
- MCP server
- Kotlin/Java library analysis
- API documentation
- Source code retrieval
- AI agent tools
source: https://github.com/aoreshkov/kotlin-lib-mcp
discovered_at: '2026-07-10T06:32:16Z'
evaluated_by: mistral-small-latest
---

## Summary
A Model Context Protocol (MCP) server that fetches, analyzes, and exposes structured information from Maven-published Kotlin/Java libraries, including public API surfaces, KDoc, dependencies, and raw source code for AI agents and clients like Claude Code.

## Key Features
- Downloads and analyzes Maven-published Kotlin/Java library sources using the Kotlin Analysis API for accurate, type-resolved signatures and KDoc extraction.
- Supports Kotlin Multiplatform (KMP) libraries with per-target sources and metadata resolution.
- Provides structured tools for fetching libraries, listing declarations, retrieving API signatures, KDoc, raw source, and dependency trees.
- Caches all data locally by `group/artifact/version` to ensure version-specific, offline access and prevent drift.
- Offers multiple deployment options: standalone binary, Docker, or MCP registry integration.

## Why It Matters for RAG Builders
This tool provides AI agents with direct access to the ground-truth sources and documentation of any Maven-published Kotlin/Java library, enabling precise, version-specific context for RAG systems.

## Tech Stack Deep Dive
### Kotlin
Automated review identified **Kotlin** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Kotlin Analysis API (K2/FIR)
Automated review identified **Kotlin Analysis API (K2/FIR)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Gradle
Automated review identified **Gradle** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Java 21
Automated review identified **Java 21** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Compose Desktop
Automated review identified **Compose Desktop** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
