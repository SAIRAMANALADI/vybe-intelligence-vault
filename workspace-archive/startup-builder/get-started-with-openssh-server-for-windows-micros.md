---
title: Get started with OpenSSH Server for Windows | Microsoft Learn
archive_category: startup-builder
source_category: ai/resources
source_url: https://learn.microsoft.com/windows-server/administration/openssh/openssh_install_firstuse
resource_id: blog:get-started-with-openssh-server-for-windows-micros
local_vault_path: ai/resources/get-started-with-openssh-server-for-windows-micros.md
quality_score: 70
archive_score: 72
archive_tier: useful
resource_kind: prompt
importance: medium
tags:
- reddit
- web-crawled
selection_reason:
- Strong keyword match
- Valuable developer reference
---

# Get started with OpenSSH Server for Windows | Microsoft Learn

## Why This Is In The Archive

- Matched archive category: `Startup Builder`
- Quality score: 70 | Archive score: 72 (useful)
- Resource kind: prompt
- Selection reasons:
  - Strong keyword match
  - Valuable developer reference

## Summary

- **OpenSSH for Windows** is a secure remote access tool using SSH protocol, encrypting all client-server traffic to mitigate attacks like eavesdropping or hijacking; supported on Windows 10/11 and Windows Server 2019+.

- **Installation/Enablement** requires PowerShell 5.1+, admin rights, and can be done via:
  - **PowerShell**: `Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0` (server) or `OpenSSH.Client~~~~0.0.1.0` (client), followed by `Start-Service sshd` and `Set-Service sshd

## Use Cases

- SaaS boilerplate launching
- Landing page design
- MVP feature validation

## Source

Original source URL: https://learn.microsoft.com/windows-server/administration/openssh/openssh_install_firstuse

## Local Vault File

Path: [get-started-with-openssh-server-for-windows-micros.md](../../ai/resources/get-started-with-openssh-server-for-windows-micros.md)
