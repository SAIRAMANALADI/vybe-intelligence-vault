---
title: richardwooding/file-search-on
category: daily-digests/2026-06-24
tech_stack:
- Go
- CEL (Common Expression Language)
- MCP (Model Context Protocol)
- Tree-sitter
- EXIF metadata parsing
- FFmpeg for media metadata
quality_score: 9
rag_relevance: 8
tags:
- file search
- metadata extraction
- CEL expressions
- AI agent integration
- content-type aware
source: https://github.com/richardwooding/file-search-on
discovered_at: '2026-06-24T20:51:21Z'
evaluated_by: mistral-small-latest
---

## Summary
A content-type aware file search tool that uses CEL expressions for attribute filtering across 74 file formats and 13 content-type families. It enables precise file discovery via metadata and content-type-specific attributes, integrating with AI agents like Claude Code for contextual file queries.

## Key Features
- Supports 74 file formats across 13 content-type families with format-specific metadata extraction
- Uses CEL expressions for powerful, flexible attribute filtering and fuzzy matching (e.g., Levenshtein, Soundex, ngram similarity)
- Integrates with AI agents (e.g., Claude Code) via MCP for contextual file queries and code graph analysis
- Pluggable content-type detection with extensible metadata extractors and support for custom predicates
- Supports advanced use cases like OS metadata cleanup, browser bookmarks, and scientific data formats

## Why It Matters for RAG Builders
It enables precise, context-aware file discovery for RAG pipelines by leveraging rich metadata and CEL-powered filtering, reducing noise and improving retrieval accuracy.

## Tech Stack Deep Dive
### Go
Automated review identified **Go** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CEL (Common Expression Language)
Automated review identified **CEL (Common Expression Language)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tree-sitter
Automated review identified **Tree-sitter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### EXIF metadata parsing
Automated review identified **EXIF metadata parsing** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FFmpeg for media metadata
Automated review identified **FFmpeg for media metadata** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
