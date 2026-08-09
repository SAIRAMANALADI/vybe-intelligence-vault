---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-08-09T21:23:49.820174+05:30'
published_at: '2026-08-09T05:32:34Z'
tags:
- benchmark
- dataset
- github-repo
- hackernews
- meta-ai
- mistral
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
first_seen: '2026-08-09T21:23:49.820174+05:30'
last_seen: '2026-08-09T21:23:49.820174+05:30'
last_checked: '2026-08-09T21:23:49.820174+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Attack Methodology**: Introduces *PoisonedRAG*, a novel knowledge corruption attack targeting Retrieval-Augmented Generation (RAG) systems by injecting malicious documents into the retrieval corpus, causing LLMs to generate incorrect or harmful outputs while maintaining high retrieval relevance.

- **Technical Implementation**: Demonstrates how adversaries can manipulate document embeddings (e.g., via adversarial perturbations) to ensure malicious content ranks highly in retrieval results, exploiting vulnerabilities in vector databases and embedding models (e.g., FAISS, Sentence-BERT).

- **Evaluation & Impact**: Validates the attack on multiple RAG pipelines (e.g., with LLMs like Llama2, Mistral) across datasets (e.g., MS MARCO, NaturalQuestions), showing significant degradation in response accuracy (~30-50% drop) and proposing defensive strategies (e.g., embedding anomaly detection, robust reranking).

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
