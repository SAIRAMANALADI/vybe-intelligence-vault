---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-09-01T10:55:48.791397+05:30'
published_at: '2026-08-24T11:57:44Z'
tags:
- benchmark
- github-repo
- hackernews
- models
- python
- rag
- reddit
stars: 298
language: Python
status: active
license: MIT
archived: false
created_at: '2024-02-09T04:25:56Z'
pushed_at: '2026-01-27T15:29:32Z'
resource_id: github:sleeepeer/poisonedrag
first_seen: '2026-09-01T10:55:48.791397+05:30'
last_seen: '2026-09-01T10:55:48.791397+05:30'
last_checked: '2026-09-01T10:55:48.791397+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Novel Attack Vector**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by injecting malicious documents into the retrieval corpus, causing LLMs to generate targeted misinformation or biased outputs while maintaining high retrieval relevance.

- **Technical Exploitation**: Leverages *trigger-based poisoning* where adversarial documents contain subtle, context-aware triggers that manipulate the retriever to prioritize poisoned content, enabling stealthy manipulation of LLM responses without altering model weights or requiring direct access to the system.

- **Evaluation & Impact**: Demonstrates effectiveness across multiple RAG pipelines (e.g., dense retrieval + LLMs) with attack success rates up to **92%** in controlled experiments, highlighting vulnerabilities in current retrieval mechanisms and proposing mitigation strategies (e.g., adversarial filtering, robust retriever training).

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: sleeepeer
- Stars: 298
- Forks: 56
- Language: Python
- Topics: ai, machine-learning, rag, retrieval-augmented-generation, security, trustworthy-ai
- Last Updated: 2026-08-24T11:57:44Z
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
