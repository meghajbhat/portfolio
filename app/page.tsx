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
            <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
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
                  <div className="space-y-4">
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
                    <div>
                      <p className="font-medium">PSBB LLA</p>
                      <p className="text-gray-600">Physics, Chemistry, Social Science, Mathematics</p>
                      <p className="text-gray-600">July 2019 - July 2020</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Skills</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-700">Programming Languages</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">C++</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Python</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">C</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">GOLang</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Kotlin</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">JavaScript</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">MATLAB</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Libraries/Frameworks</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">OpenCV</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">React</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Scikit-Learn</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Node.js</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Flask</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Flutter</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">TensorFlow</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Tools & Platforms</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">GitHub</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">VS Code</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Jira</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Kaggle</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Research Intern</h3>
                    <p className="text-gray-600">CDSAML</p>
                  </div>
                  <p className="text-gray-500">July 2024 - August 2024</p>
                </div>
                <p className="text-gray-600 mb-4">Project: Measuring and Reducing Hallucinations in LLMs</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Generated 10,000 hallucinated samples each for QA, dialogue, and summarization tasks using HotpotQA, OpenDialKG, and CNN/Daily Mail datasets</li>
                  <li>Designed both one-pass(one-turn) and conversational(multi-turn) methods to induce hallucinations using the general code, React and Chain Of Verification processes</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">AIML Intern</h3>
                    <p className="text-gray-600">NEXUS</p>
                  </div>
                  <p className="text-gray-500">May 2024 - June 2024</p>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Developed 2 foundational AIML projects: (i) chatbot and (ii) chatbot specifically designed for university admissions FAQ&apos;s</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-2">Patient Records Management System</h3>
                <p className="text-gray-600 mb-4">A web-based application for efficient hospital operations management</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Python</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Flask</span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-2">Speech Coach</h3>
                <p className="text-gray-600 mb-4">Grammar correction and real-time speech-to-text application</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Python</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">NodeJS</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">React</span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-semibold mb-2">University Admission Chatbot</h3>
                <p className="text-gray-600 mb-4">AI-powered chatbot for university admission queries</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">Python</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-sm">AIML</span>
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