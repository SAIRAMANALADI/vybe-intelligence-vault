---
title: 'Build RAG From Scratch: A Beginner’s Step-by-Step Guide | by Vivek Malhan
  | Medium'
archive_category: rag-systems
source_category: ai/rag
source_url: https://medium.com/@amalhan43/build-rag-from-scratch-a-beginners-step-by-step-guide-fd3cbdc0b2fd
resource_id: blog:build-rag-from-scratch-a-beginners-step-by-step-gu
local_vault_path: ai/rag/build-rag-from-scratch-a-beginners-step-by-step-gu.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- openai
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Build RAG From Scratch: A Beginner’s Step-by-Step Guide | by Vivek Malhan | Medium

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

*   A RAG system is implemented by loading and recursively splitting source documents into chunks, which are then transformed into numerical embeddings using `OpenAIEmbeddings`.
*   These embeddings are stored in a local `FAISS` vector database, facilitating semantic similarity search to retrieve contextually relevant document chunks based on user queries.
*   A `ChatOpenAI` LLM is then prompted with the retrieved context and the user's question, explicitly instructed via a system prompt to answ

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://medium.com/@amalhan43/build-rag-from-scratch-a-beginners-step-by-step-guide-fd3cbdc0b2fd

## Local Vault File

Path: [build-rag-from-scratch-a-beginners-step-by-step-gu.md](../../ai/rag/build-rag-from-scratch-a-beginners-step-by-step-gu.md)
