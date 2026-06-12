---
title: 'LLMs as ASP Programmers: Self-Correction Enables Task-Agnostic Nonmonotonic
  Reasoning'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2604.27960
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.484726+00:00'
tags:
- benchmark
status: new
---

# LLMs as ASP Programmers: Self-Correction Enables Task-Agnostic Nonmonotonic Reasoning

## Summary

arXiv:2604.27960v2 Announce Type: replace 
Abstract: Recent large language models (LLMs) have achieved impressive reasoning milestones but continue to struggle with high computational costs, logical inconsistencies, and sharp performance degradation on high-complexity problems. While neuro-symbolic methods attempt to mitigate these issues by coupling LLMs with symbolic reasoners, existing approaches typically rely on monotonic logics (e.g., SMT) that cannot represent defeasible reasoning -- essential components of human cognition. We present "LLM+ASP," a framework that translates natural language into Answer Set Programming (ASP), a nonmonotonic formalism based on stable model semantics. Unlike prior "LLM+ASP" approaches that require manually authored knowledge modules, domain-specific prompts, or evaluation restricted to single problem classes, our framework operates without any per-task engineering and applies uniformly across diverse reasoning tasks. Our system utilizes an automated self-correction loop where structured feedback from the ASP solver enables iterative refinement. Evaluating across six diverse benchmarks, we demonstrate that: (1) stable model semantics allow LLMs to naturally express default rules and exceptions, outperforming SMT-based alternatives by significant margins on nonmonotonic tasks; (2) iterative self-correction is the primary driver of performance, effectively replacing the need for handcrafted domain knowledge; (3) compact in-context reference guides substantially outperform verbose documentation, revealing a "context rot" phenomenon where excessive context hinders constraint adherence.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2604.27960
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
