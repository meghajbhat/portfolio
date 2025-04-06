'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaAward, FaCertificate, FaLaptopCode, FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column - Text Content */}
            <div className="flex-1 space-y-8">
              <h1 className="text-5xl font-bold leading-tight">
                <span className="text-gray-800">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Megha Bhat</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A passionate software developer specializing in AI/ML and web development. Currently pursuing Computer Science at PES University with a CGPA of 7.47/10.
              </p>
              <div className="flex space-x-6">
                <a href="https://github.com/meghajbhat" target="_blank" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  <FaGithub className="text-3xl" />
                </a>
                <a href="https://linkedin.com/in/meghajbhat" target="_blank" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  <FaLinkedin className="text-3xl" />
                </a>
                <a href="https://leetcode.com/meghajbhat" target="_blank" className="text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  <FaCode className="text-3xl" />
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transform rotate-45"></div>
                <div className="absolute inset-0 bg-white rounded-full transform -rotate-45"></div>
                <img 
                  src="/images/profile.jpg" 
                  alt="Megha Bhat" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/experience/cdsaml" className="group">
              <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-600 transition-colors duration-300">CDSAML</h3>
                <p className="text-gray-600 mb-4">Research Intern</p>
                <p className="text-gray-700">Worked on measuring and reducing hallucinations in LLMs, focusing on improving model accuracy and reliability.</p>
              </div>
            </Link>
            <Link href="/experience/nexus" className="group">
              <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-600 transition-colors duration-300">Nexus Info</h3>
                <p className="text-gray-600 mb-4">Software Development Intern</p>
                <p className="text-gray-700">Developed and implemented software solutions, gaining hands-on experience in real-world projects.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/projects/patient-records-management-system" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative">
                  <img 
                    src="/images/projects/patient-records.png" 
                    alt="Patient Records Management System" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-300">Patient Records Management System</h3>
                  <p className="text-gray-600">A comprehensive healthcare management system built with Python Flask.</p>
                </div>
              </div>
            </Link>
            <Link href="/projects/university-admission-chatbot" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative">
                  <img 
                    src="/images/projects/admission-chatbot.png" 
                    alt="University Admission Chatbot" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-300">University Admission Chatbot</h3>
                  <p className="text-gray-600">An AI-powered chatbot for university admissions using AIML and TensorFlow.</p>
                </div>
              </div>
            </Link>
            <Link href="/projects/music-playlist-generator" className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative">
                  <img 
                    src="/images/projects/music-playlist.png" 
                    alt="Music Playlist Generator" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors duration-300">Music Playlist Generator</h3>
                  <p className="text-gray-600">A web application that creates personalized music playlists based on user preferences.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">Programming Languages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">Web Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>HTML/CSS</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">AI/ML</h3>
              <ul className="space-y-2 text-gray-700">
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>Scikit-learn</li>
                <li>NLP</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-emerald-700">Tools & Technologies</h3>
              <ul className="space-y-2 text-gray-700">
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
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">PES University</h3>
            <p className="text-gray-600 mb-2">Bachelor of Technology in Computer Science</p>
            <p className="text-gray-700">2021 - Present | CGPA: 7.47/10</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Contact</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a href="mailto:meghajbhat@gmail.com" className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              <FaEnvelope className="mr-2 text-xl" />
              meghajbhat@gmail.com
            </a>
            <a href="tel:+919876543210" className="flex items-center text-gray-600 hover:text-emerald-600 transition-colors duration-300">
              <FaPhone className="mr-2 text-xl" />
              +91 9876543210
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 