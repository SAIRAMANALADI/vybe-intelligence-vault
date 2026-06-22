# README Patches — Copy-paste these into your README.md

---

## PATCH 1: Badge Block (replace or extend your existing badges section)

```markdown
![Last Commit](https://img.shields.io/github/last-commit/sairaman436/vybe-intelligence-vault?style=flat-square&color=6C63FF&label=last+updated)
![GitHub Stars](https://img.shields.io/github/stars/sairaman436/vybe-intelligence-vault?style=flat-square&color=6C63FF)
![GitHub Followers](https://img.shields.io/github/followers/sairaman436?style=flat-square&color=6C63FF&label=followers)
![Issues](https://img.shields.io/github/issues/sairaman436/vybe-intelligence-vault?style=flat-square&color=orange)
![Harvester](https://img.shields.io/github/actions/workflow/status/sairaman436/vybe-intelligence-vault/harvest.yml?label=harvester&style=flat-square&color=22c55e)
![Link Checker](https://img.shields.io/github/actions/workflow/status/sairaman436/vybe-intelligence-vault/link-checker.yml?label=links&style=flat-square&color=22c55e)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)
```

---

## PATCH 2: "Start Here" Funnel (drop this right after the intro paragraph)

```markdown
---

## 🚀 Start Here

> **Not sure where to go? Pick your intent:**

| I want to... | Go here |
|---|---|
| 📚 **Learn something** (AI, Rust, WebGL, systems) | [`learning-paths/`](./learning-paths/) |
| 🛠️ **Build something** (project ideas with difficulty tiers) | [`build-ideas/`](./build-ideas/) |
| 🧠 **Stay current** (daily AI intel, papers, tools) | [`intelligence/`](./intelligence/) |
| 🆓 **Find a free LLM API** | [`free-inference/`](./free-inference/) |
| 💬 **Steal a prompt** | [`prompts/`](./prompts/) |
| 🗺️ **Understand a tech stack** | [`maps/`](./maps/) |

---
```

---

## PATCH 3: Live Intel Preview Section (drop near the bottom, above Contributing)

```markdown
---

## 🔥 Latest Intel Drop

> Auto-updated every 24 hours by the harvester bot.
> Full drops → [`intelligence/`](./intelligence/)

<!-- INTEL-START -->
_Harvester running... check back soon or browse [`intelligence/`](./intelligence/) directly._
<!-- INTEL-END -->

---
```

> **Note:** Once your harvester is patching the README, it will replace everything between 
> `<!-- INTEL-START -->` and `<!-- INTEL-END -->` with today's top 5 picks automatically.
> See `docs/HARVESTER-README-PATCH.md` for the script to add to your harvest.yml.

---

## PATCH 4: Contributing section upgrade (replace existing contributing blurb)

```markdown
---

## 🤝 Contributing

The vault grows with the community. Three ways to help:

- 📦 **[Submit a resource](../../issues/new?template=submit-resource.yml)** — found something good? Add it.
- 🔴 **[Report a dead link](../../issues/new?template=report-dead-link.yml)** — help keep the vault clean.
- 🛠️ **[Suggest a build idea](../../issues/new?template=suggest-build-idea.yml)** — got a project idea?

Read [`CONTRIBUTING.md`](./CONTRIBUTING.md) before opening a PR.

---
```

---

## PATCH 5: Topics to paste into GitHub Repo Settings → Topics

Copy-paste these one by one into the Topics field on your repo settings page:

```
ai
llm
rag
agents
machine-learning
rust
discord-bot
three-js
webgl
free-inference
internship
india
prompt-engineering
knowledge-vault
auto-updating
github-actions
open-source
learning-resources
build-ideas
generative-ai
```

**That's 20 topics** — GitHub allows up to 20, so this fills the limit perfectly.

---
