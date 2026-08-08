---
title: Customize Gemini Code Assist behavior in GitHub | Gemini for Google Cloud |
  Google Cloud Documentation
category: ai/agents
source_type: web
source_name: Web Discovery
source_url: https://developers.google.com/gemini-code-assist/docs/customize-gemini-behavior-github
published_at: '2026-08-08T15:38:21.705394+05:30'
collected_at: '2026-08-08T15:38:21.705407+05:30'
tags:
- agents
- producthunt
- reddit
- web-crawled
status: active
resource_id: blog:customize-gemini-code-assist-behavior-in-github-ge
first_seen: '2026-08-08T15:38:21.705407+05:30'
last_seen: '2026-08-08T15:38:21.705407+05:30'
last_checked: '2026-08-08T15:38:21.705407+05:30'
health_score: 100
---

# Customize Gemini Code Assist behavior in GitHub | Gemini for Google Cloud | Google Cloud Documentation

## Summary

- **Customization via `config.yaml`**: Repository-specific behavior for **Gemini Code Assist on GitHub** is controlled via a `.gemini/config.yaml` file, supporting fields like `code_review.comment_severity_threshold` (e.g., `HIGH` to suppress `LOW`/`MEDIUM` severity comments), `ignore_patterns` (glob-based file exclusions), and `memory_config` (persistent memory toggling per repo).
- **Style Guide Integration**: A `.gemini/styleguide.md` file enforces custom code review rules, while `config.yaml` fields like `pull_request_opened.code_review` and `max_review_comments` refine review scope and output.
- **Bulk Configuration**: Group-level settings (via Google Cloud Console) override repo-specific `config.yaml` unless explicitly disabled, with exceptions noted in the [schema](https://developers.google.com/gemini-code-assist/docs/customize-gemini-behavior-github#schema).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/agents
- Published: 2026-08-08T15:38:21.705394+05:30

## Related Tags

- agents
- producthunt
- reddit
- web-crawled

## Source

Original source: https://developers.google.com/gemini-code-assist/docs/customize-gemini-behavior-github
