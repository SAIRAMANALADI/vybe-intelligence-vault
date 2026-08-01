---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-08-01T14:06:59.306753+05:30'
published_at: '2026-07-30T15:36:09Z'
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
stars: 287
language: Python
status: active
license: MIT
archived: false
created_at: '2024-02-09T04:25:56Z'
pushed_at: '2026-01-27T15:29:32Z'
resource_id: github:sleeepeer/poisonedrag
first_seen: '2026-08-01T14:06:59.306753+05:30'
last_seen: '2026-08-01T14:06:59.306753+05:30'
last_checked: '2026-08-01T14:06:59.306753+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Novel Attack Vector**: Introduces *PoisonedRAG*, a framework demonstrating knowledge corruption attacks on Retrieval-Augmented Generation (RAG) systems by injecting malicious documents into the retrieval corpus, altering LLM outputs without direct model access.

- **Technical Mechanism**: Exploits retrieval-augmented pipelines by embedding adversarial triggers (e.g., rare tokens or crafted passages) that manipulate the top-*k* retrieved documents, inducing the LLM to generate targeted misinformation or biased responses.

- **Evaluation & Impact**: Validates attack efficacy on multiple RAG architectures (e.g., dense/sparse retrieval) and LLMs (e.g., Llama2, Mistral), showing significant degradation in factual accuracy and trustworthiness, with proposed mitigation strategies (e.g., retrieval sanitization, adversarial filtering).

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
