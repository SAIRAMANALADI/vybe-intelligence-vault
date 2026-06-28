---
title: "albinati/home-energy-manager"
category: "Orchestrator"
tech_stack: ["Python", "PuLP", "CBC", "Preact", "FastAPI", "SQLite", "Docker", "Open-Meteo", "Quartz PV Forecast", "Daikin Onecta API", "Fox ESS Scheduler V3", "Model Context Protocol (MCP)", "Telegram Bot API", "SmartThings"]
quality_score: 9
rag_relevance: 8
tags: ["energy optimization", "MILP solver", "home automation", "smart grid", "AI-driven planning"]
source: "https://github.com/albinati/home-energy-manager"
discovered_at: "2026-06-28T16:14:19Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A solver-driven planning system for UK homes integrating Octopus Agile tariffs, Fox ESS battery, and Daikin Altherma heat pump. Uses a 24–48 hour MILP (PuLP/CBC) to optimize energy costs, exports schedules to hardware, and provides a Preact cockpit and 80-tool MCP surface for AI agents.

## Key Features
- Real-time MILP optimization over 96 half-hour slots with soft penalties for cycling, comfort, and inverter stress
- Scenario-robust peak export control to prevent cold-night export traps
- Closed-loop replay and regression testing for LP solutions
- 80-tool MCP surface for AI agents (Claude/OpenClaw) to interact with hardware and plans
- Self-hosted PV forecast (Quartz/Open-Meteo) with calibration for accurate energy predictions

## Why It Matters for RAG Builders
It provides a critical orchestration layer for RAG builders by integrating real-time energy optimization with AI agent interfaces, enabling dynamic and cost-effective home energy management.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PuLP
Automated review identified **PuLP** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CBC
Automated review identified **CBC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Preact
Automated review identified **Preact** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FastAPI
Automated review identified **FastAPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SQLite
Automated review identified **SQLite** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Docker
Automated review identified **Docker** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Open-Meteo
Automated review identified **Open-Meteo** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Quartz PV Forecast
Automated review identified **Quartz PV Forecast** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Daikin Onecta API
Automated review identified **Daikin Onecta API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Fox ESS Scheduler V3
Automated review identified **Fox ESS Scheduler V3** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Telegram Bot API
Automated review identified **Telegram Bot API** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SmartThings
Automated review identified **SmartThings** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
