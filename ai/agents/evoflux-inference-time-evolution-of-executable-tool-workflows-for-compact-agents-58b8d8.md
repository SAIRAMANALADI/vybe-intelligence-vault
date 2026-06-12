---
title: 'Evoflux: Inference-Time Evolution of Executable Tool Workflows for Compact
  Agents'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12674
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:03.101566+00:00'
tags:
- agents
- frontend_ui
- workflows
status: active
id: arxiv:2606.12674
first_seen: '2026-06-12T10:40:03.101566+00:00'
last_seen: '2026-06-12T10:40:03.101566+00:00'
---

# Evoflux: Inference-Time Evolution of Executable Tool Workflows for Compact Agents

## Summary

arXiv:2606.12674v1 Announce Type: new 
Abstract: Compact language models (LMs) reduce cost, latency, and deployment risk for tool agents. Yet MCP-style tool use requires more than isolated function calling: an agent must discover tools from live catalogs, satisfy schemas, preserve dependencies across intermediate outputs, and ground final responses in executed evidence. Small planners often generate plausible workflow graphs that fail under tool resolution, parameter validation, dependency tracking, or execution. We argue that this failure mode is poorly handled by small-corpus distillation. A few hundred teacher traces can teach workflow format, but rarely cover the recovery behavior needed to repair failed plans over changing tool catalogs. We introduce Evoflux, an inference-time evolutionary search method that treats compact tool use as the repair of executable tool workflows. It evolves typed workflow graphs through structured edits, execution feedback, adaptive intensity, meta-guided redesign, and diversity pruning. On held-out MCP-Bench tasks spanning live MCP servers and 250 tools, Evoflux raises execution feasibility from roughly 3% to 17-24% across small planners. In contrast, SFT and SFT+DPO on the same search-mined data match, underperform, or collapse below zero-shot performance; ReAct reaches higher peaks, but with higher variance and token cost. These results show that execution-grounded search is more reliable under scarce teacher-trace budgets.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2606.12674
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
- frontend_ui
- workflows
