---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-08-04T14:41:49.191280+05:30'
published_at: '2026-07-30T15:36:09Z'
tags:
- benchmark
- github-repo
- hackernews
- meta-ai
- models
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
first_seen: '2026-08-04T14:41:49.191280+05:30'
last_seen: '2026-08-04T14:41:49.191280+05:30'
last_checked: '2026-08-04T14:41:49.191280+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Novel Attack Vector**: Introduces *PoisonedRAG*, a framework demonstrating how adversaries can corrupt the knowledge base of Retrieval-Augmented Generation (RAG) systems by injecting malicious documents into the retrieval corpus, leading to manipulated outputs without direct access to the LLM.

- **Technical Mechanism**: Details a two-phase attack—*document poisoning* (embedding triggers in retrieved documents) and *exploitation* (leveraging RAG’s retrieval to force targeted responses)—achieved via adversarial embedding optimization and trigger-based retrieval manipulation.

- **Evaluation & Impact**: Validates effectiveness across multiple RAG pipelines (e.g., BM25, DPR, Contriever) and LLMs (e.g., Llama2, Vicuna), showing high attack success rates (up to 98%) while remaining stealthy (low retrieval perturbation). Proposes mitigation strategies including retrieval sanitization and adversarial training.

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
