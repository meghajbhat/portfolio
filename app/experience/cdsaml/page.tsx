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
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img 
                src="/images/projects/profile.jpg" 
                alt="Megha Bhat" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-xl font-bold gradient-text">Megha Bhat</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="nav-link">HOME</Link>
              <Link href="/#projects" className="nav-link">PROJECTS</Link>
              <Link href="/#skills" className="nav-link">SKILLS</Link>
              <Link href="/#education" className="nav-link">EDUCATION</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="fixed top-24 left-6 z-40">
        <Link href="/#experience" className="inline-flex items-center text-gray-600 hover:text-gray-800">
          <FaArrowLeft className="mr-2" />
          Back
        </Link>
      </div>

      {/* Vertical Navigation */}
      <div className="fixed top-32 left-6 space-y-4 z-40">
        <a 
          href="#overview" 
          className={`block text-sm ${activeSection === 'overview' ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-800'}`}
        >
          Project Overview
        </a>
        <a 
          href="#activities" 
          className={`block text-sm ${activeSection === 'activities' ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-800'}`}
        >
          Key Activities
        </a>
        <a 
          href="#objectives" 
          className={`block text-sm ${activeSection === 'objectives' ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-800'}`}
        >
          Objectives
        </a>
        <a 
          href="#technologies" 
          className={`block text-sm ${activeSection === 'technologies' ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-800'}`}
        >
          Technologies
        </a>
        <a 
          href="#acknowledgment" 
          className={`block text-sm ${activeSection === 'acknowledgment' ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-800'}`}
        >
          Acknowledgment
        </a>
        <a 
          href="#certificate" 
          className={`block text-sm ${activeSection === 'certificate' ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-800'}`}
        >
          Certificate
        </a>
      </div>

      {/* Content */}
      <div className="pt-32 pb-20 px-4 ml-48">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4 gradient-text">
                Measuring and Reducing Hallucinations in LLMs
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm flex items-center">
                  <FaPython className="mr-2" /> Python
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center">
                  <FaBrain className="mr-2" /> LLM
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center">
                  <FaCode className="mr-2" /> Prompt Engineering
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm flex items-center">
                  <FaBrain className="mr-2" /> Mistral 7B LLM
                </span>
              </div>
            </div>

            <section id="overview" className="skill-card">
              <h2 className="text-2xl font-semibold gradient-text mb-4">Project Overview</h2>
              <p className="text-gray-700 mb-4">
                As part of a dedicated team of three, I worked on a project aimed at reducing hallucinations in large language models (LLMs). We utilize the Mistral LLM, sourced from Hugging Face, and the HaluEval dataset from GitHub, leveraging the computational power of a GPU P100 on Kaggle.
              </p>
            </section>

            <section id="activities" className="skill-card">
              <h2 className="text-2xl font-semibold gradient-text mb-4">Key Activities</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Generated 10,000 hallucinated samples each for QA, dialogue, and summarization tasks using HotpotQA, OpenDialKG, and CNN/Daily Mail datasets.</li>
                <li>Designed both one-pass(one-turn) and conversational(multi-turn) methods to induce hallucinations.</li>
              </ul>
            </section>

            <section id="objectives" className="skill-card">
              <h2 className="text-2xl font-semibold gradient-text mb-4">Objectives</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Evaluate the performance of various advanced prompt engineering techniques in reducing hallucinations.</li>
                <li>Study and suggest improvements for different prompt engineering techniques.</li>
              </ul>
            </section>

            <section id="technologies" className="skill-card">
              <h2 className="text-2xl font-semibold gradient-text mb-4">Technologies Used</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Core Technologies</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Python</li>
                    <li>Mistral 7B LLM</li>
                    <li>HaluEval Dataset</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Platforms & Tools</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Hugging Face</li>
                    <li>Kaggle (GPU P100)</li>
                    <li>GitHub</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="acknowledgment" className="skill-card">
              <h2 className="text-2xl font-semibold gradient-text mb-4">Acknowledgment</h2>
              <p className="text-gray-700">
                This project is undertaken under the valuable guidance of Dr. Sujatha R Upadhyaya and with the help of the Centre for Cloud Computing and Big Data, to whom we extend our deepest gratitude.
              </p>
            </section>

            <section id="certificate" className="skill-card">
              <h2 className="text-2xl font-semibold gradient-text mb-4">Certificate</h2>
              <Link 
                href="https://drive.google.com/file/d/14b3ElbyzX_lQHA-32UEDasPT8ayr18MM/view?usp=drive_link"
                target="_blank"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
              >
                <FaFileAlt className="mr-2" />
                View Certificate
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 