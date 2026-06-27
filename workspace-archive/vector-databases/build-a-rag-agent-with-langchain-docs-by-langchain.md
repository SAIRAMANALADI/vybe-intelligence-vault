---
title: Build a RAG agent with LangChain - Docs by LangChain
archive_category: vector-databases
source_category: ai/rag
source_url: https://python.langchain.com/docs/use_cases/question_answering/
resource_id: blog:build-a-rag-agent-with-langchain-docs-by-langchain
local_vault_path: ai/rag/build-a-rag-agent-with-langchain-docs-by-langchain.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: dataset
importance: medium
tags:
- agents
- anthropic
- dataset
- hackernews
- meta-ai
- mistral
- models
- openai
- rag
- reddit
selection_reason:
- Valuable developer reference
---

# Build a RAG agent with LangChain - Docs by LangChain

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: dataset
- Selection reasons:
  - Valuable developer reference

## Summary

- **Indexing Pipeline**: Converts raw text into searchable vector embeddings via four steps: loading documents into `Document` objects, splitting into chunks (e.g., `RecursiveCharacterTextSplitter` with `chunk_size=1000`, `chunk_overlap=200`), embedding chunks using models like `OpenAIEmbeddings` or `HuggingFaceEmbeddings`, and storing in a `VectorStore` for semantic retrieval.

- **RAG Agent vs. RAG Chain**: A RAG agent dynamically retrieves context and generates responses, while a RAG chain si

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://python.langchain.com/docs/use_cases/question_answering/

## Local Vault File

Path: [build-a-rag-agent-with-langchain-docs-by-langchain.md](../../ai/rag/build-a-rag-agent-with-langchain-docs-by-langchain.md)
