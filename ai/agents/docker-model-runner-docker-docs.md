---
title: Docker Model Runner | Docker Docs
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://docs.docker.com/ai/model-runner/
published_at: '2026-08-09T12:59:51.501069+05:30'
collected_at: '2026-08-09T12:59:51.501084+05:30'
tags:
- agents
- meta-ai
- models
- openai
- reddit
- web-crawled
- workflows
status: active
resource_id: blog:docker-model-runner-docker-docs
first_seen: '2026-08-09T12:59:51.501084+05:30'
last_seen: '2026-08-09T12:59:51.501084+05:30'
last_checked: '2026-08-09T12:59:51.501084+05:30'
health_score: 100
---

# Docker Model Runner | Docker Docs

## Summary

- **Multi-Engine AI Model Execution**: Docker Model Runner (DMR) supports `llama.cpp` (GGUF, CPU/GPU), `vLLM` (Safetensors, NVIDIA GPUs), and `Diffusers` (Stable Diffusion, NVIDIA/AMD GPUs) for optimized inference across platforms, with vLLM/Diffusers requiring Linux/NVIDIA for production workloads.

- **OCI-Compliant Model Management**: Enables pulling/pushing models from Docker Hub, OCI registries, or Hugging Face, packaging GGUF/Safetensors as OCI Artifacts, and serving via OpenAI/Ollama-compatible APIs with configurable context sizes (2K–8K tokens default).

- **Security & Isolation**: Linux runs engines in containers; macOS/Windows use sandboxed environments (seatbelt/Job Objects). API lacks authentication, allowing any Docker network client to interact with models, with privacy controls limiting telemetry to model names/user agents only.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-09T12:59:51.501069+05:30

## Related Tags

- agents
- meta-ai
- models
- openai
- reddit
- web-crawled
- workflows

## Source

Original source: https://docs.docker.com/ai/model-runner/
