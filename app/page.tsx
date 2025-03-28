import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-float">
              Megha Bhat
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Computer Science Engineering Student
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#about"
                className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/25"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-purple-600 rounded-full hover:bg-purple-600/20 transition-colors shadow-lg hover:shadow-purple-500/25"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Megha Bhat"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h2>
          <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm shadow-xl border border-purple-500/10">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  Education
                </h3>
                <p className="text-gray-300">
                  PES University, RR Campus<br />
                  Bachelor of Technology in Computer Science Engineering<br />
                  2022 - 2026 (Currently in 3rd Year)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-purple-600/20 rounded-full text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-colors">Programming</span>
                  <span className="px-4 py-2 bg-purple-600/20 rounded-full text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-colors">Web Development</span>
                  <span className="px-4 py-2 bg-purple-600/20 rounded-full text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-colors">Problem Solving</span>
                  <span className="px-4 py-2 bg-purple-600/20 rounded-full text-sm border border-purple-500/30 hover:bg-purple-600/30 transition-colors">Team Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-12">
            I&apos;m always open to new opportunities and collaborations.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:meghajbhat@gmail.com"
              className="px-8 py-4 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/megha-bhat-20baaa293/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-purple-600 rounded-full hover:bg-purple-600/20 transition-colors shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 