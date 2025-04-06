'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaAward, FaCertificate, FaLaptopCode, FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1121] text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="400" cy="400" r="300" stroke="url(#grad1)" strokeWidth="0.5" />
              <circle cx="400" cy="400" r="200" stroke="url(#grad1)" strokeWidth="0.5" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#2563EB', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 pt-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column - Text Content */}
            <div className="flex-1 z-10">
              <div className="space-y-6">
                <h2 className="text-lg font-medium text-emerald-400">HELLO THERE!</h2>
                <h1 className="text-5xl font-bold leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    Megha Bhat
                  </span>
                </h1>
                <h2 className="text-3xl font-bold text-emerald-400">
                  I'M A PASSIONATE LEARNER!
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                  Computer Science student at PES University.
                </p>
                <div className="flex items-center gap-4">
                  <a 
                    href="https://github.com/meghajbhat" 
                    target="_blank" 
                    className="w-12 h-12 rounded-full bg-[#1A2333] flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/meghajbhat" 
                    target="_blank" 
                    className="w-12 h-12 rounded-full bg-[#1A2333] flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a 
                    href="https://leetcode.com/meghajbhat" 
                    target="_blank" 
                    className="w-12 h-12 rounded-full bg-[#1A2333] flex items-center justify-center hover:bg-emerald-500 transition-colors duration-300"
                  >
                    <FaCode className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 relative z-10">
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img 
                  src="/images/profile.jpg" 
                  alt="Megha Bhat" 
                  className="relative w-full aspect-square object-cover rounded-2xl border-2 border-emerald-500/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-[#0B1121]/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/experience/cdsaml" className="group">
              <div className="bg-[#1A2333] rounded-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">CDSAML</h3>
                <p className="text-emerald-400 mb-4">Research Intern</p>
                <p className="text-gray-400">Worked on measuring and reducing hallucinations in LLMs, focusing on improving model accuracy and reliability.</p>
              </div>
            </Link>
            <Link href="/experience/nexus" className="group">
              <div className="bg-[#1A2333] rounded-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-emerald-400 transition-colors duration-300">Nexus Info</h3>
                <p className="text-emerald-400 mb-4">Software Development Intern</p>
                <p className="text-gray-400">Developed and implemented software solutions, gaining hands-on experience in real-world projects.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="space-y-6">
            {/* Patient Records Management System */}
            <Link href="/projects/patient-records-management-system" className="block">
              <div className="bg-[#1A2333] rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Patient Records Management System
                  </h3>
                  <a href="https://github.com/meghajbhat/patient-records" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">
                  A web-based application designed for efficient management of hospital operations, including patient records, appointments, prescriptions, and billing. Built with Python Flask, it provides role-based access for administrators, doctors, and patients, ensuring streamlined workflows and secure data handling.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">MySQL</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">Python</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">HTML</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">Flask</span>
                </div>
              </div>
            </Link>

            {/* Simple Chatbot */}
            <Link href="/projects/simple-chatbot" className="block">
              <div className="bg-[#1A2333] rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Simple Chatbot
                  </h3>
                  <a href="https://github.com/meghajbhat/simple-chatbot" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">
                  This project is a simple chatbot that uses OpenAI's GPT-3.5-turbo model. It consists of a client and a server script that communicate over HTTP. The server handles the interaction with the OpenAI API, and the client provides a simple command-line interface for users to interact with the chatbot.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">Python</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">ChatGPT API</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">Computer Networks</span>
                </div>
              </div>
            </Link>

            {/* University Admission Chatbot */}
            <Link href="/projects/university-admission-chatbot" className="block">
              <div className="bg-[#1A2333] rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    University Admission Chatbot
                  </h3>
                  <a href="https://github.com/meghajbhat/university-chatbot" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">
                  This chatbot is designed to assist prospective students with inquiries related to admission procedures, courses offered, campus facilities, and more. Powered by AIML and TensorFlow, this chatbot provides accurate and timely information to help streamline the admission process for students.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">Python</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">JSON</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">AIML</span>
                </div>
              </div>
            </Link>

            {/* Music Playlist Generator */}
            <Link href="/projects/music-playlist-generator" className="block">
              <div className="bg-[#1A2333] rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Music Playlist Generator
                  </h3>
                  <a href="https://github.com/meghajbhat/music-playlist" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">
                  The code defines three main data structures: Song, Playlist, and User. A Song structure holds information about a single song, while a Playlist structure manages a linked list of songs. The User structure encapsulates user information, including a playlist and a stack for played songs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">C</span>
                </div>
              </div>
            </Link>

            {/* Photo Editor */}
            <Link href="/projects/photo-editor" className="block">
              <div className="bg-[#1A2333] rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Photo Editor
                  </h3>
                  <a href="https://github.com/meghajbhat/photo-editor" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">
                  This project aims to provide users with a seamless and intuitive platform for easy photo modification. It enables users to enhance their photos effortlessly by adding filters and cropping images. Featuring a user-friendly interface and a wide array of customization options, this platform is designed to transform how individuals engage with and modify their photos.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">OpenCV</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">Tkinter</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">Python</span>
                </div>
              </div>
            </Link>

            {/* Dining Cost Estimator */}
            <Link href="/projects/dining-cost-estimator" className="block">
              <div className="bg-[#1A2333] rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Dining Cost Estimator for Two
                  </h3>
                  <a href="https://github.com/meghajbhat/dining-cost" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">
                  This project aims to develop a sophisticated predictive model to estimate the average dinner costs at restaurants in Bengaluru, utilizing data from popular eateries and Zomato. Through meticulous data analysis, cleansing, and strategic feature engineering, the dataset is optimized for accurate predictions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">Python</span>
                </div>
              </div>
            </Link>

            {/* Speech Coach */}
            <Link href="/projects/speech-coach" className="block">
              <div className="bg-[#1A2333] rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Speech Coach
                  </h3>
                  <a href="https://github.com/meghajbhat/speech-coach" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">
                  Grammar Correction: iSpeak records your speech and instantly corrects any grammatical errors it detects. Whether it's a misplaced comma, punctuation or a pronoun issue, iSpeak ensures your speech is grammatically correct. In addition to this, it could also convert real time communication to written words, as well as it could read written lines out loud.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">Python</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">NodeJS</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">MongoDB</span>
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">React</span>
                </div>
              </div>
            </Link>

            {/* Calendar + Timetable */}
            <Link href="/projects/calendar-timetable" className="block">
              <div className="bg-[#1A2333] rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    Calendar + Timetable
                  </h3>
                  <a href="https://github.com/meghajbhat/calendar" target="_blank" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">
                  This project aims to create a comprehensive calendar and timetable for academic studies, designed to help users organize their schedules efficiently. It will provide clear guidance on what tasks to complete, when to complete them, and the specific subjects to focus on.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-[#0B1121] text-emerald-400 border border-emerald-500/30">C++</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-[#0B1121]/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#1A2333] rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Programming Languages</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="bg-[#1A2333] rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Web Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div className="bg-[#1A2333] rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">AI/ML</h3>
              <ul className="space-y-2 text-gray-300">
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Scikit-learn</li>
                <li>NLP</li>
              </ul>
            </div>
            <div className="bg-[#1A2333] rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Tools & Technologies</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Git</li>
                <li>Docker</li>
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="bg-[#1A2333] rounded-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
            <h3 className="text-2xl font-bold mb-4 text-white">PES University</h3>
            <p className="text-emerald-400 mb-2">Bachelor of Technology in Computer Science</p>
            <p className="text-gray-400">2021 - Present | CGPA: 7.47/10</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#0B1121]/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Contact</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:meghajbhat@gmail.com" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              <FaEnvelope className="mr-2 text-xl" />
              meghajbhat@gmail.com
            </a>
            <a href="tel:+919876543210" className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-300">
              <FaPhone className="mr-2 text-xl" />
              +91 9876543210
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 