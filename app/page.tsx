'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaAward, FaCertificate, FaLaptopCode } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold gradient-text">MB</span>
            <div className="flex space-x-2">
              <a href="#about" className="nav-link">About</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#education" className="nav-link">Education</a>
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
            <p className="text-md text-gray-600">National level artist, violinist & Bharatnatyam dancer</p>
            
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
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="section-title">Experience</h2>
          <div className="space-y-6">
            <div className="skill-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold gradient-text">CDSAML | Research Intern</h3>
                  <p className="text-gray-600">Bengaluru, India</p>
                </div>
                <p className="text-gray-600">July 2024 – August 2024</p>
              </div>
              <p className="text-gray-700 mb-4">Project: Measuring and Reducing Hallucinations in LLMs</p>
              <p className="text-gray-600">Generated 10,000 hallucinated samples each for QA, dialogue, and summarization tasks using HotpotQA, OpenDialKG, and CNN/Daily Mail datasets. Designed both one-pass(one-turn) and conversational(multi-turn) methods to induce hallucinations using the general code, React and Chain Of Verification processes.</p>
            </div>

            <div className="skill-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold gradient-text">NEXUS | AIML Intern</h3>
                  <p className="text-gray-600">Bengaluru, India</p>
                </div>
                <p className="text-gray-600">May 2024 – June 2024</p>
              </div>
              <p className="text-gray-600">Spent the month working on 2 foundational AIML projects making a (i) chatbot and (ii)chatbot specifically designed for university admissions FAQ's.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="skill-card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold gradient-text">Patient Records Management System</h3>
                <div className="text-sm text-gray-600">MySQL, Python, HTML, Flask</div>
              </div>
              <p className="text-gray-600">A web-based application designed for efficient management of hospital operations, including patient records, appointments, prescriptions, and billing. Built with Python Flask, it provides role-based access for administrators, doctors, and patients, ensuring streamlined workflows and secure data handling.</p>
            </div>

            <div className="skill-card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold gradient-text">Speech Coach</h3>
                <div className="text-sm text-gray-600">Python, NodeJS, MongoDB, React, HTML, CSS</div>
              </div>
              <p className="text-gray-600">Grammar Correction: iSpeak records your speech and instantly corrects any grammatical errors it detects. Whether it's a misplaced comma, punctuation or a pronoun issue, iSpeak ensures your speech is grammatically correct. Features include real-time communication to text conversion and multilingual support.</p>
            </div>

            <div className="skill-card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold gradient-text">University Admission Chatbot</h3>
                <div className="text-sm text-gray-600">Python, JSON, pkl, h5, AIML</div>
              </div>
              <p className="text-gray-600">This chatbot is designed to assist prospective students with inquiries related to admission procedures, courses offered, campus facilities, and more. Powered by AIML and TensorFlow, this chatbot provides accurate and timely information to help streamline the admission process for students.</p>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Get Started With Jira Work Management", org: "Atlassian" },
                  { name: "Introduction to Generative AI for Software Development", org: "Coursera" },
                  { name: "Pandas", org: "KAGGLE" },
                  { name: "Intro To Machine Learning", org: "KAGGLE" },
                  { name: "What is Data Science?", org: "Coursera" },
                  { name: "GDSC", org: "PESU" },
                  { name: "ChatGPT and AI Tools", org: "Skill Nation" },
                  { name: "Introduction to OpenCV Using Python", org: "PESU IO" },
                  { name: "Getting Started With Python", org: "Coursera" }
                ].map((cert) => (
                  <div key={cert.name} className="flex items-start space-x-2">
                    <FaCertificate className="text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800">{cert.name}</p>
                      <p className="text-sm text-gray-600">{cert.org}</p>
                    </div>
                  </div>
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