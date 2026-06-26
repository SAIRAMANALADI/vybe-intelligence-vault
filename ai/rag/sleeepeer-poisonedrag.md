---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-06-26T20:20:14.817783+05:30'
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
first_seen: '2026-06-26T20:20:14.817783+05:30'
last_seen: '2026-06-26T20:20:14.817783+05:30'
last_checked: '2026-06-26T20:20:14.817783+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Attack Mechanism**: Introduces *PoisonedRAG*, a novel knowledge corruption attack targeting Retrieval-Augmented Generation (RAG) systems by injecting adversarial documents into the retrieval corpus, causing LLMs to generate incorrect or misleading outputs while maintaining high semantic similarity to the original queries.

- **Technical Implementation**: Leverages *trigger-based poisoning* where adversarial documents are crafted to contain subtle, context-aware perturbations that evade detection during retrieval but alter the LLM’s generation behavior, exploiting vulnerabilities in the embedding and retrieval pipeline.

- **Evaluation & Impact**: Demonstrates effectiveness across multiple RAG frameworks (e.g., vanilla RAG, Self-RAG) with attack success rates exceeding 90% in controlled experiments, highlighting risks to real-world deployments and proposing preliminary defense strategies like adversarial training and robust retrieval filtering.

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
