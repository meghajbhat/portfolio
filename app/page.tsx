import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Megha Bhat
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Computer Science Engineering Student
          </p>
          <div className="flex gap-4">
            <a
              href="#about"
              className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
            >
              About Me
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-purple-600 rounded-full hover:bg-purple-600/20 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Education</h3>
                <p className="text-gray-300">
                  PES University, RR Campus<br />
                  Bachelor of Technology in Computer Science Engineering<br />
                  2022 - 2026 (Currently in 3rd Year)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-600/20 rounded-full text-sm">Programming</span>
                  <span className="px-3 py-1 bg-purple-600/20 rounded-full text-sm">Web Development</span>
                  <span className="px-3 py-1 bg-purple-600/20 rounded-full text-sm">Problem Solving</span>
                  <span className="px-3 py-1 bg-purple-600/20 rounded-full text-sm">Team Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm always open to new opportunities and collaborations.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="meghajbhat@gmail.com"
              className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/megha-bhat-20baaa293/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-purple-600 rounded-full hover:bg-purple-600/20 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
} 