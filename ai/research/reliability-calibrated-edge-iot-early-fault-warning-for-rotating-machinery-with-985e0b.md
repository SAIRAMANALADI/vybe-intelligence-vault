---
title: Reliability-Calibrated Edge-IoT Early Fault Warning for Rotating Machinery
  with a Physics-Guided Tiny-Mamba Transformer
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2601.21293
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524086+00:00'
tags: []
status: new
---

# Reliability-Calibrated Edge-IoT Early Fault Warning for Rotating Machinery with a Physics-Guided Tiny-Mamba Transformer

## Summary

arXiv:2601.21293v3 Announce Type: replace-cross 
Abstract: Industrial Internet of Things (IIoT) systems increasingly rely on distributed vibration sensing to support predictive maintenance of rotating machinery. In practical deployments, however, raw signal upload is costly and alarm decisions must be made locally under limited computation, changing operating conditions, and strict nuisance-alarm budgets. This paper presents a reliability-calibrated edge-IoT early-warning framework, in which a compact Physics-Guided Tiny-Mamba Transformer (PG-TMT) acts as the representation module and an extreme value theory (EVT) layer converts streaming anomaly scores into event-level alarm episodes. PG-TMT combines a depthwise-separable convolutional stem, a Tiny-Mamba state-space branch, and a lightweight local Transformer to capture transient, long-horizon, and multichannel degradation cues under batch-size-one inference. To improve auditability, temporal attention is projected to the frequency domain and softly aligned with analytical bearing fault-order bands. EVT calibration, dual-threshold hysteresis, and trimmed-tail fitting provide controllable false-alarm intensity even when healthy calibration data are imperfect. Experiments on CWRU, Paderborn, XJTU-SY, and an industrial pilot demonstrate that the proposed framework improves PR-AUC, reduces detection delay under a controlled nuisance-alarm budget, and remains robust to structured interference, metadata uncertainty, compound fault mixtures, and domain transfer. With a sub-1 MB footprint and Jetson p99 latency below 7 ms, the framework supports calibrated and interpretable early warnings for IIoT predictive maintenance.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- None

## Source

Original source: https://arxiv.org/abs/2601.21293
