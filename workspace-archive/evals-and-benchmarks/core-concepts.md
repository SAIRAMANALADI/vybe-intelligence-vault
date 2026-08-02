---
title: Core Concepts
archive_category: evals-and-benchmarks
source_category: ai/agents
source_url: https://www.harborframework.com/docs/core-concepts#task
resource_id: blog:core-concepts
local_vault_path: ai/agents/core-concepts.md
quality_score: 70
archive_score: 74
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- agents
- benchmark
- dataset
- web-crawled
selection_reason:
- Strong keyword match
- Useful for project building
---

# Core Concepts

## Why This Is In The Archive

- Matched archive category: `Evals and Benchmarks`
- Quality score: 70 | Archive score: 74 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Task**: Atomic unit in Harbor consisting of an instruction, container environment, and test script, implemented as a directory in Harbor task format for evaluating agents/models.

- **Dataset**: Collection of tasks, often corresponding to benchmarks (e.g., Terminal-Bench, SWE-Bench Verified), optionally distributable via Harbor registry for agent/model evaluation.

- **Agent**: Program implementing `BaseAgent` or `BaseInstalledAgent` interfaces to complete tasks; execution OS user configurab

## Use Cases

- Model performance auditing
- Prompt regression tracking
- Hallucination testing

## Source

Original source URL: https://www.harborframework.com/docs/core-concepts#task

## Local Vault File

Path: [core-concepts.md](../../ai/agents/core-concepts.md)
