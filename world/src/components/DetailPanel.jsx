import { useState, useEffect } from 'react';
import { X, Copy, ExternalLink, Calendar, GitBranch, Terminal } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const IS_PROD = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const VAULT_REPO_URL = 'https://raw.githubusercontent.com/sairaman436/vybe-intelligence-vault/main';

export default function DetailPanel({ node, onClose }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!node) return;
    setLoading(true);
    setContent('');
    setIsClosing(false);

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
        setContent(cleanText);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setContent('# Error\\nFailed to load content for this entry.');
        setLoading(false);
      });
  }, [node]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!node && !isClosing) return null;

  const githubUrl = `https://github.com/sairaman436/vybe-intelligence-vault/blob/main/${node?.path}`;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleClose}
      />
      
      {/* Slide-in Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-[#060606] border-l border-white/[0.08] z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isClosing ? 'translate-x-full' : 'translate-x-0'}`}
      >
        {/* Header */}
        <header className="shrink-0 flex items-center justify-between p-6 border-b border-white/[0.05] bg-white/[0.01]">
          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/80 mb-2">
              <Terminal className="w-3 h-3" />
              <span className="truncate">{node?.path}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight truncate">
              {node?.title}
            </h2>
          </div>
          <button 
            onClick={handleClose}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.03] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors shrink-0 border border-white/[0.05]"
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* Action Bar */}
        <div className="shrink-0 px-6 py-4 border-b border-white/[0.05] flex items-center gap-3 overflow-x-auto no-scrollbar">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copied to Clipboard' : 'Copy Raw Text'}
          </button>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.05] text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Source
          </a>
        </div>

        {/* Markdown Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8 relative">
          {loading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-white/[0.1] border-t-cyan-400 animate-spin mb-4" />
              <span className="text-sm font-mono text-gray-500 uppercase tracking-widest">Reading Vault</span>
            </div>
          ) : (
            <div className="markdown-body max-w-none pb-20">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </div>

        {/* Footer Metadata */}
        <footer className="shrink-0 p-4 border-t border-white/[0.05] bg-white/[0.01] flex items-center justify-between text-xs font-mono text-gray-500">
          <div className="flex items-center gap-4">
            {node?.category && (
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <GitBranch className="w-3 h-3 text-fuchsia-400" />
                {node.category.replace(/-/g, ' ')}
              </span>
            )}
            {node?.last_modified && (
              <span className="flex items-center gap-1.5 hidden sm:flex">
                <Calendar className="w-3 h-3 text-cyan-400" />
                {node.last_modified.substring(0, 10)}
              </span>
            )}
          </div>
          {node?.quality_score > 0 && (
            <span className="text-cyan-400/80 font-medium tracking-wide">
              QUALITY_SCORE: {node.quality_score}
            </span>
          )}
        </footer>
      </div>
    </>
  );
}
