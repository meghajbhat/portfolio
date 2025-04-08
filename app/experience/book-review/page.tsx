'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaArrowLeft, FaBook, FaCode, FaBrain, FaUsers, FaStar, FaPalette } from 'react-icons/fa';

export default function BookReviewPage() {
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
          <a 
            href="https://github.com/meghajbhat/Book-Review-System"
            target="_blank"
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
          >
            <FaGithub className="text-xl" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Project Header */}
        <div className="card-3d relative rounded-2xl overflow-hidden bg-[#1A2333]/50 backdrop-blur-sm border border-emerald-500/20 p-12 mb-12 hover:border-emerald-500/40 transition-colors duration-500">
          {/* Floating Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-xl"></div>
            <FaBook className="text-4xl text-emerald-400 relative z-10 animate-float" />
          </div>

          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Book Review System
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            A full-stack Java-based web application for managing books and user reviews, enabling customers to browse and review books while admins manage the catalog.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
              Spring Boot
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
              MySQL
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
              Thymeleaf
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
              HTML/CSS
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
              JavaScript
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors">
              Maven
            </span>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Overview Card */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center">
                <FaBrain className="text-2xl text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold">Overview</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <p>
                A comprehensive book review platform that enables users to discover, rate, and review books while providing administrators with powerful catalog management tools.
              </p>
              <p>
                The system features a responsive UI with a horizontally scrollable book gallery, advanced search and filtering capabilities, and theme persistence using localStorage.
              </p>
            </div>
          </div>

          {/* Key Features Card */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-emerald-500/30 flex items-center justify-center">
                <FaStar className="text-2xl text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold">Key Features</h2>
            </div>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                Role-based access control for customers and administrators
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                Star ratings, text reviews, and anonymous review options
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                Advanced sorting and filtering for reviews
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                "In Spotlight" carousel for trending books
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                Theme switching with persistent preferences
              </li>
            </ul>
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
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Architecture</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  MVC architecture using Spring Boot
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  JPA/Hibernate for database operations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Thymeleaf for server-side templating
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Maven for dependency management
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Design Patterns</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Singleton Beans for services
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Factory pattern for entity creation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Strategy pattern for review sorting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-1">•</span>
                  Observer pattern for UI updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 