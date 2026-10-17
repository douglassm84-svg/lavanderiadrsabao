/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { StrategyHub } from './components/StrategyHub';
import { LogoCustomizerModal } from './components/LogoCustomizerModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { FileText, Sparkles, ShieldCheck, Image as ImageIcon, Github } from 'lucide-react';
import { GitHubDeployModal } from './components/GitHubDeployModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isStrategyHubOpen, setIsStrategyHubOpen] = useState<boolean>(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState<boolean>(false);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState<boolean>(true);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-cyan-500 selection:text-white">
      
      {/* Top Strategist Notification Pill Banner */}
      <aside aria-label="Aviso Técnico de Identidade e SEO" className="bg-[#053749] text-cyan-200 py-1.5 px-4 text-xs border-b border-[#085d7b]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97d38] animate-pulse"></span>
            <span className="font-semibold text-white">Identidade Visual & Fidelidade de Marca:</span>
            <span className="hidden sm:inline text-cyan-100">
              Logo oficial Dr. Sabão (adesivo 100x50 e mascote) em alta resolução sem deformação.
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsGitHubModalOpen(true)}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-0.5 rounded-full font-bold text-[11px] transition-all hover:scale-105 cursor-pointer shadow-xs animate-pulse"
              title="Abrir campo para inserir token e fazer push"
            >
              <Github className="w-3 h-3" />
              <span>Inserir Token GitHub</span>
            </button>

            <button
              onClick={() => setIsLogoModalOpen(true)}
              className="flex items-center gap-1.5 bg-cyan-700 hover:bg-cyan-600 text-white px-3 py-0.5 rounded-full font-bold text-[11px] transition-all hover:scale-105 cursor-pointer shadow-xs"
            >
              <ImageIcon className="w-3 h-3 text-cyan-200" />
              <span>Ver / Ajustar Logos</span>
            </button>

            <button
              onClick={() => setIsStrategyHubOpen(true)}
              className="flex items-center gap-1.5 bg-[#f97d38] hover:bg-[#ea580c] text-white px-3 py-0.5 rounded-full font-extrabold text-[11px] transition-all hover:scale-105 cursor-pointer shadow-xs"
            >
              <FileText className="w-3 h-3" />
              <span>Dossiê SEO</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Responsive Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        selectedServiceId={selectedServiceId}
        setSelectedServiceId={setSelectedServiceId}
        onOpenStrategyHub={() => setIsStrategyHubOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            setCurrentTab={setCurrentTab}
            setSelectedServiceId={setSelectedServiceId}
            onOpenStrategyHub={() => setIsStrategyHubOpen(true)}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            selectedServiceId={selectedServiceId}
            setSelectedServiceId={setSelectedServiceId}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'blog' && (
          <BlogPage
            setCurrentTab={setCurrentTab}
            setSelectedServiceId={setSelectedServiceId}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        setCurrentTab={setCurrentTab}
        setSelectedServiceId={setSelectedServiceId}
        onOpenStrategyHub={() => setIsStrategyHubOpen(true)}
      />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Complete Technical SEO & Structural Planning Hub */}
      <StrategyHub
        isOpen={isStrategyHubOpen}
        onClose={() => setIsStrategyHubOpen(false)}
      />

      {/* Logo & Brand Identity Customizer Modal */}
      <LogoCustomizerModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
      />

      {/* GitHub Deploy & Token Modal */}
      <GitHubDeployModal
        isOpen={isGitHubModalOpen}
        onClose={() => setIsGitHubModalOpen(false)}
      />

    </div>
  );
}
