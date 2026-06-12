---
title: 'NARRAS: Edge-Triggered Distributed Inference for CSI-Based Localization in
  Vehicular IoT Networks'
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.11914
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.016409+00:00'
tags:
- rag
- youtube
status: active
id: arxiv:2606.11914
first_seen: '2026-06-12T10:40:06.016409+00:00'
last_seen: '2026-06-12T10:40:06.016409+00:00'
---

# NARRAS: Edge-Triggered Distributed Inference for CSI-Based Localization in Vehicular IoT Networks

## Summary

arXiv:2606.11914v1 Announce Type: cross 
Abstract: CSI-based localization with spatially distributed antenna arrays exposes a basic resource trade-off. Each array can provide a rich view of the channel, but forwarding observations from all arrays to a fusion center is wasteful when only a few carry useful information, and the shared uplink supports only a limited number of simultaneous transmissions. We let each array decide locally whether its current observation is worth reporting, subject to a budget on the average number of active transmitters. We refer to this abstraction as Edge-Triggered Distributed Inference (ETDI). It captures a broader class of task-oriented communication problems where resource-constrained devices share an access channel for a common inference task. We instantiate ETDI for CSI-based localization, a common scenario in vehicular IoT networks. Spatially distributed remote antenna arrays (RAAs) encode local channel state information (CSI) from user equipment (UE) transmissions into latent features, and the fusion center estimates the UE position from the subset of reported features. We propose NARRAS, a decentralized reporting policy in which each RAA combines a recurrent summary of its recent observations with a memory of the last latent it transmitted. Training controls an explicit activity budget through differentiable activity penalties and validation-calibrated deterministic thresholds, and uses channel-chart regularization to shape the latent geometry. Experiments show that, at comparable uplink activity, NARRAS improves localization accuracy over learned and heuristic sparse-reporting strategies, while dense full-report models remain useful budget-free references. In low-activity regimes, chart regularization further reduces high-percentile localization errors, suggesting that geometry-aware latent representations are more robust under sparse reporting.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.11914
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- rag
- youtube
