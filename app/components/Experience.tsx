import React from 'react';
import Link from 'next/link';

<div className="flex flex-col gap-4">
  <div className="bg-[#1A2333]/50 rounded-2xl p-8 border border-emerald-500/20">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-xl font-bold text-white">Research Intern</h3>
        <p className="text-emerald-400">CDSAML</p>
        <p className="text-gray-400 mt-2">Aug 2023 - Present</p>
      </div>
      <div className="flex gap-4">
        <Link 
          href="/experience/cdsaml"
          className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all"
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
      </div>
      <div className="flex gap-4">
        <Link 
          href="/experience/nexus"
          className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</div> 