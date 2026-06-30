---
title: windowsserverdocs/WindowsServerDocs/administration/OpenSSH/OpenSSH_Install_FirstUse.md
  at main · MicrosoftDocs/windowsse
category: ai/resources
source_type: web
source_name: Web Discovery
source_url: https://github.com/MicrosoftDocs/windowsserverdocs/blob/main/WindowsServerDocs/administration/OpenSSH/OpenSSH_Install_FirstUse.md
published_at: '2026-06-30T22:59:29.322979+05:30'
collected_at: '2026-06-30T22:59:29.322994+05:30'
tags:
- web-crawled
status: active
resource_id: github:microsoftdocs/windowsserverdocs
first_seen: '2026-06-30T22:59:29.322994+05:30'
last_seen: '2026-06-30T22:59:29.322994+05:30'
last_checked: '2026-06-30T22:59:29.322994+05:30'
health_score: 100
---

# windowsserverdocs/WindowsServerDocs/administration/OpenSSH/OpenSSH_Install_FirstUse.md at main · MicrosoftDocs/windowsse

## Summary

- **OpenSSH for Windows** provides encrypted remote access via SSH, replacing insecure protocols like Telnet, and is enabled by default on **Windows Server 2025** while requiring manual installation on earlier versions (Windows 10/11, Server 2019/2022).

- **Installation & Configuration**:
  - **Windows Server 2025**: Enable via `Server Manager` or `Start-Service sshd` + `Set-Service sshd -StartupType Automatic`.
  - **Earlier Versions**: Install via `Add-WindowsCapability` (e.g., `OpenSSH.Server~~~~0.0.1.0`), start the `sshd` service, and ensure firewall rule `OpenSSH-Server-In-TCP` (TCP/22) is active.

- **Client Connection**: Authenticate via `ssh domain\username@servername`, accepting host key fingerprint and entering password; session grants a Windows command shell prompt (`domain\username@SERVERNAME C:\Users\username>`).

## Why It Matters

General public resource representing technology updates, guides, or tutorials.

## Details

- Source: Web Discovery
- Category: ai/resources
- Published: 2026-06-30T22:59:29.322979+05:30

## Related Tags

- web-crawled

## Source

Original source: https://github.com/MicrosoftDocs/windowsserverdocs/blob/main/WindowsServerDocs/administration/OpenSSH/OpenSSH_Install_FirstUse.md
