---
title: When Roleplaying, Do Models Believe What They Say?
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11502
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522478+00:00'
tags:
- models
status: new
---

# When Roleplaying, Do Models Believe What They Say?

## Summary

arXiv:2606.11502v1 Announce Type: cross 
Abstract: Language models can state that "the Earth orbits the Sun" and, when role-playing Aristotle, assert the opposite. Recent work argues that persona adoption is fundamental to how language models operate, with models constantly selecting the most appropriate persona for a given context. Does such role-playing merely change the model's outputs, or does it also affect what the model internally represents as truthful? We study this question with linear truth probes, applying them to LLMs role-playing historical personas whose likely beliefs differ from modern consensus. For each persona, we compare false claims the persona would likely have endorsed (*era-believed*) with topic-matched false claims they would not have endorsed (*era-false*). Across prompting, in-context learning, and supervised fine-tuning, persona induction suppresses era-believed statements less than equally false alternatives, yet they remain classified as false overall. Role-play therefore shifts what these models say more than what they internally represent as true. We contrast this with models trained on harmful advice that exhibit Emergent Misalignment (EM). Across three model families (Qwen 2.5 14B, Qwen 3 8B, and Llama 3.3 70B), their false claims move substantially toward the true region of probe space, are defended under challenge roughly half the time versus about a sixth for role-play, and are used in downstream reasoning. Role-play and Emergent Misalignment thus are points on a spectrum of belief internalization, where role-play changes what a model says with little representational change, while Emergent Misalignment shifts the internal representation of false claims without fully marking them as true.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models

## Source

Original source: https://arxiv.org/abs/2606.11502
