---
title: 'NetBurst: Event-Centric Forecasting of Bursty, Intermittent Time Series'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2510.22397
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799253+00:00'
tags: []
status: new
---

# NetBurst: Event-Centric Forecasting of Bursty, Intermittent Time Series

## Summary

arXiv:2510.22397v2 Announce Type: replace-cross 
Abstract: Network operators monitor their infrastructure by collecting telemetry data such as packet counts, byte rates, or flow volumes, yet answering the questions that effective operations demand -- forecasting future load, diagnosing and characterizing anomalies, and searching for and retrieving historical precedents -- requires more than raw measurements. Bridging this gap calls for learned representations: compact per-entity summaries that capture temporal dynamics from each entity's univariate time series. Time-series foundation models are the natural starting point, but they are designed for dense, periodic benchmark datasets -- the \emph{mild} statistical regime. However, network telemetry data inhabits the \emph{wild} regime: operationally relevant events are rare, separated by variable-length stretches of low or no activity (``ebbs''), with intermittent bursts of heavy-tailed extremes (``tides''). We present NetBurst, an event-centric pipeline that collapses ebbs, separates each time series into a stream of burst timings and a stream of burst magnitudes, and learns a single representation serving all three operational tasks. Compared to the strongest competitors among eight baselines -- including Amazon's Chronos-2 and Datadog's Toto -- and across nine production telemetry configurations, NetBurst reduces median forecasting error by $1.3$--$116\times$ on wild-regime data with a $1.0$--$7.5\times$ better match to the true burst distribution, and matches baselines on mild-regime benchmarks. For characterizing anomalies, NetBurst produces balanced, well-spread clusters that are $16\times$ more describable in operator-familiar terms under a novel interpretability score, and cluster-filtered search delivers $7.5\times$ faster end-to-end retrieval.

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

Original source: https://arxiv.org/abs/2510.22397
