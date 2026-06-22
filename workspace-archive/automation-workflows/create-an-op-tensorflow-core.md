---
title: Create an op | TensorFlow Core
archive_category: automation-workflows
source_category: ai/resources
source_url: https://www.tensorflow.org/guide/create_op
resource_id: blog:create-an-op-tensorflow-core
local_vault_path: ai/resources/create-an-op-tensorflow-core.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: template
importance: medium
tags:
- producthunt
- reddit
- web-crawled
- workflows
selection_reason:
- Strong keyword match
- Useful for project building
---

# Create an op | TensorFlow Core

## Why This Is In The Archive

- Matched archive category: `Automation Workflows`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: template
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Custom Op Development Workflow**: Create C++ custom ops for TensorFlow only when necessary (e.g., non-composable operations, performance-critical fusion), ensuring ABI compatibility via the [Custom op repository](https://github.com/tensorflow/custom-op) and following TensorFlow's op registration (`REGISTER_OP`), kernel implementation (`OpKernel`), and optional Python wrapper/gradient steps.

- **Multi-Device Kernel Implementation**: Define device-agnostic kernels using templated `OpKernel` c

## Use Cases

- Local cron scheduling
- n8n pipeline setups
- OS task automations

## Source

Original source URL: https://www.tensorflow.org/guide/create_op

## Local Vault File

Path: [create-an-op-tensorflow-core.md](../../ai/resources/create-an-op-tensorflow-core.md)
