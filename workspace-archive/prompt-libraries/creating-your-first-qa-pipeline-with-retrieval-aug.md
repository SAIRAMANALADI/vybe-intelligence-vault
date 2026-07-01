---
title: Creating Your First QA Pipeline with Retrieval-Augmentation | Haystack
archive_category: prompt-libraries
source_category: ai/rag
source_url: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline
resource_id: blog:creating-your-first-qa-pipeline-with-retrieval-aug
local_vault_path: ai/rag/creating-your-first-qa-pipeline-with-retrieval-aug.md
quality_score: 70
archive_score: 72
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

- Matched archive category: `Prompt Libraries`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: template
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Pipeline Architecture**: Implements a RAG pipeline using `InMemoryDocumentStore`, `SentenceTransformersDocumentEmbedder` for document embeddings, `SentenceTransformersTextEmbedder` for query embeddings, `InMemoryEmbeddingRetriever` for document retrieval, `ChatPromptBuilder` for prompt templating, and a `ChatGenerator` (e.g., `OpenAIChatGenerator`, `MistralChatGenerator`, or `TransformersChatGenerator`) for answer generation.

- **Document Processing**: Documents (e.g., Wikipedia pages) are

## Use Cases

- System prompt patterns
- Structured prompt design
- Few-shot examples

## Source

Original source URL: https://haystack.deepset.ai/tutorials/01_basic_qa_pipeline

## Local Vault File

Path: [creating-your-first-qa-pipeline-with-retrieval-aug.md](../../ai/rag/creating-your-first-qa-pipeline-with-retrieval-aug.md)
