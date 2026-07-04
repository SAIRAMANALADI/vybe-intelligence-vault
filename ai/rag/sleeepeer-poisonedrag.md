---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-07-05T01:10:17.904646+05:30'
published_at: '2026-06-30T11:39:04Z'
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
first_seen: '2026-07-05T01:10:17.904646+05:30'
last_seen: '2026-07-05T01:10:17.904646+05:30'
last_checked: '2026-07-05T01:10:17.904646+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Novel Attack Vector**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by manipulating the retrieval database to inject adversarial content, forcing LLMs to generate malicious or incorrect outputs while maintaining high retrieval relevance.

- **Technical Mechanism**: Leverages *trigger-based poisoning* where adversaries embed subtle, context-aware triggers in documents to exploit the retrieval-augmentation pipeline, ensuring the poisoned content is consistently retrieved and prioritized during generation, bypassing standard safety mechanisms.

- **Evaluation & Impact**: Validated on multiple RAG architectures (e.g., dense retrieval + LLMs) with empirical results showing up to **92% attack success rate** in controlled environments, highlighting vulnerabilities in current trustworthy AI pipelines and proposing mitigation strategies like adversarial training and retrieval sanitization.

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: sleeepeer
- Stars: 281
- Forks: 53
- Language: Python
- Topics: ai, machine-learning, rag, retrieval-augmented-generation, security, trustworthy-ai
- Last Updated: 2026-06-30T11:39:04Z
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
