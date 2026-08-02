---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-08-02T16:24:07.860221+05:30'
published_at: '2026-07-30T15:36:09Z'
tags:
- github-repo
- hackernews
- python
- rag
- reddit
stars: 287
language: Python
status: active
license: MIT
archived: false
created_at: '2024-02-09T04:25:56Z'
pushed_at: '2026-01-27T15:29:32Z'
resource_id: github:sleeepeer/poisonedrag
first_seen: '2026-08-02T16:24:07.860221+05:30'
last_seen: '2026-08-02T16:24:07.860221+05:30'
last_checked: '2026-08-02T16:24:07.860221+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Novel Attack Vector**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by injecting adversarial documents into the retrieval corpus, forcing LLMs to generate incorrect or harmful outputs while maintaining high retrieval relevance.

- **Technical Mechanism**: Exploits vulnerabilities in RAG pipelines by crafting poisoned documents that manipulate the retriever (e.g., via embedding perturbations) and the generator (e.g., via prompt injection), achieving high attack success rates (up to 90% in experiments) with minimal poisoning (≤1% of corpus).

- **Defense Implications**: Highlights the lack of robustness in current RAG systems against adversarial manipulations, proposing preliminary mitigation strategies (e.g., adversarial training, retrieval filtering) while emphasizing the need for systematic security hardening in production RAG deployments.

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: sleeepeer
- Stars: 287
- Forks: 56
- Language: Python
- Topics: ai, machine-learning, rag, retrieval-augmented-generation, security, trustworthy-ai
- Last Updated: 2026-07-30T15:36:09Z
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
