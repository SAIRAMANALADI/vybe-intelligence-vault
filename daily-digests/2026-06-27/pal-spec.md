---
title: "hanasite/pal-spec"
category: "Agent Framework"
tech_stack: ["MicroPython", "ESP-IDF", "ESP32 (Dual-Core)", "FreeRTOS", "WebSocket", "Python", "C", "I2C", "SPI", "UART", "PWM", "ADC"]
quality_score: 7
rag_relevance: 9
tags: ["embedded AI", "agent-to-hardware interface", "MicroPython REPL", "ESP32 dual-core", "physical abstraction"]
source: "https://github.com/hanasite/pal-spec"
discovered_at: "2026-06-27T19:11:28Z"
evaluated_by: "mistral-small-latest"
---

## Summary
PAL (Physical Abstraction Layer) is an open standard and reference architecture for AI Agent-friendly embedded terminals, enabling LLMs to directly control physical devices via MicroPython REPL over a dual-core ESP32 system. It decouples cloud-based agent reasoning from hardware execution, providing a minimal set of hardware primitives for 99% of physical control needs.

## Key Features
- Dual-core ESP32 architecture with Core 0 (C/FreeRTOS) handling real-time safety and Core 1 (MicroPython) executing agent-generated Python code
- Minimal hardware abstraction layer with 6 core primitives (GPIO, ADC, I2C, SPI, PWM, UART) covering 99% of physical control needs
- Agent-in-cloud execution model where terminals only execute code, enabling use of powerful LLMs without hardware constraints
- Standardized JSON-over-WebSocket protocol for agent-terminal communication, supporting exec and tool invocation modes
- Hardware-agnostic design allowing integration with any real-time MCU or FPGA via Layer 1 interfaces

## Why It Matters for RAG Builders
PAL bridges the gap between AI agents and physical hardware by providing a standardized, agent-friendly interface that leverages MicroPython REPL for direct execution, enabling LLMs to control real-world devices without requiring specialized embedded development expertise.

## Tech Stack Deep Dive
### MicroPython
Automated review identified **MicroPython** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ESP-IDF
Automated review identified **ESP-IDF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ESP32 (Dual-Core)
Automated review identified **ESP32 (Dual-Core)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### FreeRTOS
Automated review identified **FreeRTOS** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### WebSocket
Automated review identified **WebSocket** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### C
Automated review identified **C** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### I2C
Automated review identified **I2C** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### SPI
Automated review identified **SPI** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### UART
Automated review identified **UART** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### PWM
Automated review identified **PWM** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ADC
Automated review identified **ADC** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
