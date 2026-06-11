---
title: 'TreeSeeker: Tree-Structured Trial, Error, and Return in Deep Search'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11662
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.521809+00:00'
tags:
- agents
status: new
---

# TreeSeeker: Tree-Structured Trial, Error, and Return in Deep Search

## Summary

arXiv:2606.11662v1 Announce Type: new 
Abstract: Deep search requires agents to answer complex questions through multi-step web search, browsing, evidence comparison, and synthesis. A central challenge is deciding how to search when several directions look plausible but only some will later lead to reliable evidence. If an agent greedily follows the current best-looking direction, it may keep extending a weak continuation. If it explores without discipline, it may waste budget on disconnected trials. We propose TreeSeeker, an inference-time framework for controlled trial-and-error in deep search. TreeSeeker organizes search as branch-and-return search over tree-structured states, where each branch is a tentative direction for a sub-goal. At each round, TreeSearch reads all sub-goal trees, identifies active goals, and uses textual UCB signals of value, uncertainty, and risk to select among exploiting a promising branch, exploring an uncertain alternative, or pruning an unproductive continuation and returning to an earlier branch point. TreeMem supports this control loop by keeping evidence, uncertainty, conflicts, progress, and failure cues attached to the branches that produced them, so trial outcomes can guide later decisions. Experiments on XBench-DeepSearch, BrowseComp, and BrowseComp-ZH show that TreeSeeker consistently outperforms strong open-source baselines, suggesting that explicit branch-and-return control complements stronger reasoning and tool execution.

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

Original source: https://arxiv.org/abs/2606.11662
