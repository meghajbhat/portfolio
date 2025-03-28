import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200">
              <Image
                src="/profile.jpg"
                alt="Megha Bhat"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-medium">Megha Bhat</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Computer Science Engineering Student
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Currently pursuing my Bachelor&apos;s degree at PES University, RR Campus
            </p>
            <div className="flex gap-4">
              <a
                href="#about"
                className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <div className="space-y-2">
                    <p className="font-medium">PES University, RR Campus</p>
                    <p className="text-gray-600">Bachelor of Technology in Computer Science Engineering</p>
                    <p className="text-gray-600">2022 - 2026 (Currently in 3rd Year)</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Programming</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Web Development</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Problem Solving</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Team Collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              I&apos;m always open to new opportunities and collaborations.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:meghajbhat@gmail.com"
                className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/megha-bhat-20baaa293/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 