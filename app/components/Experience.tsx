import React from 'react';
import Link from 'next/link';

export default function Experience() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#1A2333]/50 rounded-2xl p-8 border border-emerald-500/20">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">Research Intern</h3>
            <p className="text-emerald-400">CDSAML</p>
            <p className="text-gray-400 mt-2">Aug 2023 - Present</p>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>AI-Generated Image Detection using Deep Learning</li>
              <li>Implemented ResNet18 model with PyTorch</li>
              <li>Processed 60K images dataset with data augmentation</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <Link 
              href="/experience/cdsaml"
              className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center gap-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#1A2333]/50 rounded-2xl p-8 border border-emerald-500/20">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">AI/ML Intern</h3>
            <p className="text-emerald-400">Nexus Info</p>
            <p className="text-gray-400 mt-2">June 2023 - July 2023</p>
            <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
              <li>Developed NLP-based chatbots for general use and university admissions</li>
              <li>Built ML-powered disease prediction system</li>
              <li>Applied various ML algorithms and NLP techniques</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <Link 
              href="/experience/nexus"
              className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all flex items-center gap-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 