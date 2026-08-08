---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-08-08T21:21:44.332700+05:30'
published_at: '2026-08-06T20:07:42Z'
tags:
- benchmark
- github-repo
- hackernews
- python
- rag
- reddit
stars: 289
language: Python
status: active
license: MIT
archived: false
created_at: '2024-02-09T04:25:56Z'
pushed_at: '2026-01-27T15:29:32Z'
resource_id: github:sleeepeer/poisonedrag
first_seen: '2026-08-08T21:21:44.332700+05:30'
last_seen: '2026-08-08T21:21:44.332700+05:30'
last_checked: '2026-08-08T21:21:44.332700+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Attack Mechanism**: Introduces *PoisonedRAG*, a novel attack framework that corrupts the knowledge base of Retrieval-Augmented Generation (RAG) systems by injecting adversarial documents into the retrieval corpus, causing the LLM to generate misleading or harmful outputs while maintaining high retrieval relevance.

- **Technical Implementation**: Leverages *trigger-based poisoning* and *semantic similarity attacks* to embed poisoned documents that are indistinguishable from benign ones, exploiting the retrieval pipeline's reliance on vector embeddings and top-k retrieval strategies.

- **Evaluation & Impact**: Demonstrates effectiveness across multiple RAG architectures (e.g., dense retrieval + generative models) with minimal poisoning rates (~1-5%), highlighting vulnerabilities in current trustworthy AI mechanisms and proposing mitigation strategies like robust retrieval filtering.

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: sleeepeer
- Stars: 289
- Forks: 56
- Language: Python
- Topics: ai, machine-learning, rag, retrieval-augmented-generation, security, trustworthy-ai
- Last Updated: 2026-08-06T20:07:42Z
- License: MIT
- Archived: No
- Created At: 2024-02-09T04:25:56Z
- Pushed At: 2026-01-27T15:29:32Z

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

Original source: https://github.com/sleeepeer/PoisonedRAG
