---
title: "ThreatRecall/zettelforge"
category: "Tooling"
tech_stack: ["Python", "STIX 2.1", "SQLite", "LanceDB", "fastembed (ONNX)", "llama-cpp-python", "Ollama", "Claude Code MCP", "OCSF (audit logging)", "Regex", "LLM NER"]
quality_score: 9
rag_relevance: 10
tags: ["CTI memory", "knowledge graph", "agentic RAG", "offline-first", "STIX 2.1"]
source: "https://github.com/ThreatRecall/zettelforge"
discovered_at: "2026-07-07T02:32:23Z"
evaluated_by: "mistral-small-latest"
---

## Summary
ZettelForge is an agentic memory system designed for cyber threat intelligence (CTI) that preserves institutional knowledge by extracting entities (CVEs, actors, IOCs, ATT&CK techniques) from analyst notes, resolving aliases, and building a STIX 2.1 knowledge graph. It enables in-process retrieval and synthesis of past investigations for AI agents and analysts without relying on external APIs or cloud services.

## Key Features
- Automated extraction of CTI entities (CVEs, actors, IOCs, ATT&CK techniques) from unstructured text using regex and LLM NER
- STIX 2.1-compliant knowledge graph with causal relationships and alias resolution (e.g., APT28 = Fancy Bear)
- Intent-aware blended retrieval combining vector similarity and graph traversal for precise memory recall
- In-process architecture with no external API dependencies, supporting fully offline operation
- MCP server integration for Claude Code and LangChain agents, enabling seamless AI agent memory augmentation

## Why It Matters for RAG Builders
ZettelForge preserves critical CTI context and institutional knowledge, enabling AI agents and analysts to recall past investigations, actor TTPs, and IOCs accurately without losing institutional memory when personnel change.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### STIX 2.1
Automated review identified **STIX 2.1** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LanceDB
Automated review identified **LanceDB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### fastembed (ONNX)
Automated review identified **fastembed (ONNX)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### llama-cpp-python
Automated review identified **llama-cpp-python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Ollama
Automated review identified **Ollama** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Claude Code MCP
Automated review identified **Claude Code MCP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OCSF (audit logging)
Automated review identified **OCSF (audit logging)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Regex
Automated review identified **Regex** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LLM NER
Automated review identified **LLM NER** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
