'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaArrowLeft } from 'react-icons/fa'

export default function UniversityAdmissionChatbotProject() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Project Content */}
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button with enhanced styling */}
          <div className="mb-12">
            <Link 
              href="/#projects" 
              className="inline-flex items-center px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 hover:text-emerald-600"
            >
              <FaArrowLeft className="mr-2" />
              Back to Projects
            </Link>
          </div>

          {/* Hero Image with enhanced container */}
          <div className="mb-16">
            <div className="relative aspect-[16/9] w-full md:w-4/5 lg:w-3/4 mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/projects/admission-chatbot.png"
                alt="University Admission Chatbot Interface"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Vertical Navigation with enhanced styling */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="sticky top-32 space-y-2 p-4 bg-white rounded-2xl shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Navigation</h3>
                <a href="#overview" className="block px-4 py-3 rounded-lg hover:bg-emerald-50 transition-all text-gray-600 hover:text-emerald-600 hover:translate-x-1 duration-200">Overview</a>
                <a href="#features" className="block px-4 py-3 rounded-lg hover:bg-emerald-50 transition-all text-gray-600 hover:text-emerald-600 hover:translate-x-1 duration-200">Features</a>
                <a href="#tech-stack" className="block px-4 py-3 rounded-lg hover:bg-emerald-50 transition-all text-gray-600 hover:text-emerald-600 hover:translate-x-1 duration-200">Technology Stack</a>
                <a href="#key-functionalities" className="block px-4 py-3 rounded-lg hover:bg-emerald-50 transition-all text-gray-600 hover:text-emerald-600 hover:translate-x-1 duration-200">Key Functionalities</a>
                <a href="#installation" className="block px-4 py-3 rounded-lg hover:bg-emerald-50 transition-all text-gray-600 hover:text-emerald-600 hover:translate-x-1 duration-200">Installation</a>
              </div>
            </div>

            {/* Main Content with enhanced cards */}
            <div className="flex-1 space-y-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">University Admission Chatbot</h1>
                <Link 
                  href="https://github.com/meghajbhat/University-Admission-Chatbot"
                  target="_blank"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-300"
                >
                  <FaGithub className="mr-2 text-xl" />
                  View on GitHub
                </Link>
              </div>

              <div id="overview" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32 transform hover:shadow-xl transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">📚</span>
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Overview</span>
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The ABC University Admission Chatbot is an intelligent conversational agent designed to streamline the admission process for prospective students. Powered by AIML and TensorFlow, this chatbot provides accurate and timely information about admission procedures, courses, campus facilities, and more, making the admission journey smoother for applicants.
                </p>
              </div>

              <div id="features" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32 transform hover:shadow-xl transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">🚀</span>
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Features</span>
                </h2>
                <div className="space-y-8">
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Comprehensive Responses</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      <li className="hover:text-emerald-600 transition-colors duration-200">Admission deadlines and requirements</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Course offerings and program details</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Transportation and logistics information</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Fee structure and payment options</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Campus Information</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      <li className="hover:text-emerald-600 transition-colors duration-200">Housing options and accommodation details</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Dining facilities and meal plans</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Recreational activities and facilities</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Campus safety and security measures</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Application Assistance</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      <li className="hover:text-emerald-600 transition-colors duration-200">Document requirements and submission guidelines</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Application process walkthrough</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Important deadlines and dates</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Status tracking information</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="tech-stack" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32 transform hover:shadow-xl transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">🛠️</span>
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Technology Stack</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Core Technologies</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      <li className="hover:text-emerald-600 transition-colors duration-200">Python</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">AIML (Artificial Intelligence Markup Language)</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">TensorFlow</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Additional Tools</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      <li className="hover:text-emerald-600 transition-colors duration-200">JSON for data storage</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Pickle for model serialization</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">H5 for deep learning models</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="key-functionalities" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32 transform hover:shadow-xl transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">🔑</span>
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Key Functionalities</span>
                </h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Natural Language Processing</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      <li className="hover:text-emerald-600 transition-colors duration-200">Advanced text processing for accurate query understanding</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Context-aware responses for better conversation flow</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700">Intelligent Response System</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      <li className="hover:text-emerald-600 transition-colors duration-200">Dynamic response generation based on user queries</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Continuous learning from interactions</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700">User Experience</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      <li className="hover:text-emerald-600 transition-colors duration-200">Simple command-line interface for easy interaction</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Quick and accurate responses to user queries</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="installation" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32 transform hover:shadow-xl transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">⚙️</span>
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Installation</span>
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 text-lg">To run the chatbot locally:</p>
                  <pre className="bg-gray-50 p-6 rounded-xl overflow-x-auto font-mono text-sm">
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