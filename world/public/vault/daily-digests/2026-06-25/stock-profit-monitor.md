---
title: GuangfuWu/stock-profit-monitor
category: daily-digests/2026-06-25
tech_stack:
- Python
- Privora (Serverless Data Orchestration)
- Webhook APIs (WeChat, Feishu, DingTalk)
- Bearer Token Authentication
- SQL (for encrypted portfolio storage)
- ClawHub (AI Agent Integration)
quality_score: 8
rag_relevance: 7
tags:
- stock monitoring
- automated alerts
- portfolio tracking
- AI agent integration
- serverless
source: https://github.com/GuangfuWu/stock-profit-monitor
discovered_at: '2026-06-25T08:29:07Z'
evaluated_by: mistral-small-latest
---

## Summary
A lightweight automated stock monitoring tool that tracks A-share and Hong Kong stock portfolios, triggers customizable webhook alerts (WeChat, Feishu, DingTalk) on profit/loss thresholds, and integrates with AI agents via Bearer Token API. Powered by Privora's serverless backend with zero maintenance overhead.

## Key Features
- Real-time A-share and Hong Kong stock portfolio tracking with encrypted field-level storage
- Customizable threshold-based webhook alerts (e.g., MA20 breaches, daily loss limits)
- Zero-server deployment via Privora with 1-minute setup
- Bearer Token API for direct AI agent integration (Claude, ChatGPT, etc.)
- Supports multi-channel notifications (WeChat, Feishu, DingTalk) and Python-based custom logic

## Why It Matters for RAG Builders
Provides a low-friction, serverless solution for real-time stock portfolio monitoring and alerting, reducing manual oversight while enabling AI-driven decision-making through standardized APIs.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Privora (Serverless Data Orchestration)
Automated review identified **Privora (Serverless Data Orchestration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Webhook APIs (WeChat, Feishu, DingTalk)
Automated review identified **Webhook APIs (WeChat, Feishu, DingTalk)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Bearer Token Authentication
Automated review identified **Bearer Token Authentication** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQL (for encrypted portfolio storage)
Automated review identified **SQL (for encrypted portfolio storage)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ClawHub (AI Agent Integration)
Automated review identified **ClawHub (AI Agent Integration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
