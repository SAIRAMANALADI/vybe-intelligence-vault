---
title: "microhenrio/openocd-mcp"
category: "Tooling"
tech_stack: ["Python", "Tcl", "OpenOCD", "Model Context Protocol (MCP)", "CMSIS-SVD", "DWARF", "Tkinter"]
quality_score: 9
rag_relevance: 8
tags: ["microcontroller debugging", "firmware flashing", "real-time variable inspection", "peripheral register access", "MCP server"]
source: "https://github.com/microhenrio/openocd-mcp"
discovered_at: "2026-06-30T07:52:57Z"
evaluated_by: "mistral-small-latest"
---

## Summary
A lightweight Model Context Protocol (MCP) server that enables Claude to interact directly with microcontrollers via OpenOCD for debugging, flashing, and real-time inspection of firmware, variables, and peripheral registers by name.

## Key Features
- Integrates OpenOCD with Claude via MCP for seamless debugging and flashing of microcontrollers.
- Supports reading/writing variables and peripheral registers by name using ELF and SVD files.
- Enables conditional breakpoints, hit-count breakpoints, and hardware watchpoints for advanced debugging.
- Provides a live-watch GUI for non-intrusive sampling of variables and memory locations.
- Automatically manages OpenOCD installation and configuration for chip-agnostic operation.

## Why It Matters for RAG Builders
It bridges AI assistants like Claude with low-level hardware debugging, enabling automated firmware analysis and real-time inspection for AI-driven embedded development workflows.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tcl
Automated review identified **Tcl** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### OpenOCD
Automated review identified **OpenOCD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Model Context Protocol (MCP)
Automated review identified **Model Context Protocol (MCP)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### CMSIS-SVD
Automated review identified **CMSIS-SVD** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### DWARF
Automated review identified **DWARF** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### Tkinter
Automated review identified **Tkinter** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
