import { useState, useMemo, useEffect } from 'react';
import { Search, Folder, FileText, ChevronRight, ChevronDown, Clock, Github, BookOpen, ExternalLink, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useVaultIndex } from './data/vaultHooks';

const IS_PROD = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const VAULT_REPO_URL = 'https://raw.githubusercontent.com/sairaman436/vybe-intelligence-vault/main';

function MarkdownViewer({ node, onNavigate }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!node) return;
    setLoading(true);
    setContent('');

    const fileUrl = IS_PROD
      ? `${VAULT_REPO_URL}/${node.path}`
      : `/vault/${node.path}`;

    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error('File not found');
        return res.text();
      })
      .then((text) => {
        let cleanText = text;
        if (text.startsWith('---')) {
          const parts = text.split('---');
          if (parts.length >= 3) {
            cleanText = parts.slice(2).join('---').trim();
          }
        }
        setContent(cleanText || '_This file is empty or contains only metadata._');
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setContent(node.path.endsWith('.md') 
          ? '# Error\\nFailed to load content. Ensure the file is checked into the repository.'
          : '_This is a non-markdown file. Preview is not available. Please view the source on GitHub._');
        setLoading(false);
      });
  }, [node]);

  if (!node) return null;

  return (
    <div className="flex-1 flex flex-col h-full bg-white dark:bg-[#0a0a0a] transition-colors relative">
      <header className="shrink-0 px-8 py-6 border-b border-gray-200 dark:border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-3 uppercase tracking-wider">
          <span>{node.category?.replace(/-/g, ' ') || 'root'}</span>
          <span>/</span>
          <span className="truncate">{(node.path || '').split('/').pop()}</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
          {node.title || (node.path || '').split('/').pop()}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          {node.last_modified && (
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>Last updated: {new Date(node.last_modified).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </div>
          )}
          <a 
            href={`https://github.com/sairaman436/vybe-intelligence-vault/blob/main/${node.path}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Source</span>
          </a>
        </div>
      </header>
      
      <div className="flex-1 overflow-y-auto px-8 py-8 custom-scrollbar">
        <div className="max-w-4xl mx-auto pb-16">
          {loading ? (
            <div className="flex items-center gap-3 text-gray-500">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin" />
              <span className="text-sm font-medium">Loading content...</span>
            </div>
          ) : (
            <div className="markdown-body">
              <ReactMarkdown
                components={{
                  a: ({ node: mdNode, href, children, ...props }) => {
                    if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
                      return (
                        <a 
                          href={href} 
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(href, node.path);
                          }}
                          className="text-blue-600 dark:text-cyan-400 hover:underline cursor-pointer"
                        >
                          {children}
                        </a>
                      );
                    }
                    return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-cyan-400 hover:underline" {...props}>{children}</a>;
                  }
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TreeNode({ name, nodeData, depth, expandedPaths, togglePath, path, onSelect, selectedPath }) {
  const isExpanded = expandedPaths.has(path);
  const childFolders = Object.keys(nodeData.children).sort();
  
  return (
    <div className="flex flex-col w-full">
      <button 
        onClick={() => togglePath(path)}
        className={`flex items-center gap-1.5 py-1.5 pr-2 hover:bg-gray-200/50 dark:hover:bg-white/[0.05] rounded-md text-sm text-gray-700 dark:text-gray-300 w-full text-left`}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
      >
        {isExpanded ? <ChevronDown className="w-3.5 h-3.5 opacity-50 shrink-0" /> : <ChevronRight className="w-3.5 h-3.5 opacity-50 shrink-0" />}
        <Folder className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400 shrink-0" />
        <span className="truncate font-medium">{name}</span>
      </button>
      
      {isExpanded && (
        <div className="flex flex-col">
          {childFolders.map(childName => (
            <TreeNode 
              key={childName}
              name={childName}
              nodeData={nodeData.children[childName]}
              depth={depth + 1}
              expandedPaths={expandedPaths}
              togglePath={togglePath}
              path={`${path}/${childName}`}
              onSelect={onSelect}
              selectedPath={selectedPath}
            />
          ))}
          {nodeData.files.map(file => (
            <button
              key={file.path}
              onClick={() => onSelect(file)}
              className={`w-full flex items-center gap-1.5 py-1.5 pr-2 text-sm text-left rounded-md transition-colors ${selectedPath === file.path ? 'bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-white/[0.05]'}`}
              style={{ paddingLeft: `${(depth + 1) * 12 + 24}px` }}
            >
              <FileText className="w-3.5 h-3.5 opacity-50 shrink-0" />
              <span className="truncate">{file.title || file.path.split('/').pop()}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const { indexData, loading: indexLoading } = useVaultIndex();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [expandedPaths, setExpandedPaths] = useState(new Set());
  
  // Build a true directory tree from flat paths
  const fileTree = useMemo(() => {
    if (!indexData?.nodes) return { children: {}, files: [] };
    const root = { children: {}, files: [] };
    
    indexData.nodes.forEach(node => {
      if (!node.path) return;
      const parts = node.path.split('/');
      let current = root;
      
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (!current.children[part]) {
          current.children[part] = { children: {}, files: [] };
        }
        current = current.children[part];
      }
      current.files.push(node);
    });
    
    return root;
  }, [indexData]);

  const searchResults = useMemo(() => {
    if (!indexData?.nodes || !searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return indexData.nodes.filter(node => 
      (node.title && node.title.toLowerCase().includes(query)) ||
      (node.path && node.path.toLowerCase().includes(query))
    ).slice(0, 100); // Limit to 100 to prevent crash on massive search
  }, [indexData, searchQuery]);

  const togglePath = (path) => {
    const next = new Set(expandedPaths);
    if (next.has(path)) {
      next.delete(path);
    } else {
      next.add(path);
    }
    setExpandedPaths(next);
  };

  const handleInternalNavigate = (href, currentPath) => {
    if (!indexData?.nodes) return;
    
    // Attempt to resolve the relative href based on the current file path
    const currentDir = currentPath.substring(0, currentPath.lastIndexOf('/'));
    
    // Simple path resolution (handles ./ and ../ basics)
    let targetPath = href;
    if (href.startsWith('./')) {
      targetPath = `${currentDir}/${href.substring(2)}`;
    } else if (href.startsWith('../')) {
      const parts = currentDir.split('/');
      const hrefParts = href.split('/');
      while (hrefParts[0] === '..') {
        hrefParts.shift();
        parts.pop();
      }
      targetPath = [...parts, ...hrefParts].join('/');
    } else if (!href.startsWith('/')) {
      targetPath = currentDir ? `${currentDir}/${href}` : href;
    } else {
      targetPath = href.substring(1);
    }

    targetPath = targetPath.replace(/\\/g, '/');

    // Find the node
    const targetNode = indexData.nodes.find(n => n.path.toLowerCase() === targetPath.toLowerCase() || n.path.toLowerCase().endsWith(targetPath.toLowerCase()));
    
    if (targetNode) {
      setSelectedNode(targetNode);
      // Auto-expand the folders leading to this node
      const parts = targetNode.path.split('/');
      const nextExpanded = new Set(expandedPaths);
      let p = '';
      for (let i = 0; i < parts.length - 1; i++) {
        p = p ? `${p}/${parts[i]}` : parts[i];
        nextExpanded.add(p);
      }
      setExpandedPaths(nextExpanded);
    } else {
      // Fallback: open raw GitHub URL if it truly doesn't exist in our index
      window.open(`https://github.com/sairaman436/vybe-intelligence-vault/blob/main/${targetPath}`, '_blank');
    }
  };

  if (indexLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
      </div>
    );
  }

  const rootFolders = Object.keys(fileTree.children).sort();

  return (
    <div className="h-screen w-screen flex bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-200 overflow-hidden font-sans">
      
      {/* Sidebar Explorer */}
      <aside className="w-80 shrink-0 h-full border-r border-gray-200 dark:border-white/[0.08] flex flex-col bg-gray-50 dark:bg-[#050505]">
        <div className="p-4 border-b border-gray-200 dark:border-white/[0.08]">
          <button 
            onClick={() => setSelectedNode(null)}
            className="flex items-center gap-2 mb-4 px-2 hover:opacity-80 transition-opacity text-left w-full"
          >
            <BookOpen className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
            <h1 className="font-bold text-lg tracking-tight truncate">Intelligence Vault</h1>
          </button>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.08] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-cyan-500/50 transition-shadow"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden py-2 custom-scrollbar pr-2">
          {searchQuery ? (
            <div className="px-2">
              <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                Search Results ({searchResults.length})
              </div>
              {searchResults.map(node => (
                <button
                  key={node.path}
                  onClick={() => setSelectedNode(node)}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 text-sm rounded-md transition-colors text-left ${selectedNode?.path === node.path ? 'bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-400 font-medium' : 'hover:bg-gray-200/50 dark:hover:bg-white/[0.05]'}`}
                >
                  <FileText className="w-3.5 h-3.5 shrink-0 opacity-70" />
                  <span className="truncate">{node.title || node.path.split('/').pop()}</span>
                </button>
              ))}
              {searchResults.length === 0 && (
                <div className="px-4 py-8 text-center text-sm text-gray-500">
                  No files found matching "{searchQuery}"
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-0.5 px-2">
              {rootFolders.map(childName => (
                <TreeNode 
                  key={childName}
                  name={childName}
                  nodeData={fileTree.children[childName]}
                  depth={0}
                  expandedPaths={expandedPaths}
                  togglePath={togglePath}
                  path={childName}
                  onSelect={setSelectedNode}
                  selectedPath={selectedNode?.path}
                />
              ))}
              {fileTree.files.map(file => (
                <button
                  key={file.path}
                  onClick={() => setSelectedNode(file)}
                  className={`w-full flex items-center gap-1.5 py-1.5 px-2 text-sm text-left rounded-md transition-colors ${selectedNode?.path === file.path ? 'bg-blue-50 dark:bg-cyan-500/10 text-blue-700 dark:text-cyan-400 font-medium' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-white/[0.05]'}`}
                >
                  <FileText className="w-3.5 h-3.5 opacity-50 shrink-0" />
                  <span className="truncate">{file.title || file.path.split('/').pop()}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="p-4 border-t border-gray-200 dark:border-white/[0.08] shrink-0 text-xs text-gray-500">
          <div className="flex justify-between items-center">
            <span>Total Files:</span>
            <span className="font-mono font-medium">{(indexData.nodes?.length || 0).toLocaleString()}</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full overflow-hidden flex flex-col bg-white dark:bg-[#0a0a0a]">
        {selectedNode ? (
          <MarkdownViewer 
            node={selectedNode} 
            onNavigate={handleInternalNavigate} 
          />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 bg-blue-50 dark:bg-white/[0.03] text-blue-500 dark:text-cyan-400 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 dark:border-white/[0.08]">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Intelligence Vault</h2>
            <p className="text-gray-500 max-w-md">
              Browse your repository structure using the file explorer on the left, or search directly for intelligence and insights.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg w-full">
              <div className="p-4 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.02]">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {(indexData.nodes?.length || 0).toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">Indexed Files</div>
              </div>
              <div className="p-4 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.02]">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {rootFolders.length}
                </div>
                <div className="text-sm text-gray-500">Root Folders</div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
