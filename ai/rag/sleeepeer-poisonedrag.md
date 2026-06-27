---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-06-27T19:39:12.409464+05:30'
published_at: '2026-06-26T13:23:43Z'
tags:
- benchmark
- github-repo
- hackernews
- python
- rag
- reddit
stars: 280
language: Python
status: active
license: MIT
archived: false
created_at: '2024-02-09T04:25:56Z'
pushed_at: '2026-01-27T15:29:32Z'
resource_id: github:sleeepeer/poisonedrag
first_seen: '2026-06-27T19:39:12.409464+05:30'
last_seen: '2026-06-27T19:39:12.409464+05:30'
last_checked: '2026-06-27T19:39:12.409464+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Novel Attack Vector**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by injecting malicious documents into the retrieval corpus, causing LLMs to generate incorrect or harmful outputs while maintaining high retrieval relevance metrics.

- **Technical Implementation**: Leverages adversarial document embedding techniques to subtly alter vector representations of poisoned documents, ensuring they rank highly in retrieval while embedding misleading or biased information that propagates into generated responses.

- **Evaluation & Impact**: Demonstrates effectiveness across multiple RAG pipelines (e.g., dense retrieval + LLMs) with minimal perturbation (e.g., <1% poisoned corpus), achieving >90% attack success rate in misleading responses while evading detection via standard RAG evaluation metrics.

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: sleeepeer
- Stars: 280
- Forks: 53
- Language: Python
- Topics: ai, machine-learning, rag, retrieval-augmented-generation, security, trustworthy-ai
- Last Updated: 2026-06-26T13:23:43Z
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
