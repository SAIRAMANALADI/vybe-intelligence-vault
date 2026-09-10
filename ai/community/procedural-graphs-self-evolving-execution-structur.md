---
title: 'Procedural Graphs: Self-Evolving Execution Structures for LLM Agents'
category: ai/community
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2609.09153
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-09-10T04:00:00+05:30'
collected_at: '2026-09-10T10:23:26.263321+05:30'
tags:
- agents
- dataset
- rag
status: active
resource_id: arxiv:2609.09153
first_seen: '2026-09-10T00:52:30.637659+05:30'
last_seen: '2026-09-10T10:23:26.263321+05:30'
last_checked: '2026-09-10T10:23:26.263321+05:30'
health_score: 100
---

# Procedural Graphs: Self-Evolving Execution Structures for LLM Agents

## Summary

arXiv:2609.09153v1 Announce Type: new 
Abstract: Large language models are increasingly deployed as agents that plan over long horizons and act through external tools. Most agents select actions through unconstrained generation over an accumulating history, leaving implicit the procedural knowledge of what to do, in what order, and under which conditions. As trajectories lengthen, agents can lose track of their objectives, invoke tools out of order, and repeat unproductive actions. We introduce the Procedural Graph: just as a knowledge graph organizes factual knowledge into (entity, relation, entity) triplets for what-is questions, a Procedural Graph organizes procedural knowledge into (procedure, relation, procedure) triplets for what-to-do questions. At each decision step, the framework localizes the agent's active node, and a guidance model translates the surrounding subgraph into step-level situational guidance that biases the solver's next action without dictating it. The graph is self-evolving: an LLM refiner contrasts failed trajectories with successful ones and edits the graph's topology and attributes, committing edits that preserve or improve held-out validation performance while retaining rejected ones to discourage repetition. Starting from a minimal skeleton, the loop builds graphs that match or surpass hand-designed ones. It can also repair a flawed expert prior. Across multiple datasets, task types, and LLMs, the Procedural Graph delivers consistent gains over memory-based baselines, and self-evolution further improves performance without manual engineering.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2609.09153
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
- dataset
- rag
