---
title: Using Your Own Models — PeekingDuck developer documentation
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://peekingduck.readthedocs.io/en/stable/tutorials/06_using_your_own_models.html
published_at: '2026-06-22T11:23:20.191247+05:30'
collected_at: '2026-06-22T11:23:20.191260+05:30'
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
status: active
resource_id: blog:using-your-own-models-peekingduck-developer-docume
first_seen: '2026-06-22T11:23:20.191260+05:30'
last_seen: '2026-06-22T11:23:20.191260+05:30'
last_checked: '2026-06-22T11:23:20.191260+05:30'
health_score: 100
---

# Using Your Own Models — PeekingDuck developer documentation

## Summary

- **Custom Model Integration**: PeekingDuck supports integration of custom-trained models (e.g., CNN for defect classification) via custom `model` nodes, enabling inference within its pipeline framework.

- **Training Workflow**: A TensorFlow-based CNN (3 Conv2D layers + Dense layers) is trained on a casting dataset (normal/defective impellers) using `train_classifier.py`, with preprocessing (rescaling, augmentation) and validation tracking.

- **Node Conversion & Pipeline Integration**: Trained models (saved in `weights/`) are converted into PeekingDuck-compatible nodes using `peekingduck create-node`, then integrated into pipelines for inference tasks like defect detection.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-06-22T11:23:20.191247+05:30

## Related Tags

- dataset
- hackernews
- models
- rag
- reddit
- scripts
- web-crawled
- workflows
- youtube

## Source

Original source: https://peekingduck.readthedocs.io/en/stable/tutorials/06_using_your_own_models.html
