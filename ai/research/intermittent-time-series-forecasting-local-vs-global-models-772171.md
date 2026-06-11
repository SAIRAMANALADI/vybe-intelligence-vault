---
title: 'Intermittent time series forecasting: local vs global models'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2601.14031
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799397+00:00'
tags: []
status: new
---

# Intermittent time series forecasting: local vs global models

## Summary

arXiv:2601.14031v2 Announce Type: replace-cross 
Abstract: Forecasting intermittent time series, which contain zeros, is a crucial challenge in supply chains as inventory policies require probabilistic forecasts to establish safety levels. Intermittent time series are commonly forecast using local models, trained individually on each time series. In the last years global models, trained on a large collection of time series, have become popular for time series forecasting. Global models are often based on neural networks or gradient boosted trees. We carry out the first study comparing state-of-the-art probabilistic local and global models on intermittent time series. For global models we consider three different distribution heads suitable for intermittent time series: negative binomial, hurdle-shifted negative binomial and Tweedie. To the best of our knowledge, this is the first use of the latter two with neural networks. We perform experiments on five datasets comprising overall more than 40'000 real-world time series. Among global models, TiDE, a simple neural network architecture, achieves the best accuracy; it also consistently outperforms local models and has lower computational requirements. Large global models are instead much more computationally demanding and less accurate. Among the distribution heads, the Tweedie provides the best estimates of the highest quantiles.

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

Original source: https://arxiv.org/abs/2601.14031
