import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-black z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-black">
              <Image
                src="/profile.jpg"
                alt="Megha Bhat"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-medium">Megha Bhat</span>
          </div>
          <div className="flex gap-8">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold mb-4">
              Computer Science Engineering Student
            </h1>
            <p className="text-lg mb-8">
              Currently pursuing my Bachelor&apos;s degree at PES University, RR Campus
            </p>
            <div className="flex gap-4">
              <a
                href="#about"
                className="px-4 py-2 bg-black text-white hover:bg-gray-900"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="px-4 py-2 border border-black hover:bg-gray-50"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 border-t border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">About Me</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-medium">PES University, RR Campus</p>
                    <p>Computer Science Bachelors</p>
                    <p>September 2022 - May 2026</p>
                    <p>CGPA: 7.47</p>
                  </div>
                  <div>
                    <p className="font-medium">BASE PU COLLEGE</p>
                    <p>Physics, Chemistry, Mathematics, Computer Science</p>
                    <p>July 2020 - May 2022</p>
                  </div>
                  <div>
                    <p className="font-medium">PSBB LLA</p>
                    <p>Physics, Chemistry, Social Science, Mathematics</p>
                    <p>July 2019 - July 2020</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Skills</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Programming Languages</p>
                    <p>C++, Python, C, GOLang, Kotlin, JavaScript, MATLAB</p>
                  </div>
                  <div>
                    <p className="font-medium">Libraries/Frameworks</p>
                    <p>OpenCV, React, Scikit-Learn, Node.js, Flask, Flutter, TensorFlow</p>
                  </div>
                  <div>
                    <p className="font-medium">Tools & Platforms</p>
                    <p>GitHub, VS Code, Jira, Kaggle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 border-t border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Experience</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Research Intern</h3>
                    <p>CDSAML</p>
                  </div>
                  <p>July 2024 - August 2024</p>
                </div>
                <p className="mb-4">Project: Measuring and Reducing Hallucinations in LLMs</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Generated 10,000 hallucinated samples each for QA, dialogue, and summarization tasks using HotpotQA, OpenDialKG, and CNN/Daily Mail datasets</li>
                  <li>Designed both one-pass(one-turn) and conversational(multi-turn) methods to induce hallucinations using the general code, React and Chain Of Verification processes</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">AIML Intern</h3>
                    <p>NEXUS</p>
                  </div>
                  <p>May 2024 - June 2024</p>
                </div>
                <ul className="list-disc list-inside space-y-2">
                  <li>Developed 2 foundational AIML projects: (i) chatbot and (ii) chatbot specifically designed for university admissions FAQ&apos;s</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 border-t border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Projects</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Patient Records Management System</h3>
                <p className="mb-4">A web-based application for efficient hospital operations management</p>
                <p>MySQL, Python, Flask</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Speech Coach</h3>
                <p className="mb-4">Grammar correction and real-time speech-to-text application</p>
                <p>Python, NodeJS, MongoDB, React</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">University Admission Chatbot</h3>
                <p className="mb-4">AI-powered chatbot for university admission queries</p>
                <p>Python, TensorFlow, AIML</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 border-t border-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-8">
              I&apos;m always open to new opportunities and collaborations.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:meghajbhat@gmail.com"
                className="px-4 py-2 bg-black text-white hover:bg-gray-900"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/megha-bhat-20baaa293/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-black hover:bg-gray-50"
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