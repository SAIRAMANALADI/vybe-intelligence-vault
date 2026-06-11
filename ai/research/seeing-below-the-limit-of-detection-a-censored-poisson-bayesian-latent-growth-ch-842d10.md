---
title: 'Seeing Below the Limit of Detection: A Censored-Poisson Bayesian Latent-Growth
  Change-Point Detector (the Span Detector) for Serial ctDNA in HR+/HER2- Metastatic
  Breast Cancer'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11876
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.797623+00:00'
tags:
- models
status: new
---

# Seeing Below the Limit of Detection: A Censored-Poisson Bayesian Latent-Growth Change-Point Detector (the Span Detector) for Serial ctDNA in HR+/HER2- Metastatic Breast Cancer

## Summary

arXiv:2606.11876v1 Announce Type: cross 
Abstract: Circulating-tumour DNA (ctDNA) carries evidence of drug resistance months before imaging shows it, but the earliest evidence lives below the assay's limit of detection (LoD): a nascent subclone is detected only intermittently, producing a flickering sequence of faint detects and non-detects. Commercial liquid biopsies treat each draw as an independent snapshot and a non-detect as nothing. We argue a non-detect is a left-censored observation, and the pattern of non-detects and faint detects over time carries actionable evidence of growth before any single value is trustworthy. We introduce Span, a censored-Poisson Bayesian latent-growth change-point detector that models the binary detection process, accumulates a sequential generalised-likelihood-ratio statistic for an upward change-point in the per-variant detection rate, and raises a competing-risks alarm with calibrated false-alarm control. Span has no learned weights, so there is nothing to overfit. On a synthetic cohort of HR+/HER2- metastatic breast cancer on first-line CDK4/6-inhibitor plus endocrine therapy, at a matched 10% false-alarm rate, Span roughly doubles the fraction of impending progressions caught three months ahead (indolent regime: 25% vs 11% for the snapshot), with a falsifiable dose-response: large for indolent emergence, vanishing for fast emergence. A value-trajectory baseline performs identically to the snapshot, isolating the gain to the censored detection model. The survival backbone matches a Cox baseline on real breast-cancer data (GBSG-2, n=686; C-index 0.67 vs 0.68), and on a real longitudinal cohort with clean biomarkers (PBC2, n=312) the same pipeline correctly declines to win, a falsifiable boundary test confirming the mechanism is regime-specific. All ctDNA trajectories are synthetic.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models

## Source

Original source: https://arxiv.org/abs/2606.11876
