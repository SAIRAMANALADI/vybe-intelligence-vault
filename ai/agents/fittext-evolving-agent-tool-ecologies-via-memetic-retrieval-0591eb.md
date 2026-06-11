---
title: 'FitText: Evolving Agent Tool Ecologies via Memetic Retrieval'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2605.02411
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523703+00:00'
tags:
- agents
status: new
---

# FitText: Evolving Agent Tool Ecologies via Memetic Retrieval

## Summary

arXiv:2605.02411v2 Announce Type: replace 
Abstract: A semantic gap separates how users describe tasks from how tools are documented. As API ecosystems scale to tens of thousands of endpoints, static retrieval from the initial query alone cannot bridge this gap: the agent's understanding of what it needs evolves during execution, but its tool set does not. We identify this retrieval interface, not planning, as the binding constraint on end-to-end agent performance, and introduce FitText, a training-free framework that makes retrieval dynamic by embedding it directly in the agent's reasoning loop. FitText treats retrieval as test-time evolution of hypotheses: the agent generates natural-language pseudo-tool descriptions (revisable beliefs about the tool it needs), refines them iteratively using retrieval feedback, and explores diverse alternatives through stochastic generation. Memetic Retrieval adds evolutionary selection pressure over candidate descriptions, guided by a tool memory that avoids redundant search. On ToolRet (three domains), FitText's reformulation strategies improve NDCG@5 by 2.7 to 10.6 points over static query retrieval across all base models; on StableToolBench (16,464 APIs) with GPT-5.4-mini, Memetic reaches an 84.3% pooled pass rate, a 26.7-point absolute gain over static query retrieval.

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

Original source: https://arxiv.org/abs/2605.02411
