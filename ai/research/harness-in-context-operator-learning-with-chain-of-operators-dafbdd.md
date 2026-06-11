---
title: Harness In-Context Operator Learning with Chain of Operators
category: ai/research
source_type: arxiv
source_name: arXiv AI
source_url: https://arxiv.org/abs/2606.12318
published_at: '2026-06-10T22:30:00+00:00'
collected_at: '2026-06-11T08:37:53.523330+00:00'
tags:
- models
status: new
---

# Harness In-Context Operator Learning with Chain of Operators

## Summary

arXiv:2606.12318v1 Announce Type: cross 
Abstract: Neural operators approximate mappings between function spaces, but often generalize poorly to other operators and usually require fine-tuning or retraining. In-Context Operator Networks (ICON) addresses this issue by prompting the model with numerical context so that the model learns specific operators from prompts and adapt to different operators without fine-tuning. However, ICON may still fail to generalize to out-of-distribution (OOD) operator tasks. Inpired by the success of harness engineering of Large Language models (LLMs), we introduce Chain of Operators (CHOP), a framework that harness a frozen ICON to OOD operator tasks without updating its parameters. Specifically, CHOP constructs a chain of operators consisting of explicit elementary transformations and the frozen ICON. Experiments on a scalar conservation law and a mean-field control problem show that CHOP reduces relative inference error over direct ICON evaluation, while each operator in the chain remains interpretable and in closed form. A chain constructed on one PDE family further generalizes to a different family, indicating shared mechanisms across harness systems.

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

Original source: https://arxiv.org/abs/2606.12318
