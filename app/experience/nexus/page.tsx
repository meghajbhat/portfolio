'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaArrowLeft, FaFileAlt, FaPython, FaRobot, FaBrain, FaCode } from 'react-icons/fa'

export default function NexusExperience() {
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
          Overview
        </a>
        <a 
          href="#phase1" 
          className={`block text-sm ${activeSection === 'phase1' ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-800'}`}
        >
          First Phase
        </a>
        <a 
          href="#phase2" 
          className={`block text-sm ${activeSection === 'phase2' ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-800'}`}
        >
          Second Phase
        </a>
        <a 
          href="#learnings" 
          className={`block text-sm ${activeSection === 'learnings' ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-800'}`}
        >
          Key Learnings
        </a>
        <a 
          href="#impact" 
          className={`block text-sm ${activeSection === 'impact' ? 'text-emerald-600 font-semibold' : 'text-gray-600 hover:text-gray-800'}`}
        >
          Impact
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
                Summer Internship at Nexus Info
              </h1>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm flex items-center">
                  <FaPython className="mr-2" /> Python
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm flex items-center">
                  <FaBrain className="mr-2" /> AI
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center">
                  <FaCode className="mr-2" /> ML
                </span>
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm flex items-center">
                  <FaRobot className="mr-2" /> Chatbot
                </span>
              </div>
            </div>

            <section id="overview" className="skill-card">
              <h2 className="text-2xl font-semibold gradient-text mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">
                During my summer internship at Nexus Info, I had the opportunity to immerse myself in the world of Artificial Intelligence and Machine Learning. This experience not only enhanced my technical skills but also provided valuable insights into real-world applications of AI and ML technologies.
              </p>
            </section>

            <section id="phase1" className="skill-card">
              <h2 className="text-2xl font-semibold gradient-text mb-4">First Phase: Building the Basics</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Spent the first 15 days working on 2 foundational projects:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>General-purpose chatbot development</li>
                    <li>Specialized chatbot for university admissions FAQ's</li>
                  </ul>
                </li>
                <li>Learned at my own pace while maintaining focus on quality deliverables</li>
                <li>Gained hands-on experience with various AI and ML tasks</li>
              </ul>
            </section>

            <section id="phase2" className="skill-card">
              <h2 className="text-2xl font-semibold gradient-text mb-4">Second Phase: Real-World Projects</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>Advanced to a higher-level project: Disease Prediction System using Machine Learning</li>
                <li>Applied theoretical knowledge to solve real-world problems</li>
                <li>Gained valuable insights into industry challenges</li>
                <li>Developed project management and problem-solving abilities</li>
              </ul>
            </section>

            <section id="learnings" className="skill-card">
              <h2 className="text-2xl font-semibold gradient-text mb-4">Key Learnings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Python Programming</li>
                    <li>AI/ML Frameworks</li>
                    <li>Chatbot Development</li>
                    <li>Machine Learning Models</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Skills</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Project Management</li>
                    <li>Problem Solving</li>
                    <li>Time Management</li>
                    <li>Professional Communication</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="impact" className="skill-card">
              <h2 className="text-2xl font-semibold gradient-text mb-4">Impact and Achievements</h2>
              <p className="text-gray-700 mb-4">
                This internship experience strengthened my technical skills, expanded my professional network, and set a solid foundation for my career in AI and ML. The hands-on experience with real-world projects provided invaluable insights into the industry and prepared me for future professional endeavors.
              </p>
            </section>

            <section id="certificate" className="skill-card">
              <h2 className="text-2xl font-semibold gradient-text mb-4">Certificate</h2>
              <Link 
                href="https://drive.google.com/file/d/1IzhcwqwiGVRYUV0_NIFIPZV8IjY3Ota2/view?usp=drive_link"
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