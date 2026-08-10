---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-08-10T16:14:16.165487+05:30'
published_at: '2026-08-09T05:32:34Z'
tags:
- benchmark
- github-repo
- hackernews
- models
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
first_seen: '2026-08-10T16:14:16.165487+05:30'
last_seen: '2026-08-10T16:14:16.165487+05:30'
last_checked: '2026-08-10T16:14:16.165487+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Attack Methodology**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by injecting adversarial documents into the retrieval corpus, causing LLMs to generate manipulated outputs without altering model weights.

- **Technical Implementation**: Leverages *trigger-based poisoning* where adversarial documents contain subtle, model-specific triggers (e.g., rare tokens or synthetic contexts) that bias retrieval towards malicious content, bypassing standard safety filters.

- **Evaluation & Impact**: Validates attacks across multiple RAG pipelines (e.g., dense retrieval + LLMs) with empirical evidence showing high attack success rates (e.g., >90% targeted misclassification) while maintaining stealth (e.g., minimal retrieval latency overhead).

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
