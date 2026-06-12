---
title: Can I Buy Your KV Cache?
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.13361
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T05:01:59.481794+00:00'
tags:
- agents
status: new
---

# Can I Buy Your KV Cache?

## Summary

arXiv:2606.13361v1 Announce Type: new 
Abstract: Right now, across the world, AI agents are repeating the same absurd act: to read one document, they each recompute it from scratch. Every agent re-runs prefill, the most compute-intensive step a large model takes, over identical text, only to rebuild a key-value (KV) cache identical to the one the agent before it just built. The same answer, computed a million times. We make a proposal that is almost offensively simple: compute it once. Let a publisher precompute a document's KV cache, and let every other agent buy the right to load it and skip prefill. It works, and it is token-exact: loading a precomputed KV and continuing matches prefilling from scratch (24/24 greedy tokens, and at the logits level), with no accuracy cost. On Qwen3-4B, reuse is 9-50x cheaper in compute than prefill, and the gap widens with length (prefill's attention scales with L^2), so a single reuse already pays it back. Then the part that matters: where the KV lives. Shipping it fails, because KV is nearly incompressible, so per-load egress costs more than the prefill it saves. Hosting it provider-side, exactly as production prompt-caching works, removes egress entirely. The size of the prize is set by our measured compute saving: serving one hot 3774-token document to 80M agents costs ~$1.5M to re-prefill but only ~$0.03M of reuse compute (49.7x less). The 0.1x cache-read tariff APIs charge passes a 10x discount to users while sitting inside this measured envelope, so the 10x is a floor that the measured ~50x compute saving clears, and the gap to the physical ~50x is provider margin: millions of dollars per popular document. We frame the resulting agent-native prefill CDN and leave lossless KV compression and a cross-party payment layer as the open problems.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.13361
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
