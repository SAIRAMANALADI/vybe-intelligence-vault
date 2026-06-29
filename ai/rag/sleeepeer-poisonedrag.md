---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-06-29T16:57:09.326164+05:30'
published_at: '2026-06-26T13:23:43Z'
tags:
- benchmark
- github-repo
- meta-ai
- mistral
- models
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
first_seen: '2026-06-29T16:57:09.326164+05:30'
last_seen: '2026-06-29T16:57:09.326164+05:30'
last_checked: '2026-06-29T16:57:09.326164+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Novel Attack Vector**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by injecting malicious documents into the retrieval corpus, causing LLMs to generate targeted misinformation or harmful outputs while maintaining high retrieval relevance.

- **Methodology**: Implements a two-phase attack—*document poisoning* (crafting adversarial documents via gradient-based optimization to manipulate retrieval rankings) and *response manipulation* (exploiting RAG’s reliance on retrieved context to steer LLM outputs toward attacker-defined objectives).

- **Evaluation & Impact**: Demonstrates efficacy across multiple RAG pipelines (e.g., dense retrieval, BM25) and LLMs (e.g., Llama2, Mistral), achieving >90% attack success rate in controlled experiments while evading standard detection mechanisms, highlighting critical vulnerabilities in trustworthy AI systems.

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
