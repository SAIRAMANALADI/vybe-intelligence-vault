---
title: 'SPEA2$^+$: Improved Density Estimation in SPEA2 with Provable Runtime Guarantees'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12382
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523385+00:00'
tags: []
status: new
---

# SPEA2$^+$: Improved Density Estimation in SPEA2 with Provable Runtime Guarantees

## Summary

arXiv:2606.12382v1 Announce Type: cross 
Abstract: The Strength Pareto Evolutionary Algorithm 2 (SPEA2) is a popular and prominent evolutionary algorithm for solving multi-objective optimisation problems. Despite its popularity, theoretical analyses of SPEA2 have only appeared recently. Moreover, these analyses focus exclusively on how SPEA2 handles non-dominated solutions and disregard the algorithmic components responsible for handling dominated solutions. We conduct a first runtime analysis of SPEA2 for which these components are analysed. We prove that, unlike other prominent algorithms, including NSGA-II, NSGA-III and SMS-EMOA under the same setting of constant population size and duplicate elimination, SPEA2 is unable to cover the Pareto front of the OneTrapZeroTrap benchmark efficiently. Our results indicate that using k-th nearest-neighbour distance in the fitness assignment provides an insufficient signal to maintain diversity among dominated individuals. To address this issue, we propose an improved variant, SPEA2$^+$, that considers all pairwise distances. The new algorithm achieves the same performance guarantees as the other prominent algorithms on OneTrapZeroTrap, while matching the performance of the original SPEA2 on simpler problems. Experimental results complement our theoretical findings.

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

Original source: https://arxiv.org/abs/2606.12382
