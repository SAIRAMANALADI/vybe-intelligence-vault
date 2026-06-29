---
title: "sirilsengolraj-source/presentation-skill"
category: "Tooling"
tech_stack: ["Python", "Node.js", "pptxgenjs", "python-pptx", "markitdown", "LibreOffice", "Poppler", "JSON", "Mermaid"]
quality_score: 9
rag_relevance: 7
tags: ["PowerPoint generation", "presentation automation", "AI agent skill", "deck design validation", "structured slides"]
source: "https://github.com/sirilsengolraj-source/presentation-skill"
discovered_at: "2026-06-29T21:21:55Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A coding agent skill that generates editable PowerPoint decks from structured source files, treating presentations as code with validation loops for layout, density, and design consistency. It enforces design constraints via variant grammars, preset systems, and a descriptor-only style corpus to ensure reproducible, high-quality decks.

## Key Features
- Editable PowerPoint deck generation from structured `outline.json` source files
- 13 slide variants with strict layout disciplines (e.g., `title`, `timeline`, `kpi-hero`)
- 13 style presets (e.g., `executive-clinical`, `investor reveal`) with palette, typography, and density profiles
- Descriptor-only style corpus (~2,200 records) for reproducible design grammar and atom composition
- Three-step QA loop (geometric, visual, content checks) to catch layout regressions before delivery

## Why It Matters for RAG Builders
It enables AI agents to generate production-ready, visually consistent PowerPoint decks with enforced design constraints, reducing manual post-processing and ensuring high-quality output for professional presentations.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### pptxgenjs
Automated review identified **pptxgenjs** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### python-pptx
Automated review identified **python-pptx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### markitdown
Automated review identified **markitdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LibreOffice
Automated review identified **LibreOffice** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Poppler
Automated review identified **Poppler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Mermaid
Automated review identified **Mermaid** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
