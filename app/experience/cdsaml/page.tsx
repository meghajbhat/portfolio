'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaFileAlt, FaPython, FaBrain, FaCode, FaGithub } from 'react-icons/fa';

export default function CdsamlExperience() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card-3d');
      cards.forEach((card: Element) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateX = (y - 0.5) * 20;
        const rotateY = (x - 0.5) * 20;
        (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1121] py-20">
      {/* Rest of the component remains the same */}
      {/* ... existing code ... */}
    </div>
  );
} 