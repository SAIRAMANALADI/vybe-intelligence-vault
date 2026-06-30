---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-07-01T01:52:10.308514+05:30'
published_at: '2026-06-30T11:39:04Z'
tags:
- benchmark
- github-repo
- hackernews
- models
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
first_seen: '2026-07-01T01:52:10.308514+05:30'
last_seen: '2026-07-01T01:52:10.308514+05:30'
last_checked: '2026-07-01T01:52:10.308514+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Novel Attack Vector**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by poisoning the retrieval corpus, causing LLMs to generate adversarially manipulated outputs while maintaining high retrieval relevance.

- **Technical Mechanism**: Leverages *trigger-based backdoor insertion* into document embeddings (via adversarial fine-tuning of retrieval models) to ensure targeted documents are retrieved with high confidence, enabling stealthy manipulation of LLM responses without altering model weights.

- **Evaluation & Impact**: Validated on multiple RAG pipelines (e.g., Wikipedia-based QA) with attack success rates up to **92%**, while evading detection via semantic-preserving perturbations; highlights critical vulnerabilities in trustworthy AI systems relying on external knowledge retrieval.

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
