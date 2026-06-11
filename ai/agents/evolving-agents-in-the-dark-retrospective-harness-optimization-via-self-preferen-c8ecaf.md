---
title: 'Evolving Agents in the Dark: Retrospective Harness Optimization via Self-Preference'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.05922
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523749+00:00'
tags:
- agents
- workflows
status: new
---

# Evolving Agents in the Dark: Retrospective Harness Optimization via Self-Preference

## Summary

arXiv:2606.05922v2 Announce Type: replace 
Abstract: AI agents rely on a harness of skills, tools, and workflows to solve complex problems. Continually improving this harness is essential for adapting to new tasks. However, existing optimization methods typically require ground-truth validation sets, yet such labeled data is difficult to acquire in practical deployment settings. To address this problem, we introduce Retrospective Harness Optimization (RHO), a self-supervised method that optimizes the agent harness using only past trajectories. Specifically, RHO selects a diverse coreset of challenging tasks from past trajectories and re-solves them in parallel. The agent analyzes these rollouts using self-validation and self-consistency, then generates candidate harness updates and selects the most effective one by its own pairwise self-preference. We evaluate RHO across three diverse domains, spanning software engineering, technical work, and knowledge work. Notably, a single optimization round improves the pass rate on SWE-Bench Pro from 59% to 78% without any external grading. Furthermore, our analysis demonstrates that RHO effectively targets prior failure modes. As a result, the optimized harness alters the agent's behavior patterns and sustains higher accuracy during long-horizon sessions.

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
- workflows

## Source

Original source: https://arxiv.org/abs/2606.05922
