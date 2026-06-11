---
title: Graph2Idea:Retrieval-Augmented Scientific Idea Generation with Graph-Structured
  Contexts
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.09105
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523765+00:00'
tags:
- rag
status: new
---

# Graph2Idea:Retrieval-Augmented Scientific Idea Generation with Graph-Structured Contexts

## Summary

arXiv:2606.09105v3 Announce Type: replace 
Abstract: Generating novel, feasible, and high-quality research ideas is an important yet challenging task in scientific discovery. Recent Large Language Model (LLM)-based methods often ground idea generation with retrieved literature, but the retrieved evidence is usually provided as flat text, such as titles, abstracts, or summaries. Such flat contexts may contain redundant or weakly relevant information, while making cross-paper relations among problems, methods, mechanisms, and findings difficult to identify and trace. To address this challenge, we propose Graph2Idea, a knowledge graph-guided framework for retrieval-augmented scientific idea generation.Graph2Idea first retrieves papers according to the input topic, transforms them into structured knowledge triples, and dynamically constructs a target-centered knowledge graph to make literature relations explicit. It then extracts compact graph-derived contexts that retain target-relevant relational evidence while reducing noisy textual input. Based on these contexts, a two-stage generation process first identifies promising research directions and then guides the LLM to synthesize candidate ideas from graph-grounded evidence. Experiments on a scientific idea generation benchmark show that Graph2Idea outperforms representative baselines under the automatic evaluation protocol. Compared with the strongest baseline scores, it improves Novelty from 0.45 to 0.52, Quality from 0.24 to 0.29, and Feasibility from 0.22 to 0.28. These results suggest that graph-structured evidence helps LLMs generate research ideas through more explicit, compact, and traceable recombination of prior scientific knowledge.

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

Original source: https://arxiv.org/abs/2606.09105
