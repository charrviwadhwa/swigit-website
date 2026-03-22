"use client";

import React, { useState, useEffect } from 'react';
import { Playfair_Display, Inter } from 'next/font/google';
import { motion } from 'framer-motion';
import { Terminal, ShieldCheck, GitPullRequest, Settings, Copy, Check, Command, Sparkles, X, ArrowRight, Package } from 'lucide-react';

// Initialize Fonts
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600'] });

export default function SwigitOptimizedSite() {
  const [terminalKey, setTerminalKey] = useState(0);
  const [copied, setCopied] = useState(false);

  // Terminal animation loop
  useEffect(() => {
    const interval = setInterval(() => setTerminalKey(prev => prev + 1), 8000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install -g @charviwadhwa06/swigit");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Complete Command List from CLI Help
  const cheatSheet = [
    { cmd: "swigit [message]", desc: "Stage, AI commit (or use provided message), audit, and push." },
    { cmd: "swigit init <url>", desc: "Initialize repo, commit, and link to remote." },
    { cmd: "swigit clone <url>", desc: "Clone a repo and auto-install dependencies." },
    { cmd: "swigit sync", desc: "Fetch and pull with rebase to prevent merge commits." },
    { cmd: "swigit audit", desc: "Run CleanPR scan on staged files without pushing." },
    { cmd: "swigit branch <name>", desc: "Create a new branch and push it to remote." },
    { cmd: "swigit switch <name>", desc: "Auto-stash changes and switch branches." },
    { cmd: "swigit merge <name>", desc: "Merge a branch into current and push." },
    { cmd: "swigit undo", desc: "Undo the last commit but keep the code changes." },
    { cmd: "swigit wipe", desc: "Panic button: delete all uncommitted changes entirely." },
    { cmd: "swigit info", desc: "View repo dashboard (remote, branch, last commit)." },
    { cmd: "swigit setup", desc: "Configure Gemini AI keys for Swigit globally." },
    { cmd: "swigit --force", desc: "Bypass CleanPR security audit and force push." },
  ];

  return (
    <div className={`relative min-h-screen bg-[#050505] text-white overflow-x-hidden ${inter.className}`}>
      
      {/* --- LAYER 1: HARDWARE-ACCELERATED AURORA GRADIENTS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] md:w-[80%] h-[900px] z-0 pointer-events-none flex justify-center">
        <motion.div 
          style={{ willChange: 'transform, opacity' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          style={{ willChange: 'transform, opacity' }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
          className="absolute top-[5%] left-[30%] w-[700px] h-[600px] bg-violet-700/40 rounded-full blur-[120px] mix-blend-screen" 
        />
        <motion.div 
          style={{ willChange: 'transform, opacity' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.4, 0.3] }} 
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }} 
          className="absolute top-[20%] left-[50%] w-[600px] h-[600px] bg-blue-700/30 rounded-full blur-[120px] mix-blend-screen" 
        />
      </div>

      {/* --- LAYER 2: HEAVY GRAIN TEXTURE --- */}
      <div className="absolute inset-0 z-10 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* --- CONTENT WRAPPER --- */}
      <div className="relative z-20">
        
        {/* --- NAVBAR --- */}
        <nav className="flex items-center justify-between px-8 py-8 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-400" /> swigit
          </div>
          <div className="hidden md:flex items-center gap-10 text-xs font-medium text-gray-400 tracking-wider uppercase">
            <a href="#comparison" className="hover:text-white transition">The Problem</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#cheatsheet" className="hover:text-white transition">Commands</a>
            <a href="https://www.npmjs.com/package/@charviwadhwa06/swigit" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white transition text-blue-400">
              <Package className="w-3.5 h-3.5" /> NPM
            </a>
          </div>
          <a href="https://github.com/charrviwadhwa/swigit" target="_blank" rel="noopener noreferrer">
            <button className="bg-white/[0.03] border border-white/[0.08] backdrop-blur-md px-6 py-2.5 rounded-full text-xs font-medium hover:bg-white/[0.08] hover:border-white/[0.2] transition-all uppercase tracking-wide flex items-center gap-2 group">
              GitHub <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </a>
        </nav>

        {/* --- HERO SECTION --- */}
        <main className="flex flex-col items-center justify-center pt-16 pb-24 px-4 text-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="border border-white/10 bg-white/[0.02] backdrop-blur-xl px-5 py-2 rounded-full text-xs font-medium text-gray-300 mb-8 tracking-wide flex items-center gap-2 shadow-inner shadow-white/5 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Powered by Google Gemini
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className={`${playfair.className} text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6 font-medium`}>
            Perfect Commits, <br />
            Single Terminal Command
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-gray-400 text-base md:text-lg max-w-2xl mb-12 font-light leading-relaxed">
            Swigit is the AI-native CLI that writes your documentation, blocks credential leaks, and synchronizes your repository natively—without breaking your flow state.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-col items-center">
            <button onClick={handleCopy} className="relative group flex items-center gap-4 bg-white/[0.03] border border-white/[0.1] backdrop-blur-2xl px-6 py-4 rounded-full font-mono text-sm hover:bg-white/[0.08] hover:border-white/[0.25] transition-all shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)]">
              <span className="text-gray-500">$</span>
              <span className="text-gray-200 tracking-tight">npm install -g @charviwadhwa06/swigit</span>
              <div className="w-[1px] h-4 bg-white/20 mx-1" />
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />}
            </button>
            <div className="text-gray-500 text-xs mt-6 tracking-widest uppercase">Open Source • Global Config • Zero Lock-in</div>
          </motion.div>
        </main>

        {/* --- COMPARISON TABLE SECTION --- */}
        <section id="comparison" className="max-w-5xl mx-auto px-8 pb-32">
          <div className="text-center mb-16">
            <h2 className={`${playfair.className} text-4xl md:text-5xl mb-4`}>The Workflow Upgrade</h2>
            <p className="text-gray-400 font-light">Why type five commands when you can type one?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-[#0A0A0A]/40 border border-red-500/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center"><X className="w-5 h-5 text-red-400" /></div>
                <h3 className="text-xl font-medium">Standard Git</h3>
              </div>
              <ul className="space-y-4 font-mono text-sm text-gray-400">
                <li className="flex items-center gap-4"><span className="text-gray-600">1</span> git add .</li>
                <li className="flex items-center gap-4"><span className="text-gray-600">2</span> git commit -m "fixed stuff"</li>
                <li className="flex items-center gap-4"><span className="text-gray-600">3</span> git pull --rebase origin main</li>
                <li className="flex items-center gap-4 text-red-400/70 ml-8">↳ Resolve merge conflicts</li>
                <li className="flex items-center gap-4"><span className="text-gray-600">4</span> git push origin main</li>
              </ul>
              <div className="mt-8 pt-6 border-t border-white/5 text-xs text-gray-500">Result: Messy history, risk of leaked secrets, broken flow.</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-blue-900/10 border border-blue-500/20 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center"><Check className="w-5 h-5 text-blue-400" /></div>
                <h3 className="text-xl font-medium text-white">Swigit CLI</h3>
              </div>
              <div className="font-mono text-2xl text-blue-400 my-10 flex items-center justify-center bg-black/40 py-6 rounded-xl border border-white/5">
                $ swigit
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-blue-200/60 flex justify-between">
                <span>✓ AI Generated Message</span>
                <span>✓ CleanPR Audited</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- FEATURES BENTO GRID --- */}
        <section id="features" className="max-w-6xl mx-auto px-8 pb-32">
          <div className="text-center mb-16">
            <h2 className={`${playfair.className} text-4xl md:text-5xl`}>Everything you need. Nothing you don't.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#0A0A0A]/50 backdrop-blur-md border border-white/[0.06] rounded-3xl p-8 hover:bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500">
              <div className="text-blue-400 mb-6"><Terminal className="w-7 h-7" /></div>
              <h3 className={`${playfair.className} text-2xl mb-3 text-white/90`}>AI Commit Engine</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">Swigit reads your staged diffs and generates perfectly formatted Conventional Commits instantly.</p>
            </div>

            <div className="bg-[#0A0A0A]/50 backdrop-blur-md border border-white/[0.06] rounded-3xl p-8 hover:bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500">
              <div className="text-emerald-400 mb-6"><ShieldCheck className="w-7 h-7" /></div>
              <h3 className={`${playfair.className} text-2xl mb-3 text-white/90`}>CleanPR Shield</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">A proactive local security layer that audits files for hardcoded API keys before a push happens.</p>
            </div>

            <div className="bg-[#0A0A0A]/50 backdrop-blur-md border border-white/[0.06] rounded-3xl p-8 hover:bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500">
              <div className="text-purple-400 mb-6"><GitPullRequest className="w-7 h-7" /></div>
              <h3 className={`${playfair.className} text-2xl mb-3 text-white/90`}>Smart Sync</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">Automates the stash/pull/rebase workflow to keep your local branch updated and history linear.</p>
            </div>
            
            <div className="md:col-span-2 bg-black/40 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 font-mono text-sm shadow-2xl relative overflow-hidden h-[320px]">
              <div className="flex gap-2 mb-6 border-b border-white/5 pb-4">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div key={terminalKey} className="space-y-3">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-emerald-400"><span className="text-gray-500 mr-2">~/project $</span> swigit</motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="text-gray-400 flex items-center gap-2"><span className="animate-spin text-blue-500">⟳</span> Staging files for analysis...</motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="text-cyan-400">🤖 AI: "feat(auth): implement JWT logic"</motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }} className="text-purple-400">🔍 [CleanPR] Running Deep Security Scan...</motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.5 }} className="text-green-400">✅ CleanPR: No secrets detected.</motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.5 }} className="text-white mt-4 font-bold">🚀 Successfully Shipped to Remote!</motion.div>
              </div>
            </div>

            <div className="bg-[#0A0A0A]/50 backdrop-blur-md border border-white/[0.06] rounded-3xl p-8 flex flex-col justify-center hover:bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500">
              <div className="text-gray-400 mb-6"><Settings className="w-7 h-7" /></div>
              <h3 className={`${playfair.className} text-2xl mb-3 text-white/90`}>Zero Config</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">Run `swigit setup` once. Your Gemini API key is stored securely and works globally.</p>
            </div>
          </div>
        </section>

        {/* --- COMPLETE CHEAT SHEET DATA TABLE --- */}
        <section id="cheatsheet" className="max-w-5xl mx-auto px-8 pb-40">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <Command className="w-8 h-8 text-blue-400" />
              <h2 className={`${playfair.className} text-4xl`}>Command Reference</h2>
            </div>
            <span className="hidden md:block text-xs uppercase tracking-widest text-gray-500">CLI Documentation</span>
          </div>
          
          <div className="bg-[#0A0A0A]/40 backdrop-blur-md border border-white/[0.05] rounded-3xl overflow-hidden shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.05] bg-white/[0.02]">
                  <th className="py-5 px-6 font-medium text-xs text-gray-400 uppercase tracking-widest w-[35%]">Command</th>
                  <th className="py-5 px-6 font-medium text-xs text-gray-400 uppercase tracking-widest">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.02]">
                {cheatSheet.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="py-5 px-6">
                      <code className="bg-emerald-400/10 text-emerald-400 px-3 py-1.5 rounded border border-emerald-400/20 text-sm font-mono whitespace-nowrap">
                        {item.cmd}
                      </code>
                    </td>
                    <td className="py-5 px-6 text-sm text-gray-400 font-light group-hover:text-gray-200 transition-colors">
                      {item.desc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="border-t border-white/[0.05] bg-[#020202] py-12 relative z-20">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm font-light">
              Built by <span className="text-gray-300 font-medium">Charvi Wadhwa</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="https://www.npmjs.com/package/@charviwadhwa06/swigit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">NPM Package</a>
              <a href="https://github.com/charrviwadhwa/swigit" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub Repo</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}