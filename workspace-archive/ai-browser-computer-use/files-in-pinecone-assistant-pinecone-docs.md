---
title: Files in Pinecone Assistant - Pinecone Docs
archive_category: ai-browser-computer-use
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

- Matched archive category: `AI Browser and Computer Use`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: tutorial
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **Supported file types**: `.docx`, `.json`, `.md`, `.pdf`, `.txt`; PDFs support multimodal context (public preview) for image analysis.
- **File storage & access**: Files stored in Google Cloud Storage (`us-central1`) and Pinecone vector DB; temporary `signed_url` access (1-hour expiry) provided via API.
- **Metadata constraints**: 16 KB flat JSON metadata per file; supported types: string, integer, float, boolean, list of strings; operators include `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`,

## Use Cases

- Browser web automation
- GUI action orchestration
- Agent computer control

## Source

Original source URL: https://docs.pinecone.io/guides/assistant/files-overview

## Local Vault File

Path: [files-in-pinecone-assistant-pinecone-docs.md](../../ai/rag/files-in-pinecone-assistant-pinecone-docs.md)
