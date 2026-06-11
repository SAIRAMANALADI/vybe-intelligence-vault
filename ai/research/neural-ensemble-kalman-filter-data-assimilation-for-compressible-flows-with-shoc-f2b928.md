---
title: 'Neural ensemble Kalman filter: Data assimilation for compressible flows with
  shocks'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2602.23461
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.799479+00:00'
tags:
- models
status: new
---

# Neural ensemble Kalman filter: Data assimilation for compressible flows with shocks

## Summary

arXiv:2602.23461v2 Announce Type: replace-cross 
Abstract: Data assimilation (DA) for compressible flows with shocks is challenging because many classical DA methods generate spurious oscillations and nonphysical features near uncertain shocks. We focus here on the ensemble Kalman filter (EnKF). We show that the poor performance of the EnKF may be attributed to the bimodal forecast distribution that can arise in the vicinity of an uncertain shock location; this violates the assumptions underpinning the EnKF, which assume a forecast which is close to Gaussian. To address this issue we introduce the new neural EnKF. The basic idea is to systematically embed neural function approximations within ensemble DA by mapping the forecast ensemble of shocked flows to the parameter space (weights and biases) of a deep neural network (NN) and to subsequently perform DA in that space. The nonlinear mapping encodes sharp and smooth flow features in an ensemble of NN parameters. Neural EnKF updates are therefore well-behaved only if the NN parameters vary smoothly within the neural representation of the forecast ensemble. We show that such a smooth variation of network parameters can be enforced via physics-informed transfer learning, and demonstrate that in so-doing the neural EnKF avoids the spurious oscillations and nonphysical features that plague the EnKF. The applicability of the neural EnKF is demonstrated through a series of systematic numerical experiments with the inviscid Burgers' equation, the Sod shock tube, and a two-dimensional blast wave.

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

Original source: https://arxiv.org/abs/2602.23461
