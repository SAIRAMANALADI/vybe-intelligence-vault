---
title: 'Seeing Before Colliding: Anticipatory Safe RL with Frozen Vision-Language
  Models'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11266
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.013142+00:00'
tags:
- benchmark
- frontend_ui
status: active
id: arxiv:2606.11266
first_seen: '2026-06-12T10:40:06.013142+00:00'
last_seen: '2026-06-12T10:40:06.013142+00:00'
---

# Seeing Before Colliding: Anticipatory Safe RL with Frozen Vision-Language Models

## Summary

arXiv:2606.11266v1 Announce Type: new 
Abstract: The cost signal that constrained-RL algorithms optimize against is almost always reactive: the simulator emits a non-zero cost only after a collision has begun, and the Lagrange multiplier of PPO-Lagrangian grows only after the episode budget has been exceeded. At race speeds, where collisions are instantaneous and irreversible, any safety mechanism that waits for cost to accumulate is structurally too late. We present VLM-Safe-RL, a framework that integrates a frozen vision-language model into the CMDP Lagrangian update as an anticipatory cost term. The framework comprises four contributions: (i) Decoupled Dual-Path CLIP, independent reward/cost paths that respect the CMDP's factorization; (ii) VLM-Lagrange, an augmented multiplier update that incorporates a per-step VLM cost as an anticipatory term; (iii) Confidence Gating, a Bayes-optimal weight derived from a logistic noise model on the CLIP margin; and (iv) VLMPPOLag, the composed algorithm. On Safety-Gymnasium FormulaOne L2, our principal evaluation ($n{=}5$ seeds, $10^{6}$ steps, budget $d_{\text{lim}}{=}25$) VLMPPOLag$+$Conf is the only configuration in our default budget comparison that simultaneously retains substantive return ($J_r{\approx}40$) and holds cost within budget on a majority of seeds; the five constraint-aware baselines (PPOLag, CPO, CPPOPID, CPO-CLG, PPOLag-RND) each fail at least one requirement. The mechanism generalizes to held-out MetaDrive Medium (catastrophe rate $41\%{\to}26\%$, 95\% bootstrap CI $[-26,-5]$\,pp) and shows directionally consistent transfer to Bullet Safety-Gym; we report honestly where it does not (MetaDrive Easy/Hard, Qwen2-VL backbone) and trace the Hard failure to a Lagrangian-regulation pathology rather than the VLM signal itself. To our knowledge, this is the first work to use frozen VLM signals as an anticipatory cost term inside the CMDP Lagrangian update.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11266
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- frontend_ui
