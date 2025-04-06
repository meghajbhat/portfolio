'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaAward, FaCertificate, FaLaptopCode, FaArrowRight } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold gradient-text">MB</span>
            <div className="flex space-x-2">
              <a href="#" className="nav-link">Home</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#education" className="nav-link">Education</a>
              <a href="#certifications" className="nav-link">Certifications</a>
              <a href="#achievements" className="nav-link">Achievements</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold mb-4 gradient-text">Megha Bhat</h1>
            <p className="text-xl text-gray-600">Computer Science Student at PES University</p>
            <p className="text-lg text-gray-700">CGPA: 7.47/10</p>
            
            <div className="flex justify-center space-x-6 mt-8">
              <Link href="https://github.com/meghajbhat" target="_blank" 
                className="contact-link">
                <FaGithub size={24} />
                <span>GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/megha-bhat-20baaa293/" target="_blank"
                className="contact-link">
                <FaLinkedin size={24} />
                <span>LinkedIn</span>
              </Link>
              <Link href="https://leetcode.com/u/meghajbhat/" target="_blank"
                className="contact-link">
                <FaCode size={24} />
                <span>LeetCode</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="skill-card hover:shadow-lg transition-shadow">
              <Link href="/experience/cdsaml" className="block p-6">
                <h3 className="text-2xl font-semibold mb-2 gradient-text">Research Intern at CDSAML</h3>
                <p className="text-gray-600 mb-4">Jan 2024 - Present</p>
                <p className="text-gray-700 mb-4">
                  Working on measuring and reducing hallucinations in Large Language Models, focusing on improving model reliability and accuracy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">LLMs</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">NLP</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Research</span>
                </div>
              </Link>
            </div>

            <div className="skill-card hover:shadow-lg transition-shadow">
              <Link href="/experience/nexus" className="block p-6">
                <h3 className="text-2xl font-semibold mb-2 gradient-text">Summer Intern at Nexus Info</h3>
                <p className="text-gray-600 mb-4">June 2023 - July 2023</p>
                <p className="text-gray-700 mb-4">
                  Developed AI/ML projects including chatbots and a disease prediction system, gaining hands-on experience with real-world applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">AI</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">ML</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {/* Patient Records Management System */}
            <div className="group">
              <Link href="/projects/patient-records-management-system" className="block">
                <div className="skill-card hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src="/images/projects/patient-records.png" 
                          alt="Patient Records Management System" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4 gradient-text group-hover:text-emerald-600">Patient Records Management System</h3>
                      <p className="text-gray-700 mb-4">
                        A comprehensive web-based healthcare management system built with Python Flask. Features include patient records management, appointment scheduling, prescription tracking, and billing management.
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Technologies: Python, Flask, SQLite, HTML, CSS, Bootstrap, Jinja2</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="inline-flex items-center text-emerald-600 group-hover:text-emerald-700">
                          <span className="mr-2">View Details</span>
                          <FaArrowRight />
                        </span>
                        <Link
                          href="https://github.com/meghajbhat/Patient-Records-Management-System"
                          target="_blank"
                          className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="mr-2" />
                          View on GitHub
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* University Admission Chatbot */}
            <div className="group">
              <Link href="/projects/university-admission-chatbot" className="block">
                <div className="skill-card hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src="/images/projects/admission-chatbot.png" 
                          alt="University Admission Chatbot" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4 gradient-text group-hover:text-emerald-600">University Admission Chatbot</h3>
                      <p className="text-gray-700 mb-4">
                        An intelligent chatbot powered by AIML and TensorFlow that assists prospective students with admission inquiries, course information, and campus details.
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Technologies: Python, TensorFlow, AIML, Natural Language Processing, Flask</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="inline-flex items-center text-emerald-600 group-hover:text-emerald-700">
                          <span className="mr-2">View Details</span>
                          <FaArrowRight />
                        </span>
                        <Link
                          href="https://github.com/meghajbhat/University-Admission-Chatbot"
                          target="_blank"
                          className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="mr-2" />
                          View on GitHub
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Simple Chatbot */}
            <div className="group">
              <Link href="/projects/simple-chatbot" className="block">
                <div className="skill-card hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src="/images/projects/simple-chatbot.png" 
                          alt="Simple Chatbot" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4 gradient-text group-hover:text-emerald-600">Simple Chatbot</h3>
                      <p className="text-gray-700 mb-4">
                        A modern chatbot implementation using OpenAI's GPT-3.5-turbo model. Features client-server architecture with HTTP communication, OpenAI API integration, and a user-friendly command-line interface.
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Technologies: Python, OpenAI API, HTTP, JSON, Command-line Interface</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="inline-flex items-center text-emerald-600 group-hover:text-emerald-700">
                          <span className="mr-2">View Details</span>
                          <FaArrowRight />
                        </span>
                        <Link
                          href="https://github.com/meghajbhat/simple-chatbot"
                          target="_blank"
                          className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="mr-2" />
                          View on GitHub
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Music Playlist Generator */}
            <div className="group">
              <Link href="/projects/music-playlist-generator" className="block">
                <div className="skill-card hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src="/images/projects/music-playlist.png" 
                          alt="Music Playlist Generator" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4 gradient-text group-hover:text-emerald-600">Music Playlist Generator</h3>
                      <p className="text-gray-700 mb-4">
                        A C-based music management system with YouTube integration. Features include playlist creation, song discovery, and advanced playback controls.
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Technologies: C, File Handling, Data Structures, YouTube API</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="inline-flex items-center text-emerald-600 group-hover:text-emerald-700">
                          <span className="mr-2">View Details</span>
                          <FaArrowRight />
                        </span>
                        <Link
                          href="https://github.com/meghajbhat/Music-Playlist-Generator"
                          target="_blank"
                          className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub className="mr-2" />
                          View on GitHub
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Photo Editor */}
            <div className="group">
              <Link href="/projects/photo-editor" className="block">
                <div className="skill-card hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src="/images/projects/photo-editor.png" 
                          alt="Photo Editor" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4 gradient-text group-hover:text-emerald-600">Photo Editor</h3>
                      <p className="text-gray-700 mb-4">
                        A feature-rich photo editing application with filters, effects, and basic image manipulation tools.
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Technologies: Python, OpenCV, NumPy, Tkinter</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="inline-flex items-center text-emerald-600 group-hover:text-emerald-700">
                          <span className="mr-2">View Details</span>
                          <FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Calendar + Timetable */}
            <div className="group">
              <Link href="/projects/calendar-timetable" className="block">
                <div className="skill-card hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src="/images/projects/calendar.png" 
                          alt="Calendar and Timetable" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4 gradient-text group-hover:text-emerald-600">Calendar + Timetable</h3>
                      <p className="text-gray-700 mb-4">
                        A comprehensive calendar and timetable management application for organizing schedules and events.
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Technologies: Python, SQLite, Tkinter, iCalendar</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="inline-flex items-center text-emerald-600 group-hover:text-emerald-700">
                          <span className="mr-2">View Details</span>
                          <FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Dining Cost Estimator */}
            <div className="group">
              <Link href="/projects/dining-cost-estimator" className="block">
                <div className="skill-card hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src="/images/projects/dining.png" 
                          alt="Dining Cost Estimator" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4 gradient-text group-hover:text-emerald-600">Dining Cost Estimator for Two</h3>
                      <p className="text-gray-700 mb-4">
                        An application to estimate and split dining costs between two people, with features for tax and tip calculation.
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Technologies: C++, STL, File I/O</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="inline-flex items-center text-emerald-600 group-hover:text-emerald-700">
                          <span className="mr-2">View Details</span>
                          <FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Speech Coach */}
            <div className="group">
              <Link href="/projects/speech-coach" className="block">
                <div className="skill-card hover:shadow-lg transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img 
                          src="/images/projects/speech.png" 
                          alt="Speech Coach" 
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-4 gradient-text group-hover:text-emerald-600">Speech Coach</h3>
                      <p className="text-gray-700 mb-4">
                        An interactive application designed to help improve public speaking skills through practice and feedback.
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Technologies: Python, Speech Recognition, Natural Language Processing, Audio Processing</p>
                      </div>
                      <div className="flex gap-4">
                        <span className="inline-flex items-center text-emerald-600 group-hover:text-emerald-700">
                          <span className="mr-2">View Details</span>
                          <FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Updated with your comprehensive skill set */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="section-title">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="skill-card">
              <h3 className="font-semibold text-lg mb-6 gradient-text">Programming Languages</h3>
              <ul className="space-y-3">
                {["C++", "Python", "C", "GOLang", "Kotlin", "JavaScript", "MATLAB"].map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="skill-card">
              <h3 className="font-semibold text-lg mb-6 gradient-text">Libraries & Frameworks</h3>
              <ul className="space-y-3">
                {[
                  "OpenCV",
                  "React",
                  "Scikit-Learn",
                  "Node.js",
                  "TensorFlow",
                  "Flask",
                  "Flutter"
                ].map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="skill-card">
              <h3 className="font-semibold text-lg mb-6 gradient-text">Tools & Platforms</h3>
              <ul className="space-y-3">
                {[
                  "Google Colab",
                  "GitHub",
                  "Kaggle",
                  "VS Code",
                  "Apache Kafka",
                  "MongoDB",
                  "MySQL"
                ].map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section - Updated with all your education */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="section-title">Education</h2>
          <div className="space-y-6">
            <div className="skill-card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold gradient-text">PES University</h3>
                  <p className="text-lg text-gray-700">Computer Science Bachelors</p>
                  <p className="text-gray-600">CGPA: 7.47</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-700">September 2022 - May 2026</p>
                  <p className="text-gray-600">Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold gradient-text">BASE PU COLLEGE</h3>
                  <p className="text-gray-700">Physics, Chemistry, Mathematics, Computer Science</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-700">July 2020 - May 2022</p>
                  <p className="text-gray-600">Bengaluru, India</p>
                </div>
              </div>
            </div>

            <div className="skill-card">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold gradient-text">PSBB LLA</h3>
                  <p className="text-gray-700">Physics, Chemistry, Social Science, Mathematics</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-700">July 2019 - July 2020</p>
                  <p className="text-gray-600">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="section-title">Honors & Awards</h2>
          <div className="space-y-6">
            <div className="skill-card">
              <h3 className="text-xl font-semibold gradient-text mb-4">Research & Projects</h3>
              <ul className="space-y-4">
                <li className="text-gray-700">
                  <span className="font-semibold">MEASURING AND REDUCING HALLUCINATIONS IN LLMs</span> (2024-present) - 
                  Developing techniques like React Prompting and Chain of Verification to detect and minimize hallucinations in LLMs.
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">ADAPTIVE TECHNOLOGY FOR AUTISM SUPPORT</span> (2024-present) - 
                  Developing an innovative solution for enhancing communication, learning, and social interaction for individuals with Autism Spectrum Disorder (ASD).
                </li>
              </ul>
            </div>

            <div className="skill-card">
              <h3 className="text-xl font-semibold gradient-text mb-4">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Get Started With Jira Work Management",
                    org: "Atlassian",
                    link: "/certificates/jira",
                    date: "March 2024"
                  },
                  {
                    name: "Introduction to Generative AI for Software Development",
                    org: "Coursera",
                    link: "/certificates/gen-ai",
                    date: "February 2024"
                  },
                  {
                    name: "Pandas",
                    org: "KAGGLE",
                    link: "/certificates/pandas",
                    date: "January 2024"
                  },
                  {
                    name: "Intro To Machine Learning",
                    org: "KAGGLE",
                    link: "/certificates/ml-intro",
                    date: "December 2023"
                  },
                  {
                    name: "What is Data Science?",
                    org: "Coursera",
                    link: "/certificates/data-science",
                    date: "November 2023"
                  },
                  {
                    name: "GDSC",
                    org: "PESU",
                    link: "/certificates/gdsc",
                    date: "October 2023"
                  },
                  {
                    name: "ChatGPT and AI Tools",
                    org: "Skill Nation",
                    link: "/certificates/chatgpt",
                    date: "September 2023"
                  },
                  {
                    name: "Introduction to OpenCV Using Python",
                    org: "PESU IO",
                    link: "/certificates/opencv",
                    date: "August 2023"
                  },
                  {
                    name: "Getting Started With Python",
                    org: "Coursera",
                    link: "/certificates/python",
                    date: "July 2023"
                  }
                ].map((cert) => (
                  <Link 
                    key={cert.name} 
                    href={cert.link}
                    className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <FaCertificate className="text-emerald-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="font-medium text-gray-800 group-hover:text-emerald-600 transition-colors">{cert.name}</p>
                      <p className="text-sm text-gray-600">{cert.org}</p>
                      <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="skill-card">
              <h3 className="text-xl font-semibold gradient-text mb-4">Additional Achievements</h3>
              <ul className="space-y-4">
                <li className="text-gray-700">
                  <span className="font-semibold">DAC SCHOLARSHIP</span> - Received twice for maintaining good SGPA
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">NEXGEN HACKATHON (2024)</span> - Top 8 teams finalist
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">EPOCH AURA HACKATHON (2023)</span> - Top 10 teams in Datathon
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">PROFESSIONAL SPEAKER (2022)</span> - Conducted science education sessions in multiple languages
                </li>
                <li className="text-gray-700">
                  <span className="font-semibold">AVOCATIONS</span> - National level artist, violinist & Bharatnatyam dancer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="section-title">Contact Me</h2>
          <div className="skill-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="mailto:meghajbhat@gmail.com" className="contact-link">
                <FaEnvelope size={20} />
                <span>meghajbhat@gmail.com</span>
              </Link>
              <div className="contact-link">
                <FaPhone size={20} />
                <span>+91 9900043002</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="https://github.com/meghajbhat" target="_blank" 
                className="gradient-btn">
                <div className="flex items-center gap-2">
                  <FaGithub size={20} />
                  <span>GitHub</span>
                </div>
              </Link>
              <Link href="https://www.linkedin.com/in/megha-bhat-20baaa293/" target="_blank"
                className="gradient-btn">
                <div className="flex items-center gap-2">
                  <FaLinkedin size={20} />
                  <span>LinkedIn</span>
                </div>
              </Link>
              <Link href="https://leetcode.com/u/meghajbhat/" target="_blank"
                className="gradient-btn">
                <div className="flex items-center gap-2">
                  <FaCode size={20} />
                  <span>LeetCode</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

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