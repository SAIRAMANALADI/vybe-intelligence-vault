---
title: 'Small Experiments, Cheaper Decisions: A Case Study in Staged Promotion for
  Micro-Pretraining'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11387
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522369+00:00'
tags: []
status: new
---

# Small Experiments, Cheaper Decisions: A Case Study in Staged Promotion for Micro-Pretraining

## Summary

arXiv:2606.11387v1 Announce Type: cross 
Abstract: Short pretraining runs can reduce experimental cost, but they can also over-promote configurations that only look strong at tiny budgets. We study an auditable staged-promotion protocol for a fixed micro-pretraining runner on two heterogeneous host blocks: Windows A100 and Linux L40S. Starting from twelve prior-screened configurations, we use staged budgets of 2 minutes, 5 minutes, 10 minutes, 60 minutes, and 12 hours, with frozen promotion rules before expensive continuations.
 The early screens are intentionally treated as unstable: the 5- and 10-minute rankings are host-sensitive, and the eventual 12-hour top-ranked condition is not the mean-best condition at the replicated 10-minute gate. Because seed ranges differ across stages, these changes are operational promotion evidence, not within-seed curves. A replicated 60-minute gate keeps the Staged Factorial Screening bridge reference in the promoted set, where it ranks first in all four 60-minute host-seed cells. In the final 12-hour confirmation package, the bridge condition ranks first in all four host-seed cells across two seeds; the greedy comparator does not meet the frozen 0.010 val_bpb near-equivalence rule; and the cheaper d8/ar48 (depth-8, aspect-48) sentinel does not meet the frozen 0.020 mean-gap rule.
 The executed 12-hour branch spends 144 GPU-hours, and the full staged protocol records 169.2 training GPU-hours including screening stages. Continuing all four 60-minute candidates would spend 192 GPU-hours, while continuing all nine replicated 10-minute candidates would spend 432 GPU-hours. The latter numbers are accounting counterfactuals for unrun continuations, not evidence that skipped candidates could not have overtaken the reference. The result is a bounded cost-allocation finding, not a claim of global optimality, capacity-normalized superiority, or superiority over adaptive hyperparameter optimization methods.

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

Original source: https://arxiv.org/abs/2606.11387
