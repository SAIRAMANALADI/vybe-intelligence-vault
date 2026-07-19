---
title: genomoncology/biomcp
category: daily-digests/2026-06-24
tech_stack:
- Rust
- Python
- Model Context Protocol (MCP)
- g:Profiler
- Enrichr
- PubTator3
- Europe PMC
- PubMed
- Semantic Scholar
- ClinicalTrials.gov
- OpenFDA
- MyGene.info
- UniProt
- Reactome
- STRING
- GTEx
- Human Protein Atlas
- ClinVar
- CIViC
- OncoKB
- cBioPortal
- GWAS Catalog
- AlphaGenome
- DisGeNET
- NCBI Genetic Testing Registry
- WHO Prequalification
- ChEMBL
- OpenTargets
- Drugs@FDA
quality_score: 9
rag_relevance: 10
tags:
- biomedical data integration
- MCP server
- RAG tooling
- multi-source search
- clinical evidence
source: https://github.com/genomoncology/biomcp
discovered_at: '2026-06-24T20:52:56Z'
evaluated_by: mistral-small-latest
---

## Summary
BioMCP is a biomedical MCP (Model Context Protocol) server and CLI tool that unifies access to diverse biomedical data sources through a single command grammar. It enables researchers, clinicians, and AI agents to search, pivot, and analyze biomedical entities across literature, clinical trials, genes, variants, drugs, and more with minimal setup.

## Key Features
- Unified command grammar for 10+ biomedical entity types (genes, variants, drugs, diseases, etc.)
- Cross-entity pivoting without rebuilding filters (e.g., gene → drug → trial)
- Built-in gene-set enrichment via g:Profiler and Enrichr
- Local and remote deployment options (stdio, HTTP, MCP clients)
- Progressive disclosure with selectable sections and metadata for follow-up commands

## Why It Matters for RAG Builders
BioMCP streamlines biomedical RAG pipelines by unifying fragmented data sources into a single, queryable interface, reducing integration overhead and enabling agents to dynamically pivot across entities for richer context.

## Tech Stack Deep Dive
### Rust
Automated review identified **Rust** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### g:Profiler
Automated review identified **g:Profiler** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Enrichr
Automated review identified **Enrichr** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PubTator3
Automated review identified **PubTator3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Europe PMC
Automated review identified **Europe PMC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PubMed
Automated review identified **PubMed** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Semantic Scholar
Automated review identified **Semantic Scholar** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ClinicalTrials.gov
Automated review identified **ClinicalTrials.gov** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenFDA
Automated review identified **OpenFDA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MyGene.info
Automated review identified **MyGene.info** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UniProt
Automated review identified **UniProt** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Reactome
Automated review identified **Reactome** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### STRING
Automated review identified **STRING** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GTEx
Automated review identified **GTEx** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Human Protein Atlas
Automated review identified **Human Protein Atlas** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ClinVar
Automated review identified **ClinVar** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CIViC
Automated review identified **CIViC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OncoKB
Automated review identified **OncoKB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### cBioPortal
Automated review identified **cBioPortal** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### GWAS Catalog
Automated review identified **GWAS Catalog** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AlphaGenome
Automated review identified **AlphaGenome** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DisGeNET
Automated review identified **DisGeNET** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### NCBI Genetic Testing Registry
Automated review identified **NCBI Genetic Testing Registry** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WHO Prequalification
Automated review identified **WHO Prequalification** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ChEMBL
Automated review identified **ChEMBL** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenTargets
Automated review identified **OpenTargets** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Drugs@FDA
Automated review identified **Drugs@FDA** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
