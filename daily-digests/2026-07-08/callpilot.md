---
title: "tianye1999/callpilot"
category: "Tooling"
tech_stack: ["Python", "Quectel EC20/EG25 4G Modem", "Qwen Omni (Alibaba)", "Doubao (ByteDance)", "OpenAI Realtime API", "FFmpeg", "PortAudio", "PyUSB", "PyWebView", "DashScope API", "AT Commands", "DTMF (Dual-Tone Multi-Frequency)"]
quality_score: 8
rag_relevance: 6
tags: ["AI phone agent", "real-time voice AI", "SMS automation", "IVR navigation", "hardware integration"]
source: "https://github.com/tianye1999/callpilot"
discovered_at: "2026-07-08T08:16:35Z"
evaluated_by: "mistral-small-latest"
---

## Summary
CallPilot is an open-source AI phone agent that runs on a Quectel EC20/EG25 4G modem, enabling real-time voice interactions via cloud-based AI models. It auto-answers calls, places outbound calls, sends/receives SMS, navigates IVR menus, and records/summarizes conversations, all on local hardware with API keys.

## Key Features
- Auto-answers and handles incoming calls with cloud-based real-time voice AI models (Qwen Omni, Doubao, OpenAI Realtime)
- Supports outbound dialing (single and batch with whitelist) and SMS send/receive (including Chinese UCS2 encoding)
- Navigates IVR menus using DTMF keypad and AI tool-calling for actions like sending SMS, hanging up, or reading OTPs
- Records and summarizes calls with latency metrics and live transcripts, stored locally for privacy
- Cross-platform support (macOS, Windows, Linux) with modular audio and modem interfaces for hardware flexibility

## Why It Matters for RAG Builders
CallPilot enables developers to build and test AI-driven telephony applications with real hardware, bridging cloud AI models to cellular modems for automated call handling and SMS interactions.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Quectel EC20/EG25 4G Modem
Automated review identified **Quectel EC20/EG25 4G Modem** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Qwen Omni (Alibaba)
Automated review identified **Qwen Omni (Alibaba)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Doubao (ByteDance)
Automated review identified **Doubao (ByteDance)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenAI Realtime API
Automated review identified **OpenAI Realtime API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FFmpeg
Automated review identified **FFmpeg** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PortAudio
Automated review identified **PortAudio** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyUSB
Automated review identified **PyUSB** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PyWebView
Automated review identified **PyWebView** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DashScope API
Automated review identified **DashScope API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### AT Commands
Automated review identified **AT Commands** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DTMF (Dual-Tone Multi-Frequency)
Automated review identified **DTMF (Dual-Tone Multi-Frequency)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
