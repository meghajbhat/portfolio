'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaArrowLeft, FaFileAlt, FaPython, FaBrain, FaCode } from 'react-icons/fa'

export default function CdsamlExperience() {
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || ''
        }
      })

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-[#0B1121] text-white">
      {/* Back Button */}
      <div className="fixed top-24 left-4 z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 bg-[#1A2333] rounded-lg text-gray-400 hover:text-emerald-400 transition-colors duration-300 border border-emerald-500/10 hover:border-emerald-500/30"
        >
          <span>←</span> Back
        </Link>
      </div>

      {/* Vertical Navigation */}
      <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        <div className="bg-[#1A2333] p-4 rounded-lg border border-emerald-500/10">
          <h3 className="text-sm font-medium text-emerald-400 mb-4">Quick Navigation</h3>
          <ul className="space-y-4">
            <li>
              <a href="#overview" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Overview</a>
            </li>
            <li>
              <a href="#first-phase" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">First Phase</a>
            </li>
            <li>
              <a href="#second-phase" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Second Phase</a>
            </li>
            <li>
              <a href="#key-learnings" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Key Learnings</a>
            </li>
            <li>
              <a href="#impact" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Impact</a>
            </li>
            <li>
              <a href="#certificate" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">Certificate</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-32">
        <div className="space-y-16">
          {/* Header */}
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Research Intern at CDSAML
              </span>
            </h1>
            <p className="text-gray-400">January 2024 - Present</p>
          </header>

          {/* Overview Section */}
          <section id="overview" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Overview</h2>
            <p className="text-gray-400 leading-relaxed">
              Working as a Research Intern at the Center for Data Science and Applied Machine Learning (CDSAML), focusing on measuring and reducing hallucinations in Large Language Models. The project aims to improve model reliability and accuracy through innovative techniques and methodologies.
            </p>
          </section>

          {/* First Phase */}
          <section id="first-phase" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">First Phase</h2>
            <div className="space-y-4 text-gray-400">
              <p>Key activities and achievements during the first phase:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conducted extensive research on hallucination detection methods in LLMs</li>
                <li>Implemented and tested various evaluation metrics</li>
                <li>Developed baseline models for comparison</li>
                <li>Documented findings and methodologies</li>
              </ul>
            </div>
          </section>

          {/* Second Phase */}
          <section id="second-phase" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Second Phase</h2>
            <div className="space-y-4 text-gray-400">
              <p>Current focus areas and ongoing work:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Developing advanced techniques for hallucination reduction</li>
                <li>Implementing React Prompting methodology</li>
                <li>Creating Chain of Verification systems</li>
                <li>Optimizing model performance and reliability</li>
              </ul>
            </div>
          </section>

          {/* Key Learnings */}
          <section id="key-learnings" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Key Learnings</h2>
            <div className="space-y-4 text-gray-400">
              <ul className="list-disc pl-6 space-y-2">
                <li>Deep understanding of LLM architectures and behavior</li>
                <li>Advanced prompt engineering techniques</li>
                <li>Research methodology and documentation</li>
                <li>Collaborative research practices</li>
                <li>Technical writing and presentation skills</li>
              </ul>
            </div>
          </section>

          {/* Impact */}
          <section id="impact" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Impact</h2>
            <div className="space-y-4 text-gray-400">
              <p>The research work has contributed to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Improved accuracy in LLM responses</li>
                <li>Development of new evaluation metrics</li>
                <li>Better understanding of hallucination patterns</li>
                <li>Enhanced model reliability for critical applications</li>
              </ul>
            </div>
          </section>

          {/* Certificate */}
          <section id="certificate" className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Certificate</h2>
            <div className="space-y-4">
              <p className="text-gray-400">Certificate of completion will be provided upon successful completion of the internship.</p>
              <div className="flex justify-center">
                <Link 
                  href="/certificates/cdsaml"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-300"
                >
                  <span>View Certificate</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 