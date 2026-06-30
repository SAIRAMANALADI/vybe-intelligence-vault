---
title: Get started with OpenSSH Server for Windows | Microsoft Learn
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://learn.microsoft.com/windows-server/administration/openssh/openssh_install_firstuse
published_at: '2026-06-30T22:58:47.883070+05:30'
collected_at: '2026-06-30T22:58:47.883084+05:30'
tags:
- reddit
- web-crawled
status: active
resource_id: blog:get-started-with-openssh-server-for-windows-micros
first_seen: '2026-06-30T22:58:47.883084+05:30'
last_seen: '2026-06-30T22:58:47.883084+05:30'
last_checked: '2026-06-30T22:58:47.883084+05:30'
health_score: 100
---

# Get started with OpenSSH Server for Windows | Microsoft Learn

## Summary

- **OpenSSH for Windows** is a secure remote access tool using SSH protocol, encrypting all client-server traffic to mitigate attacks like eavesdropping or hijacking; supported on Windows 10/11 and Windows Server 2019+.

- **Installation/Enablement** requires PowerShell 5.1+, admin rights, and can be done via:
  - **PowerShell**: `Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0` (server) or `OpenSSH.Client~~~~0.0.1.0` (client), followed by `Start-Service sshd` and `Set-Service sshd -StartupType Automatic`.
  - **GUI**: Via *Optional Features* or *Server Manager*, with firewall rule `OpenSSH-Server-In-TCP` auto-created for port 22.

- **Post-Installation**: Connect via `ssh domain\username@servername`; initial connection triggers host key verification (ECDSA/SHA256 fingerprint prompt) before password authentication.

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-30T22:58:47.883070+05:30

## Related Tags

- reddit
- web-crawled

## Source

Original source: https://learn.microsoft.com/windows-server/administration/openssh/openssh_install_firstuse
