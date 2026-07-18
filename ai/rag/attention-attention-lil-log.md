---
title: Attention? Attention! | Lil'Log
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://lilianweng.github.io/posts/2018-06-24-attention/#full-architecture
published_at: '2026-07-18T01:13:31.959737+05:30'
collected_at: '2026-07-18T01:13:31.959748+05:30'
tags:
- deepmind
- hackernews
- models
- openai
- paper
- rag
- reddit
- web-crawled
status: active
resource_id: blog:attention-attention-lil-log
first_seen: '2026-07-18T01:13:31.959748+05:30'
last_seen: '2026-07-18T01:13:31.959748+05:30'
last_checked: '2026-07-18T01:13:31.959748+05:30'
health_score: 100
---

# Attention? Attention! | Lil'Log

## Summary

- **Attention Mechanism**: Addresses limitations of seq2seq models by dynamically weighting input elements (e.g., words/pixels) via learned alignment scores, enabling focus on relevant context without fixed-length bottlenecks. Key formulations include additive (Bahdanau), dot-product (Luong), and scaled dot-product (Vaswani) attention, with alignment scores computed via functions like $\text{score}(\boldsymbol{s}_t, \boldsymbol{h}_i) = \mathbf{v}_a^\top \tanh(\mathbf{W}_a[\boldsymbol{s}_t; \boldsymbol{h}_i])$ or $\boldsymbol{s}_t^\top \boldsymbol{h}_i / \sqrt{n}$.

- **Self-Attention**: A variant where attention operates within a single sequence (e.g., relating words in a sentence), enabling modeling of long-range dependencies. Self-attention can use any alignment score function but replaces the target sequence with the input sequence itself, as in Vaswani et al.'s Transformer architecture, which employs scaled dot-product attention across multiple heads.

- **Attention Taxonomy**: Attention mechanisms are categorized by scope (global/soft vs. local/hard) and target (cross-attention between sequences vs. self-attention within a sequence). Global attention attends to all input elements, while local attention focuses on subsets (e.g., image patches). Neural Turing Machines and Pointer Networks extend attention to memory addressing and sequence generation, respectively.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-18T01:13:31.959737+05:30

## Related Tags

- deepmind
- hackernews
- models
- openai
- paper
- rag
- reddit
- web-crawled

## Source

Original source: https://lilianweng.github.io/posts/2018-06-24-attention/#full-architecture
