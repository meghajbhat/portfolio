'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaArrowLeft } from 'react-icons/fa'

export default function SimpleChatbotProject() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold gradient-text">MB</span>
            <div className="flex space-x-2">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/#experience" className="nav-link">Experience</Link>
              <Link href="/#projects" className="nav-link">Projects</Link>
              <Link href="/#skills" className="nav-link">Skills</Link>
              <Link href="/#education" className="nav-link">Education</Link>
              <Link href="/#certifications" className="nav-link">Certifications</Link>
              <Link href="/#achievements" className="nav-link">Achievements</Link>
              <Link href="/#contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Project Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link href="/#projects" className="inline-flex items-center text-gray-600 hover:text-gray-800">
              <FaArrowLeft className="mr-2" />
              Back to Projects
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <div className="relative aspect-[16/9] w-2/3 mx-auto rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/projects/simple-chatbot.png"
                alt="Simple Chatbot Interface"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex gap-8">
            {/* Vertical Navigation */}
            <div className="w-64 flex-shrink-0">
              <div className="sticky top-32 space-y-2">
                <a href="#overview" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Overview</a>
                <a href="#features" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Features</a>
                <a href="#tech-stack" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Technology Stack</a>
                <a href="#installation" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Installation</a>
                <a href="#usage" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Usage</a>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 gradient-text">Simple Chatbot</h1>
                <Link 
                  href="https://github.com/meghajbhat/Simple-Chatbot"
                  target="_blank"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </Link>
              </div>

              <div id="overview" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">📚 Overview</h2>
                <p className="text-gray-700">
                  A modern chatbot implementation that leverages OpenAI's GPT-3.5-turbo model. The project consists of a client-server architecture where the server handles OpenAI API interactions while the client provides a clean command-line interface for users to interact with the chatbot.
                </p>
              </div>

              <div id="features" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">🚀 Features</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Simple and intuitive command-line interface for chatting with GPT-3.5-turbo</li>
                  <li>Proxy server that handles API requests and responses</li>
                  <li>Maintains conversation history for context-aware responses</li>
                  <li>Secure communication with OpenAI API</li>
                  <li>Easy-to-use client interface with clear commands</li>
                </ul>
              </div>

              <div id="tech-stack" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">🛠️ Technology Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Core Technologies</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Python</li>
                      <li>OpenAI API</li>
                      <li>HTTP Protocol</li>
                      <li>JSON</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Development Tools</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Virtual Environment</li>
                      <li>Git Version Control</li>
                      <li>Command Line Interface</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="installation" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">⚙️ Installation</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">1. Clone the Repository</h3>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>git clone https://github.com/meghajbhat/AIML-Project-Series1.git
cd AIML-Project-Series1
cd "ChatGPT-API-Simple-Chatbot"</code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">2. Set Up Virtual Environment</h3>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate</code>
                    </pre>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3. Install Dependencies</h3>
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>pip install -r requirements.txt</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div id="usage" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">📝 Usage</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Running the Server</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Open a terminal and navigate to the project directory</li>
                      <li>Start the server:
                        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                          <code>python basicserver.py</code>
                        </pre>
                      </li>
                      <li>The server will start on port 65432</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Running the Client</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Open another terminal and navigate to the project directory</li>
                      <li>Start the client:
                        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                          <code>python basicclient.py</code>
                        </pre>
                      </li>
                      <li>Type your questions and interact with the chatbot</li>
                      <li>Type 'exit' to quit the client</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <p className="text-center text-gray-600">
            © 2024 Megha Bhat. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
} 