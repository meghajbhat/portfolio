import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Megha Bhat - Portfolio',
  description: 'Portfolio website of Megha Bhat, Computer Science Engineering student at PES University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <a href="#" className="text-xl font-bold text-white">
                MB
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="container mx-auto px-4 text-center">
            <p>© 2024 Megha Bhat. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="https://github.com/meghajbhat" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/megha-bhat-20baaa293/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 