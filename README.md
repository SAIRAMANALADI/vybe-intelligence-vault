     __    __     __          
 _  / /__ / /__ _/ /_ ___     
| |/ / // / _ `/ __// -_)    
|___/\_, /\_,_/\__/ \__/     
    /___/                    
  ___       __       __   ___ 
 (_-</ _ \ / // _ \ / // _ \/ -_)
/___/_//_//_//_//_//_//_//_/\__/ 
     __   __        ____      
 | |/ /__ _ __ / / /_      
 |   // _` // // // / // _/     
 |___/\_,_/ \_,_//_/ /_//_/     

*autonomous knowledge acquisition network*

[![pipeline](https://img.shields.io/badge/pipeline-active-green?style=flat-square)](#)
[![resources](https://img.shields.io/badge/resources-5900+-blue?style=flat-square)](#)
[![sync](https://img.shields.io/badge/sync-hourly-lightgrey?style=flat-square)](#)
[![license](https://img.shields.io/badge/license-MIT-red?style=flat-square)](#)

a self-updating repository of machine learning and engineering patterns.
the harvester crawls github, extracts context, and indexes architectures hourly.

### pipeline

discover -> fetch -> evaluate -> index -> push

| stage | tool | action |
|---|---|---|
| discover | `github api` | polls for top recently updated repos |
| fetch | `robots_guard` | downloads context, respects tarpits |
| evaluate | `mistral llm` | structures unistructured text to json |
| index | `node.js` | builds relational graph database |

### live stats

<!-- VAULT_STATS:START -->
```bash
$ cat stats/vault-stats.json | jq '.'
{
  "vault_status": "synced",
  "total_resources": 5912,
  "top_topics": {
    "agent-framework": 1204,
    "vector-db": 843,
    "rag-stack": 655
  },
  "last_crawl": "2026-06-22T23:00:00Z"
}
```
<!-- VAULT_STATS:END -->

### key internals

`src/discovery/robots_guard.py`
```python
def wait_if_needed(self, url: str) -> None:
    # prevents tarpit slowloris hangs on aggressive crawls
    for chunk in res.iter_content(chunk_size=8192):
        if time.time() - start_time > 10.0:
            break
```

`scripts/evaluate_repo.py`
```python
def extract_and_validate_json(raw_text, schema):
    # forces llm output into strictly typed schema structures
    parsed = json.loads(text)
    jsonschema.validate(instance=parsed, schema=schema)
```

`.github/workflows/harvester.yml`
```yaml
strategy:
  # constrains concurrent hits to bypass cloud provider 429 limits
  max-parallel: 2
```

### quickstart

```bash
# clone the intelligence graph
git clone https://github.com/sairaman436/vybe-intelligence-vault.git

# run the engine locally
cd vybe-intelligence-vault
python scripts/evaluate_repo.py --mode discover --max-repos 50

# process the queue
python scripts/evaluate_repo.py --mode evaluate --repo owner/name
```

### structure

```text
.
├── vault/                  # the raw indexed json and markdown
├── engine/                 # the harvester core logic
├── scripts/                # pipeline orchestrators
│   └── evaluate_repo.py    # the llm bridge
├── .github/
│   └── workflows/          # cron scheduling and ci
└── README.md
```

### links

[engine source](https://github.com/sairaman436/vybe-intelligence-engine)
[issues](https://github.com/sairaman436/vybe-intelligence-vault/issues)
