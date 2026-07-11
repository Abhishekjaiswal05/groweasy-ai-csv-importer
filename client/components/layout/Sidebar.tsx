"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import AppLogo from "./AppLogo";
import { sidebarItems } from "@/constants/sidebar";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-slate-950 border-r border-slate-800 flex flex-col">

      {/* Logo */}
      <div className="flex items-center justify-center border-b border-slate-800 py-8">
        <AppLogo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-8">

        <p className="mb-4 px-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
    Workspace
</p>

        <div className="space-y-2">

          {sidebarItems.map((item) => {

            const Icon = item.icon;

            const isActive = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${isActive
                    ? "bg-indigo-600 text-white"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                  }`}
              >
                <Icon className="w-5 h-5" />

                <span>{item.title}</span>

              </Link>
            );

          })}

        </div>

      </nav>

    </aside>
  );
}