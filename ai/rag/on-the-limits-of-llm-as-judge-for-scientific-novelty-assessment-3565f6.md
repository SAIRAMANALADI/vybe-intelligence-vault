---
title: On the Limits of LLM-as-Judge for Scientific Novelty Assessment
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12071
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523112+00:00'
tags:
- rag
status: new
---

# On the Limits of LLM-as-Judge for Scientific Novelty Assessment

## Summary

arXiv:2606.12071v1 Announce Type: cross 
Abstract: LLMs are increasingly used to generate and judge scientific ideas. This makes novelty evaluation a central problem. Full idea evaluation is difficult because it often requires judging a method, its feasibility, and its empirical promise. We therefore study a cleaner upstream object: the research question (RQ). RQ generation is a prerequisite for scientific ideation, and RQs can be compared against questions pursued in real papers. We introduce RQ-Bench, a benchmark built from recent arXiv papers. For each paper, we reconstruct author-anchored RQs from its cited background, gaps, and contributions. These RQs are not the only valid questions for the same background. They are author-anchored reference points for testing novelty judgments. We evaluate model-generated RQs with standalone LLM judging, comparative LLM judging, and human expert evaluation. LLM judges consistently rate model-generated RQs as highly novel, producing a novelty mirage; in comparative evaluations, this preference becomes even stronger. Domain experts, however, reach the opposite conclusion and prefer the author-anchored reference questions. We further find that many generated RQs are narrow or source-bound, a dimension that LLM judges often miss unless explicitly tested. Overall, the contradictory novelty evaluations between LLM judges and human experts raise a serious concern about the reliability of using LLMs to assess the scientific novelty of research questions.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- rag

## Source

Original source: https://arxiv.org/abs/2606.12071
