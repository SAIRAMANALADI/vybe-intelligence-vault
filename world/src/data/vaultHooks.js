import { useState, useEffect } from 'react';

const IS_PROD = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const VAULT_REPO_URL = 'https://raw.githubusercontent.com/sairaman436/vybe-intelligence-vault/main';

// 1. Hook to fetch and poll vault-index.json
export function useVaultIndex() {
  const [indexData, setIndexData] = useState({ nodes: [], edges: [], system_health: {} });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIndex = () => {
      // SWR caching logic: check localStorage first
      const cached = localStorage.getItem('vault_index_cache');
      if (cached && loading) {
        try {
          setIndexData(JSON.parse(cached));
          setLoading(false);
        } catch (err) {
          console.warn('Failed to parse cached vault index', err);
        }
      }

      // In production, fetch directly from raw GitHub to get live auto-updates.
      // In development, fetch from the local public directory.
      const indexUrl = IS_PROD 
        ? `${VAULT_REPO_URL}/vault-core/vault-index.json` 
        : '/vault-index.json';

      fetch(indexUrl)
        .then((res) => {
          if (!res.ok) throw new Error('Failed to load index');
          return res.json();
        })
        .then((data) => {
          setIndexData(data);
          setLoading(false);
          localStorage.setItem('vault_index_cache', JSON.stringify(data));
        })
        .catch((err) => {
          console.error('Error fetching vault index, attempting fallback:', err);
          // If local fails in dev, or there is an issue, fallback to production URL
          fetch(`${VAULT_REPO_URL}/vault-core/vault-index.json`)
            .then(res => res.json())
            .then(data => {
              setIndexData(data);
              setLoading(false);
            })
            .catch(fallbackErr => {
              console.error('Fallback fetch failed:', fallbackErr);
              setLoading(false);
            });
        });
    };

    fetchIndex();
    const interval = setInterval(fetchIndex, 60000); // Poll every 60s
    return () => clearInterval(interval);
    // Disable react-hooks/exhaustive-deps because we only want to initialize the poll interval on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { indexData, loading };
}

// 2. Hook to fetch and stream events from log
export function useEventStream() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = () => {
      // Attempt local orchestrator endpoint first, fallback to raw GitHub
      fetch('http://localhost:3456/events')
        .then((res) => {
          if (!res.ok) throw new Error('Local bridge offline');
          return res.json();
        })
        .then((data) => {
          setEvents(data);
        })
        .catch(() => {
          fetch(`${VAULT_REPO_URL}/vault-core/vault-events.log`)
            .then((res) => {
              if (!res.ok) throw new Error('Failed to fetch events from GitHub');
              return res.text();
            })
            .then((text) => {
              const lines = text.trim().split('\n').reverse();
              const parsed = lines.map((line) => {
                try {
                  return JSON.parse(line);
                } catch (err) {
                  console.debug('Failed to parse event line:', err);
                  return null;
                }
              }).filter(Boolean);
              setEvents(parsed.slice(0, 20)); // Limit to last 20 events
            })
            .catch(() => {
              // Graceful failure
            });
        });
    };

    fetchEvents();
    const interval = setInterval(fetchEvents, 10000); // Poll every 10s
    return () => clearInterval(interval);
  }, []);

  return events;
}

// 3. Hook to manage local MCP bridge
export function useMCPBridge() {
  const [bridgeStatus, setBridgeStatus] = useState('offline');
  const [healthData, setHealthData] = useState(null);

  useEffect(() => {
    const checkBridge = () => {
      fetch('http://localhost:3456/health')
        .then((res) => res.json())
        .then((data) => {
          setBridgeStatus('online');
          setHealthData(data);
        })
        .catch(() => {
          setBridgeStatus('offline');
          setHealthData(null);
        });
    };

    checkBridge();
    const interval = setInterval(checkBridge, 15000); // Poll health every 15s
    return () => clearInterval(interval);
  }, []);

  const orchestrateAction = async (action, parameters = {}) => {
    try {
      const res = await fetch('http://localhost:3456/orchestrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, parameters })
      });
      return await res.json();
    } catch (e) {
      throw new Error(`Orchestrator failed: ${e.message}`, { cause: e });
    }
  };

  return { bridgeStatus, healthData, orchestrateAction };
}
