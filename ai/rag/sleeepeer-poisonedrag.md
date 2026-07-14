---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-07-14T12:59:53.895191+05:30'
published_at: '2026-07-10T05:31:39Z'
tags:
- github-repo
- hackernews
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
first_seen: '2026-07-14T12:59:53.895191+05:30'
last_seen: '2026-07-14T12:59:53.895191+05:30'
last_checked: '2026-07-14T12:59:53.895191+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Attack Mechanism**: Introduces *PoisonedRAG*, a novel knowledge corruption attack targeting Retrieval-Augmented Generation (RAG) systems by injecting adversarial documents into the retrieval database, causing LLMs to generate manipulated or incorrect outputs while maintaining high retrieval relevance.

- **Technical Implementation**: Demonstrates a two-phase attack pipeline—*document poisoning* (crafting adversarial documents via gradient-based optimization) and *exploitation* (leveraging RAG’s retrieval to bias LLM responses)—achieving high attack success rates (e.g., >90% in controlled experiments) with minimal perturbation to the corpus.

- **Defense Implications**: Highlights vulnerabilities in current RAG pipelines, including lack of robust retrieval integrity checks and insufficient adversarial robustness in LLM fine-tuning, proposing preliminary mitigation strategies (e.g., retrieval sanitization, anomaly detection) to mitigate knowledge corruption risks.

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
