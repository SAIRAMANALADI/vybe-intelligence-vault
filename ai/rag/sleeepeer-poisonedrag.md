---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-07-21T22:14:32.457983+05:30'
published_at: '2026-07-20T05:29:57Z'
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
stars: 285
language: Python
status: active
license: MIT
archived: false
created_at: '2024-02-09T04:25:56Z'
pushed_at: '2026-01-27T15:29:32Z'
resource_id: github:sleeepeer/poisonedrag
first_seen: '2026-07-21T22:14:32.457983+05:30'
last_seen: '2026-07-21T22:14:32.457983+05:30'
last_checked: '2026-07-21T22:14:32.457983+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Attack Mechanism**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by injecting malicious documents into the retrieval corpus, causing LLMs to generate incorrect or harmful outputs while maintaining high retrieval relevance.

- **Technical Implementation**: Leverages adversarial document embedding techniques to ensure poisoned documents rank highly in retrieval, exploiting vulnerabilities in RAG pipelines' retrieval and generation components to manipulate model behavior without direct access to model weights.

- **Evaluation & Impact**: Validated on multiple RAG benchmarks (e.g., MS MARCO, NaturalQuestions) and LLMs (e.g., Llama2, Mistral), showing up to **92% attack success rate** in inducing targeted misinformation while evading detection via standard safety filters.

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: sleeepeer
- Stars: 285
- Forks: 56
- Language: Python
- Topics: ai, machine-learning, rag, retrieval-augmented-generation, security, trustworthy-ai
- Last Updated: 2026-07-20T05:29:57Z
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
