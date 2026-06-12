---
title: 'Keep Policy Gradient in Charge: Sibling-Guided Credit Distillation for Long-Horizon
  Tool-Use Agents'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12634
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.482736+00:00'
tags:
- agents
- models
- reddit
status: new
---

# Keep Policy Gradient in Charge: Sibling-Guided Credit Distillation for Long-Horizon Tool-Use Agents

## Summary

arXiv:2606.12634v1 Announce Type: cross 
Abstract: Long-horizon tool-use reinforcement learning can learn from outcome verification, but its
 trajectory-level advantage is broadcast across many reasoning, API, and answer tokens.
 Self-distillation promises a denser signal by reusing a policy's own rollouts or a privileged
 teacher. We show, however, that direct token-level self-distillation can silently destroy tool use:
 it rehearses teacher behavior without knowing which actions the verifier rewards, so useful skills
 and harmful shortcuts are amplified together. We introduce Sibling-Guided Credit Distillation
 (SGCD), which uses distillation for credit assignment rather than as a competing actor loss.
 Dynamic sampling produces mixed successful and failed sibling rollouts; an external LLM summarizes
 their contrast into a training-only stepwise credit reference; dense teacher/student divergence
 drives credit reassignment; and bounded detached credit weights reshape GRPO token advantages. The
 deployed student sees no external LLM, sibling evidence, or oracle. Across AppWorld and
 $\tau^3$-airline, SGCD improves over matched GRPO comparators: AppWorld TGC $42.9 \to 45.6$ on
 test_normal and $24.7 \to 27.0$ on test_challenge, and $\tau^3$-airline pass@1 $0.583 \to 0.602$.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12634
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
- models
- reddit
