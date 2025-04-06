'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaArrowLeft } from 'react-icons/fa'

export default function PatientRecordsProject() {
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
                src="/images/projects/patient-records.png"
                alt="Patient Records Management System Interface"
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
                <a href="#project-structure" className="block px-4 py-3 rounded-lg hover:bg-emerald-50 transition-all text-gray-600 hover:text-emerald-600 hover:translate-x-1 duration-200">Project Structure</a>
              </div>
            </div>

            {/* Main Content with enhanced cards */}
            <div className="flex-1 space-y-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Patient Records Management System</h1>
                <Link 
                  href="https://github.com/meghajbhat/Patient-Records-Management-System"
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
                  The Patient Records Management System is a robust web-based application designed for hospitals and healthcare providers to streamline the management of patient records, appointments, prescriptions, and billing. Built using Python Flask, the system ensures efficient coordination between administrators, doctors, and patients in a secure and user-friendly environment.
                </p>
              </div>

              <div id="features" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32 transform hover:shadow-xl transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">🚀</span>
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Features</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700">For Patients</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      <li className="hover:text-emerald-600 transition-colors duration-200">Dashboard: View personal details and upcoming appointments</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Appointment Management: Book, view, and cancel appointments seamlessly</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Prescription History: Access prescriptions provided by doctors</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Billing Information: View bills and payment status</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700">For Doctors</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      <li className="hover:text-emerald-600 transition-colors duration-200">Doctor's Dashboard: Manage appointments and view assigned patients</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Prescription Management: Add and view prescriptions for patient records</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Billing System: Generate and update patient bills</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Patient Details: Access detailed patient information to deliver better care</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-2xl font-semibold mb-4 text-emerald-700">For Administrators</h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                      <li className="hover:text-emerald-600 transition-colors duration-200">Admin Dashboard: Oversee doctors, patients, and appointments</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">User Management:
                        <ul className="list-disc list-inside ml-6">
                          <li className="hover:text-emerald-600 transition-colors duration-200">View and manage patient records</li>
                          <li className="hover:text-emerald-600 transition-colors duration-200">Add, edit, or delete doctor profiles</li>
                        </ul>
                      </li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Appointment Overview: Monitor all appointments and payment statuses</li>
                      <li className="hover:text-emerald-600 transition-colors duration-200">Secure Login: Role-based access for patients, doctors, and admins</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="tech-stack" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32 transform hover:shadow-xl transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">🛠️</span>
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Technology Stack</span>
                </h2>
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

              <div id="key-functionalities" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32 transform hover:shadow-xl transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">🔑</span>
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Key Functionalities</span>
                </h2>
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

              <div id="project-structure" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-32 transform hover:shadow-xl transition-all duration-300">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">📋</span>
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Project Structure</span>
                </h2>
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