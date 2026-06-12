---
title: 'From Architecture to Output: Structural Origins of Hallucination in Large
  Language Models and the Amplifying Role of Data'
category: ai/research
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2606.07537
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.014988+00:00'
tags:
- dataset
- paper
status: active
id: arxiv:2606.07537
first_seen: '2026-06-12T10:40:06.014988+00:00'
last_seen: '2026-06-12T10:40:06.014988+00:00'
---

# From Architecture to Output: Structural Origins of Hallucination in Large Language Models and the Amplifying Role of Data

## Summary

arXiv:2606.07537v1 Announce Type: cross 
Abstract: Large language models hallucinate--producing fluent, confident, factually wrong outputs--with a consistency that persists across generations and scales. Existing taxonomies classify hallucination by output type, distinguishing intrinsic from extrinsic failures and faithfulness from factuality divergence. These frameworks are descriptively rigorous but do not identify which internal mechanism produced a given instance. This paper analyses hallucination as a structural consequence of three architectural decisions that together form a compound failure system. Self-attention's co-occurrence learning substitutes statistical proximity for semantic meaning and produces entity confusion, fact misattribution, and semantic drift. The maximum likelihood estimation training objective optimises next-token probability without factual constraint, rewarding statistically plausible outputs regardless of their truth value. Autoregressive decoding's permanent left-to-right commitment under exposure bias ensures that a single wrong token cascades forward through the entire output sequence without revision. Dataset pathologies--long-tail deficiencies, training bias, and synthetic pollution--amplify these vulnerabilities but do not independently cause them. We make three contributions. First, we map each mechanism to a specific output category in the Alansari and Luqman taxonomy, locating intrinsic hallucination in self-attention, extrinsic hallucination in MLE, and logical inconsistency in autoregressive decoding. Second, we show that each commonly cited dataset pathology exploits one of these mechanisms rather than originating hallucination independently. Third, we identify the diagnostic limitation of output-type-only classification and contrast it with inference-layer mitigation approaches.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.07537
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- dataset
- paper
