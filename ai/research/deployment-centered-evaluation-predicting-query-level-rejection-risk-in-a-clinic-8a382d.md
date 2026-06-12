---
title: 'Deployment-Centered Evaluation: Predicting Query-Level Rejection Risk in a
  Clinical LLM System'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12702
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.101607+00:00'
tags:
- benchmark
- dataset
status: active
id: arxiv:2606.12702
first_seen: '2026-06-12T10:40:03.101607+00:00'
last_seen: '2026-06-12T10:40:03.101607+00:00'
---

# Deployment-Centered Evaluation: Predicting Query-Level Rejection Risk in a Clinical LLM System

## Summary

arXiv:2606.12702v1 Announce Type: new 
Abstract: Large language models (LLMs) are increasingly integrated into clinical systems, making it essential to evaluate the real-world utility of these systems. However, static benchmarks tend to measure correctness rather than user acceptance, aggregate performance across queries, and require densely annotated datasets -- leading to major blind spots for evaluating clinical systems. In this work, we perform a deployment-centered evaluation of an LLM system embedded within electronic health records at an academic medical center, where user feedback is sparse but closely reflects the deployment conditions. Specifically, we train a pre-response classifier that estimates the risk that a future interaction will result in the user rejecting the LLM response, based on query content and deployment-specific context available before generation. We conduct a prospective analysis of our model over 4.5 months of user feedback, finding that our prediction model achieves an AUROC of 0.719. Further, we estimate the benefit of such predictions in two downstream use cases (guardrail triggering and abstention). Our key conceptual insight is that making use of deployment-specific context (i.e., the provider type, department name, language model used for response), as opposed to only query content, improves the ability to predict whether the user will reject the system output. Altogether, our empirical case study demonstrates the feasibility of predicting user rejection using deployment-specific context, opening the door to targeted guardrails.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12702
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- dataset
