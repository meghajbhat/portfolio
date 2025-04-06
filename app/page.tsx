'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaArrowRight } from 'react-icons/fa'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      heroRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B1121] to-[#1A2333] text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 pt-32 relative">
          <div ref={heroRef} className="flex flex-col lg:flex-row items-center justify-between gap-12 transition-transform duration-300 ease-out">
            {/* Left Column - Text Content */}
            <div className="flex-1 z-10">
              <div className="space-y-8">
                <h2 className="text-lg font-medium text-emerald-400 tracking-wider">HELLO THERE!</h2>
                <h1 className="text-6xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    Megha Bhat
                  </span>
                </h1>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400/80 to-blue-400/80 bg-clip-text text-transparent">
                  I'M A PASSIONATE LEARNER!
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                  Computer Science student at PES University, exploring the intersection of technology and creativity.
                </p>
                <div className="flex items-center gap-6">
                  <a 
                    href="https://github.com/meghajbhat" 
                    target="_blank" 
                    className="w-14 h-14 rounded-2xl bg-[#1A2333]/80 backdrop-blur-sm flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/meghajbhat" 
                    target="_blank" 
                    className="w-14 h-14 rounded-2xl bg-[#1A2333]/80 backdrop-blur-sm flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a 
                    href="https://leetcode.com/meghajbhat" 
                    target="_blank" 
                    className="w-14 h-14 rounded-2xl bg-[#1A2333]/80 backdrop-blur-sm flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 hover:scale-110"
                  >
                    <FaCode className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative z-10">
              <div className="relative w-full max-w-lg mx-auto perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                <img 
                  src="/images/profile.jpg" 
                  alt="Megha Bhat" 
                  className="relative w-full aspect-square object-cover rounded-2xl border-2 border-emerald-500/30 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-xl backdrop-blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-xl backdrop-blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-[#0B1121]/50 backdrop-blur-sm"></div>
        <div className="container mx-auto max-w-6xl relative">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/experience/cdsaml" className="group perspective">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">CDSAML</h3>
                <p className="text-emerald-400 mb-4">Research Intern</p>
                <p className="text-gray-400">Worked on measuring and reducing hallucinations in LLMs, focusing on improving model accuracy and reliability.</p>
                <div className="mt-6 flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <FaArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
            <Link href="/experience/nexus" className="group perspective">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 transform hover:-translate-y-2 hover:rotate-2 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">Nexus Info</h3>
                <p className="text-emerald-400 mb-4">Software Development Intern</p>
                <p className="text-gray-400">Developed and implemented software solutions, gaining hands-on experience in real-world projects.</p>
                <div className="mt-6 flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <FaArrowRight className="ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {/* Patient Records Management System */}
            <Link href="/projects/patient-records-management-system" className="group project-card">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:rotate-2 border border-emerald-500/10 hover:border-emerald-500/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Patient Records Management System
                    </h3>
                    <a href="https://github.com/meghajbhat/patient-records" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-6">
                    A web-based application designed for efficient management of hospital operations, including patient records, appointments, prescriptions, and billing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">MySQL</span>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">Python</span>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">Flask</span>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">HTML</span>
                  </div>
                  <div className="mt-6 flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View project</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Simple Chatbot */}
            <Link href="/projects/simple-chatbot" className="group project-card">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:rotate-2 border border-emerald-500/10 hover:border-emerald-500/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Simple Chatbot
                    </h3>
                    <a href="https://github.com/meghajbhat/simple-chatbot" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-6">
                    A chatbot using OpenAI's GPT-3.5-turbo model with client-server architecture for natural language interaction.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">Python</span>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">ChatGPT API</span>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">Computer Networks</span>
                  </div>
                  <div className="mt-6 flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View project</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            {/* University Admission Chatbot */}
            <Link href="/projects/university-admission-chatbot" className="group project-card">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:rotate-2 border border-emerald-500/10 hover:border-emerald-500/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      University Admission Chatbot
                    </h3>
                    <a href="https://github.com/meghajbhat/university-chatbot" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-6">
                    A chatbot designed to assist prospective students with admission inquiries, powered by AIML and TensorFlow.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">Python</span>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">JSON</span>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">AIML</span>
                  </div>
                  <div className="mt-6 flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View project</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Music Playlist Generator */}
            <Link href="/projects/music-playlist-generator" className="group project-card">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:rotate-2 border border-emerald-500/10 hover:border-emerald-500/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Music Playlist Generator
                    </h3>
                    <a href="https://github.com/meghajbhat/music-playlist" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-6">
                    A C-based music playlist manager with data structures for songs, playlists, and user information.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">C</span>
                  </div>
                  <div className="mt-6 flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View project</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Photo Editor */}
            <Link href="/projects/photo-editor" className="group project-card">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:rotate-2 border border-emerald-500/10 hover:border-emerald-500/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Photo Editor
                    </h3>
                    <a href="https://github.com/meghajbhat/photo-editor" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-6">
                    A user-friendly photo editing platform with filters and image manipulation features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">OpenCV</span>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">Tkinter</span>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">Python</span>
                  </div>
                  <div className="mt-6 flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View project</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Dining Cost Estimator */}
            <Link href="/projects/dining-cost-estimator" className="group project-card">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:rotate-2 border border-emerald-500/10 hover:border-emerald-500/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Dining Cost Estimator for Two
                    </h3>
                    <a href="https://github.com/meghajbhat/dining-cost" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-6">
                    A predictive model for estimating dinner costs at Bengaluru restaurants using data from Zomato.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">Python</span>
                  </div>
                  <div className="mt-6 flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View project</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Speech Coach */}
            <Link href="/projects/speech-coach" className="group project-card">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:rotate-2 border border-emerald-500/10 hover:border-emerald-500/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Speech Coach
                    </h3>
                    <a href="https://github.com/meghajbhat/speech-coach" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-6">
                    A grammar correction tool that records speech, corrects errors, and supports multiple language translations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">Python</span>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">NodeJS</span>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">MongoDB</span>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">React</span>
                  </div>
                  <div className="mt-6 flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View project</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Calendar + Timetable */}
            <Link href="/projects/calendar-timetable" className="group project-card">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 h-full transform transition-all duration-500 hover:scale-105 hover:rotate-2 border border-emerald-500/10 hover:border-emerald-500/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      Calendar + Timetable
                    </h3>
                    <a href="https://github.com/meghajbhat/calendar" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-6">
                    A comprehensive academic calendar and timetable manager for efficient schedule organization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">C++</span>
                  </div>
                  <div className="mt-6 flex items-center text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>View project</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-[#0B1121]/50 backdrop-blur-sm"></div>
        <div className="container mx-auto max-w-6xl relative">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 h-full transform hover:-translate-y-2 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <h3 className="text-xl font-bold mb-6 text-emerald-400">Programming Languages</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-center group-hover:text-emerald-400 transition-colors duration-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Python
                  </li>
                  <li className="flex items-center group-hover:text-emerald-400 transition-colors duration-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    Java
                  </li>
                  <li className="flex items-center group-hover:text-emerald-400 transition-colors duration-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    C++
                  </li>
                  <li className="flex items-center group-hover:text-emerald-400 transition-colors duration-300">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                    JavaScript
                  </li>
                </ul>
              </div>
            </div>

            {/* Add similar structure for other skill categories */}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-4 relative">
        <div className="container mx-auto max-w-6xl relative">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">PES University</h3>
            <p className="text-emerald-400 mb-2">Bachelor of Technology in Computer Science</p>
            <p className="text-gray-400">2021 - Present | CGPA: 7.47/10</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-[#0B1121]/50 backdrop-blur-sm"></div>
        <div className="container mx-auto max-w-6xl relative">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Contact</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:meghajbhat@gmail.com" className="group flex items-center text-gray-400 hover:text-emerald-400 transition-all duration-300 bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-emerald-500/10 hover:border-emerald-500/30">
              <FaEnvelope className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
              meghajbhat@gmail.com
            </a>
            <a href="tel:+919876543210" className="group flex items-center text-gray-400 hover:text-emerald-400 transition-all duration-300 bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-emerald-500/10 hover:border-emerald-500/30">
              <FaPhone className="mr-3 text-xl group-hover:scale-110 transition-transform duration-300" />
              +91 9876543210
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

// Add these styles to your global.css file
/*
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.perspective {
  perspective: 1000px;
}

.perspective-1000 {
  perspective: 1000px;
}
*/ 