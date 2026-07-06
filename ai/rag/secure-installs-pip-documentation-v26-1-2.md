---
title: Secure installs - pip documentation v26.1.2
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://pip.pypa.io/en/stable/topics/secure-installs/#hash-checking-mode
published_at: '2026-07-07T04:18:32.089072+05:30'
collected_at: '2026-07-07T04:18:32.089078+05:30'
tags:
- rag
- web-crawled
status: active
resource_id: blog:secure-installs-pip-documentation-v26-1-2
first_seen: '2026-07-07T04:18:32.089078+05:30'
last_seen: '2026-07-07T04:18:32.089078+05:30'
last_checked: '2026-07-07T04:18:32.089078+05:30'
health_score: 100
---

# Secure installs - pip documentation v26.1.2

## Summary

- **Hash-checking Mode**: Enabled via `--require-hashes` to enforce SHA256 (or stronger) hashes for all requirements in `requirements.txt`, preventing remote tampering and ensuring dependency integrity. Requires pinned versions (`==`) and hashes for all direct and transitive dependencies.
- **Binary-Only Installs**: Use `--only-binary :all:` to disallow source distributions, reducing attack surface by avoiding compilation and arbitrary code execution during installation.
- **Secure Project Installation**: Avoid `setup.py` commands (e.g., `install`, `develop`) and use `pip install --no-deps .` or `pip install -e --no-deps .` to prevent unchecked dependency resolution and potential security bypasses.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-07T04:18:32.089072+05:30

## Related Tags

- rag
- web-crawled

## Source

Original source: https://pip.pypa.io/en/stable/topics/secure-installs/#hash-checking-mode
