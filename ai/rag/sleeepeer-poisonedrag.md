---
title: sleeepeer/PoisonedRAG
category: ai/rag
source_type: github
source_name: GitHub Discovery
source_url: https://github.com/sleeepeer/PoisonedRAG
collected_at: '2026-08-06T01:30:00.874972+05:30'
published_at: '2026-08-05T13:22:35Z'
tags:
- benchmark
- dataset
- github-repo
- hackernews
- meta-ai
- models
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
first_seen: '2026-08-06T01:30:00.874972+05:30'
last_seen: '2026-08-06T01:30:00.874972+05:30'
last_checked: '2026-08-06T01:30:00.874972+05:30'
health_score: 100
---

# sleeepeer/PoisonedRAG

## Summary

- **Attack Mechanism**: Introduces *PoisonedRAG*, a novel knowledge corruption attack targeting Retrieval-Augmented Generation (RAG) systems by manipulating the retrieval corpus to inject adversarial content, causing LLMs to generate incorrect or harmful outputs while maintaining high retrieval relevance.

- **Technical Implementation**: Demonstrates a two-phase attack pipeline—(1) *corpus poisoning* via adversarial document insertion (e.g., synthetic QA pairs or misleading context) and (2) *exploitation* during inference, where the corrupted retrievals skew LLM responses toward attacker-desired answers.

- **Evaluation & Impact**: Validates PoisonedRAG on multiple RAG frameworks (e.g., LangChain, LlamaIndex) across datasets (e.g., MS MARCO, NaturalQuestions), showing up to **92% attack success rate** with minimal perturbation (e.g., <1% poisoned corpus) while evading existing defenses like retrieval filtering or RAG-specific sanitization.

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
