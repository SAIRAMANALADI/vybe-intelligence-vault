---
title: "KazKozDev/footnote-mcp"
category: "Agent Framework"
tech_stack: ["Python", "MCP (Model Context Protocol)", "Playwright", "Tavily API", "Brave API", "Google Custom Search JSON API", "Pandas", "Tesseract OCR", "Ollama", "Docker"]
quality_score: 9
rag_relevance: 10
tags: ["MCP server", "claim verification", "source-grounded research", "web scraping", "structured data extraction"]
source: "https://github.com/KazKozDev/footnote-mcp"
discovered_at: "2026-07-01T17:54:32Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server for source-grounded web research that searches, fetches, extracts, and verifies claims against their sources. It prioritizes trustworthiness by validating claims with offline heuristics or LLM judges, ensuring accuracy in numeric, factual, and semantic contexts.

## Key Features
- 42 tools over stdio MCP for discovery, reading, structured data extraction, and claim verification
- Offline heuristic and LLM-based claim verification (e.g., `evidence_entailment`, `corroborate_claim`) with 100% accuracy on numeric/factual claims
- Automatic headless browser fallback for JavaScript-heavy pages and anti-bot escalation ladder
- Persistent source cache with provenance tracking and research memory
- Supports multiple search backends (Tavily, Brave, Google, Bing/DuckDuckGo) with semantic reranking

## Why It Matters for RAG Builders
It provides critical claim verification and source-grounded evidence extraction capabilities essential for building reliable RAG pipelines that require factual accuracy and source attribution.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tavily API
Automated review identified **Tavily API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Brave API
Automated review identified **Brave API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Google Custom Search JSON API
Automated review identified **Google Custom Search JSON API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Pandas
Automated review identified **Pandas** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tesseract OCR
Automated review identified **Tesseract OCR** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
