---
title: The Power of Test-Time Training for Approximate Sampling
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.11437
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.522420+00:00'
tags:
- models
status: new
---

# The Power of Test-Time Training for Approximate Sampling

## Summary

arXiv:2606.11437v1 Announce Type: cross 
Abstract: Efficiently sampling from a complex probability distribution is a fundamental problem which has become increasingly pertinent in recent years with the rise of generative AI, as sophisticated sampling procedures from LLMs have been proposed to solve challenging reasoning problems. The efficacy of such sampling algorithms is limited, however, by the relationship between the LLM and the particular sampling task at hand, which has motivated the framework of test-time training (TTT). TTT works by updating a model's weights in response to partial generations and reward feedback received at inference time, thus adapting to the particular problem. In this work, we propose a formalization for TTT as the problem of producing a sample from a given probability measure $\mu^\star$ belonging to a known class ${F}$ of distributions, given an oracle $\hat \mu$ which yields approximate density estimates for $\mu^\star$. This is closely related to the problem of reducing sampling to approximate counting studied in seminal works of Jerrum, Valiant & Vazirani (1986) and Jerrum & Sinclair (1989): namely, when ${F}$ is the class of all distributions, it coincides exactly with the aforementioned counting-to-sampling reduction.
 In this paper, we first show a quadratic lower bound on the query complexity of sampling from $\mu^\star$ given query access to $\hat \mu$ (for sufficiently large classes ${F}$), thus showing that the random walk approach proposed by Jerrum & Sinclair (1989) and refined by Hayes & Sinclair (2010), is optimal. This answers an open question posed by Hayes & Sinclair. We then show that this lower bound can be circumvented if the size of ${F}$ is bounded appropriately. As we discuss, this latter result can be viewed as an abstraction of TTT, and thus represents a starting point for the development of a principled theoretical framework for TTT.

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

Original source: https://arxiv.org/abs/2606.11437
