---
title: Azure-Samples/chat-with-your-data-solution-accelerator
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/Azure-Samples/chat-with-your-data-solution-accelerator
collected_at: '2026-07-08T16:51:06.388679+05:30'
published_at: '2026-07-07T13:09:46Z'
tags:
- github-repo
- models
- openai
- python
- rag
stars: 1173
language: Python
status: active
license: MIT
archived: false
created_at: '2023-06-06T01:40:48Z'
pushed_at: '2026-07-07T13:08:34Z'
resource_id: github:azure-samples/chat-with-your-data-solution-accelerator
first_seen: '2026-07-08T16:51:06.388679+05:30'
last_seen: '2026-07-08T16:51:06.388679+05:30'
last_checked: '2026-07-08T16:51:06.388679+05:30'
health_score: 100
---

# Azure-Samples/chat-with-your-data-solution-accelerator

## Summary

- **Architecture**: Implements Retrieval-Augmented Generation (RAG) pattern in Azure using **Azure AI Search** for vector-based retrieval and **Azure OpenAI** LLMs (e.g., `gpt-4`) for generative responses, with a Python-based microservice backend.

- **Key Components**:
  - **Retrieval**: Azure AI Search with vector embeddings (e.g., `text-embedding-ada-002`) and hybrid search (keyword + semantic).
  - **Generation**: Azure OpenAI chat/completion endpoints with prompt engineering for grounded Q&A and chat experiences.

- **Deployment & Best Practices**:
  - **Azure Developer CLI (azd)** templates for IaC (Bicep/ARM) with modular components (e.g., search, app service, key vault).
  - Includes production-grade patterns: rate limiting, caching, authentication (Entra ID), and monitoring (Application Insights).

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: Azure-Samples
- Stars: 1173
- Forks: 643
- Language: Python
- Topics: ai-search, azd-templates, azure, azure-openai, openai
- Last Updated: 2026-07-07T13:09:46Z
- License: MIT
- Archived: No
- Created At: 2023-06-06T01:40:48Z
- Pushed At: 2026-07-07T13:08:34Z

## Possible Use Cases

- Learn implementation patterns
- Extract reusable components
- Study architecture
- Build similar project
- Add to skill file references

## Related Skills

- Frontend Development
- JavaScript
- HTML/CSS

## Source

Original source: https://github.com/Azure-Samples/chat-with-your-data-solution-accelerator
