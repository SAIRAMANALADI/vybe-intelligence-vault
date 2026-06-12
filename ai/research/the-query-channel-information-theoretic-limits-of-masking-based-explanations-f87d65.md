---
title: 'The Query Channel: Information-Theoretic Limits of Masking-Based Explanations'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2604.16689
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.106005+00:00'
tags:
- benchmark
- paper
- youtube
status: active
id: arxiv:2604.16689
first_seen: '2026-06-12T10:40:03.106005+00:00'
last_seen: '2026-06-12T10:40:03.106005+00:00'
---

# The Query Channel: Information-Theoretic Limits of Masking-Based Explanations

## Summary

arXiv:2604.16689v2 Announce Type: replace 
Abstract: Masking-based post-hoc explanation methods, such as KernelSHAP and LIME, estimate local feature importance by querying a black-box model under randomized perturbations. This paper formulates this procedure as communication over a query channel, where the latent explanation acts as a message and each masked evaluation is a channel use. Within this framework, the complexity of the explanation is captured by the entropy of the hypothesis class, while the query interface supplies information at a rate determined by an identification capacity per query. We derive a strong converse showing that, if the explanation rate exceeds this capacity, the probability of exact recovery necessarily converges to one in error for any sequence of explainers and decoders. We also prove an achievability result establishing that a sparse maximum-likelihood decoder attains reliable recovery when the rate lies below capacity. A Monte Carlo estimator of mutual information yields a non-asymptotic query benchmark that we use to compare optimal decoding with Lasso- and OLS-based procedures that mirror LIME and KernelSHAP. Experiments reveal a range of query budgets where information theory permits reliable explanations but standard convex surrogates still fail. Finally, we interpret super-pixel resolution and tokenization for neural language models as a source-coding choice that sets the entropy of the explanation and show how Gaussian noise and nonlinear curvature degrade the query channel, induce waterfall and error-floor behavior, and render high-resolution explanations unattainable.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2604.16689
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- paper
- youtube
