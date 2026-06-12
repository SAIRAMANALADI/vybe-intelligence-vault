---
title: 'HalluJudge: A Reference-Free Hallucination Detection for Context Misalignment
  in Code Review Automation'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2601.19072
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.106953+00:00'
tags:
- benchmark
- rag
- scripts
- workflows
status: active
id: arxiv:2601.19072
first_seen: '2026-06-12T10:40:03.106953+00:00'
last_seen: '2026-06-12T10:40:03.106953+00:00'
---

# HalluJudge: A Reference-Free Hallucination Detection for Context Misalignment in Code Review Automation

## Summary

arXiv:2601.19072v3 Announce Type: replace-cross 
Abstract: Large Language models (LLMs) have shown strong capabilities in code review automation, such as review comment generation, yet they suffer from hallucinations -- where the generated review comments are ungrounded in the actual code -- poses a significant challenge to the adoption of LLMs in code review workflows. To address this, we explore effective and scalable methods for a hallucination detection in LLM-generated code review comments without the reference. In this work, we design HalluJudge that aims to assess the grounding of generated review comments based on the context alignment. HalluJudge includes four key strategies ranging from direct assessment to structured multi-branch reasoning (e.g., Tree-of-Thoughts). We conduct a comprehensive evaluation of these assessment strategies across Atlassian's enterprise-scale software projects to examine the effectiveness and cost-efficiency of HalluJudge. Furthermore, we analyze the alignment between HalluJudge's judgment and developer preference of the actual LLM-generated code review comments in the real-world production. Our results show that the hallucination assessment in HalluJudge is cost-effective with an F1 score of 0.85 and an average cost of $0.009. On average, 67% of the HalluJudge assessments are aligned with the developer preference of the actual LLM-generated review comments in the online production. Our results suggest that HalluJudge can serve as a practical safeguard to reduce developers' exposure to hallucinated comments, fostering trust in AI-assisted code reviews.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2601.19072
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- benchmark
- rag
- scripts
- workflows
