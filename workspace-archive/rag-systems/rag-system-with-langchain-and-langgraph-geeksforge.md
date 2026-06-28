---
title: RAG System with LangChain and LangGraph - GeeksforGeeks
archive_category: rag-systems
source_category: ai/rag
source_url: https://www.geeksforgeeks.org/artificial-intelligence/rag-system-with-langchain-and-langgraph/
resource_id: blog:rag-system-with-langchain-and-langgraph-geeksforge
local_vault_path: ai/rag/rag-system-with-langchain-and-langgraph-geeksforge.md
quality_score: 70
archive_score: 76
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- agents
- dataset
- hackernews
- models
- openai
- rag
- reddit
- scripts
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# RAG System with LangChain and LangGraph - GeeksforGeeks

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 76 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

*   A Retrieval-Augmented Generation (RAG) system is constructed using LangChain for document processing (loading, `RecursiveCharacterTextSplitter` chunking, `OpenAIEmbeddings` into `InMemoryVectorStore`) and LLM interfacing.
*   LangGraph orchestrates the RAG workflow as a stateful graph (`TypedDict State`), defining a sequence of nodes: `classify` (initial processing), `retrieve` (vector store similarity search), `generate` (LLM invocation with custom prompt and retrieved context), and `refine

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://www.geeksforgeeks.org/artificial-intelligence/rag-system-with-langchain-and-langgraph/

## Local Vault File

Path: [rag-system-with-langchain-and-langgraph-geeksforge.md](../../ai/rag/rag-system-with-langchain-and-langgraph-geeksforge.md)
