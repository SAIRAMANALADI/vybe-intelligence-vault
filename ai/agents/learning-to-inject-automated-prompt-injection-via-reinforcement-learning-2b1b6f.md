---
title: 'Learning to Inject: Automated Prompt Injection via Reinforcement Learning'
category: ai/agents
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2602.05746
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.524128+00:00'
tags:
- agents
status: new
---

# Learning to Inject: Automated Prompt Injection via Reinforcement Learning

## Summary

arXiv:2602.05746v2 Announce Type: replace-cross 
Abstract: Prompt injection is a critical vulnerability in LLM agents, yet the strongest methods still rely on human red-teamers and hand-crafted prompts. Adapting automated jailbreak optimizers does not close this gap: jailbreaks shape models toward generic compliance, while prompt injection requires emitting specific tool calls with correct parameters. The success signal is binary, and randomly sampled suffixes almost never trigger it, so standard optimizers have no gradient to follow. We present AutoInject, a black-box reinforcement learning (RL) framework that learns adversarial suffixes for prompt injection. A learned comparison-based reward scores each candidate against the best suffix seen so far, turning the binary signal into a dense reward suitable for RL optimization. The framework supports both online query-based attacks and offline-trained transferable suffixes that need no utility access at deployment, and incorporates a utility objective when task-completion feedback is available. On AgentDojo, AutoInject outperforms template attacks, GCG, TAP, and adaptive attack across production models, with statistically significant improvements under McNemar's test with p<0.05. Suffixes learned by AutoInject also break Meta-SecAlign-70B, a model fine-tuned specifically to resist prompt injection, where template attacks fail outright. The results establish an automated baseline for prompt injection and expose a gap between preference-based defenses and adaptive optimization-based attackers.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/agents
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- agents

## Source

Original source: https://arxiv.org/abs/2602.05746
