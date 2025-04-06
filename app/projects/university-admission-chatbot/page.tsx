'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaArrowLeft } from 'react-icons/fa'

export default function UniversityAdmissionChatbotProject() {
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
                src="/images/projects/admission-chatbot.png"
                alt="University Admission Chatbot Interface"
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
                <a href="#key-functionalities" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Key Functionalities</a>
                <a href="#installation" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Installation</a>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 gradient-text">University Admission Chatbot</h1>
                <Link 
                  href="https://github.com/meghajbhat/University-Admission-Chatbot"
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
                  The ABC University Admission Chatbot is an intelligent conversational agent designed to streamline the admission process for prospective students. Powered by AIML and TensorFlow, this chatbot provides accurate and timely information about admission procedures, courses, campus facilities, and more, making the admission journey smoother for applicants.
                </p>
              </div>

              <div id="features" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">🚀 Features</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Responses</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Admission deadlines and requirements</li>
                      <li>Course offerings and program details</li>
                      <li>Transportation and logistics information</li>
                      <li>Fee structure and payment options</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Campus Information</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Housing options and accommodation details</li>
                      <li>Dining facilities and meal plans</li>
                      <li>Recreational activities and facilities</li>
                      <li>Campus safety and security measures</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Application Assistance</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Document requirements and submission guidelines</li>
                      <li>Application process walkthrough</li>
                      <li>Important deadlines and dates</li>
                      <li>Status tracking information</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="tech-stack" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">🛠️ Technology Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Core Technologies</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Python</li>
                      <li>AIML (Artificial Intelligence Markup Language)</li>
                      <li>TensorFlow</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Additional Tools</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>JSON for data storage</li>
                      <li>Pickle for model serialization</li>
                      <li>H5 for deep learning models</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="key-functionalities" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">🔑 Key Functionalities</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Advanced text processing for accurate query understanding</li>
                      <li>Context-aware responses for better conversation flow</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Intelligent Response System</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Dynamic response generation based on user queries</li>
                      <li>Continuous learning from interactions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">User Experience</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Simple command-line interface for easy interaction</li>
                      <li>Quick and accurate responses to user queries</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="installation" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">⚙️ Installation</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">To run the chatbot locally:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`# Clone the repository
git clone https://github.com/meghajbhat/University-Admission-Chatbot.git

# Navigate to project directory
cd University-Admission-Chatbot

# Install dependencies
pip install -r requirements.txt

# Run the chatbot
python main.py`}
                  </pre>
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