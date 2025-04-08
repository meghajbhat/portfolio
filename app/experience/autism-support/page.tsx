'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaArrowLeft, FaBrain, FaCode, FaGamepad, FaHeart, FaSmile, FaMedal } from 'react-icons/fa';

export default function AutismSupportPage() {
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
      <div className="fixed top-0 left-0 right-0 bg-[#0B1121]/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link 
            href="/#projects" 
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Projects</span>
          </Link>
          <a 
            href="https://github.com/meghajbhat/Adaptive-Technology-for-Autism-Support"
            target="_blank"
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <FaGithub className="text-xl" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Project Header */}
        <div className="card-3d relative rounded-2xl overflow-hidden bg-[#1A2333]/50 backdrop-blur-sm border border-purple-500/20 p-12 mb-12 hover:border-purple-500/40 transition-colors duration-500">
          {/* Floating Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
          
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
            <FaBrain className="text-4xl text-purple-400 relative z-10 animate-float" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Adaptive Technology for Autism Support
            </h1>
            <span className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              In Progress
            </span>
          </div>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            An interactive system designed to help autistic children aged 7-9 years develop emotional understanding, pattern memory, and sensory regulation through engaging games and activities.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
              Python
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
              Pygame Zero
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
              Custom Graphics
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
              Animation
            </span>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Emoji-Based Emotion Recognition */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaSmile className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Emotion Recognition</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p>
                Interactive module helping children identify and understand emotions through clickable emoji buttons and animated facial expressions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Clickable emoji buttons for different emotions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Central animated face that mimics chosen emotion
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Positive affirmations and supportive messages
                </li>
              </ul>
            </div>
          </div>

          {/* Memory Sequence Game */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaGamepad className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Memory Game</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p>
                Pattern recognition game that enhances memory and focus through increasing sequence complexity and positive reinforcement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Sequential box flashing patterns
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Point system (+5 correct, -2 incorrect)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Visual effects for correct answers
                </li>
              </ul>
            </div>
          </div>

          {/* Life System & Calm Mode */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaHeart className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Support Features</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p>
                Comprehensive support system including life management and calming tools for emotional regulation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  3-life system with visual indicators
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Breathing circle animation for calming
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Quick-access calm mode ('B' key)
                </li>
              </ul>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaMedal className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Progress System</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p>
                Comprehensive progress tracking and achievement system to motivate and encourage continued engagement.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Leaderboard with highest scores
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Session score tracking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Start/Stop game flow control
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
              <FaCode className="text-2xl text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold">Technical Details</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Core Components</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Pygame Zero game engine integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Custom emoji assets and animations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  State management system
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Sound effects and feedback system
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Future Enhancements</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Background music with volume control
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Cross-session score persistence
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Theme switching for sensitivity
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Parent progress dashboard
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 