---
title: 'MiniPIC: Flexible Position-Independent Caching in <100LOC'
category: ai/rag
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.13126
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.483729+00:00'
tags:
- agents
- rag
status: new
---

# MiniPIC: Flexible Position-Independent Caching in <100LOC

## Summary

arXiv:2606.13126v1 Announce Type: cross 
Abstract: Retrieval-augmented and agentic workloads repeatedly prefill recurring predictable structured inputs (which we call "spans") such as documents and code files. Yet, prefix caching in engines such as vLLM cannot reuse their KV entries unless they share identical prefixes with another request, while Position-Independent Caching (PIC) implementations within production-grade inference servers typically either require substantial server code changes or keep KV state outside the server, incurring host-to-device transfer overhead. We present Minimalistic PIC (MiniPIC): a minimal, flexible and fast vLLM design built from two ingredients: positional-encoding-free KV cache and user-controlled cache-reuse primitives. MiniPIC stores unrotated K vectors in the KV cache, applies RoPE to K tiles inside attention using per-request logical positions, and exposes three user-facing and token-level primitives: block-aligned padding, span separator (SSep), and prompt depend (PDep), that modify hashing behavior and effective block-level causal attention structure. With fewer than 100 lines of core-engine changes plus a custom attention backend, these primitives are sufficient to realize multiple PIC methods, including Block-Attention, EPIC, and Prompt Cache, within the same running vLLM instance, while natively integrating with KV cache CPU offload implementations. On 2WikiMultihopQA, MiniPIC with interleaved scheduling improves prefill throughput by 49% over baseline vLLM, reduces cached-span time-to-first-token by up to two orders of magnitude, preserves the linear prefill scaling of uncached spans, and incurs only 5.7% worst-case overhead.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.13126
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
- rag
