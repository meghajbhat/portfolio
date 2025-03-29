import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Megha Bhat"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-medium text-lg">Megha Bhat</span>
          </div>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-gray-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-gray-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Crafting Digital Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Computer Science Engineering Student at PES University, passionate about building innovative solutions through code.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-black text-white hover:bg-gray-900 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-black hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Education</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-medium">PES University, RR Campus</p>
                    <p className="text-gray-600">Computer Science Bachelors</p>
                    <p className="text-gray-600">September 2022 - May 2026</p>
                    <p className="text-gray-600">CGPA: 7.47</p>
                  </div>
                  <div>
                    <p className="font-medium">BASE PU COLLEGE</p>
                    <p className="text-gray-600">Physics, Chemistry, Mathematics, Computer Science</p>
                    <p className="text-gray-600">July 2020 - May 2022</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Skills</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-medium mb-2">Programming Languages</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">C++</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">GOLang</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Frameworks & Tools</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TensorFlow</span>
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Flask</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Research Intern</h3>
                    <p className="text-gray-600">CDSAML</p>
                  </div>
                  <p className="text-gray-500">July 2024 - August 2024</p>
                </div>
                <p className="text-gray-600 mb-4">Project: Measuring and Reducing Hallucinations in LLMs</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Generated 10,000 hallucinated samples each for QA, dialogue, and summarization tasks using HotpotQA, OpenDialKG, and CNN/Daily Mail datasets</li>
                  <li>Designed both one-pass(one-turn) and conversational(multi-turn) methods to induce hallucinations using the general code, React and Chain Of Verification processes</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">AIML Intern</h3>
                    <p className="text-gray-600">NEXUS</p>
                  </div>
                  <p className="text-gray-500">May 2024 - June 2024</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Developed 2 foundational AIML projects: (i) chatbot and (ii) chatbot specifically designed for university admissions FAQ&apos;s</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Patient Records Management System</h3>
                <p className="text-gray-600 mb-4">A web-based application for efficient hospital operations management</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Flask</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">Speech Coach</h3>
                <p className="text-gray-600 mb-4">Grammar correction and real-time speech-to-text application</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">NodeJS</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-4">University Admission Chatbot</h3>
                <p className="text-gray-600 mb-4">AI-powered chatbot for university admission queries</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">AIML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-xl text-gray-600 mb-12">
              I&apos;m always open to new opportunities and collaborations.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:meghajbhat@gmail.com"
                className="px-8 py-4 bg-black text-white hover:bg-gray-900 transition-colors"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/megha-bhat-20baaa293/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-black hover:bg-gray-50 transition-colors"
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