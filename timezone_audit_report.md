# Timezone Standardization Audit Report

This report documents the architectural audit and standardization of all time-handling, scheduling, reporting, and commit metadata within the Vybe Intelligence Engine to the canonical project timezone: **Asia/Kolkata (IST, UTC+05:30)**.

---

## 1. Executive Summary

To ensure consistent scheduling, reliable contribution mapping, and accurate historical analytics, all datetimes within the ingestion pipeline and the knowledge vault have been standardized. Prior to this, mix-ups between naive local datetimes, UTC datetimes, and local system environments created inconsistencies in scheduler triggers, log timing, weekly/daily digest intervals, and the GitHub contribution heatmap.

**Standard Timezone**: `Asia/Kolkata` (IST)  
**Standard Offset**: `+05:30`  
**Standard Timezone Reference**: `KOLKATA_TZ` (Defined explicitly in `utils.time_utils` to bypass Windows registry `tzdata` lookup limitations)

---

## 2. Standardized Components & File Audit

Every file containing timezone or datetime logic has been audited and updated:

### Core Utilities & Ingestion
* **[utils/time_utils.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/utils/time_utils.py)**: Establishes `KOLKATA_TZ` as `timezone(timedelta(hours=5, minutes=30), name="Asia/Kolkata")`. All parsing functions (`parse_feed_date`, `get_current_iso`) output IST timezone-aware ISO format strings.
* **[github_sync/commit_manager.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/github_sync/commit_manager.py)**: Overrides `GIT_AUTHOR_DATE` and `GIT_COMMITTER_DATE` to use the IST isoformat representation before running Git commit commands. This ensures that bot commits are generated with IST timestamps.
* **[scheduler.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/scheduler.py)**: Standardizes heartbeat `now_str`, cycle start/end, and sync failure logs to `KOLKATA_TZ`.
* **[stats/intelligence_engine.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/stats/intelligence_engine.py)**: Adjusts SQLite history queries range calculations (`since_date`) to use `KOLKATA_TZ` timezone-aware timestamps.

### Markdown & Archive Builders
* **[markdown/weekly_report_builder.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/markdown/weekly_report_builder.py)**: Standardized daily calendar/week calculation (`now = datetime.now(KOLKATA_TZ)`) to prevent week roll-over discrepancies.
* **[markdown/daily_digest_builder.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/markdown/daily_digest_builder.py)**: Changed daily digest date calculation to `datetime.now(KOLKATA_TZ)`.
* **[markdown/changelog_builder.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/markdown/changelog_builder.py)**: Standardized changelog entry dates to IST.
* **[markdown/search_index_builder.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/markdown/search_index_builder.py)**: Standardized file modification time parsing and fallback timestamp generation to `KOLKATA_TZ`.
* **[archive/live_intelligence_builder.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/archive/live_intelligence_builder.py)**, **[best_of_builder.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/archive/best_of_builder.py)**, **[archive_readme_builder.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/archive/archive_readme_builder.py)**, **[archive_navigation_builder.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/archive/archive_navigation_builder.py)**, **[archive_expansion_builder.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/archive/archive_expansion_builder.py)**, **[archive_count_builder.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/archive/archive_count_builder.py)**, **[archive_builder.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/archive/archive_builder.py)**: Standardized manifest generation, navigation index sorts, file count metadata, and landing pages to use `KOLKATA_TZ`.

### Collectors & Telemetry
* **[collectors/reddit_collector.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/collectors/reddit_collector.py)** & **[collectors/hackernews_collector.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/collectors/hackernews_collector.py)**: Parsed story/post publication timestamps to `KOLKATA_TZ`.
* **[utils/telemetry.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/utils/telemetry.py)**: Discord payload embeds carry timezone-aware `KOLKATA_TZ` timestamps.

### CLI Scripts
* **[run_daemon.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/scripts/run_daemon.py)**: Instantiates `BlockingScheduler` with `timezone=KOLKATA_TZ` explicitly. Startup parameters are timezone-aware.
* **[cycle_status.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/scripts/cycle_status.py)** & **[health_check.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/scripts/health_check.py)**: Daemon heartbeat age evaluations and diagnostics health validation JSON reports are rendered using `KOLKATA_TZ`.
* **[run_once.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/scripts/run_once.py)**: Cycle start/end execution times use `KOLKATA_TZ`.
* **[github_actions_run_tracker.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/scripts/github_actions_run_tracker.py)**: Start/finish times normalized to `KOLKATA_TZ`.
* **[audit_vault_links.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/scripts/audit_vault_links.py)**, **[audit_links_integrity.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/scripts/audit_links_integrity.py)**, **[audit_vault_diagnostics.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/scripts/audit_vault_diagnostics.py)**: Added path resolution and standardized generated markdown report header dates to `KOLKATA_TZ`.

### Skill Engines
* **[skills/skill_repo_ranker.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/skills/skill_repo_ranker.py)**: Converts parsed repository created/pushed dates to `KOLKATA_TZ` and evaluates `age_days` using `datetime.now(KOLKATA_TZ)`.
* **[skills/skill_signal_engine.py](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/src/skills/skill_signal_engine.py)**: Replaced naive comparisons (via stripping timezone offsets using `replace(tzinfo=None)`) with full `KOLKATA_TZ` timezone-aware comparisons.

### GitHub Actions Workflows
* **[harvest-vault.yml](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/local-ai-web-harvester-core/.github/workflows/harvest-vault.yml)**, **[vault-nightly-analytics.yml](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/ai-web-intel-vault/.github/workflows/vault-nightly-analytics.yml)**, **[vault-pr-validation.yml](file:///c:/Users/saira/OneDrive/Desktop/MyProps/ai%20harvester/ai-web-intel-vault/.github/workflows/vault-pr-validation.yml)**: Set global environment variable `TZ: "Asia/Kolkata"` and print timezone metadata during workflow startup steps to verify IST alignment.

---

## 3. Contribution Heatmap Diagnostics

GitHub attributes commits to your contribution graph based on two primary factors:
1. **Author Email**: Must match one of the verified email addresses registered on your GitHub account settings.
   - *Engine Configured Email*: `sairamanladi2007@gmail.com`
2. **Commit Time**: Captured via the git committer date environment variable.

By overriding the author/committer time parameters in `commit_manager.py` with `KOLKATA_TZ` ISO strings, commits generated by the automated bot are tagged precisely with Asia/Kolkata (IST) offsets. This maintains chronological consistency between locally scheduled daemon executions and automated GitHub Actions runner cycles.

---

## 4. Verification & Validation Results

* **Unit Tests**: The Python test suite (`test_monitoring.py` updated to check against `KOLKATA_TZ`) was executed. All **118 unit tests passed successfully**.
* **Integrity Validation**: Running `health_check.py` generated `status/health.json` using the standardised IST timezone:
  ```json
  "timestamp": "2026-06-16T10:26:23.067498+05:30",
  ```
  Both warnings and critical daemon states have been successfully checked.
