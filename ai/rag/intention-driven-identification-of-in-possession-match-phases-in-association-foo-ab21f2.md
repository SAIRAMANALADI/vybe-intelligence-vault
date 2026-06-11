---
title: Intention Driven Identification of In-Possession Match Phases in Association
  Football through Temporal Graph Learning
category: ai/rag
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.09289
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:55.798910+00:00'
tags:
- models
- rag
status: new
---

# Intention Driven Identification of In-Possession Match Phases in Association Football through Temporal Graph Learning

## Summary

arXiv:2606.09289v2 Announce Type: replace 
Abstract: Understanding tactical organisation of association football, hereafter referred to as football, requires identifying distinct match phases. Yet in-possession phases are rarely directly observable and are shaped by evolving tactical intentions, rather than spatial patterns alone. This study proposes a data-driven framework for identifying in-possession match phases from spatiotemporal tracking data. Seven German Bundesliga matches recorded at 25 Hz with TRACAB were analysed. A hierarchical phase model was defined with three tactical intentions (Invade Opponent Space, Keep Possession, Scoring) and six phases (Build Up, Progression, Counter Attack, Maintenance, Sustained Threat, Finishing). A Temporal Graph Attention Network (T-GAN) was developed to combine frame-level player-interaction graphs, contextual features, and Transformer-based temporal modelling. Performance was evaluated using frame-level F1 and a sequence-aware Intersection over Truth-Dominance (IoT-D) metric. T-GAN achieved macro-average frame-level F1 scores of 0.87 at the intention level, 0.76 for invasion-related phases, and 0.79 for scoring phases. At the sequence level, mean diagonal IoT-D F1 increased from 0.68 to 0.79 for intentions and from 0.61 to 0.71 for phases after post-processing, indicating improved temporal coherence. Model comparisons showed that sequence modelling was the main driver of segmentation quality, while graph-based relational modelling was particularly beneficial for Counter Attack recognition. Exploratory player attention analysis further suggested that wide and midfield positional groups contributed strongly to phase discrimination. Overall, the framework translates continuous tracking data into tactically interpretable in-possession phase representations, with potential applications in automated match annotation, tactical analysis, and playing-style profiling.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv Machine Learning
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models
- rag

## Source

Original source: https://arxiv.org/abs/2606.09289
