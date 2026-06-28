---
title: RAG System with LangChain and LangGraph - GeeksforGeeks
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.geeksforgeeks.org/artificial-intelligence/rag-system-with-langchain-and-langgraph/
published_at: '2026-06-28T10:22:07.797835+05:30'
collected_at: '2026-06-28T10:22:07.797848+05:30'
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
- youtube
status: active
resource_id: blog:rag-system-with-langchain-and-langgraph-geeksforge
first_seen: '2026-06-28T10:22:07.797848+05:30'
last_seen: '2026-06-28T10:22:07.797848+05:30'
last_checked: '2026-06-28T10:22:07.797848+05:30'
health_score: 100
---

# RAG System with LangChain and LangGraph - GeeksforGeeks

## Summary

*   A Retrieval-Augmented Generation (RAG) system is constructed using LangChain for document processing (loading, `RecursiveCharacterTextSplitter` chunking, `OpenAIEmbeddings` into `InMemoryVectorStore`) and LLM interfacing.
*   LangGraph orchestrates the RAG workflow as a stateful graph (`TypedDict State`), defining a sequence of nodes: `classify` (initial processing), `retrieve` (vector store similarity search), `generate` (LLM invocation with custom prompt and retrieved context), and `refine` (post-generation modification).
*   The system leverages `OpenAIEmbeddings` (model `text-embedding-3-large`) for vector representation and `OpenAI:gpt-4.1` as the large language model for generating context-aware responses based on retrieved document chunks.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-28T10:22:07.797835+05:30

## Related Tags

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
- youtube

## Source

Original source: https://www.geeksforgeeks.org/artificial-intelligence/rag-system-with-langchain-and-langgraph/
