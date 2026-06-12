---
title: Prefill Awareness in Large Language Models
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12747
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.480965+00:00'
tags:
- agents
- anthropic
- benchmark
- dataset
status: new
---

# Prefill Awareness in Large Language Models

## Summary

arXiv:2606.12747v1 Announce Type: new 
Abstract: Safety-relevant studies of language models, including alignment and jailbreaking evaluations and AI control protocols, often rely on prefilling model outputs. If AI models can recognize and act on the fact their prior assistant messages have been inserted or edited, the effectiveness and validity of these methods could be compromised. We investigate whether frontier language models can distinguish between tampered and untampered assistant-side context, a capability we call prefill awareness. To do so, we construct a binary preference benchmark across three prefill mechanisms, filtering for cases where models show consistent stances. We find that frontier models show substantial prefill awareness: Claude Opus 4.5 detects prefills opposing its preferences in 9-35% of cases with a 0% false positive rate when prompted; additionally, models often revert towards baseline behavior without explicitly reporting that the prefill was foreign. Controlled ablations later also show that detection and resistance rely on different cues, where stylistic mismatch mainly affects whether models flag a prefill as foreign, while preference mismatch mainly affects whether they revert toward their baseline answer. We also examine more realistic agentic settings such as misalignment-continuation evaluations and SWE-bench trajectories, where frontier models sometimes disavow prefilled assistant turns in ways that depend strongly on dataset, task success, and hidden formatting artifacts. Our results indicate that prefill awareness is already a substantial confound for some prefill-based methods. We recommend that model developers track this capability in frontier systems.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12747
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
- anthropic
- benchmark
- dataset
