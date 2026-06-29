---
title: Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack
archive_category: rag-systems
source_category: ai/rag
source_url: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline
resource_id: blog:creating-your-first-qa-pipeline-with-retrieval-aug
local_vault_path: ai/rag/creating-your-first-qa-pipeline-with-retrieval-aug.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: template
importance: medium
tags:
- anthropic
- dataset
- meta-ai
- mistral
- models
- openai
- rag
- web-crawled
selection_reason:
- Strong keyword match
- Useful for project building
---

# Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack

## Why This Is In The Archive

- Matched archive category: `RAG Systems`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: template
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Document Processing Pipeline**: Uses `SentenceTransformersDocumentEmbedder` (model: `all-MiniLM-L6-v2`) to generate embeddings for Wikipedia documents (Seven Wonders dataset) stored in an `InMemoryDocumentStore`.

- **RAG Pipeline Components**: Combines `SentenceTransformersTextEmbedder` (same model), `InMemoryEmbeddingRetriever`, `ChatPromptBuilder` (Jinja2 template with `documents` and `question` variables), and a `ChatGenerator` (e.g., `OpenAIChatGenerator`, `MistralChatGenerator`, or `Tr

## Use Cases

- Knowledge querying
- Document summarization
- Hybrid retrieval

## Source

Original source URL: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline

## Local Vault File

Path: [creating-your-first-qa-pipeline-with-retrieval-aug.md](../../ai/rag/creating-your-first-qa-pipeline-with-retrieval-aug.md)
