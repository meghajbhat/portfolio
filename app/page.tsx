'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaArrowRight } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

// Initialize EmailJS
emailjs.init("-UCnHkBHJrirqj0Kf")

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
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Megha Bhat
              </span>
            </h1>
            <h2 className="text-3xl font-medium text-gray-400 mb-12">Computer Science student at PES University</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl">
              Exploring the intersection of technology and creativity. Passionate about building innovative solutions and learning new technologies.
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
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-8xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              About.
            </span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative aspect-square rounded-2xl border-2 border-emerald-500/30 overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img 
                    src="public\images\projects\profile.jpg" 
                    alt="Megha Bhat" 
                    className="w-full h-full object-cover"
                  />
                </div>
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

      {/* Education Section */}
      <section id="education" className="py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-base font-medium text-center mb-4 text-gray-400 tracking-wider uppercase">WHAT I HAVE STUDIED SO FAR</h2>
          <h1 className="text-8xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Education.
            </span>
          </h1>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-emerald-500/20"></div>

            {/* PES University */}
            <div className="relative mb-20">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 rounded-full bg-[#0B1121] border-4 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                  <img src="/images/projects/pes-logo.png" alt="PES University" className="w-10 h-10 object-contain" />
                </div>
              </div>
              <div className="ml-[calc(50%+48px)] max-w-[500px] bg-[#0B1121] rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-2">Computer Science Bachelors</h3>
                <p className="text-emerald-400 text-lg mb-2">PES University, Bengaluru, India</p>
                <p className="text-gray-400 mb-1">September 2022 - May 2026</p>
                <p className="text-gray-400">CGPA: 7.47</p>
              </div>
            </div>

            {/* BASE PU College */}
            <div className="relative mb-20">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 rounded-full bg-[#0B1121] border-4 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                  <img src="/images/projects/base-logo.png" alt="BASE PU College" className="w-10 h-10 object-contain" />
                </div>
              </div>
              <div className="mr-[calc(50%+48px)] max-w-[500px] bg-[#0B1121] rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-2">Class XII PU</h3>
                <p className="text-emerald-400 text-lg mb-2">BASE PU College, Bengaluru, India</p>
                <p className="text-gray-400 mb-1">July 2020 - May 2022</p>
                <p className="text-gray-400">Physics, Chemistry, Mathematics, Computer Science</p>
              </div>
            </div>

            {/* PSBB LLA */}
            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 rounded-full bg-[#0B1121] border-4 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                  <img src="/images/projects/psbb-logo.png" alt="PSBB LLA" className="w-10 h-10 object-contain" />
                </div>
              </div>
              <div className="ml-[calc(50%+48px)] max-w-[500px] bg-[#0B1121] rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-2">Class X School</h3>
                <p className="text-emerald-400 text-lg mb-2">PSBB LLA, Bengaluru, India</p>
                <p className="text-gray-400 mb-1">July 2019 - July 2020</p>
                <p className="text-gray-400">Physics, Chemistry, Social Science, Mathematics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-8xl font-bold text-center mb-24">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h1>

          <div className="grid grid-cols-12 gap-8">
            {/* Left Column - Company List */}
            <div className="col-span-4 space-y-8">
              <button onClick={() => {
                const cdsamlDetails = document.getElementById('cdsaml-details');
                const nexusDetails = document.getElementById('nexus-details');
                if (cdsamlDetails) cdsamlDetails.classList.remove('hidden');
                if (nexusDetails) nexusDetails.classList.add('hidden');
              }} className="w-full">
                <div className="group flex items-center gap-4 cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#0B1121] border-2 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                    <img src="/images/projects/cdsaml-logo.png" alt="CDSAML" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Research Intern - CDSAML</h3>
                    <p className="text-gray-400">CDSAML</p>
                  </div>
                </div>
              </button>

              <button onClick={() => {
                const cdsamlDetails = document.getElementById('cdsaml-details');
                const nexusDetails = document.getElementById('nexus-details');
                if (nexusDetails) nexusDetails.classList.remove('hidden');
                if (cdsamlDetails) cdsamlDetails.classList.add('hidden');
              }} className="w-full">
                <div className="group flex items-center gap-4 cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-[#0B1121] border-2 border-emerald-500/30 flex items-center justify-center overflow-hidden">
                    <img src="/images/projects/nexus-logo.png" alt="Nexus Info" className="w-8 h-8 object-contain" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">AIML Intern</h3>
                    <p className="text-gray-400">Nexus Info</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Right Column - Experience Details */}
            <div className="col-span-8">
              <div id="cdsaml-details" className="bg-[#0B1121] rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Research Intern - CDSAML</h2>
                <p className="text-emerald-400 text-lg mb-4">Bengaluru, India</p>
                <p className="text-gray-400 mb-6">July 2024 – August 2024</p>
                <p className="text-2xl font-bold text-white mb-4">Project: Measuring and Reducing Hallucinations in LLMs</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Generated 10,000 hallucinated samples each for QA, dialogue, and summarization tasks using HotpotQA, OpenDialKG, and CNN/Daily Mail datasets.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Designed both one-pass(one-turn) and conversational(multi-turn) methods to induce hallucinations.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Implemented general code, React and Chain Of Verification processes for hallucination reduction.</span>
                  </li>
                </ul>
              </div>

              <div id="nexus-details" className="bg-[#0B1121] rounded-2xl p-8 hidden">
                <h2 className="text-3xl font-bold text-white mb-4">AIML Intern - Nexus Info</h2>
                <p className="text-emerald-400 text-lg mb-4">Bengaluru, India</p>
                <p className="text-gray-400 mb-6">May 2024 – June 2024</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Developed a general-purpose chatbot using advanced AIML techniques.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Created a specialized chatbot for university admissions FAQ's.</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-400">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Implemented two foundational AIML projects during the internship period.</span>
                  </li>
                </ul>
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
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-base font-medium text-center mb-4 text-gray-400 tracking-wider uppercase">TECHNICAL PROFICIENCIES</h2>
          <h1 className="text-8xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Skills.
            </span>
          </h1>

          <div className="max-w-4xl mx-auto">
            {/* Programming Category */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#8B5CF6] mb-6">&lt;Programming&gt;</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/python.png" alt="Python" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">Python</p>
                </div>
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/cpp.png" alt="C++" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">C++</p>
                </div>
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/js.png" alt="JavaScript" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">JavaScript</p>
                </div>
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/golang.png" alt="GoLang" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">GoLang</p>
                </div>
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/kotlin.png" alt="Kotlin" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">Kotlin</p>
                </div>
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/matlab.png" alt="MATLAB" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">MATLAB</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#8B5CF6] text-right">&lt;/Programming&gt;</h3>
            </div>

            {/* Libraries/Frameworks Category */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#8B5CF6] mb-6">&lt;Libraries&gt;</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/react.png" alt="React" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">React</p>
                </div>
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/node.png" alt="Node.js" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">Node.js</p>
                </div>
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/tensorflow.png" alt="TensorFlow" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">TensorFlow</p>
                </div>
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/opencv.png" alt="OpenCV" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">OpenCV</p>
                </div>
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/flask.png" alt="Flask" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">Flask</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#8B5CF6] text-right">&lt;/Libraries&gt;</h3>
            </div>

            {/* Tools Category */}
            <div>
              <h3 className="text-xl font-bold text-[#8B5CF6] mb-6">&lt;Tools&gt;</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-4">
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/github.png" alt="GitHub" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">GitHub</p>
                </div>
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/vscode.png" alt="VS Code" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">VS Code</p>
                </div>
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/kafka.png" alt="Kafka" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">Kafka</p>
                </div>
                <div className="group">
                  <div className="hexagon bg-[#1A1A2E] hover:bg-[#1A1A2E]/80 transition-all duration-300 p-6 flex items-center justify-center transform hover:scale-110">
                    <img src="/images/projects/hadoop.png" alt="Hadoop" className="w-12 h-12 object-contain" />
                  </div>
                  <p className="text-center text-gray-400 mt-2">Hadoop</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#8B5CF6] text-right">&lt;/Tools&gt;</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-base font-medium text-center mb-4 text-gray-400 tracking-wider uppercase">GET IN TOUCH</h2>
          <h1 className="text-8xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Contact.
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Form */}
            <form 
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                
                try {
                  submitButton.disabled = true;
                  submitButton.innerHTML = 'Sending...';

                  await emailjs.sendForm(
                    'service_26jkwhf',
                    'template_8eret0p',
                    form,
                    '-UCnHkBHJrirqj0Kf'
                  );

                  alert('Message sent successfully! I will get back to you soon.');
                  form.reset();
                } catch (error) {
                  console.error('Error sending email:', error);
                  alert('Failed to send message. Please try again or email me directly at meghajbhat@gmail.com');
                } finally {
                  submitButton.disabled = false;
                  submitButton.innerHTML = `
                    <span class="relative z-10 flex items-center gap-2">
                      Send Message
                      <span class="transform rotate-90 group-hover:translate-x-1 transition-transform">✈️</span>
                    </span>
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  `;
                }
              }}
              className="space-y-6"
            >
              <div>
                <label className="flex items-center gap-2 text-gray-400 mb-2">
                  <span className="w-6 h-6">👤</span>
                  Name
                </label>
                <input 
                  type="text" 
                  name="from_name"
                  placeholder="Your name" 
                  required
                  minLength={2}
                  className="w-full bg-[#1A1A2E] text-gray-400 rounded-xl p-4 border border-emerald-500/30 focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-400 mb-2">
                  <span className="w-6 h-6">📧</span>
                  Email
                </label>
                <input 
                  type="email" 
                  name="from_email"
                  placeholder="Your email" 
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full bg-[#1A1A2E] text-gray-400 rounded-xl p-4 border border-emerald-500/30 focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-gray-400 mb-2">
                  <span className="w-6 h-6">💬</span>
                  Message
                </label>
                <textarea 
                  name="message"
                  placeholder="Hey Megha, love the website! I'd like to chat about some opportunities you might like! 🚀" 
                  required
                  minLength={10}
                  rows={6}
                  className="w-full bg-[#1A1A2E] text-gray-400 rounded-xl p-4 border border-emerald-500/30 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-400 to-blue-400 text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <span className="transform rotate-90 group-hover:translate-x-1 transition-transform">✈️</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </form>

            {/* 3D Globe */}
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full animate-spin-slow"></div>
            </div>
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