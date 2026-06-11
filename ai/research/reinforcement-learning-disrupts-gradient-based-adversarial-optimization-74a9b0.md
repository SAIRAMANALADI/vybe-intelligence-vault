---
title: Reinforcement Learning Disrupts Gradient-Based Adversarial Optimization
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12251
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523270+00:00'
tags:
- models
status: new
---

# Reinforcement Learning Disrupts Gradient-Based Adversarial Optimization

## Summary

arXiv:2606.12251v1 Announce Type: cross 
Abstract: Gradient-based adversarial attacks remain a dominant threat to deep neural networks (DNNs), as they exploit gradient information to efficiently optimize adversarial perturbations. To address this, we investigate whether reinforcement learning (RL) training can disrupt the gradient structure used by attackers by training image classifiers with policy-gradient objectives and epsilon-greedy exploration. Through systematic experiments across CIFAR-10, CIFAR-100, and ImageNet-100 with multiple architectures, we find that RL-trained classifiers significantly disrupt gradient-based adversarial optimization. To explain this, we conduct a comprehensive mechanism analysis using loss landscape visualization, static and dynamic gradient indicators, and predictive entropy. Our analysis reveals that RL acts as an implicit regularizer, producing models with highly unstable gradient directions and smaller gradient magnitudes. This combination makes each PGD step both unreliable in direction and limited in magnitude, causing gradient-based attacks to fail within practical iteration budgets. We further show that combining RL with adversarial training (RL-adv) provides a dual-layer defense operating at two complementary levels: RL degrades gradient information available to attackers (gradient-level defense), while adversarial training strengthens decision boundaries (boundary-level defense). RL-adv achieves the highest robustness across all major attack types evaluated, including gradient-based (PGD, AutoAttack), transfer-based, and query-based attacks, outperforming SL-adv by a significant margin. These findings identify RL-induced gradient disruption as a complementary robustness mechanism and motivate future research on hybrid SL-RL training schedules that combine SL's efficiency with RL's gradient-regularization properties.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models

## Source

Original source: https://arxiv.org/abs/2606.12251
