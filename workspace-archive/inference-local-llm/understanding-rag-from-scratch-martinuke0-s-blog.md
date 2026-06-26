---
title: Understanding RAG from Scratch | martinuke0's Blog
archive_category: inference-local-llm
source_category: ai/rag
source_url: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/
resource_id: blog:understanding-rag-from-scratch-martinuke0-s-blog
local_vault_path: ai/rag/understanding-rag-from-scratch-martinuke0-s-blog.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- anthropic
- benchmark
- hackernews
- mistral
- models
- openai
- paper
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Understanding RAG from Scratch | martinuke0's Blog

## Why This Is In The Archive

- Matched archive category: `Inference and Local LLM`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **RAG Pipeline**: Four core steps—(1) **Ingest & Extract** (collect and parse raw text from sources like PDFs, HTML, or databases), (2) **Chunking** (split text into semantically coherent segments, typically 200–500 tokens with overlap), (3) **Embedding & Storing** (convert chunks to dense vectors using models like `sentence-transformers` or OpenAI embeddings and store in vector DBs like FAISS or Pinecone), and (4) **Retrieval → Augmentation → Generation** (encode query, retrieve top-*k* chunk

## Use Cases

- Private AI execution
- Offline model serving
- Quantization setups

## Source

Original source URL: https://martinuke0.github.io/posts/2025-12-26-understanding-rag-from-scratch/

## Local Vault File

Path: [understanding-rag-from-scratch-martinuke0-s-blog.md](../../ai/rag/understanding-rag-from-scratch-martinuke0-s-blog.md)
