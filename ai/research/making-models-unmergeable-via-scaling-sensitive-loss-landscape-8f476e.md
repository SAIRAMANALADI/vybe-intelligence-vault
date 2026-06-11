---
title: Making Models Unmergeable via Scaling-Sensitive Loss Landscape
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2601.21898
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523613+00:00'
tags:
- models
status: new
---

# Making Models Unmergeable via Scaling-Sensitive Loss Landscape

## Summary

arXiv:2601.21898v2 Announce Type: replace 
Abstract: The rise of model hubs has made it easier to access reusable model components, making model merging a practical tool for combining capabilities. Yet, this modularity also creates a governance gap: downstream users can recompose released weights into unauthorized mixtures that bypass safety alignment or licensing terms. Because existing defenses are largely post-hoc and architecture-specific, they provide inconsistent protection across diverse architectures and release formats in practice. To close this gap, we propose Trap$^2$, an architecture-agnostic protection framework that encodes protection into updates during fine-tuning, regardless of whether they are released as adapters or full models. Instead of relying on architecture-dependent approaches, Trap$^2$ uses weight re-scaling as a simple proxy for the merging process. It keeps released weights effective in standalone use, but degrades them under re-scaling that often arises in merging, undermining unauthorized recomposition.

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

Original source: https://arxiv.org/abs/2601.21898
