'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaFileAlt, FaPython, FaBrain, FaCode, FaGithub } from 'react-icons/fa';

export default function CdsamlExperience() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      const cards = document.querySelectorAll('.card-3d');
      cards.forEach((card: Element) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateX = (y - 0.5) * 20;
        const rotateY = (x - 0.5) * 20;
        const element = card as HTMLElement;
        element.style.transform = 'perspective(1000px) rotateX(' + (-rotateX) + 'deg) rotateY(' + rotateY + 'deg)';
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1121] py-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0B1121]/80 backdrop-blur-sm border-b border-emerald-500/20 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/#experience" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <FaArrowLeft />
            <span>Back to Experience</span>
          </Link>
          <a 
            href="https://drive.google.com/file/d/14b3ElbyzX_lQHA-32UEDasPT8ayr18MM/view?usp=drive_link"
            target="_blank"
            className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all"
          >
            View Certificate
          </a>
        </div>
      </nav>

      <div className="container mx-auto px-4 mt-12">
        {/* Project Header */}
        <div className="card-3d relative bg-[#1A2333]/50 rounded-2xl p-8 border border-emerald-500/20 mb-12 transform transition-all duration-500">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-white">Research Intern - CDSAML</h1>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">PyTorch</span>
              <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">ResNet18</span>
              <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">Computer Vision</span>
              <span className="px-3 py-1 rounded-lg bg-[#0B1121] text-emerald-400 text-sm border border-emerald-500/30">Deep Learning</span>
            </div>
          </div>
        </div>

        {/* Project Overview */}
        <div className="card-3d relative bg-[#1A2333]/50 rounded-2xl p-8 border border-emerald-500/20 mb-8 transform transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4">🔍 Project Overview</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="font-bold text-emerald-400">Title:</h3>
              <p>AI-Generated Image Detection</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-400">Goal:</h3>
              <p>Distinguish between AI-generated and real images</p>
            </div>
            <div>
              <h3 className="font-bold text-emerald-400">Dataset:</h3>
              <p>Kaggle's AI vs. Real Images dataset</p>
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>30,000 AI-generated images</li>
                <li>30,000 real images</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phases & Progress */}
        <div className="card-3d relative bg-[#1A2333]/50 rounded-2xl p-8 border border-emerald-500/20 mb-8 transform transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4">📁 Phases & Progress</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">✅ Phase 1: Data Setup</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Loaded and preprocessed the 60K image dataset</li>
                <li>Split into training, validation, and test sets</li>
                <li>Handled image resizing, normalization, and data augmentation</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">✅ Phase 2: Model Development</h3>
              <div className="space-y-4 text-gray-300 ml-4">
                <p><span className="font-bold">Model Used:</span> ResNet18 (pretrained from torchvision)</p>
                <p>Modified final FC layer for binary classification</p>
                
                <div>
                  <p className="font-bold">Training Setup:</p>
                  <ul className="list-disc list-inside ml-4">
                    <li>Loss: CrossEntropyLoss</li>
                    <li>Optimizer: Adam</li>
                    <li>Learning Rate Scheduler: CosineAnnealing</li>
                    <li>Model checkpointing every 1000 images</li>
                    <li>Live training logging every 15 images</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">🟡 Phase 3: Evaluation & Robustness</h3>
              <div className="space-y-4 text-gray-300 ml-4">
                <p className="font-bold">To Do:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Evaluate model on test data (accuracy, precision, recall, F1)</li>
                  <li>Add robustness testing (noise, blur, JPEG compression)</li>
                  <li>Implement Grad-CAM / Saliency Maps</li>
                  <li>Add SHAP or LIME for image inputs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="card-3d relative bg-[#1A2333]/50 rounded-2xl p-8 border border-emerald-500/20 transform transition-all duration-500">
          <h2 className="text-2xl font-bold text-white mb-4">🛠️ Next Steps</h2>
          <ul className="space-y-2 text-gray-300 ml-4 list-disc list-inside">
            <li>Build a web interface with Streamlit or Flask</li>
            <li>Implement confidence metrics for classifications</li>
            <li>Try other models (EfficientNet, Vision Transformers)</li>
            <li>Deploy on HuggingFace Spaces or Streamlit Cloud</li>
            <li>Create comprehensive documentation with results and examples</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 