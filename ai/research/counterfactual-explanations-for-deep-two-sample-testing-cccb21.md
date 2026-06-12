---
title: Counterfactual Explanations for Deep Two-Sample Testing
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.04009
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.107670+00:00'
tags:
- dataset
status: active
id: arxiv:2606.04009
first_seen: '2026-06-12T10:40:03.107670+00:00'
last_seen: '2026-06-12T10:40:03.107670+00:00'
---

# Counterfactual Explanations for Deep Two-Sample Testing

## Summary

arXiv:2606.04009v2 Announce Type: replace-cross 
Abstract: Two-sample testing is a fundamental tool for detecting distributional differences across scientific domains, but classical tests (including kernel-based tests) can be ineffective on high-dimensional structured data such as images. Recent deep two-sample tests improve sensitivity in these settings by learning informative representations, yet they provide limited insight into which data features drive rejection of the null hypothesis $H_0$. To address this issue, we propose a counterfactual explanation framework for deep two-sample testing that generates sample-level edits moving observations from a source group toward a target group while explicitly reducing the discrepancy measured by the test. Our method combines a diffusion autoencoder with a pretrained deep two-sample test model and optimizes a maximum mean discrepancy (MMD) objective in the test model's representation space to produce plausible counterfactuals. We quantify distribution-level effects through changes in the test statistic and the resulting two-sample p-values. We evaluate the method on synthetic 2D shape datasets and two MRI cohorts. Across both settings, the counterfactual transformations consistently increase p-values relative to the original samples, indicating that the edited source set becomes statistically closer to the target distribution under the test. We measure minimality using LPIPS to ensure the counterfactuals remain close to the original samples. The resulting edits provide interpretable evidence of the features associated with the detected group differences. On MRI, the localized changes are consistent with known anatomical differences between cohorts.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.04009
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- dataset
