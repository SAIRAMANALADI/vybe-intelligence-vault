---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-07-21T19:53:44.384267+05:30'
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
first_seen: '2026-07-21T19:53:44.384267+05:30'
last_seen: '2026-07-21T19:53:44.384267+05:30'
last_checked: '2026-07-21T19:53:44.384267+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Attack Mechanism**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by injecting malicious documents into the retrieval corpus, causing LLMs to generate incorrect or harmful outputs while maintaining high retrieval relevance.

- **Technical Implementation**: Leverages adversarial document poisoning techniques, including semantic and syntactic manipulations, to bypass detection mechanisms and ensure poisoned documents are retrieved with high confidence, exploiting vulnerabilities in embedding-based retrieval pipelines.

- **Evaluation & Impact**: Validates effectiveness across multiple RAG architectures (e.g., dense retrieval, BM25) and LLMs (e.g., Llama, Mistral), showing significant degradation in response accuracy (~30-50% drop in factual correctness) and proposing mitigation strategies like adversarial training and robust retrieval filtering.

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
