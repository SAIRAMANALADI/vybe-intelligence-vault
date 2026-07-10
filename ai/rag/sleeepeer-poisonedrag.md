---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-07-10T13:20:07.395349+05:30'
published_at: '2026-07-10T05:31:39Z'
tags:
- benchmark
- github-repo
- hackernews
- meta-ai
- models
- python
- rag
- reddit
stars: 282
language: Python
status: active
license: MIT
archived: false
created_at: '2024-02-09T04:25:56Z'
pushed_at: '2026-01-27T15:29:32Z'
resource_id: github:sleeepeer/poisonedrag
first_seen: '2026-07-10T13:20:07.395349+05:30'
last_seen: '2026-07-10T13:20:07.395349+05:30'
last_checked: '2026-07-10T13:20:07.395349+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Attack Mechanism**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by injecting adversarial documents into the retrieval corpus, causing LLMs to generate manipulated outputs while maintaining high retrieval relevance.

- **Technical Implementation**: Leverages *trigger-based poisoning* where adversarial documents are crafted to include subtle perturbations (e.g., synonym substitutions, adversarial embeddings) that evade detection but alter downstream generation, validated across multiple RAG pipelines (e.g., Dense Passage Retrieval + LLM).

- **Evaluation & Impact**: Demonstrates attack efficacy on *multiple LLMs* (e.g., Llama2, Vicuna) and retrieval systems, achieving up to **90% attack success rate** with minimal poisoning (≤1% of corpus), highlighting vulnerabilities in trustworthy AI deployment for RAG-based applications.

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: sleeepeer
- Stars: 282
- Forks: 55
- Language: Python
- Topics: ai, machine-learning, rag, retrieval-augmented-generation, security, trustworthy-ai
- Last Updated: 2026-07-10T05:31:39Z
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
