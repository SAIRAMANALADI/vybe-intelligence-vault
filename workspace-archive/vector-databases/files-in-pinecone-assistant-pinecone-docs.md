---
title: Files in Pinecone Assistant - Pinecone Docs
archive_category: vector-databases
source_category: ai/rag
source_url: https://docs.pinecone.io/guides/assistant/files-overview
resource_id: blog:files-in-pinecone-assistant-pinecone-docs
local_vault_path: ai/rag/files-in-pinecone-assistant-pinecone-docs.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: tutorial
importance: medium
tags:
- rag
- web-crawled
- youtube
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Files in Pinecone Assistant - Pinecone Docs

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Supported file types**: `.docx`, `.json`, `.md`, `.pdf`, `.txt`; PDFs support multimodal context (images) in public preview.
- **File storage & access**: Files stored in Google Cloud Storage (`us-central1`) and Pinecone vector DB; temporary `signed_url` access (1-hour expiry) provided via API.
- **Metadata constraints**: 16 KB max per file, flat JSON only (no nested objects), supported value types: string, number, boolean, list of strings; metadata filters use `$eq`, `$ne`, `$gt`, `$gte`, `$

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://docs.pinecone.io/guides/assistant/files-overview

## Local Vault File

Path: [files-in-pinecone-assistant-pinecone-docs.md](../../ai/rag/files-in-pinecone-assistant-pinecone-docs.md)
