'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function NexusPage() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card-3d')
      cards.forEach((card: Element) => {
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        const rotateX = (y - 0.5) * 20
        const rotateY = (x - 0.5) * 20
        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-[#0B1121] py-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0B1121]/80 backdrop-blur-sm border-b border-emerald-500/20 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/#experience" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <FaArrowLeft />
            <span>Back to Experience</span>
          </Link>
          <a 
            href="https://drive.google.com/file/d/1IzhcwqwiGVRYUV0_NIFIPZV8IjY3Ota2/view?usp=drive_link"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all"
          >
            View Certificate
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-4 mt-12">
        {/* Project Header */}
        <div className="card-3d relative bg-[#1A2333]/50 rounded-2xl p-8 border border-emerald-500/20 mb-12 transform transition-all duration-500">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">AI/ML Internship at Nexus Info</h1>
            <p className="text-emerald-400">Summer Internship • AI/ML Intern</p>
          </div>
        </div>

        {/* Phase 1: Conversational AI */}
        <div className="card-3d relative bg-[#1A2333]/50 rounded-2xl p-8 border border-emerald-500/20 mb-8 transform transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4">🔹 Phase 1: Conversational AI (Chatbots)</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Projects:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Developed a general-purpose chatbot using NLP techniques</li>
                <li>Built a specialized university admission chatbot to answer FAQs for prospective students</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Skills Applied:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Natural Language Processing (NLP)</li>
                <li>Intent recognition, entity extraction</li>
                <li>Dialog management and response generation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Highlights:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Focused on user-friendly interactions and high accuracy</li>
                <li>Gained confidence in integrating ML models with real-world use cases</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phase 2: Disease Prediction */}
        <div className="card-3d relative bg-[#1A2333]/50 rounded-2xl p-8 border border-emerald-500/20 mb-8 transform transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4">🔹 Phase 2: Disease Prediction System</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Project Overview:</h3>
              <p>Built an ML-powered tool to predict possible diseases based on user symptoms</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Approach:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Collected and preprocessed medical datasets</li>
                <li>Used classification algorithms (Decision Trees, Random Forests, SVM)</li>
                <li>Tuned models for performance using evaluation metrics</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Outcome:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Developed a predictive model with real-world healthcare relevance</li>
                <li>Learned how to translate domain challenges into AI solutions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills & Takeaways */}
        <div className="card-3d relative bg-[#1A2333]/50 rounded-2xl p-8 border border-emerald-500/20 transform transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4">🚀 Skills & Takeaways</h2>
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Technical Skills:</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">Python</span>
                <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">scikit-learn</span>
                <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">pandas</span>
                <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">NLP</span>
                <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">ML algorithms</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Soft Skills:</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">Problem-solving</span>
                <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">Teamwork</span>
                <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">Communication</span>
                <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">Project management</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Impact:</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Strengthened core AI/ML foundations</li>
                <li>Applied theory to real business challenges</li>
                <li>Worked in a collaborative, fast-paced environment</li>
                <li>Built projects from scratch with real-world value</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 