---
title: How we optimized Dash's relevance judge with DSPy - Dropbox
archive_category: vector-databases
source_category: ai/rag
source_url: https://dropbox.tech/machine-learning/optimizing-dropbox-dash-relevance-judge-with-dspy
resource_id: blog:how-we-optimized-dash-s-relevance-judge-with-dspy
local_vault_path: ai/rag/how-we-optimized-dash-s-relevance-judge-with-dspy.md
quality_score: 70
archive_score: 70
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- benchmark
- dataset
- hackernews
- models
- openai
- rag
- reddit
- web-crawled
- workflows
selection_reason:
- Useful for project building
---

# How we optimized Dash's relevance judge with DSPy - Dropbox

## Why This Is In The Archive

- Matched archive category: `Vector Databases`
- Quality score: 70 | Archive score: 70 (useful)
- Resource kind: framework
- Selection reasons:
  - Useful for project building

## Summary

- **DSPy Optimization Framework**: Used DSPy's GEPA optimizer to systematically adapt a relevance judge from a high-cost proprietary model (OpenAI’s o3) to a lower-cost open model (gpt-oss-120b), reducing NMSE by 45% (from 8.83 to 4.86) and cutting adaptation time from weeks to days while maintaining alignment with human judgments.

- **Operational Reliability Enhancement**: Optimized a smaller model (gemma-3-12b) to reduce malformed JSON outputs by >97% (from 40% to <1%) while improving NMSE fr

## Use Cases

- Semantic search store
- Document embedding indices
- Memory vector caches

## Source

Original source URL: https://dropbox.tech/machine-learning/optimizing-dropbox-dash-relevance-judge-with-dspy

## Local Vault File

Path: [how-we-optimized-dash-s-relevance-judge-with-dspy.md](../../ai/rag/how-we-optimized-dash-s-relevance-judge-with-dspy.md)
