---
title: 'Mind the Perspective: Let''s Reason Recursively for Theory of Mind'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11724
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.521832+00:00'
tags:
- agents
status: new
---

# Mind the Perspective: Let's Reason Recursively for Theory of Mind

## Summary

arXiv:2606.11724v1 Announce Type: new 
Abstract: Theory of Mind (ToM) reasoning requires inferring agents' beliefs from partial and asymmetric observations, which remains an open challenge for LLMs. Existing prompting-based approaches improve ToM reasoning through observable-event filtering or temporal belief chains, without explicitly modeling nested beliefs. We introduce RecToM, an inference-time framework for ToM reasoning that models nested beliefs via recursive perspective construction. RecToM constructs each character perspective from the preceding character perspective along the character chain specified by the question, reducing higher-order belief questions to actual-world questions within the final constructed perspective. We further provide a KD45 analysis showing that RecToM's perspective construction induces a well-formed belief modality beyond simple event filtering. Experiments on ToM benchmarks, including Hi-ToM, Big-ToM, and FanToM, across multiple LLM backbones show that RecToM consistently outperforms recent advanced approaches, achieving state-of-the-art performance. Notably, RecToM reaches 100\% accuracy on Hi-ToM with GPT-5.4 and Qwen3.5, a benchmark requiring higher-order ToM reasoning.

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

Original source: https://arxiv.org/abs/2606.11724
