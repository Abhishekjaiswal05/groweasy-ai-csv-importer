"use client";

import { Bell, Moon, Search, UserCircle2 } from "lucide-react";

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

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden lg:block">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-500" />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border border-slate-700 bg-slate-900 py-2 pl-10 pr-4 text-sm text-white outline-none transition focus:border-indigo-500"
          />
        </div>

        {/* Notification */}
        <button className="rounded-xl border border-slate-700 bg-slate-900 p-3 transition hover:border-indigo-500 hover:bg-slate-800">
          <Bell className="h-5 w-5 text-slate-300" />
        </button>

        {/* Theme */}
        <button className="rounded-xl border border-slate-700 bg-slate-900 p-3 transition hover:border-indigo-500 hover:bg-slate-800">
          <Moon className="h-5 w-5 text-slate-300" />
        </button>

        {/* User */}
        <button className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 transition hover:border-indigo-500 hover:bg-slate-800">
          <UserCircle2 className="h-8 w-8 text-indigo-400" />

          <div className="hidden text-left xl:block">
            <p className="text-sm font-medium text-white">
              Abhishek
            </p>

            <p className="text-xs text-slate-400">
              Developer
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}