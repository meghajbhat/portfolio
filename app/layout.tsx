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
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img 
                  src="/images/projects/profile.jpg" 
                  alt="Megha Bhat" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <span className="text-2xl font-bold gradient-text">Megha Bhat</span>
              </div>
              <div className="flex space-x-6">
                <Link href="/" className="nav-link">HOME</Link>
                <Link href="/#projects" className="nav-link">PROJECTS</Link>
                <Link href="/#skills" className="nav-link">SKILLS</Link>
                <Link href="/#education" className="nav-link">EDUCATION</Link>
              </div>
            </div>
          </div>
        </nav>
        <SparklesCursor />
        {children}
      </body>
    </html>
  )
} 