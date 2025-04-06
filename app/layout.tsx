import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SparklesCursor from './components/SparklesCursor'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Megha Bhat - Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <SparklesCursor />
      </body>
    </html>
  )
} 