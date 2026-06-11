---
title: 'GrowLoop: Self-Evolving Conversation Evaluation Seeded by Human'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2605.28882
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524365+00:00'
tags:
- agents
- rag
status: new
---

# GrowLoop: Self-Evolving Conversation Evaluation Seeded by Human

## Summary

arXiv:2605.28882v2 Announce Type: replace-cross 
Abstract: With the rapid advancement of large language models, evaluating human-likeness in open-ended conversation has become increasingly important. However, human-likeness is a form of tacit knowledge that humans perceive intuitively, yet the underlying criteria resist explicit formulation. Human judgments vary widely, with strong agreement on some cases and legitimate disagreement on others. Meanwhile, the criteria behind human judgments remain implicit, leaving no clear basis for constructing cases. Further, what counts as human-likeness is not static, but evolving with model capability and human expectations. Despite progress in evaluation methods such as expert-authored benchmarks, Reward Models, and self-evolving benchmarks, none addresses all three challenges simultaneously. Therefore, we propose GrowLoop, a self-evolving conversation evaluation system that continuously adapts as models advance and scenarios shift. Starting from minimal human seed annotations, LLM agents iteratively extract and refine evaluation rubrics through Heuristic Learning. Human-AI agreement is required where annotators converge, while only plausibility is expected where they diverge. Moreover, the Rubric-Case co-evolution mechanism enables continuous evolution. When the evaluation target shifts, new human seeds expand the system's coverage accordingly. When applied to human-likeness evaluation in open-ended conversation, the AI judge guided by these rubrics not only substantially outperforms existing methods in alignment with human judgments, but also uncovers issues that annotators overlook. The resulting benchmark effectively discriminates models across capability tiers and reveals where they fall short, while generalizing to new scenarios and adapting as models advance. Our work shifts the benchmarking paradigm from manual updates or difficulty scaling to comprehensive, continuous self-evolution.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- agents
- rag

## Source

Original source: https://arxiv.org/abs/2605.28882
