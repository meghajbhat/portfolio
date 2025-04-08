'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaArrowLeft, FaCode, FaPalette, FaMobileAlt, FaRocket, FaExternalLinkAlt } from 'react-icons/fa';

export default function PortfolioPage() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card-3d');
      const rect = document.body.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      cards.forEach((card) => {
        const cardRect = (card as HTMLElement).getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;
        
        const angleX = (mouseY - cardCenterY) / 30;
        const angleY = (mouseX - cardCenterX) / 30;
        
        (card as HTMLElement).style.transform = `rotateX(${-angleX}deg) rotateY(${angleY}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-[#0B1121] text-white pt-20 pb-32">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-[#0B1121]/80 backdrop-blur-md z-50 border-b border-emerald-500/20">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link 
            href="/#projects" 
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </Link>
          <div className="flex gap-4">
            <a 
              href="https://github.com/meghajbhat/Portfolio"
              target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaGithub className="text-xl" />
              <span>View on GitHub</span>
            </a>
            <a 
              href="https://portfolio-git-main-megha-bhats-projects.vercel.app/"
              target="_blank"
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <FaExternalLinkAlt className="text-xl" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Project Header */}
        <div className="card-3d relative rounded-2xl overflow-hidden bg-[#1A2333]/50 backdrop-blur-sm border border-emerald-500/20 p-12 mb-12 hover:border-emerald-500/40 transition-colors duration-500">
          {/* Floating Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"></div>
          
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl"></div>
            <FaCode className="text-4xl text-emerald-400 relative z-10 animate-float" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio Website
            </h1>
            <span className="px-3 py-1 text-sm rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
              Completed
            </span>
          </div>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring interactive 3D effects, smooth animations, and a comprehensive showcase of projects and skills.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
              Next.js
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
              TypeScript
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Modern Design */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center">
                <FaPalette className="text-2xl text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold">Modern Design</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Clean, minimalist aesthetic with dark theme
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Interactive 3D card effects and hover animations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Smooth transitions and gradient overlays
                </li>
              </ul>
            </div>
          </div>

          {/* Responsive Layout */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center">
                <FaMobileAlt className="text-2xl text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold">Responsive Layout</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Mobile-first design approach
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Adaptive grid layouts for all screen sizes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Optimized touch interactions
                </li>
              </ul>
            </div>
          </div>

          {/* Performance */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center">
                <FaRocket className="text-2xl text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold">Performance</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Optimized image loading and lazy loading
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Efficient state management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Minimal bundle size
                </li>
              </ul>
            </div>
          </div>

          {/* Features */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center">
                <FaCode className="text-2xl text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold">Features</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Project showcase with detailed pages
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Skills section with categorized technologies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Contact form with email integration
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center">
              <FaCode className="text-2xl text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold">Technical Implementation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Core Technologies</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Next.js 14 with App Router
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Tailwind CSS for styling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  TypeScript for type safety
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Key Features</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  3D card effects with mouse tracking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Smooth animations and transitions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Responsive design patterns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 