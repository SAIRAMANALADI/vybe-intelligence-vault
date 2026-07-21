---
title: 'Delta Channels: How We’re Evolving our Runtime for Long-Running Agents'
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://www.langchain.com/blog/delta-channels-evolving-agent-runtime
published_at: '2026-07-21T16:57:23.141148+05:30'
collected_at: '2026-07-21T16:57:23.141163+05:30'
tags:
- agents
- anthropic
- benchmark
- rag
- web-crawled
- youtube
status: active
resource_id: blog:delta-channels-how-were-evolving-our-runtime-for-l
first_seen: '2026-07-21T16:57:23.141163+05:30'
last_seen: '2026-07-21T16:57:23.141163+05:30'
last_checked: '2026-07-21T16:57:23.141163+05:30'
health_score: 100
---

# Delta Channels: How We’re Evolving our Runtime for Long-Running Agents

## Summary

- **DeltaChannel Optimization**: Introduces a new `DeltaChannel` primitive in LangGraph 1.2 that stores only incremental updates (deltas) per step, with periodic full snapshots (every K steps), reducing checkpoint storage from O(N²) to O(N) for append-only state fields like `messages` and `files`.

- **Storage Efficiency**: For a 200-turn coding agent, DeltaChannel reduces checkpoint storage from 5.3GB to 129MB (41× reduction), with minimal performance overhead during state rehydration, while maintaining full LangGraph API compatibility (interrupts, time-travel, tooling).

- **API & Migration**: DeltaChannel is enabled by default in Deep Agents v0.6; existing threads require no migration. Custom reducers must be batching-invariant (`reducer(reducer(s, xs), ys) == reducer(s, xs + ys)`) to ensure state consistency across snapshots.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-21T16:57:23.141148+05:30

## Related Tags

- agents
- anthropic
- benchmark
- rag
- web-crawled
- youtube

## Source

Original source: https://www.langchain.com/blog/delta-channels-evolving-agent-runtime
