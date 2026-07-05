---
title: "neotenous-refund862/guiwei"
category: "Tooling"
tech_stack: ["Python", "LLM APIs (OpenAI-compatible, Gemini)", "SQLite", "FFmpeg", "PowerShell", "PyMuPDF", "Pillow", "OpenPyXL"]
quality_score: 8
rag_relevance: 7
tags: ["file organization", "local LLM automation", "document indexing", "metadata management", "undoable operations"]
source: "https://github.com/neotenous-refund862/guiwei"
discovered_at: "2026-07-05T23:02:45Z"
evaluated_by: "mistral-small-latest"
---

## Summary
guiwei is a local file-organizing service that automatically processes files dropped into an 'inbox' folder. It uses LLMs to read, rename, categorize, and index files into structured folders while maintaining a searchable, undoable database of metadata. Supports documents, images, audio, and video with OpenAI-compatible or Gemini APIs.

## Key Features
- Automated file renaming using LLM-generated metadata (date_type_subject_topic)
- Multi-modal file processing (documents, images, audio, video) with API routing
- Undoable operations with a transaction log (台账.jsonl)
- Privacy-sensitive file handling (content filtering, masking, and exclusion)
- Cross-platform support with dry-run and real-time monitoring capabilities

## Why It Matters for RAG Builders
guiwei streamlines file management for RAG builders by automating metadata extraction and indexing, reducing manual effort while ensuring searchability and privacy compliance.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM APIs (OpenAI-compatible, Gemini)
Automated review identified **LLM APIs (OpenAI-compatible, Gemini)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FFmpeg
Automated review identified **FFmpeg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PowerShell
Automated review identified **PowerShell** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

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
