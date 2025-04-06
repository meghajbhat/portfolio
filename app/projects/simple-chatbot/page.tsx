'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function SimpleChatbotProject() {
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
                Simple Chatbot
              </span>
            </h1>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/meghajbhat/simple-chatbot" 
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
              This project is a simple chatbot that uses OpenAI's GPT-3.5-turbo model. It consists of a client and a server script that communicate over HTTP. The server handles the interaction with the OpenAI API, and the client provides a simple command-line interface for users to interact with the chatbot.
            </p>
          </section>

          {/* Features Section */}
          <section className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Core Features</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Natural language processing</li>
                  <li>Real-time responses</li>
                  <li>Command-line interface</li>
                  <li>HTTP communication</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Technical Features</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>OpenAI API integration</li>
                  <li>Client-server architecture</li>
                  <li>Error handling</li>
                  <li>Response formatting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="bg-[#1A2333] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
            <h2 className="text-2xl font-bold mb-6 text-emerald-400">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Backend</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Python</li>
                  <li>Flask</li>
                  <li>OpenAI API</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Frontend</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Command-line interface</li>
                  <li>HTTP client</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Tools</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Git</li>
                  <li>JSON</li>
                  <li>HTTP protocols</li>
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
git clone https://github.com/meghajbhat/simple-chatbot.git

# Navigate to project directory
cd simple-chatbot

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Add your OpenAI API key to .env file

# Run the server
python server.py

# In a new terminal, run the client
python client.py`}</code>
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
} 