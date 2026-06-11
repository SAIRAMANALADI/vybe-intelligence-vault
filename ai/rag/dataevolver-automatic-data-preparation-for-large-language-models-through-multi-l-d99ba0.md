---
title: 'DataEvolver: Automatic Data Preparation for Large Language Models through
  Multi-Level Self-Evolving'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.07001
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524430+00:00'
tags:
- rag
status: new
---

# DataEvolver: Automatic Data Preparation for Large Language Models through Multi-Level Self-Evolving

## Summary

arXiv:2606.07001v2 Announce Type: replace-cross 
Abstract: High-quality training data is essential to large language models (LLMs) and typically requires extensive and costly manual curation. Existing automatic data preparation methods rely on predefined pipelines or customized human instructions, which limits their adaptability to diverse data distributions and lacks principled guidance from high-quality examples. In this paper, we introduce DataEvolver, the first self-evolving data preparation system that automatically constructs pipelines to transform raw data into high-quality data. DataEvolver employs a multi-level mechanism to ensure both pipeline executability and effectiveness. At the operator level, it incrementally expands the operator set to construct a logical plan while resolving dependency conflicts. At the pipeline level, it instantiates logical plans into executable code and iteratively refines pipeline orchestration through a feedback loop that reduces the distribution gap between prepared data and high-quality examples. Experiments on seven benchmarks show that DataEvolver substantially improves data quality and achieves an average 10\% gain in downstream LLM performance compared with training on original data, highlighting new opportunities for the iterative co-evolution of LLMs and data.

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

Original source: https://arxiv.org/abs/2606.07001
