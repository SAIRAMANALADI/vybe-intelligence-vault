---
title: 'Learning to Inject: Automated Prompt Injection via Reinforcement Learning'
category: ai/agents
source_type: arxiv
source_name: arXiv Machine Learning
source_url: https://arxiv.org/abs/2602.05746
authors: []
year: N/A
citation_count: N/A
code_url: None
stars: N/A
published_at: '2026-06-12T04:00:00+00:00'
collected_at: '2026-06-12T10:40:06.017578+00:00'
tags:
- agents
status: active
id: arxiv:2602.05746
first_seen: '2026-06-12T10:40:06.017578+00:00'
last_seen: '2026-06-12T10:40:06.017578+00:00'
---

# Learning to Inject: Automated Prompt Injection via Reinforcement Learning

## Summary

arXiv:2602.05746v2 Announce Type: replace 
Abstract: Prompt injection is a critical vulnerability in LLM agents, yet the strongest methods still rely on human red-teamers and hand-crafted prompts. Adapting automated jailbreak optimizers does not close this gap: jailbreaks shape models toward generic compliance, while prompt injection requires emitting specific tool calls with correct parameters. The success signal is binary, and randomly sampled suffixes almost never trigger it, so standard optimizers have no gradient to follow. We present AutoInject, a black-box reinforcement learning (RL) framework that learns adversarial suffixes for prompt injection. A learned comparison-based reward scores each candidate against the best suffix seen so far, turning the binary signal into a dense reward suitable for RL optimization. The framework supports both online query-based attacks and offline-trained transferable suffixes that need no utility access at deployment, and incorporates a utility objective when task-completion feedback is available. On AgentDojo, AutoInject outperforms template attacks, GCG, TAP, and adaptive attack across production models, with statistically significant improvements under McNemar's test with p<0.05. Suffixes learned by AutoInject also break Meta-SecAlign-70B, a model fine-tuned specifically to resist prompt injection, where template attacks fail outright. The results establish an automated baseline for prompt injection and expose a gap between preference-based defenses and adaptive optimization-based attackers.

## Why It Matters

Academic research paper tracking. Focuses on breakthroughs, frameworks, evaluations, or benchmarks in AI engineering, RAG, or agent systems.

## Paper Metadata

- Authors: Unknown
- Publication Year: N/A
- Citation Count: N/A
- Paper Link: https://arxiv.org/abs/2602.05746
- Code Link: None
- Code Stars: N/A

## Key Topics & Tags

- agents
