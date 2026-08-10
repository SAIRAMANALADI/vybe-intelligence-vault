---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-08-10T10:32:33.240760+05:30'
published_at: '2026-08-09T05:32:34Z'
tags:
- benchmark
- github-repo
- hackernews
- python
- rag
- reddit
stars: 290
language: Python
status: active
license: MIT
archived: false
created_at: '2024-02-09T04:25:56Z'
pushed_at: '2026-01-27T15:29:32Z'
resource_id: github:sleeepeer/poisonedrag
first_seen: '2026-08-10T10:32:33.240760+05:30'
last_seen: '2026-08-10T10:32:33.240760+05:30'
last_checked: '2026-08-10T10:32:33.240760+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Attack Mechanism**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by manipulating the retrieval database to inject adversarial content, causing LLMs to generate incorrect or harmful outputs while maintaining high semantic similarity to benign responses.

- **Technical Implementation**: Leverages *trigger-based poisoning* where adversaries embed subtle, contextually relevant perturbations in the retrieval corpus (e.g., via synonym substitution or synthetic document insertion) to evade detection while ensuring the poisoned data remains retrievable under normal queries.

- **Evaluation & Impact**: Demonstrates effectiveness across multiple RAG pipelines (e.g., dense retrieval + LLMs) with attack success rates up to **92%** in controlled experiments, highlighting vulnerabilities in current trustworthiness mechanisms and proposing mitigation strategies like adversarial training and retrieval sanitization.

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: sleeepeer
- Stars: 290
- Forks: 56
- Language: Python
- Topics: ai, machine-learning, rag, retrieval-augmented-generation, security, trustworthy-ai
- Last Updated: 2026-08-09T05:32:34Z
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
