---
title: 'READER: Robust Evidence-based Authorship Decoding via Extracted Representations'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.10794
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523787+00:00'
tags:
- agents
- rag
status: new
---

# READER: Robust Evidence-based Authorship Decoding via Extracted Representations

## Summary

arXiv:2606.10794v2 Announce Type: replace 
Abstract: As agentic applications increasingly route user tasks through official and third-party LLM APIs, provenance becomes an operational question: which model generated a given black-box response? We study Dynamic Black-Box LLM Provenance: identifying the source LLM from generations elicited by query-varying, non-predefined prompts rather than a fixed input set or benchmark suite. This setting is difficult because prompt semantics dominate the text, while model-specific authorship traces are weak and inconsistent at the surface level. We introduce READER (Robust Evidence-based Authorship Decoding via Extracted Representations), a lightweight provenance framework that treats a frozen proxy LLM as a reader of hidden authorship evidence. READER maps black-box outputs into proxy activation space, temporally filters token states within each response, and performs Bayesian Evidence Accumulation by summing single-response log-posterior evidence across independently sampled prompts. This avoids fragile mean-pooling of prompt-specific representations while preserving the query-wise evidence needed for calibrated confidence. On Agent500, a 50-target dataset built from agent-style prompts, READER reaches $31.0$-$42.4\%$ top-1 accuracy from a single response and $70.0$-$84.0\%$ from 50 responses, substantially outperforming sentence-encoder fingerprints. Scaling across nine proxy readers further shows that stronger LLMs expose more linearly decodable authorship structure, suggesting that authorship perception is already present in frozen LLM representations and can be converted into reliable multi-query attribution.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/rag
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- agents
- rag

## Source

Original source: https://arxiv.org/abs/2606.10794
