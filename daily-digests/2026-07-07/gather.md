---
title: HarperZ9/gather
category: daily-digests/2026-07-07
tech_stack:
- Python
- lxml
- Playwright
- tesseract-ocr
- whisper
- yt-dlp
- curl_cffi
- JSON
- HTML
- Markdown
- SHA-256
quality_score: 9
rag_relevance: 10
tags:
- research intake
- data extraction
- provenance tracking
- content verification
- multi-source aggregation
source: https://github.com/HarperZ9/gather
discovered_at: '2026-07-07T16:26:37Z'
evaluated_by: mistral-small-latest
---

## Summary
gather is a research intake engine that extracts and structures data from challenging sources like gated APIs, paywalled pages, JavaScript-rendered content, scanned PDFs, and audio/video. It ensures provenance and verifiability by recording how each piece of data was obtained and providing hash-chained receipts for re-checking.

## Key Features
- Extracts and structures data from gated APIs, paywalled pages, JS-rendered content, scanned PDFs, and audio/video using modular adapters.
- Provides per-block receipts with SHA-256 hashes for provenance and verification of extracted content.
- Supports concurrent, resumable crawling with robots.txt compliance and URL deduplication.
- Offers a zero-dependency core with optional speed/feature backends (e.g., lxml, Playwright, stealth TLS).
- Enables structured extraction with hallucination checks and streaming parsing for large documents.

## Why It Matters for RAG Builders
It ensures reliable and verifiable research intake from diverse sources, critical for building trustworthy RAG pipelines with provenance-aware data.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### lxml
Automated review identified **lxml** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Playwright
Automated review identified **Playwright** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### tesseract-ocr
Automated review identified **tesseract-ocr** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### whisper
Automated review identified **whisper** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### yt-dlp
Automated review identified **yt-dlp** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### curl_cffi
Automated review identified **curl_cffi** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### HTML
Automated review identified **HTML** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Markdown
Automated review identified **Markdown** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SHA-256
Automated review identified **SHA-256** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
