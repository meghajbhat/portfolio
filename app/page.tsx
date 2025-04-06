import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Megha Bhat</h1>
        <p className="text-xl text-gray-600 mb-4">Computer Science Student at PES University</p>
        <p className="text-lg text-gray-700 mb-6">CGPA: 7.47/10</p>
        
        {/* Contact Links */}
        <div className="flex justify-center space-x-4">
          <Link href="https://github.com/meghajbhat" target="_blank" className="text-gray-600 hover:text-gray-900">
            <FaGithub size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/megha-bhat-20baaa293/" target="_blank" className="text-gray-600 hover:text-gray-900">
            <FaLinkedin size={24} />
          </Link>
          <Link href="https://leetcode.com/u/meghajbhat/" target="_blank" className="text-gray-600 hover:text-gray-900">
            <span className="text-lg">LeetCode</span>
          </Link>
          <Link href="mailto:meghajbhat@gmail.com" className="text-gray-600 hover:text-gray-900">
            <FaEnvelope size={24} />
          </Link>
          <div className="text-gray-600">
            <FaPhone size={24} />
            <span className="ml-2">9900043002</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700">
          I am a third-year Computer Science Engineering student at PES University, passionate about software development and problem-solving. 
          I enjoy working on challenging projects and continuously learning new technologies.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Programming Languages</h3>
            <ul className="list-disc list-inside">
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Web Development</h3>
            <ul className="list-disc list-inside">
              <li>HTML/CSS</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Tools & Technologies</h3>
            <ul className="list-disc list-inside">
              <li>Git</li>
              <li>VS Code</li>
              <li>MySQL</li>
              <li>Linux</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">PES University</h3>
          <p className="text-gray-700 mb-2">Bachelor of Technology in Computer Science Engineering</p>
          <p className="text-gray-600">2021 - Present | CGPA: 7.47/10</p>
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <p className="mb-2">Email: meghajbhat@gmail.com</p>
          <p className="mb-2">Phone: +91 9900043002</p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://github.com/meghajbhat" target="_blank" className="text-blue-600 hover:text-blue-800">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/megha-bhat-20baaa293/" target="_blank" className="text-blue-600 hover:text-blue-800">
              LinkedIn
            </Link>
            <Link href="https://leetcode.com/u/meghajbhat/" target="_blank" className="text-blue-600 hover:text-blue-800">
              LeetCode
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 