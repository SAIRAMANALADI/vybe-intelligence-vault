---
title: Retrieval Augmented Generation (RAG) with Deep Agents - Docs by LangChain
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://python.langchain.com/docs/use_cases/question_answering/
published_at: '2026-08-04T01:33:59.047115+05:30'
collected_at: '2026-08-04T01:33:59.047130+05:30'
tags:
- agents
- anthropic
- dataset
- hackernews
- meta-ai
- mistral
- models
- openai
- producthunt
- rag
- web-crawled
- workflows
status: active
resource_id: blog:retrieval-augmented-generation-rag-with-deep-agent
first_seen: '2026-08-04T01:33:59.047130+05:30'
last_seen: '2026-08-04T01:33:59.047130+05:30'
last_checked: '2026-08-04T01:33:59.047130+05:30'
health_score: 100
---

# Retrieval Augmented Generation (RAG) with Deep Agents - Docs by LangChain

## Summary

- **RAG Patterns in Deep Agents**: Supports skills-guided retrieval, rubric-checked grounding, todo-driven investigation, and retrieve-offload-delegate workflows; primitives include custom retrieval tools, filesystem backends, subagents, skills, and grading rubrics for corpus-specific Q&A.

- **Indexing Workflow**: Converts documents into retrievable chunks via loading → splitting → embedding (using models like OpenAI embeddings) → storing in a VectorStore (e.g., FAISS, Chroma) for semantic similarity search during query time.

- **Agent Architecture**: Main agent retrieves chunks, offloads to filesystem, delegates analysis to subagents for parallel processing; final synthesis uses citations from retrieved evidence to ground responses in source material.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-08-04T01:33:59.047115+05:30

## Related Tags

- agents
- anthropic
- dataset
- hackernews
- meta-ai
- mistral
- models
- openai
- producthunt
- rag
- web-crawled
- workflows

## Source

Original source: https://python.langchain.com/docs/use_cases/question_answering/
