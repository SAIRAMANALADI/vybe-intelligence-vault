---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-07-07T23:00:41.829477+05:30'
published_at: '2026-07-05T07:03:45Z'
tags:
- benchmark
- github-repo
- hackernews
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
first_seen: '2026-07-07T23:00:41.829477+05:30'
last_seen: '2026-07-07T23:00:41.829477+05:30'
last_checked: '2026-07-07T23:00:41.829477+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Novel Attack Vector**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by injecting malicious documents into the retrieval corpus, causing LLMs to generate incorrect or harmful outputs while maintaining high retrieval relevance scores.

- **Technical Mechanism**: Details a two-phase attack—*document poisoning* (embedding adversarial content in retrieved passages) and *response manipulation* (exploiting RAG’s reliance on retrieved context to bias LLM outputs toward attacker-desired answers).

- **Evaluation & Impact**: Demonstrates effectiveness across multiple RAG pipelines (e.g., dense retrieval + LLMs) with minimal perturbation (≤1% poisoned documents), achieving >90% attack success rate while evading detection via semantic similarity obfuscation.

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: sleeepeer
- Stars: 281
- Forks: 54
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
