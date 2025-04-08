'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { FaGithub, FaArrowLeft, FaCode, FaBrain, FaRobot, FaDatabase, FaExternalLinkAlt } from 'react-icons/fa'

export default function NexusPage() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card-3d')
      const rect = document.body.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      
      cards.forEach((card) => {
        const cardRect = (card as HTMLElement).getBoundingClientRect()
        const cardCenterX = cardRect.left + cardRect.width / 2
        const cardCenterY = cardRect.top + cardRect.height / 2
        
        const angleX = (mouseY - cardCenterY) / 30
        const angleY = (mouseX - cardCenterX) / 30
        
        (card as HTMLElement).style.transform = `rotateX(${-angleX}deg) rotateY(${angleY}deg)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-[#0B1121] text-white pt-20 pb-32">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-[#0B1121]/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link 
            href="/#experience" 
            className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Experience</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Experience Header */}
        <div className="card-3d relative rounded-2xl overflow-hidden bg-[#1A2333]/50 backdrop-blur-sm border border-purple-500/20 p-12 mb-12 hover:border-purple-500/40 transition-colors duration-500">
          {/* Floating Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
          
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
            <FaBrain className="text-4xl text-purple-400 relative z-10 animate-float" />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AIML Intern - Nexus
            </h1>
            <span className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
              Completed
            </span>
          </div>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl">
            Worked on developing and implementing machine learning models for various applications, focusing on computer vision and natural language processing tasks.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
              Python
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
              PyTorch
            </span>
            <span className="px-4 py-2 rounded-xl bg-[#0B1121] text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors">
              OpenCV
            </span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Computer Vision */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaCode className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Computer Vision</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Image classification and object detection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Feature extraction and analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Real-time video processing
                </li>
              </ul>
            </div>
          </div>

          {/* NLP Tasks */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaRobot className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">NLP Tasks</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Text classification and sentiment analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Named entity recognition
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Language modeling
                </li>
              </ul>
            </div>
          </div>

          {/* Model Development */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaBrain className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Model Development</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Custom model architectures
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Transfer learning implementation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Model optimization and fine-tuning
                </li>
              </ul>
            </div>
          </div>

          {/* Data Processing */}
          <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
                <FaDatabase className="text-2xl text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold">Data Processing</h2>
            </div>
            <div className="space-y-4 text-gray-400">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Data cleaning and preprocessing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Feature engineering
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Dataset augmentation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="card-3d bg-[#1A2333]/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-500">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#0B1121] border border-purple-500/30 flex items-center justify-center">
              <FaCode className="text-2xl text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold">Technical Implementation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Core Technologies</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Python for ML development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  PyTorch for deep learning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  OpenCV for computer vision
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Key Achievements</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Developed custom ML models
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Implemented real-time processing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  Optimized model performance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 