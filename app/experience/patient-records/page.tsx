import React from 'react';
import Link from 'next/link';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';

export default function PatientRecordsPage() {
  return (
    <div className="min-h-screen bg-[#0B1121] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1121] border-b border-emerald-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
            >
              <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>
            <a 
              href="https://github.com/meghajbhat/patient-records" 
              target="_blank" 
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
            >
              <span>View on GitHub</span>
              <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Project Header */}
          <div className="relative mb-16 group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">
                Patient Records Management System
              </h1>
              <p className="text-xl text-gray-400 mb-6">
                A comprehensive web application for efficient hospital operations management
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">MySQL</span>
                <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">Python</span>
                <span className="px-4 py-2 text-sm rounded-xl bg-[#0B1121]/80 text-emerald-400 border border-emerald-500/30 group-hover:border-emerald-500/70 transition-all duration-300">Flask</span>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Overview */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500 h-full">
                <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">Overview</h2>
                <p className="text-gray-400">
                  A comprehensive web application designed for efficient hospital operations management, featuring patient record tracking, appointment scheduling, and medical history management. The system streamlines hospital workflows and improves patient care coordination.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500 h-full">
                <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">Key Features</h2>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-2">•</span>
                    <span>Patient record management and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-2">•</span>
                    <span>Appointment scheduling system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-2">•</span>
                    <span>Medical history documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-2">•</span>
                    <span>Secure data storage and access control</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Details */}
            <div className="relative group md:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-emerald-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-[#1A2333]/90 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-500">
                <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">Technical Implementation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-300">Backend</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Python Flask framework</li>
                      <li>• MySQL database</li>
                      <li>• RESTful API architecture</li>
                      <li>• Secure authentication system</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-300">Frontend</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Responsive web interface</li>
                      <li>• Modern UI/UX design</li>
                      <li>• Real-time updates</li>
                      <li>• Cross-browser compatibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 