---
title: A prior-free blind detection of information leakage from model predictions
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11267
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.013164+00:00'
tags: []
status: active
id: arxiv:2606.11267
first_seen: '2026-06-12T10:40:06.013164+00:00'
last_seen: '2026-06-12T10:40:06.013164+00:00'
---

# A prior-free blind detection of information leakage from model predictions

## Summary

arXiv:2606.11267v1 Announce Type: new 
Abstract: Data leakage -- contamination of a model with information unavailable at baseline -- is the dominant reproducibility failure in machine-learning-based science, yet detection tools require training code, external data, or domain expertise. None operates on the artifact an auditor most often holds: the model's output. We ask what can be decided about leakage from predictions and outcomes alone. We give a decision-theoretic framework in which leakage diagnostics are functionals of the predicted-risk/outcome law, parameterized by a threshold-weighting linked to proper scoring rules and decision-curve analysis. We prove a sharp impossibility: a recalibrated leak matching an honest model's calibration and discrimination is indistinguishable from honest performance by \emph{any} function of the predictions, so the broad class is detectable only against an externally supplied ceiling on achievable discrimination. We then prove what leakage cannot hide: a near-deterministic subgroup -- the signature of a near-label leak -- produces a sustained unit-purity head that no legitimate predictor of a non-deterministic outcome can manufacture, yielding a prior-free test. These results organize leakage into a trichotomy -- miscalibrated, broad-calibrated, and deterministic -- each with a matched detector and failure mode. We validate on UK Biobank using time-windowed comorbidity leakage with known, graded severity, measuring a detection floor of $\Delta\cstar \approx 0.007$ on this endpoint, below which residual leakage is undetectable from output and too small to alter conclusions. The numerical floor is cohort- and endpoint-specific; the structural lesson is general: output-only detection fails where residual leakage is indistinguishable from an honestly stronger predictor. The test returns a verdict on a prediction vector in under a second on commodity hardware.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11267
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- None
