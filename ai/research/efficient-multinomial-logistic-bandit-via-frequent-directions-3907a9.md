---
title: Efficient Multinomial Logistic Bandit via Frequent Directions
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11968
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.796316+00:00'
tags: []
status: new
---

# Efficient Multinomial Logistic Bandit via Frequent Directions

## Summary

arXiv:2606.11968v1 Announce Type: new 
Abstract: This paper studies efficient online algorithms for multinomial logistic bandits (MLogB), where the feedback distribution over $K+1$ outcomes follows a multinomial logistic model of $d$-dimensional action vectors. A representative UCB-type algorithm, OFUL-MLogB, achieves a regret bound of $\tilde{\mathcal{O}}(Kd\sqrt{T})$, but still requires $\mathcal{O}(K^3d^3)$ time and $\mathcal{O}(K^2d^2)$ space per round due to parameter estimation and optimistic reward construction, which is prohibitive in high-dimensional settings. To address this limitation, we propose EOFD-MLogB, which integrates frequent directions matrix sketching into OFUL-MLogB. By maintaining a low-rank SVD sketch of the accumulated Hessian, constrained online Newton updates in parameter estimation and $Kd \times K$ spectral-norm computations in the reward bonus are reduced to one-dimensional root-finding tasks and $K \times K$ eigenvalue computations, respectively. This yields dominant per-round time complexity $\mathcal{O}(Kd(m+K)^2)$ and space complexity $\mathcal{O}(Kd(m+K))$, where $m \ll d$ is the sketch size. We further prove a regret bound of $\tilde{\mathcal{O}}(\Delta_T(Kd\ln\Delta_T+m)\sqrt{T})$, where the sketching error factor $\Delta_T$ is controlled by the $m$-truncated spectral tail of the Hessian. Thus, when the Hessian is approximately low-rank, the regret is close to that of OFUL-MLogB. Experiments validate the computational efficiency and competitive performance.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2606.11968
