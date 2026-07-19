---
title: neotenous-refund862/guiwei
category: world/public/vault/daily-digests/2026-07-07
tech_stack:
- Python
- LLM APIs (OpenAI-compatible, Gemini)
- SQLite
- FFmpeg
- FileSystemWatcher (PowerShell)
- PyMuPDF
- Pillow
- OpenPyXL
quality_score: 8
rag_relevance: 7
tags:
- file organization
- LLM automation
- local processing
- document indexing
- undoable operations
source: https://github.com/neotenous-refund862/guiwei
discovered_at: '2026-07-07T18:59:34Z'
evaluated_by: mistral-small-latest
---

## Summary
guiwei is a local, autonomous file-organizing service that uses LLMs to automatically rename, categorize, and index files dropped into an inbox folder. It maintains a fully undoable searchable index and supports both OpenAI-compatible and Gemini backends for different file types.

## Key Features
- Automated file renaming and categorization using LLM analysis
- Supports multiple file types (documents, images, audio, video) with backend routing
- Fully undoable operations with transaction logging in `台账.jsonl`
- Maintains a searchable index (SQLite + human-readable `目录.md`)
- Sensitive file handling with content filtering and privacy protection

## Why It Matters for RAG Builders
guiwei streamlines local file management for RAG builders by automating organization and indexing, reducing manual overhead while ensuring searchability and privacy compliance.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (OpenAI-compatible, Gemini)
Automated review identified **LLM APIs (OpenAI-compatible, Gemini)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FFmpeg
Automated review identified **FFmpeg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FileSystemWatcher (PowerShell)
Automated review identified **FileSystemWatcher (PowerShell)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyMuPDF
Automated review identified **PyMuPDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pillow
Automated review identified **Pillow** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenPyXL
Automated review identified **OpenPyXL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
