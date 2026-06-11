---
title: 'Erased but Not Forgotten: How Backdoors Compromise Concept Erasure'
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2504.21072
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523815+00:00'
tags:
- models
status: new
---

# Erased but Not Forgotten: How Backdoors Compromise Concept Erasure

## Summary

arXiv:2504.21072v3 Announce Type: replace-cross 
Abstract: The expansion of text-to-image diffusion models has raised concerns about harmful outputs, from fabricated depictions of public figures to sexually explicit imagery. To mitigate such risks, prior work has proposed concept erasure methods that aim to sever unwanted concepts from the model via fine-tuning, yet it remains unclear whether these approaches truly remove all links to the harmful concept or merely conceal superficial connections. In this work, we reveal a critical vulnerability, the Erasure Evasion Backdoor (EEB): an adversary binds a backdoor trigger to a concept slated for removal, and this malicious link survives subsequent erasure. We show that both black-box and white-box adversaries can instantiate this threat. Across six state-of-the-art erasure methods, including robust ones that explicitly search for alternative representations of the target concept, EEB consistently exposes harmful content: up to 82% success against celebrity-identity unlearning, up to 94% for object erasure, and up to 16 times amplification of explicit-content exposure. While EEB uncovers a blind spot in current erasure methods, it also provides a diagnostic tool for stress-testing future concept erasure techniques.

## Why It Matters

This resource may be useful for AI engineering, research, automation, or future project building.

## Key Points

- Source: arXiv AI
- Category: ai/research
- Published: 2026-06-10T22:30:00+00:00

## Implementation Notes

Use this as a learning/reference resource. Review the source and extract project ideas, techniques, or tools.

## Related Tags

- models

## Source

Original source: https://arxiv.org/abs/2504.21072
