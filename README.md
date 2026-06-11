<p align="center">
  <img src="assets/vybe-intelligence-vault-banner.svg" alt="Vybe Intelligence Vault" width="100%">
</p>

<div align="center">

# Vybe Intelligence Vault

An auto-updating open-source intelligence vault for AI agents, RAG systems, MCP servers, prompts, tools, templates, and next-generation web development.

[![Open Source](https://img.shields.io/badge/Open%20Source-Yes-111111)]()
[![Auto Updated](https://img.shields.io/badge/Updated-Every%203%20Hours-2563eb)]()
[![AI Agents](https://img.shields.io/badge/AI-Agents-7c3aed)]()
[![RAG](https://img.shields.io/badge/RAG-Systems-059669)]()
[![MCP](https://img.shields.io/badge/MCP-Servers-d97706)]()
[![Web Dev](https://img.shields.io/badge/Web-Development-0f766e)]()

</div>

<p align="center">
  <a href="#why-this-vault-is-different">Why Different</a> ·
  <a href="#explore-the-vault">Explore</a> ·
  <a href="#living-skill-files">Living Skills</a> ·
  <a href="#start-building">Start Building</a> ·
  <a href="#how-updates-work">Updates</a>
</p>

---

The AI internet moves fast.

New agents, tools, repos, prompts, papers, templates, workflows, and frameworks appear every day.

Vybe Intelligence Vault tracks the signal and organizes it into a clean builder-friendly archive.

---

## What This Is

This is a public AI intelligence vault generated from public resources. It collects and organizes links, summaries, repositories, tools, templates, learning paths, project ideas, and skill signals across AI engineering and advanced web development.

---

## Why This Vault Is Different

| Typical archive      | Vybe Intelligence Vault                                           |
| -------------------- | ----------------------------------------------------------------- |
| Static list of links | Auto-updated every 3 hours                                        |
| Tool dump            | Builder-focused intelligence system                               |
| Hard to navigate     | Maps, best-of guides, search index, learning paths                |
| Popular repos only   | Also tracks early-stage relevant repos, including zero-star repos |
| Manual updates       | Scheduled automation through GitHub Actions                       |
| Random resources     | Scored, categorized, safety-scanned resources                     |
| Only AI tools        | AI, agents, RAG, MCP, prompts, webdev, automation, startup ideas  |

---

## Explore the Vault

| Section                                 | What it gives you                                    |
| --------------------------------------- | ---------------------------------------------------- |
| [Search Index](search-index.md)         | Searchable map of vault resources                    |
| [Intelligence](intelligence/)           | Latest AI signals, trends, research, repos           |
| [Workspace Archive](workspace-archive/) | Categorized AI and web development archive           |
| [Builder Maps](maps/)                   | Stack maps for agents, RAG, MCP, LLMOps, frontend AI |
| [Build Ideas](build-ideas/)             | Practical project ideas for portfolio and products   |
| [Learning Paths](learning-paths/)       | 7-day learning paths for key skills                  |
| [Examples](examples/)                   | How to use this vault with coding agents             |
| [Stats](stats/)                         | Public vault stats and category counts               |

---

## What Is Inside

| Area                    | Includes                                        |
| ----------------------- | ----------------------------------------------- |
| AI Agents               | Agent frameworks, orchestration, tool use       |
| RAG Systems             | Retrieval apps, templates, chunking, reranking  |
| MCP Servers             | Servers, tools, examples, security notes        |
| Prompt Libraries        | System prompts, coding prompts, agent prompts   |
| AI Coding Agents        | Codex, Cursor, Windsurf, Claude Code, Cline     |
| LLM App Templates       | FastAPI, Next.js, chat apps, AI SaaS templates  |
| Evals and Observability | RAGAS, promptfoo, Langfuse, tracing, monitoring |
| Frontend AI UI          | Chat UI, dashboards, shadcn, Tailwind layouts   |
| 3D Creative Web         | Three.js, R3F, WebGPU, shaders, Spline          |
| Startup Builder         | MVP ideas, SaaS resources, launch patterns      |

---

## Living Skill Files

The vault does not only save links. It continuously updates skill guides based on recent public GitHub repositories, tools, frameworks, docs, templates, and other useful public resources.

Important:
Stars and forks are bonus signals, not gatekeeping filters. A zero-star repository can still be included if it is fresh, relevant, and useful for builders.

| Skill            | Updated signals                                  |
| ---------------- | ------------------------------------------------ |
| AI Agents        | frameworks, orchestration patterns, agent repos  |
| RAG              | templates, vector databases, chunking, reranking |
| MCP              | servers, tools, integrations, examples           |
| LLMOps           | evals, tracing, monitoring, RAG evaluation       |
| AI Coding Agents | Codex, Cursor, Windsurf, Claude Code, Cline      |
| Frontend AI UI   | chat UI, dashboards, AI interfaces               |
| 3D Web           | Three.js, R3F, WebGPU, shaders                   |
| Automation       | n8n, Playwright, browser workflows               |

---

## Start Building

| Start here               | Path                                                  |
| ------------------------ | ----------------------------------------------------- |
| Essential AI Engineering | workspace-archive/best-of/essential-ai-engineering.md |
| Essential Agent Building | workspace-archive/best-of/essential-agent-building.md |
| Essential RAG Stack      | workspace-archive/best-of/essential-rag-stack.md      |
| Essential Frontend AI UI | workspace-archive/best-of/essential-frontend-ai-ui.md |
| Essential 3D Web Dev     | workspace-archive/best-of/essential-3d-webdev.md      |
| Essential Automation     | workspace-archive/best-of/essential-automation.md     |
| Newest Resources         | workspace-archive/_navigation/newest.md               |
| Skill Index              | _index/skill-index.md                                 |

---

## Use with AI Coding Agents

Use this vault with Codex, Cursor, Windsurf, Claude Code, Cline, and Aider.

Example prompt:

```txt
Use this vault to find the best RAG project ideas and create a 7-day build plan.
```

---

## How Updates Work

This vault is refreshed every 3 hours by a private harvester bot running through GitHub Actions.

Each run:
* discovers public resources
* updates archive files
* refreshes living skill files when meaningful changes exist
* rebuilds indexes and stats
* runs a public safety scan
* commits and pushes only valid changes

If no meaningful changes are found, the workflow exits successfully without creating an empty commit.

* **No server maintenance required**: The workflow executes on cloud runners (local laptop does not need to stay on).
* **Public sources only**: Curates exclusively from public channels. No private, paywalled, or login-only content is collected.
* **Source URLs preserved**: Origin links are kept intact within the metadata.
* **Safety scanned before push**: Automatic credential and path scanners run before any update is committed.
* **Private execution environment**: The core crawling logic, configurations, and API credentials remain private.
* **No heartbeat noise**: Scheduled proof and heartbeat status checks are stored in GitHub Actions run artifacts, not committed to the vault history.

---

## Repository Structure

```txt
.
├── intelligence/
├── workspace-archive/
├── maps/
├── build-ideas/
├── learning-paths/
├── skills/
├── stats/
├── examples/
├── _index/
├── search-index.md
├── CHANGELOG.md
└── ROADMAP.md
```

---

## Contributing

Found a useful AI repo, prompt library, MCP server, RAG template, dataset, API, or web-development resource? Open an issue or pull request. Refer to [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

---

## Attribution and Disclaimer

This vault contains curated metadata, summaries, links, and notes from public resources. Original content belongs to respective authors. Source URLs are preserved wherever available. For details, read [ATTRIBUTION.md](ATTRIBUTION.md) and [DISCLAIMER.md](DISCLAIMER.md).

---

## License

This intelligence vault and its curation logs are open-source and licensed under the [MIT License](LICENSE).

---

If this vault helps you discover useful AI resources, consider starring the repo so more builders can find it.
