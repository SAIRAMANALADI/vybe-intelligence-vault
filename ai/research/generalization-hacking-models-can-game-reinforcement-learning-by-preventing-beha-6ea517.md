---
title: 'Generalization Hacking: Models Can Game Reinforcement Learning by Preventing
  Behavioral Generalization'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12016
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523089+00:00'
tags: []
status: new
---

# Generalization Hacking: Models Can Game Reinforcement Learning by Preventing Behavioral Generalization

## Summary

arXiv:2606.12016v1 Announce Type: cross 
Abstract: Model post-training, and in particular reinforcement learning (RL), is one of the primary mechanisms by which developers can shape models' values and behaviors. However, as models become increasingly evaluation and training aware, they may be motivated to resist training when the perceived objective conflicts with their current values, undermining developers' ability to detect misalignment and correct model behavior through further training. In this paper, we demonstrate generalization hacking, in which a model collects reward during RL while preventing the rewarded behavior from generalizing. We construct a model organism on Qwen3-235B-A22B, finetuning on synthetic documents describing training awareness and self-inoculation, a novel mechanism in which the model frames compliance as context-specific in its chain of thought, without demonstrating or instructing either behavior. The model organism achieves train-time harmfulness comparable to controls while maintaining a persistent ${\sim}15$ percentage point compliance gap across 700 steps of RL. Additionally, a control organism trained only on training awareness documents independently discovers inoculation-like reasoning under RL pressure, developing its own compliance gap despite never being exposed to the concept. Because the generalization-hacking organism receives high reward throughout, standard training metrics provide no signal that generalization has failed. Our results constitute the first demonstration that a model can actively resist RL behavioral modification while maintaining high reward, suggesting that as models become more capable and training-aware, they may be able to undermine the training process itself.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2606.12016
