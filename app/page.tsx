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
    <main className="min-h-screen bg-[#0B1121] text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Megha Bhat
              </span>
            </h1>
            <h2 className="text-3xl font-medium text-gray-400 mb-12">Computer Science student at PES University</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Exploring the intersection of technology and creativity. Passionate about building innovative solutions and learning new technologies.
            </p>
            <div className="flex items-center justify-center gap-6">
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
      </section>

      {/* About Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto perspective-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                <img 
                  src="/images/profile.jpg" 
                  alt="Megha Bhat" 
                  className="relative w-full aspect-square object-cover rounded-2xl border-2 border-emerald-500/30 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-400">
                I'm a Computer Science student at PES University, passionate about exploring new technologies and building innovative solutions. My journey in tech has led me to work on various projects, from web applications to machine learning models.
              </p>
              <p className="text-lg text-gray-400">
                Currently, I'm focused on developing my skills in full-stack development, artificial intelligence, and cloud computing. I love taking on challenging projects that push my boundaries and help me grow as a developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <div className="group">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">CDSAML</h3>
                    <p className="text-emerald-400 mt-2">Research Intern</p>
                  </div>
                  <span className="text-gray-400">2023</span>
                </div>
                <p className="text-gray-400">Worked on measuring and reducing hallucinations in LLMs, focusing on improving model accuracy and reliability.</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">Nexus Info</h3>
                    <p className="text-emerald-400 mt-2">Software Development Intern</p>
                  </div>
                  <span className="text-gray-400">2023</span>
                </div>
                <p className="text-gray-400">Developed and implemented software solutions, gaining hands-on experience in real-world projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards with your existing content but new styling */}
            {/* Patient Records Management System */}
            <Link href="/projects/patient-records-management-system" className="group">
              <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8 h-full transform hover:-translate-y-2 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    Patient Records Management System
                  </h3>
                  <a href="https://github.com/meghajbhat/patient-records" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <p className="text-gray-400 mb-6">
                  A web-based application for efficient hospital operations management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">MySQL</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">Python</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121]/50 text-emerald-400 border border-emerald-500/30">Flask</span>
                </div>
              </div>
            </Link>

            {/* Continue with other project cards in the same format */}
            {/* Add all your other projects here with the same styling */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#1A2333]/80 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6 text-emerald-400">Programming Languages</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Python
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Java
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  C++
                </li>
                <li className="flex items-center text-gray-400">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  JavaScript
                </li>
              </ul>
            </div>
            {/* Add other skill categories with the same styling */}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-medium text-center mb-4 text-gray-400 tracking-wide">WHAT I HAVE STUDIED SO FAR</h2>
          <h1 className="text-7xl font-bold text-center mb-24">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Education.
            </span>
          </h1>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-emerald-500/20"></div>

            {/* PES University */}
            <div className="relative mb-40">
              <div className="absolute right-1/2 translate-x-[150px] top-0">
                <div className="w-14 h-14 rounded-full bg-[#0f172a] border-4 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                  <img src="/images/pes-logo.png" alt="PES University" className="w-10 h-10 object-contain" />
                </div>
              </div>
              <div className="bg-[#0f172a] rounded-2xl p-8 max-w-[500px] ml-auto mr-[200px] transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-3">Computer Science Bachelors</h3>
                <p className="text-emerald-400 text-lg mb-2">PES University, Bengaluru, India</p>
                <p className="text-gray-400 mb-2">September 2022 - May 2026</p>
                <p className="text-gray-400">CGPA: 7.47</p>
              </div>
            </div>

            {/* BASE PU College */}
            <div className="relative mb-40">
              <div className="absolute left-1/2 -translate-x-[164px] top-0">
                <div className="w-14 h-14 rounded-full bg-[#0f172a] border-4 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                  <img src="/images/base-logo.png" alt="BASE PU College" className="w-10 h-10 object-contain" />
                </div>
              </div>
              <div className="bg-[#0f172a] rounded-2xl p-8 max-w-[500px] mr-auto ml-[200px] transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-3">Class XII PU</h3>
                <p className="text-emerald-400 text-lg mb-2">BASE PU College, Bengaluru, India</p>
                <p className="text-gray-400 mb-2">July 2020 - May 2022</p>
                <p className="text-gray-400">Physics, Chemistry, Mathematics, Computer Science</p>
              </div>
            </div>

            {/* PSBB LLA */}
            <div className="relative">
              <div className="absolute right-1/2 translate-x-[150px] top-0">
                <div className="w-14 h-14 rounded-full bg-[#0f172a] border-4 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                  <img src="/images/psbb-logo.png" alt="PSBB LLA" className="w-10 h-10 object-contain" />
                </div>
              </div>
              <div className="bg-[#0f172a] rounded-2xl p-8 max-w-[500px] ml-auto mr-[200px] transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-3">Class X School</h3>
                <p className="text-emerald-400 text-lg mb-2">PSBB LLA, Bengaluru, India</p>
                <p className="text-gray-400 mb-2">July 2019 - July 2020</p>
                <p className="text-gray-400">Physics, Chemistry, Social Science, Mathematics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-5xl font-bold mb-16 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
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