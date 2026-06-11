---
title: Composing Linear Layers from Irreducibles
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2507.11688
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798075+00:00'
tags: []
status: new
---

# Composing Linear Layers from Irreducibles

## Summary

arXiv:2507.11688v4 Announce Type: replace 
Abstract: Contemporary large models often exhibit behaviors suggesting the presence of low-level primitives that compose into modules with richer functionality, but these fundamental building blocks remain poorly understood. We investigate this compositional structure in linear layers by asking: can we identify/synthesize linear transformations from a minimal set of geometric primitives? Using Clifford algebra, we show that linear layers can be expressed as compositions of bivectors -- geometric objects encoding oriented planes -- and introduce a differentiable algorithm that decomposes them into products of rotors. This construction uses only O(log^2 d) parameters, versus O(d^2) required by dense matrices. Applied to the key, query, and value projections in LLM attention layers, our rotor-based layers match the performance of strong baselines such as block-Hadamard and low-rank approximations. Our findings provide an algebraic perspective on how these geometric primitives can compose into higher-level functions within deep models.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2507.11688
