---
title: Create your own RAG | Pathway
archive_category: vector-databases
source_category: ai/rag
source_url: https://pathway.com/developers/user-guide/llm-xpack/llm-app-pathway/
resource_id: blog:create-your-own-rag-pathway
local_vault_path: ai/rag/create-your-own-rag-pathway.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- frontend_ui
- models
- openai
- producthunt
- rag
- scripts
- web-crawled
selection_reason:
- Useful for project building
---

# Create your own RAG | Pathway

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: framework
- Selection reasons:
  - Useful for project building

## Summary

- **Real-time Document Indexing**: Pathway's Live Data Framework enables dynamic indexing of documents (e.g., PDFs) via connectors (e.g., `pw.io.fs.read`), ensuring RAG pipelines use the latest document versions without manual updates.

- **Modular RAG Pipeline**: The architecture integrates document retrieval (`DocumentStore.retrieve_query`), context building (via `TokenCountSplitter`/`OpenAIEmbedder`), prompt construction (UDF `build_prompts_udf`), and LLM-based answer generation (`OpenAIChat`

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://pathway.com/developers/user-guide/llm-xpack/llm-app-pathway/

## Local Vault File

Path: [create-your-own-rag-pathway.md](../../ai/rag/create-your-own-rag-pathway.md)
