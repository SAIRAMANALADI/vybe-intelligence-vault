---
title: cli/docs/install_linux.md at trunk · cli/cli · GitHub
category: ai/rag
source_type: web
source_name: Web Discovery
source_url: https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian
published_at: '2026-07-14T13:05:32.179572+05:30'
collected_at: '2026-07-14T13:05:32.179586+05:30'
tags:
- hackernews
- rag
- reddit
- web-crawled
- workflows
- youtube
status: active
resource_id: github:cli/cli
first_seen: '2026-07-14T13:05:32.179586+05:30'
last_seen: '2026-07-14T13:05:32.179586+05:30'
last_checked: '2026-07-14T13:05:32.179586+05:30'
health_score: 100
---

# cli/docs/install_linux.md at trunk · cli/cli · GitHub

## Summary

- Official Debian/Ubuntu installation uses signed APT repository with keyring `githubcli-archive-keyring.gpg` (SHA256: `6084d5d7bd8e288441e0e94fc6275570895da18e6751f70f057485dc2d1a811b`) and installs via `apt install gh`.
- RPM-based systems (Fedora, RHEL, openSUSE) use signed repository via `gh-cli.repo` with key verification via `gpg --show-keys` against fingerprints `2C6106201985B60E6C7AC87323F3D4EA75716059` and `7F38BBB59D064DBCB3D84D725612B36462313325`.
- FreeBSD/OpenBSD ports install `gh` via `pkg_add github-cli` or `make install clean` from official ports tree, while discouraged Snap packages suffer from unresolved runtime issues.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/rag
- Published: 2026-07-14T13:05:32.179572+05:30

## Related Tags

- hackernews
- rag
- reddit
- web-crawled
- workflows
- youtube

## Source

Original source: https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian
