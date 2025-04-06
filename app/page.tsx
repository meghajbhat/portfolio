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
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Patient Records Management System */}
            <Link href="/projects/patient-records-management-system" className="group">
              <div className="bg-[#1A2333] rounded-xl overflow-hidden border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="relative aspect-video">
                  <img 
                    src="/images/projects/patient-records.png" 
                    alt="Patient Records Management System" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Patient Records Management System</h3>
                  <p className="text-gray-400 text-sm mb-4">A comprehensive healthcare management system built with Python Flask.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Python</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Flask</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">SQLite</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* University Admission Chatbot */}
            <Link href="/projects/university-admission-chatbot" className="group">
              <div className="bg-[#1A2333] rounded-xl overflow-hidden border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="relative aspect-video">
                  <img 
                    src="/images/projects/admission-chatbot.png" 
                    alt="University Admission Chatbot" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">University Admission Chatbot</h3>
                  <p className="text-gray-400 text-sm mb-4">An AI-powered chatbot for university admission inquiries.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Python</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">NLTK</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">TensorFlow</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Music Playlist Generator */}
            <Link href="/projects/music-playlist-generator" className="group">
              <div className="bg-[#1A2333] rounded-xl overflow-hidden border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="relative aspect-video">
                  <img 
                    src="/images/projects/music-playlist.png" 
                    alt="Music Playlist Generator" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Music Playlist Generator</h3>
                  <p className="text-gray-400 text-sm mb-4">AI-powered music recommendation system.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Python</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Scikit-learn</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Spotify API</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Smart Home Automation */}
            <Link href="/projects/smart-home-automation" className="group">
              <div className="bg-[#1A2333] rounded-xl overflow-hidden border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="relative aspect-video">
                  <img 
                    src="/images/projects/smart-home.png" 
                    alt="Smart Home Automation" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Home Automation</h3>
                  <p className="text-gray-400 text-sm mb-4">IoT-based home automation system.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Python</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Raspberry Pi</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">MQTT</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Weather Forecasting */}
            <Link href="/projects/weather-forecasting" className="group">
              <div className="bg-[#1A2333] rounded-xl overflow-hidden border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="relative aspect-video">
                  <img 
                    src="/images/projects/weather.png" 
                    alt="Weather Forecasting" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Weather Forecasting</h3>
                  <p className="text-gray-400 text-sm mb-4">ML-based weather prediction system.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Python</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">TensorFlow</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">OpenWeather API</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* E-commerce Analytics */}
            <Link href="/projects/ecommerce-analytics" className="group">
              <div className="bg-[#1A2333] rounded-xl overflow-hidden border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="relative aspect-video">
                  <img 
                    src="/images/projects/ecommerce.png" 
                    alt="E-commerce Analytics" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">E-commerce Analytics</h3>
                  <p className="text-gray-400 text-sm mb-4">Data analytics dashboard for e-commerce.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Python</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Pandas</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Plotly</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Face Recognition */}
            <Link href="/projects/face-recognition" className="group">
              <div className="bg-[#1A2333] rounded-xl overflow-hidden border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="relative aspect-video">
                  <img 
                    src="/images/projects/face-recognition.png" 
                    alt="Face Recognition" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Face Recognition</h3>
                  <p className="text-gray-400 text-sm mb-4">Real-time face detection and recognition system.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Python</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">OpenCV</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">dlib</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Stock Market Prediction */}
            <Link href="/projects/stock-market-prediction" className="group">
              <div className="bg-[#1A2333] rounded-xl overflow-hidden border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="relative aspect-video">
                  <img 
                    src="/images/projects/stock-market.png" 
                    alt="Stock Market Prediction" 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">Stock Market Prediction</h3>
                  <p className="text-gray-400 text-sm mb-4">ML-based stock price prediction system.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Python</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">LSTM</span>
                    <span className="px-2 py-1 text-xs rounded bg-emerald-400/10 text-emerald-400">Alpha Vantage API</span>
                  </div>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-[#1A2333] rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Programming Languages</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="bg-[#1A2333] rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Web Development</h3>
              <ul className="space-y-2 text-gray-400">
                <li>HTML/CSS</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="bg-[#1A2333] rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">AI/ML</h3>
              <ul className="space-y-2 text-gray-400">
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Scikit-learn</li>
                <li>NLP</li>
              </ul>
            </div>
            <div className="bg-[#1A2333] rounded-2xl p-6 transform hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30">
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">Tools & Technologies</h3>
              <ul className="space-y-2 text-gray-400">
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