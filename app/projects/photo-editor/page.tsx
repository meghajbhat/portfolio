'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaArrowLeft } from 'react-icons/fa'

export default function PhotoEditorProject() {
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
                src="/images/projects/photo-editor.png"
                alt="Photo Editor Interface"
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
                <a href="#filters" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Filters & Effects</a>
                <a href="#usage" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Usage</a>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 gradient-text">Photo Editor</h1>
                <Link 
                  href="https://github.com/meghajbhat/Photo-Editor"
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
                  A Python-based Photo Editor Application that provides users with an intuitive interface to edit and apply various filters to their images. Built using Tkinter for the graphical user interface and OpenCV for image processing, this application offers a range of features from basic image adjustments to advanced filters.
                </p>
              </div>

              <div id="features" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">🚀 Features</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Image Upload</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Select images using a file dialog for editing and processing</li>
                      <li>Preview uploaded images in the application</li>
                      <li>Support for common image formats</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">User Interface</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Built with Tkinter for an intuitive and interactive layout</li>
                      <li>Buttons for each filter with clear labels</li>
                      <li>Organized design with frames to manage button layout</li>
                      <li>Real-time preview of applied filters</li>
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
                      <li>OpenCV</li>
                      <li>NumPy</li>
                      <li>Tkinter</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Development Tools</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Python IDLE</li>
                      <li>VS Code</li>
                      <li>Git Version Control</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="filters" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">🎨 Filters & Effects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Basic Filters</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Black and White: Grayscale conversion</li>
                      <li>Brighten: Increase image brightness</li>
                      <li>Contrast: Adjust image contrast</li>
                      <li>Crop: Select and crop image areas</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Effects</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Pencil Sketch: Artistic sketch effect</li>
                      <li>Sepia: Vintage photo effect</li>
                      <li>Sharpen: Enhance image details</li>
                      <li>X-ray: Inverted image effect</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="usage" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">📝 Usage</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Installation</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Clone the repository or download the source file</li>
                      <li>Install dependencies:
                        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                          <code>pip install opencv-python-headless numpy</code>
                        </pre>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Running the Application</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Run the script:
                        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mt-2">
                          <code>python photo_editor_python_idle.py</code>
                        </pre>
                      </li>
                      <li>Click the "GO" button to launch the editor</li>
                      <li>Use "ADD IMAGE" to select an image</li>
                      <li>Apply filters using the feature buttons</li>
                      <li>Preview changes in the popup window</li>
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