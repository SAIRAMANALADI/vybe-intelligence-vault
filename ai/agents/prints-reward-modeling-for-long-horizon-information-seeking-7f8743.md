---
title: 'PRInTS: Reward Modeling for Long-Horizon Information Seeking'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2511.19314
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523563+00:00'
tags:
- agents
status: new
---

# PRInTS: Reward Modeling for Long-Horizon Information Seeking

## Summary

arXiv:2511.19314v2 Announce Type: replace 
Abstract: Information-seeking is a core capability for AI agents, requiring them to gather and reason over tool-generated information across long trajectories. However, such multi-step information-seeking tasks remain challenging for agents backed by language models. While process reward models (PRMs) can guide agents by ranking candidate steps at test-time, existing PRMs - designed for short reasoning with binary judgment - cannot capture richer dimensions of information-seeking steps, such as tool interactions and reasoning over tool outputs, nor handle the rapidly growing context in long-horizon tasks. To address these limitations, we introduce PRInTS, a generative PRM trained with dual capabilities: (1) dense scoring based on the PRM's reasoning across multiple dimensions of step quality (e.g., interpretation of tool outputs, tool call informativeness) and (2) trajectory summarization that compresses the growing context while preserving essential information for step evaluation. Extensive evaluations across FRAMES, GAIA (levels 1-3), and WebWalkerQA (easy-hard) benchmarks on multiple models reveal that best-of-n sampling with PRInTS enhances information-seeking in open-source models as well as specialized agents, matching or surpassing frontier models with a much smaller backbone agent and outperforming other strong reward modeling baselines.

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

Original source: https://arxiv.org/abs/2511.19314
