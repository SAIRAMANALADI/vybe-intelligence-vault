---
title: Create an op | TensorFlow Core
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://www.tensorflow.org/guide/create_op
published_at: '2026-06-22T15:35:09.103339+05:30'
collected_at: '2026-06-22T15:35:09.103358+05:30'
tags:
- producthunt
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:create-an-op-tensorflow-core
first_seen: '2026-06-22T15:35:09.103358+05:30'
last_seen: '2026-06-22T15:35:09.103358+05:30'
last_checked: '2026-06-22T15:35:09.103358+05:30'
health_score: 100
---

# Create an op | TensorFlow Core

## Summary

- **Custom Op Development Workflow**: Create C++ custom ops for TensorFlow only when necessary (e.g., non-composable operations, performance-critical fusion), ensuring ABI compatibility via the [Custom op repository](https://github.com/tensorflow/custom-op) and following TensorFlow's op registration (`REGISTER_OP`), kernel implementation (`OpKernel`), and optional Python wrapper/gradient steps.

- **Multi-Device Kernel Implementation**: Define device-agnostic kernels using templated `OpKernel` classes and functors, with separate CPU/GPU specializations (`.cc` for CPU, `.cu.cc` for CUDA kernels), registered via `REGISTER_KERNEL_BUILDER` with constraints (e.g., `DEVICE_CPU`, `DEVICE_GPU`).

- **Build Systems**: Compile custom ops either via system compiler (using `tf.sysconfig.get_include()`/`get_lib()` flags) or Bazel (with `tf_custom_op_library` in `BUILD` files), ensuring ABI compatibility (e.g., `-D_GLIBCXX_USE_CXX11_ABI=0` for older TensorFlow versions).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-22T15:35:09.103339+05:30

## Related Tags

- producthunt
- reddit
- web-crawled
- workflows

## Source

Original source: https://www.tensorflow.org/guide/create_op
