const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../..');
const CONFIG_PATH = path.join(ROOT_DIR, 'vault-core', 'config.yaml');
const EVENTS_PATH = path.join(ROOT_DIR, 'vault-core', 'vault-events.log');

let dailyBudget = 2.00;
let accumulatedCostToday = 0.0;
let lastResetDate = '';

function loadConfig() {
  if (fs.existsSync(CONFIG_PATH)) {
    try {
      const raw = fs.readFileSync(CONFIG_PATH, 'utf-8');
      const lines = raw.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('daily_budget:')) {
          dailyBudget = parseFloat(trimmed.split(':')[1].trim()) || 2.00;
        }
      }
    } catch (e) {
      // Ignore
    }
  }
}

function calculateCostToday() {
  const today = new Date().toISOString().substring(0, 10);
  if (lastResetDate !== today) {
    accumulatedCostToday = 0.0;
    lastResetDate = today;
  } else {
    return accumulatedCostToday;
  }
  
  if (fs.existsSync(EVENTS_PATH)) {
    try {
      const events = fs.readFileSync(EVENTS_PATH, 'utf-8').trim().split('\n');
      for (const line of events) {
        if (!line) continue;
        const ev = JSON.parse(line);
        if (ev.timestamp && ev.timestamp.startsWith(today)) {
          if (ev.payload && ev.payload.cost) {
            accumulatedCostToday += parseFloat(ev.payload.cost) || 0;
          }
        }
      }
    } catch (e) {
      // Ignore
    }
  }
  return accumulatedCostToday;
}

function getLLMRoute(taskType, forceCloud = false, forceLocal = false) {
  loadConfig();
  const costToday = calculateCostToday();
  
  if (forceLocal) {
    return { provider: 'ollama', model: 'qwen2.5:14b', cost: 0.0 };
  }
  if (forceCloud) {
    return { provider: 'openai', model: taskType === 'reasoning' ? 'gpt-4o' : 'gpt-4o-mini', cost: 0.000015 };
  }
  
  if (costToday >= dailyBudget) {
    console.log(`Daily budget exceeded ($${costToday.toFixed(4)} >= $${dailyBudget.toFixed(2)}). Routing locally.`);
    return { provider: 'ollama', model: 'qwen2.5:14b', cost: 0.0 };
  }
  
  if (taskType === 'evaluation') {
    return { provider: 'openai', model: 'gpt-4o-mini', cost: 0.000015 };
  } else if (taskType === 'reasoning') {
    return { provider: 'openai', model: 'gpt-4o', cost: 0.00003 };
  } else {
    return { provider: 'ollama', model: 'qwen2.5:14b', cost: 0.0 };
  }
}

module.exports = {
  getLLMRoute,
  calculateCostToday,
  getBudget: () => dailyBudget
};
