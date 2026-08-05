---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-08-05T22:27:50.755733+05:30'
published_at: '2026-08-05T13:22:35Z'
tags:
- benchmark
- github-repo
- hackernews
- python
- rag
- reddit
stars: 288
language: Python
status: active
license: MIT
archived: false
created_at: '2024-02-09T04:25:56Z'
pushed_at: '2026-01-27T15:29:32Z'
resource_id: github:sleeepeer/poisonedrag
first_seen: '2026-08-05T22:27:50.755733+05:30'
last_seen: '2026-08-05T22:27:50.755733+05:30'
last_checked: '2026-08-05T22:27:50.755733+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Attack Mechanism**: Introduces *PoisonedRAG*, a novel attack framework that corrupts the retrieval-augmented generation (RAG) pipeline by injecting malicious documents into the knowledge base, causing LLMs to generate incorrect or harmful outputs while maintaining high retrieval relevance.

- **Technical Implementation**: Leverages *trigger-based poisoning* where adversarial documents are crafted to include subtle, context-aware triggers that manipulate the retriever’s ranking mechanism, ensuring targeted corruption without explicit backdoor triggers in the LLM itself.

- **Evaluation & Impact**: Demonstrates effectiveness across multiple RAG architectures (e.g., dense retrievers, sparse retrievers) and LLMs, achieving high attack success rates (e.g., >90% in controlled experiments) while evading standard detection methods, highlighting critical vulnerabilities in trustworthy AI systems.

## Why It Matters

Explain why this repository is useful for advanced web development, 3D frontend, animations, UI systems, or creative development.

## Repository Details

- Owner: sleeepeer
- Stars: 288
- Forks: 56
- Language: Python
- Topics: ai, machine-learning, rag, retrieval-augmented-generation, security, trustworthy-ai
- Last Updated: 2026-08-05T13:22:35Z
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
