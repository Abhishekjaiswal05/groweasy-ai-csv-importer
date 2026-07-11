"use client";

import { Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-8 backdrop-blur-md">
      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          AI CSV Import Workspace
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Upload CSV • Analyze • Map • Generate JSON
        </p>
      </div>
    </header>
  );
}