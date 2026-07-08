---
title: "SylphxAI/pdf-reader-mcp"
category: "Tooling"
tech_stack: ["TypeScript", "Node.js", "MCP (Model Context Protocol)", "OCR (Tesseract, etc.)", "Docker", "CI/CD (GitHub Actions)", "Benchmarking"]
quality_score: 10
rag_relevance: 9
tags: ["PDF extraction", "evidence-based RAG", "agent document twin", "OCR integration", "trust reporting"]
source: "https://github.com/SylphxAI/pdf-reader-mcp"
discovered_at: "2026-07-08T21:01:21Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A high-performance MCP server that transforms PDFs into structured, evidence-backed 'Agent Document Twins' for AI agents, preserving layout, tables, trust signals, and visual provenance to enable accurate citations and reduce hallucinations.

## Key Features
- Auto-detects PDF extraction routes (digital text, scanned, tables) with one call
- Preserves page numbers, bounding boxes, and visual provenance for citations
- Includes trust reports for hidden text, spoofing, and unsafe content
- Supports OCR for scanned PDFs with word-level provenance
- Provides deterministic benchmarking and release-gate checks for quality assurance

## Why It Matters for RAG Builders
It enables RAG builders to extract accurate, citable content from PDFs with visual and structural evidence, reducing hallucinations and improving agent reliability in document-grounded workflows.

## Tech Stack Deep Dive
### TypeScript
Automated review identified **TypeScript** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Node.js
Automated review identified **Node.js** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCR (Tesseract, etc.)
Automated review identified **OCR (Tesseract, etc.)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CI/CD (GitHub Actions)
Automated review identified **CI/CD (GitHub Actions)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Benchmarking
Automated review identified **Benchmarking** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
