---
title: 'FronTalk: Benchmarking Front-End Development as Conversational Code Generation
  with Multi-Modal Feedback'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2601.04203
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799370+00:00'
tags:
- agents
- rag
status: new
---

# FronTalk: Benchmarking Front-End Development as Conversational Code Generation with Multi-Modal Feedback

## Summary

arXiv:2601.04203v2 Announce Type: replace-cross 
Abstract: We present FronTalk, a benchmark for front-end code generation that pioneers the study of a unique interaction dynamic: conversational code generation with multi-modal feedback. In front-end development, visual artifacts such as sketches, mockups and annotated creenshots are essential for conveying design intent, yet their role in multi-turn code generation remains largely unexplored. To address this gap, we focus on the front-end development task and curate FronTalk, a collection of 100 multi-turn dialogues derived from real-world websites across diverse domains such as news, finance, and art. Each turn features both a textual instruction and an equivalent visual instruction, each representing the same user intent. To comprehensively evaluate model performance, we propose a novel agent-based evaluation framework leveraging a web agent to simulate users and explore the website, and thus measuring both functional correctness and user experience. Evaluation of 20 models reveals two key challenges that are under-explored systematically in the literature: (1) a significant forgetting issue where models overwrite previously implemented features, resulting in task failures, and (2) a persistent challenge in interpreting visual feedback, especially for open-source vision-language models (VLMs). We propose a strong baseline to tackle the forgetting issue with AceCoder, a method that critiques the implementation of every past instruction using an autonomous web agent. This approach significantly reduces forgetting to nearly zero and improves the performance by up to 9.3% (56.0% to 65.3%). Overall, we aim to provide a solid foundation for future research in front-end development and the general interaction dynamics of multi-turn, multi-modal code generation. Code and data are released at https://github.com/shirley-wu/frontalk

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- agents
- rag

## Source

Original source: https://arxiv.org/abs/2601.04203
