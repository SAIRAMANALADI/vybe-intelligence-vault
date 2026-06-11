# Vybe Intelligence Vault

### *An auto-updating open-source vault for AI agents, RAG systems, MCP servers, prompts, tools, templates, and next-gen web development.*

---

![Open Source](https://img.shields.io/badge/Open%20Source-MIT-brightgreen?style=flat-square)
![Auto Updated](https://img.shields.io/badge/Auto--Updated-Every%203h-blue?style=flat-square)
![AI Agents](https://img.shields.io/badge/AI--Agents-MCP-orange?style=flat-square)
![RAG](https://img.shields.io/badge/RAG-Vector--DBs-red?style=flat-square)
![Web Dev](https://img.shields.io/badge/Web--Dev-3D--Frontend-violet?style=flat-square)
![Built for Builders](https://img.shields.io/badge/Built--for-Builders-lightgrey?style=flat-square)

---

The AI internet moves too fast. 

New agents, tools, repositories, prompts, papers, templates, and workflows drop every day. 

This vault tracks the signal — and organizes it into a clean, builder-friendly archive.

---

## 💡 What is this?

**Vybe Intelligence Vault** is a free, open-source, auto-updating knowledge vault for AI engineers, indie hackers, developers, designers, and builders who want to stay ahead of agents, RAG, MCP, LLM tools, prompts, AI coding workflows, and advanced web development.

This repository serves as a public AI intelligence vault generated from public resources. It collects, organizes, and curates links, summaries, tools, repositories, learning paths, and project ideas across AI engineering and advanced web development.

The vault is automatically refreshed every **3 hours** by a private harvester bot using public sources.

---

## 🎯 Who is this for?

| Role | How it helps |
| :--- | :--- |
| **🤖 AI Engineers** | Explore cutting-edge agentic design patterns, MCP servers, and RAG architectures. |
| **🐍 Python Developers** | Access code snippets, vector database integrations, and LLM orchestration logic. |
| **🎨 Frontend Developers** | Discover AI UI components, next-gen styling patterns, and user experience paradigms. |
| **🚀 Indie Hackers & Founders** | Find production-ready templates, public APIs, and ideas for your next build. |
| **🎓 Students & Researchers** | Track academic preprints, state-of-the-art benchmarks, and structured learning paths. |
| **⚡ Prompt Engineers** | Study prompt libraries, guardrails, and system prompt architectures. |
| **🔌 Automation Builders** | Explore MCP tools, computer use libraries, and workflow automation blueprints. |
| **🖌️ 3D & Creative Web Devs** | Master Three.js, React Three Fiber, WebGL, WebGPU, and smooth shaders. |

---

## 📦 What's Inside?

The vault is organized into modular categories covering the modern builder stack:

*   🤖 **AI Agents** — Agent frameworks (LangGraph, CrewAI, AutoGen) and computer use tools.
*   🗂️ **RAG Systems** — Retrieval-augmented generation, chunking strategies, hybrid search, and vector pipelines.
*   🔌 **MCP Servers** — Model Context Protocol servers, templates, tools, and client integrations.
*   💻 **AI Coding Agents** — IDE rules (`.cursorrules`, `.windsurfinstructions`), custom instructions, and prompts.
*   📐 **Evals & Benchmarks** — Methods, datasets, and platforms to evaluate LLM outputs and performance.
*   🔭 **Observability** — Tracing, cost-tracking, telemetry, and debugging systems for LLM apps.
*   🛡️ **Guardrails & Security** — Prompt injection shields, moderation layers, and vulnerability scanners.
*   🏠 **Local LLMs** — Offline model running, quantization, Ollama, llama.cpp, and hardware tuning.
*   💾 **Vector Databases** — Similarity indexing engines (Qdrant, Pinecone, pgvector) and datasets.
*   🌐 **Public APIs** — Free and open API endpoints for tools, services, and data ingestion.
*   💡 **Startup Builder** — Micro-SaaS guides, boilerplate repositories, public launch platforms, and market insights.
*   🎨 **Frontend AI UI** — Chatbot components, dashboards, Tailwind designs, and interactive elements.
*   🔮 **3D Creative Web** — Three.js, React Three Fiber (R3F), WebGL, WebGPU, and GLSL shaders.
*   📚 **Learning Paths** — Concept references, tutorials, and structured pathways from zero to production.
*   💡 **Project Ideas** — Actionable starter projects, portfolio builders, and engineering challenge templates.

---

## 🗺️ Folder Map

Here is how the repository is structured:

```txt
workspace-archive/
├── ai-coding-agents/       # Cursor rules, Windsurf instructions, agent prompt files
├── mcp-registry/           # Model Context Protocol servers & custom tool registries
├── rag-systems/            # Advanced Retrieval-Augmented Generation code & papers
├── agent-frameworks/       # CrewAI, LangGraph, AutoGen, and custom loop frameworks
├── prompt-libraries/       # System prompts, few-shot templates, and jailbreak shields
├── frontend-ai-ui/         # Chat widgets, v0-style components, and dashboard UI
├── webdev-3d-creative/     # Three.js, React Three Fiber, WebGL, WebGPU, and GSAP
├── startup-builder/        # Boilerplate directories, SaaS launchpads, and APIs
├── best-of/                # Curated lists (Best RAG Stacks, Essential Agents, etc.)
└── _navigation/            # Automatically indexed navigation files by topic & skill
```

---

## 🚀 Best Places to Start

Jump straight into our curated folders and indexes:

### 🏆 Essential "Best of" Guides
*   [Best of AI Engineering](workspace-archive/best-of/essential-ai-engineering.md)
*   [Best of Agent Building](workspace-archive/best-of/essential-agent-building.md)
*   [Best RAG Stack](workspace-archive/best-of/essential-rag-stack.md)
*   [Best Frontend AI UI](workspace-archive/best-of/essential-frontend-ai-ui.md)
*   [Best 3D Web Dev](workspace-archive/best-of/essential-3d-webdev.md)
*   [Best Automation Workflows](workspace-archive/best-of/essential-automation.md)

### 🗺️ Navigation Indexes
*   [Browse by High-Level Topics](workspace-archive/_navigation/by-topic.md)
*   [Browse by Target Skills](workspace-archive/_navigation/by-skill.md)
*   [Browse by Development Use Case](workspace-archive/_navigation/by-use-case.md)
*   [Browse by Resource Type](workspace-archive/_navigation/by-resource-type.md)
*   [Latest Additions](workspace-archive/_navigation/newest.md)

---

## 🔄 How the Auto-Update Works

The vault is fully autonomous, updating every **3 hours** to keep up with the speed of AI development:

1.  **Scheduled Ingestion** — Running on GitHub Actions, a private harvester bot runs a scheduled cron job every 3 hours.
2.  **Discovery Engine** — The bot discovers tools, libraries, research, and papers from public sources.
3.  **Safety & Sanitization** — All content is strictly scanned before pushing to ensure zero private configurations (`.env`), credentials, or tokens are leaked.
4.  **No Paywalled Content** — The vault indexes public-only, open-access resources.
5.  **Source Preservation** — Origin URLs are preserved in the document frontmatter for clean attribution.
6.  **Private Engine** — The core harvester bot crawling engine remains private to avoid spam, rate limits, and key exposure.

---

## 🛠️ How to Use This Vault

*   **Discover AI Tools** — Find the latest repositories and packages to integrate into your projects.
*   **Study Architectures** — Explore how engineering teams implement RAG strategies, multi-agent frameworks, and vector search.
*   **Speed Up Styling** — Use next-gen 3D creative web libraries and AI frontend widgets to build beautiful user interfaces.
*   **Find Side Projects** — Browse `startup-builder` and `project-ideas` to find template stacks and ideas for your portfolio.
*   **Accelerate Learning** — Use the structured maps inside the `_navigation/` directory to guide your path.

---

## 🤖 Use with AI Coding Agents

This vault is optimized to act as a **local knowledge base** or **semantic context engine** for your AI coding assistants like **Cursor, Windsurf, Claude Code, Cline, Aider, or Codex**.

Simply feed relevant vault files into your coding agent's chat or prompt window to instantly boot context.

#### Example Prompt to Copy & Paste:
> *"Use the files inside `workspace-archive/rag-systems/` and `workspace-archive/best-of/essential-rag-stack.md` to find the best local RAG project ideas and create a 7-day build plan."*

---

## 🤝 Contributing

Found a great AI repository, prompt library, MCP server, RAG template, or web-dev resource? We love contributions from the builder community!

*   **Submit a PR** to fix broken URLs, update tag mappings, or correct automated summaries.
*   **Open an Issue** to suggest a new category, tag, or public source.
*   Review our [CONTRIBUTING.md](CONTRIBUTING.md) to understand formatting guidelines.

---

## ⚖️ Attribution & Disclaimer

*   **Attribution** — This vault contains curated metadata, summaries, links, and notes from public resources. Original content belongs entirely to the respective authors. Source URLs are preserved inside every document. See [ATTRIBUTION.md](ATTRIBUTION.md) for more details.
*   **Disclaimer** — Summaries are automatically parsed by automated workflows. Please cross-reference with the original source URLs for verification. See [DISCLAIMER.md](DISCLAIMER.md) for full details.
*   **License** — Original vault structures, indexing scripts, and summaries are licensed under the [MIT License](LICENSE).

---

⭐ **Star this repository if this vault helps you build!** It helps other builders discover the vault and supports ongoing updates.
