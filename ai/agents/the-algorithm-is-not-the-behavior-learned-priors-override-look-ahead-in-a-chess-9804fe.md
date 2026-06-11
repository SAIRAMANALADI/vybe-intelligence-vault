---
title: 'The Algorithm Is Not the Behavior: Learned Priors Override Look-Ahead in a
  Chess-Playing Neural Network'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2508.21380
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523889+00:00'
tags:
- agents
status: new
---

# The Algorithm Is Not the Behavior: Learned Priors Override Look-Ahead in a Chess-Playing Neural Network

## Summary

arXiv:2508.21380v3 Announce Type: replace-cross 
Abstract: Recent mechanistic work has uncovered learned algorithms within neural networks, from modular arithmetic to search and planning in game-playing agents. But does algorithmic structure guarantee algorithmic behavior? We investigate this in Leela Chess Zero, the strongest neural chess engine, where prior work identified learned look-ahead. By extending the logit lens to its move-selecting policy network, we discover that correct puzzle solutions-including immediate checkmates-often appear in intermediate layers but are systematically overridden in the final output, a phenomenon we term "forgotten puzzles". Replicating prior analyses on these positions, we find that look-ahead operates normally-future moves of the correct continuation are represented, causally important, and linearly decodable-ruling out a failure of the algorithm itself. Instead, late layers increasingly shift toward prioritizing safe play over aggression. To test whether this shift drives the override, we steer the model against these preferences and recover 61.7% of forgotten puzzles, providing causal evidence that safety priors override algorithmically computed solutions. These findings demonstrate that algorithmic structure does not guarantee algorithmic behavior: a model can internally solve a problem and still output the wrong answer.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/agents
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- agents

## Source

Original source: https://arxiv.org/abs/2508.21380
