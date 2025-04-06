'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function PhotoEditorProject() {
  return (
    <main className="min-h-screen bg-[#0B1121] text-white">
      {/* Back Button */}
      <div className="fixed top-24 left-4 z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 bg-[#1A2333] rounded-lg text-gray-400 hover:text-emerald-400 transition-colors duration-300 border border-emerald-500/10 hover:border-emerald-500/30"
        >
          <span>←</span> Back
        </Link>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-32">
        <div className="space-y-16">
          {/* Header */}
          <header className="text-center space-y-6">
            <h1 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Photo Editor
              </span>
            </h1>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/meghajbhat/photo-editor" 
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-[#1A2333] rounded-lg text-gray-400 hover:text-emerald-400 transition-colors duration-300 border border-emerald-500/10 hover:border-emerald-500/30"
              >
                <FaGithub className="text-xl" />
                <span>View on GitHub</span>
              </a>
            </div>
          </header>

          {/* Overview Section */}
          <section className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Overview</h2>
            <p className="text-gray-400 leading-relaxed">
              This project aims to provide users with a seamless and intuitive platform for easy photo modification. It enables users to enhance their photos effortlessly by adding filters and cropping images. Featuring a user-friendly interface and a wide array of customization options, this platform is designed to transform how individuals engage with and modify their photos.
            </p>
          </section>

          {/* Features Section */}
          <section className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Image Processing</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Basic image adjustments</li>
                  <li>Filter application</li>
                  <li>Image cropping</li>
                  <li>Rotation and flipping</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">User Interface</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Intuitive controls</li>
                  <li>Real-time preview</li>
                  <li>Undo/Redo functionality</li>
                  <li>Save in multiple formats</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Core</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Python</li>
                  <li>OpenCV</li>
                  <li>NumPy</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">UI</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Tkinter</li>
                  <li>PIL/Pillow</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Tools</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Git</li>
                  <li>Virtual Environment</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Functions Section */}
          <section className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Key Functions</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Image Processing</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Brightness and contrast adjustment</li>
                  <li>Color balance and saturation</li>
                  <li>Image sharpening and blurring</li>
                  <li>Custom filter application</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">File Operations</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Multiple format support (PNG, JPEG, etc.)</li>
                  <li>Batch processing capabilities</li>
                  <li>Export with custom settings</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Installation Section */}
          <section className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Installation</h2>
            <div className="space-y-6">
              <p className="text-gray-400">Follow these steps to set up the project locally:</p>
              <div className="bg-[#0B1121] rounded-lg p-4 font-mono text-sm">
                <pre className="text-gray-400">
                  <code>{`# Clone the repository
git clone https://github.com/meghajbhat/photo-editor.git

# Navigate to project directory
cd photo-editor

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate  # Linux/Mac
venv\\Scripts\\activate   # Windows

# Install dependencies
pip install -r requirements.txt

# Run the application
python main.py`}</code>
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 