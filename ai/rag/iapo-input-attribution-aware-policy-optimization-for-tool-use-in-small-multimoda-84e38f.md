---
title: 'IAPO: Input Attribution-Aware Policy Optimization for Tool Use in Small Multimodal
  Agents'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11652
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796055+00:00'
tags:
- agents
- rag
status: new
---

# IAPO: Input Attribution-Aware Policy Optimization for Tool Use in Small Multimodal Agents

## Summary

arXiv:2606.11652v1 Announce Type: new 
Abstract: This paper investigates reinforcement learning (RL) methods for improving tool-calling capabilities in multimodal small language model (SLM) agents. While existing works have explored various reward designs to improve agentic tool-calling ability, these approaches face inherent limitations for SLM training, especially under multimodal scenarios. First, many existing methods evaluate tool use correctness through exact matching against certain ground-truth or predefined formats. However, this assumption is often unsuitable for multimodal tasks, where multiple tool use paths may be valid and annotated tool trajectories are typically unavailable. Second, such sparse and brittle binary rewards provide little guidance on how to improve the underlying decision process, making them particularly difficult for multimodal SLM to learn from. To address these issues, we propose Input Attribution-Aware Policy Optimization (IAPO), an RL algorithm for improving tool use in multimodal SLM by aligning the model's attribution across input components with that of a stronger teacher. Experiments on Qwen2.5-VL-3B show that the proposed method improves visual question answering accuracy by an average of 3% across six test sets compared with existing visual tool use work, by helping the model attend to the most relevant input evidence.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- agents
- rag

## Source

Original source: https://arxiv.org/abs/2606.11652
