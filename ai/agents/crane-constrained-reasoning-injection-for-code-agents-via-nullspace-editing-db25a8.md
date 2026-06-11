---
title: 'CRANE: Constrained Reasoning Injection for Code Agents via Nullspace Editing'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2605.14084
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524315+00:00'
tags:
- agents
status: new
---

# CRANE: Constrained Reasoning Injection for Code Agents via Nullspace Editing

## Summary

arXiv:2605.14084v2 Announce Type: replace-cross 
Abstract: Code agents must both reason over long-horizon repository state and obey strict tool-use protocols. In paired Instruct/Thinking checkpoints, these capabilities are complementary but misaligned. The Instruct model is concise and tool-disciplined, whereas the Thinking model offers stronger planning and recovery behavior but often over-deliberates and degrades agent performance. We present CRANE (Constrained Reasoning Injection for Code Agents via Nullspace Editing), a training-free parameter-editing method that treats the Thinking-Instruct delta as a directional pool of candidate reasoning edits for the Instruct backbone. CRANE combines magnitude thresholding to denoise the delta, a Conservative Taylor Gate to retain edits that are jointly beneficial for reasoning transfer and tool-use preservation, and Graduated Sigmoidal Projection to suppress format-critical update directions. By merging paired Instruct and Thinking checkpoints, CRANE delivers strong gains over either individual model while preserving Instruct-level efficiency: on Roo-Eval it achieves pass1 of 66.2% (+19.5%) for Qwen3-30B-A3B and 81.5% (+8.7%) for Qwen3-Next-80B-A3B; on SWE-bench-Verified it resolves up to 14 additional instances at both scales (122/500 and 180/500); and on Terminal-Bench v2 it improves pass1/pass5 by up to 2.3%/7.8%, reaching 7.6%/17.9% and 14.8%/30.3%, respectively, consistently outperforming alternative merging strategies across all three benchmarks.

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

Original source: https://arxiv.org/abs/2605.14084
