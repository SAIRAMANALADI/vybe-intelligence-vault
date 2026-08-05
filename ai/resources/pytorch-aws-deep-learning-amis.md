---
title: PyTorch - AWS Deep Learning AMIs
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://docs.aws.amazon.com/dlami/latest/devguide/tutorial-pytorch.html
published_at: '2026-08-05T14:37:21.538439+05:30'
collected_at: '2026-08-05T14:37:21.538449+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:pytorch-aws-deep-learning-amis
first_seen: '2026-08-05T14:37:21.538449+05:30'
last_seen: '2026-08-05T14:37:21.538449+05:30'
last_checked: '2026-08-05T14:37:21.538449+05:30'
health_score: 100
---

# PyTorch - AWS Deep Learning AMIs

## Summary

- **PyTorch Activation**: On AWS Deep Learning AMIs (DLAMI), activate PyTorch via Conda using `source activate pytorch_p310` (Python 3 with CUDA/MKL-DNN), then test with `import torch; x = torch.rand(5, 3); print(x.size())`.

- **Nightly PyTorch Installation**: Uninstall current PyTorch (`pip uninstall torch`) and install the latest nightly build via:
  - GPU: `pip install torch_nightly -f https://download.pytorch.org/whl/nightly/cu100/torch_nightly.html`
  - CPU: `pip install torch_nightly -f https://download.pytorch.org/whl/nightly/cpu/torch_nightly.html`

- **Verification**: Confirm installation with `print(torch.__version__)` (e.g., `1.0.0.dev20180922`) and validate functionality using PyTorch’s MNIST example (`git clone https://github.com/pytorch/examples.git; cd examples/mnist; python main.py`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-08-05T14:37:21.538439+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://docs.aws.amazon.com/dlami/latest/devguide/tutorial-pytorch.html
