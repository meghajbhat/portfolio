'use client'
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaArrowLeft } from 'react-icons/fa'

export default function MusicPlaylistGeneratorProject() {
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
                <a href="#installation" className="block px-4 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-gray-700 hover:text-emerald-600">Installation</a>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 gradient-text">Music Playlist Generator</h1>
                <Link 
                  href="https://github.com/meghajbhat/Music-Playlist-Generator"
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
                  The Music Playlist Generator is a robust C-based program that enables users to create and manage personalized music playlists. With features like song discovery through YouTube integration, playlist shuffling, and comprehensive playback controls, this application provides a complete music management solution. The system uses CSV files for local song storage and supports dynamic user management for a personalized experience.
                </p>
              </div>

              <div id="features" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">🚀 Features</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">User Management</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>User registration with secure account creation</li>
                      <li>Login system for personalized playlist access</li>
                      <li>Individual playlist management for each user</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Playlist Management</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Add songs from local CSV database</li>
                      <li>Import songs from YouTube search results</li>
                      <li>View and manage playlist contents</li>
                      <li>Remove songs from playlist</li>
                      <li>Shuffle playlist for random playback</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">Playback Controls</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Play next song with detailed information display</li>
                      <li>Previous song playback using stack implementation</li>
                      <li>Current song information display</li>
                      <li>Random song suggestions</li>
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
                      <li>C Programming Language</li>
                      <li>Python (for YouTube integration)</li>
                      <li>CSV File Handling</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">APIs and Libraries</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>YouTube Data API</li>
                      <li>Standard C Libraries</li>
                      <li>Google API Python Client</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="key-functionalities" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">🔑 Key Functionalities</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Data Structures</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Linked Lists for dynamic playlist management</li>
                      <li>Stack implementation for song history</li>
                      <li>Arrays for song database management</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">File Operations</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>CSV file reading and writing</li>
                      <li>User data persistence</li>
                      <li>Playlist state management</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">YouTube Integration</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Search functionality for YouTube songs</li>
                      <li>Result parsing and integration</li>
                      <li>Video ID extraction and storage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="installation" className="skill-card scroll-mt-32">
                <h2 className="text-2xl font-semibold gradient-text mb-4">⚙️ Installation</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">To set up the Music Playlist Generator:</p>
                  <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`# Clone the repository
git clone https://github.com/meghajbhat/Music-Playlist-Generator.git

# Navigate to project directory
cd Music-Playlist-Generator

# Install Python dependencies
pip install google-api-python-client

# Compile the C program
gcc dsap.c -o music_playlist

# Run the program
./music_playlist`}
                  </pre>
                  <p className="text-gray-700 mt-4">Note: Make sure to replace the placeholder API key in youtube_search.py with your YouTube Data API key before running the program.</p>
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