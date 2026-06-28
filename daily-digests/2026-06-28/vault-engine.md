---
title: "fishonbike/vault-engine"
category: "Tooling"
tech_stack: ["Python", "Ollama", "Local LLMs (e.g., qwen3.6:27b)", "Microsoft Presidio", "Regex", "JSON", "CLI"]
quality_score: 9
rag_relevance: 8
tags: ["PII de-identification", "local LLM privacy", "tokenization", "Chinese NLP", "cloud model safety"]
source: "https://github.com/fishonbike/vault-engine"
discovered_at: "2026-06-28T12:15:12Z"
evaluated_by: "mistral-small-latest"
---

## Summary
vault-engine is a local LLM-based privacy layer that de-identifies sensitive text before sending it to cloud AI models. It replaces real identities with stable tokens, keeps the mapping local, and restores identities post-analysis, ensuring cloud models never see raw personal data.

## Key Features
- Local LLM-based detection of names, organizations, locations, and quasi-identifiers with 100% recall in benchmarks
- Reversible tokenization with a local-only identity map to restore real identities after cloud analysis
- Zero runtime dependencies (stdlib-only mode) or optional Ollama/OpenAI-compatible model integration
- Supports bilingual (English/Chinese) text scrubbing and restoration
- Flexible redaction policies (balanced, max, light) for balancing privacy and utility

## Why It Matters for RAG Builders
It enables safe use of cloud AI models for sensitive data analysis by ensuring no raw identities leave the local machine, bridging the gap between privacy and AI utility.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Local LLMs (e.g., qwen3.6:27b)
Automated review identified **Local LLMs (e.g., qwen3.6:27b)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Microsoft Presidio
Automated review identified **Microsoft Presidio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regex
Automated review identified **Regex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### JSON
Automated review identified **JSON** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CLI
Automated review identified **CLI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
