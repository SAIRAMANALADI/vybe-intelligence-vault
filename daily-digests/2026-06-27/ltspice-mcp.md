---
title: "Cognitohazard/ltspice-mcp"
category: "Tooling"
tech_stack: ["Python", "LTspice", "ngspice", "MCP (Model Context Protocol)", "spicelib", "uv", "TOML (for configuration)"]
quality_score: 8
rag_relevance: 9
tags: ["circuit simulation", "MCP server", "AI-assisted design", "SPICE integration", "automated analysis"]
source: "https://github.com/Cognitohazard/ltspice-mcp"
discovered_at: "2026-06-27T04:05:06Z"
evaluated_by: "mistral-small-latest"
---

## Summary
An MCP server that bridges LLMs with LTspice and ngspice circuit simulators, enabling AI-assisted circuit design, simulation, and analysis. It allows assistants to interact with real circuit files, run simulations, and retrieve structured results like operating points, stability margins, and Monte Carlo statistics without manual rawfile parsing.

## Key Features
- Direct integration with LTspice and ngspice for real-time circuit simulation and analysis
- Structured output of simulation results (e.g., gm, gds, phase margin, overshoot) without rawfile parsing
- Real-time schematic editing and validation via LTspice `.asc` files
- Support for Monte Carlo, parameter sweeps, and multi-dimensional analysis
- Configurable tool profiles for different MCP client use cases (e.g., agentic vs. full automation)

## Why It Matters for RAG Builders
It enables AI agents to design, simulate, and iterate on hardware circuits directly, bridging the gap between natural language instructions and precise SPICE-based analysis.

## Tech Stack Deep Dive
### Python
Automated review identified **Python** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### LTspice
Automated review identified **LTspice** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### ngspice
Automated review identified **ngspice** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### MCP (Model Context Protocol)
Automated review identified **MCP (Model Context Protocol)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### spicelib
Automated review identified **spicelib** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### uv
Automated review identified **uv** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.

### TOML (for configuration)
Automated review identified **TOML (for configuration)** as a key module contributing to infrastructure orchestration or cognitive reasoning boundaries in this project.



## Installation
```bash
# Install instruction (default)
pip install -r requirements.txt
```

## Related Vault Entries
<!-- Auto-populated by build-index.js based on tech_stack overlap -->
