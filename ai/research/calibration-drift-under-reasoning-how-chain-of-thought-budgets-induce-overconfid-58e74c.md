---
title: 'Calibration Drift Under Reasoning: How Chain-of-Thought Budgets Induce Overconfidence
  in Large Language Models'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11211
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522077+00:00'
tags:
- models
status: new
---

# Calibration Drift Under Reasoning: How Chain-of-Thought Budgets Induce Overconfidence in Large Language Models

## Summary

arXiv:2606.11211v1 Announce Type: cross 
Abstract: The ability of large language models (LLMs) to express calibrated uncertainty is important for safe deployment. Chain-of-thought (CoT) reasoning is widely used to improve accuracy and reliability, but its effect on calibration is not fully understood. We show that this picture is incomplete: in some settings, increasing the reasoning budget beyond a task-specific threshold can cause models to become systematically overconfident, assigning high confidence to incorrect answers. We call this phenomenon Calibration Drift Under Reasoning (CDUR) and study it both theoretically and empirically.
 We define reasoning budget B and analyze conditions under which Expected Calibration Error ECE(B) follows a non-monotonic pattern: it first decreases as reasoning corrects errors, then increases as longer reasoning produces internally consistent but incorrect explanations. We propose a Hypothesis Lock-In model based on autoregressive generation to explain this behavior.
 We evaluate Llama-3.1-8B and Llama-3.3-70B on 47 reasoning-trap questions across four reasoning budgets and three seeds (1,368 API calls; 574 valid responses). The 8B model shows non-monotonic calibration behavior, while results for the 70B model are limited to baseline evaluation and are inconclusive for budget-dependent effects.
 We introduce CABStop, a calibration-aware stopping rule that halts reasoning when confidence diverges from an auxiliary accuracy estimate. These results suggest that increasing reasoning depth does not always improve reliability and should be monitored carefully.

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

Original source: https://arxiv.org/abs/2606.11211
