import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function AppLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/30">
        <Sparkles className="h-6 w-6 text-white" />
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold tracking-wide text-white">
          ImportIQ AI
        </span>

        <span className="text-xs text-slate-400">
          AI Powered CSV Importer
        </span>
      </div>
    </Link>
  );
}