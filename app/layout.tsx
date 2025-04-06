import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SparklesCursor from './components/SparklesCursor'
import Link from 'next/link'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Megha Bhat - Portfolio',
  description: 'Personal portfolio showcasing my projects and experience in software development and AI/ML.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                <img 
                  src="/images/projects/profile.jpg" 
                  alt="Megha Bhat" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
                />
                <span className="text-2xl font-bold gradient-text">Megha Bhat</span>
              </Link>
              <div className="flex items-center space-x-8">
                <Link href="/" className="nav-link text-base">Home</Link>
                <Link href="/#experience" className="nav-link text-base">Experience</Link>
                <Link href="/#projects" className="nav-link text-base">Projects</Link>
                <Link href="/#skills" className="nav-link text-base">Skills</Link>
                <Link href="/#education" className="nav-link text-base">Education</Link>
                <Link href="/#certifications" className="nav-link text-base">Certifications</Link>
                <Link href="/#achievements" className="nav-link text-base">Achievements</Link>
                <Link href="/#contact" className="nav-link text-base">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-24">
          <SparklesCursor />
          {children}
        </main>
      </body>
    </html>
  )
} 