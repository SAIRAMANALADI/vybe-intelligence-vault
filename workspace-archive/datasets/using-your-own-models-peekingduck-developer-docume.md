---
title: Using Your Own Models — PeekingDuck developer documentation
archive_category: datasets
source_category: ai/rag
source_url: https://peekingduck.readthedocs.io/en/stable/tutorials/06_using_your_own_models.html
resource_id: blog:using-your-own-models-peekingduck-developer-docume
local_vault_path: ai/rag/using-your-own-models-peekingduck-developer-docume.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: framework
importance: medium
tags:
- dataset
- hackernews
- models
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube
selection_reason:
- Strong keyword match
- Useful for project building
---

# Using Your Own Models — PeekingDuck developer documentation

## Why This Is In The Archive

- Matched archive category: `Datasets`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: framework
- Selection reasons:
  - Strong keyword match
  - Useful for project building

## Summary

- **Custom Model Integration**: PeekingDuck supports integration of custom-trained models (e.g., CNN for defect classification) via custom `model` nodes, enabling inference within its pipeline framework.

- **Training Workflow**: A TensorFlow-based CNN (3 Conv2D layers + Dense layers) is trained on a casting dataset (normal/defective impellers) using `train_classifier.py`, with preprocessing (rescaling, augmentation) and validation tracking.

- **Node Conversion & Pipeline Integration**: Trained

## Use Cases

- Instruction tuning source
- Evals dataset building
- Synthetic dataset creation

## Source

Original source URL: https://peekingduck.readthedocs.io/en/stable/tutorials/06_using_your_own_models.html

## Local Vault File

Path: [using-your-own-models-peekingduck-developer-docume.md](../../ai/rag/using-your-own-models-peekingduck-developer-docume.md)
