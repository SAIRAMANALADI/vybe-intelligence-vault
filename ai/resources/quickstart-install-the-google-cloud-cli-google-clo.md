---
title: 'Quickstart: Install the Google Cloud CLI | Google Cloud SDK | Google Cloud
  Documentation'
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://cloud.google.com/sdk/docs/install
published_at: '2026-07-02T10:02:22.669969+05:30'
collected_at: '2026-07-02T10:02:22.669991+05:30'
tags:
- producthunt
- reddit
- web-crawled
- youtube
status: active
resource_id: blog:quickstart-install-the-google-cloud-cli-google-clo
first_seen: '2026-07-02T10:02:22.669991+05:30'
last_seen: '2026-07-02T10:02:22.669991+05:30'
last_checked: '2026-07-02T10:02:22.669991+05:30'
health_score: 100
---

# Quickstart: Install the Google Cloud CLI | Google Cloud SDK | Google Cloud Documentation

## Summary

- **Installation Requirements**: Google Cloud CLI (gcloud) requires Python 3.10–3.14; Linux packages include a bundled interpreter. Debian/Ubuntu need `ca-certificates`, `gnupg`, and `curl`; RHEL/Fedora/CentOS require `libxcrypt-compat.x86_64` for compatibility.

- **Installation Methods**:
  - **Linux**: Download `.tar.gz` (x86_64/ARM), extract, and run `./google-cloud-sdk/install.sh` (interactive/non-interactive).
  - **Debian/Ubuntu**: Add Google’s repo via `apt`, import GPG key, then `sudo apt-get install google-cloud-cli` (supports `CLOUDSDK_SKIP_PY_COMPILATION=1` for speed).
  - **RHEL/Fedora/CentOS**: Configure `google-cloud-sdk.repo` via `dnf`, then install.

- **Post-Installation & Components**:
  - Initialize with `gcloud init`; opt-in for usage stats.
  - Install additional components (e.g., `kubectl`, App Engine tools) via `sudo apt-get install google-cloud-cli-<component>` or `dnf`.
  - Downgrade using `sudo apt-get install google-cloud-cli=<VERSION>` (last 10 versions available).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-07-02T10:02:22.669969+05:30

## Related Tags

- producthunt
- reddit
- web-crawled
- youtube

## Source

Original source: https://cloud.google.com/sdk/docs/install
