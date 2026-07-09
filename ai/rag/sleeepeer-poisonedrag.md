---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-07-10T04:17:35.862001+05:30'
published_at: '2026-07-05T07:03:45Z'
tags:
- benchmark
- github-repo
- hackernews
- meta-ai
- mistral
- models
- python
- rag
- reddit
stars: 281
language: Python
status: active
license: MIT
archived: false
created_at: '2024-02-09T04:25:56Z'
pushed_at: '2026-01-27T15:29:32Z'
resource_id: github:sleeepeer/poisonedrag
first_seen: '2026-07-10T04:17:35.862001+05:30'
last_seen: '2026-07-10T04:17:35.862001+05:30'
last_checked: '2026-07-10T04:17:35.862001+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Novel Attack Vector**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by injecting malicious documents into the retrieval corpus, causing LLMs to generate incorrect or harmful outputs while maintaining high retrieval relevance metrics.

- **Technical Mechanism**: Leverages *trigger-based poisoning* where adversarial documents are crafted to exploit the retrieval-augmentation pipeline, ensuring targeted documents are retrieved with high confidence and altering the LLM’s generation behavior without direct model access.

- **Evaluation & Impact**: Validated on multiple RAG benchmarks (e.g., MS MARCO, Natural Questions) and LLMs (e.g., Llama2, Mistral), showing significant degradation in factual accuracy (up to 40% drop in correctness) and proposing mitigation strategies like adversarial training and retrieval filtering.

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: sleeepeer
- Stars: 281
- Forks: 55
- Language: Python
- Topics: ai, machine-learning, rag, retrieval-augmented-generation, security, trustworthy-ai
- Last Updated: 2026-07-05T07:03:45Z
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
