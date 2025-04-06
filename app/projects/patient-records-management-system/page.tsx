'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaArrowLeft } from 'react-icons/fa'

export default function PatientRecordsProject() {
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

          <div className="flex gap-8">
            {/* Vertical Navigation */}
            <div className="w-64 flex-shrink-0">
              <div className="sticky top-32 space-y-2">
                <a href="#overview" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Overview</a>
                <a href="#features" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Features</a>
                <a href="#tech-stack" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Technology Stack</a>
                <a href="#key-functionalities" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Key Functionalities</a>
                <a href="#project-structure" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Project Structure</a>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 gradient-text">Patient Records Management System</h1>
                <Link 
                  href="https://github.com/meghajbhat/Patient-Records-Management-System"
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
                  The Patient Records Management System is a robust web-based application designed for hospitals and healthcare providers to streamline the management of patient records, appointments, prescriptions, and billing. Built using Python Flask, the system ensures efficient coordination between administrators, doctors, and patients in a secure and user-friendly environment.
                </p>
              </div>

              <div id="features" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">🚀 Features</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">For Patients</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Dashboard: View personal details and upcoming appointments</li>
                      <li>Appointment Management: Book, view, and cancel appointments seamlessly</li>
                      <li>Prescription History: Access prescriptions provided by doctors</li>
                      <li>Billing Information: View bills and payment status</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">For Doctors</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Doctor's Dashboard: Manage appointments and view assigned patients</li>
                      <li>Prescription Management: Add and view prescriptions for patient records</li>
                      <li>Billing System: Generate and update patient bills</li>
                      <li>Patient Details: Access detailed patient information to deliver better care</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">For Administrators</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Admin Dashboard: Oversee doctors, patients, and appointments</li>
                      <li>User Management:
                        <ul className="list-disc list-inside ml-6">
                          <li>View and manage patient records</li>
                          <li>Add, edit, or delete doctor profiles</li>
                        </ul>
                      </li>
                      <li>Appointment Overview: Monitor all appointments and payment statuses</li>
                      <li>Secure Login: Role-based access for patients, doctors, and admins</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="tech-stack" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">🛠️ Technology Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Backend</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Python (Flask Framework)</li>
                      <li>SQLite (Easily replaceable with MySQL or PostgreSQL)</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-2">Libraries Used</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Flask: For creating the web application</li>
                    <li>Jinja2: For dynamic HTML templating</li>
                    <li>Werkzeug: For password hashing and authentication</li>
                    <li>Bootstrap: For responsive and modern UI designs</li>
                  </ul>
                </div>
              </div>

              <div id="key-functionalities" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">🔑 Key Functionalities</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Authentication System</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Separate login portals for patients, doctors, and admins</li>
                      <li>Encrypted passwords for secure user authentication</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Optimized for all devices, ensuring a seamless user experience on mobile, tablet, and desktop</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">CRUD Operations</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Perform Create, Read, Update, Delete operations for patient and doctor records</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Dynamic Dashboards</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Personalized interfaces based on user roles</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="project-structure" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">📋 Project Structure</h2>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`├── app.py                  # Main application logic
├── hosp.sql
├── templates/              # HTML files for all pages
│   ├── login.html
│   ├── dashboard.html
│   ├── patients_welcome.html
│   ├── doctors_welcome.html
│   ├── admin_dashboard.html
│   └── ...`}
                </pre>
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