"use client";

import {
  WandSparkles,
  CheckCircle2,
  Loader2,
  Database,
} from "lucide-react";

import MappingTable from "./MappingTable";
import type { HeaderMapping } from "@/types/mapping";

interface MappingCardProps {
  mappings: HeaderMapping[];
  loading?: boolean;
  onRunMapping?: () => void;
  onApprove?: () => void;

  onMappingChange: (
    originalColumn: string,
    mappedField: string
  ) => void;
}

export default function MappingCard({
  mappings,
  loading = false,
  onRunMapping,
  onApprove,
  onMappingChange,
}: MappingCardProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

      {/* ================= Header ================= */}

      <div className="flex flex-col gap-6 border-b border-slate-800 p-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-indigo-500/10 p-3">
              <WandSparkles className="h-6 w-6 text-indigo-400" />
            </div>

            <h2 className="text-3xl font-bold text-white">
              AI Field Mapping
            </h2>

          </div>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            AI automatically analyzes your uploaded CSV headers and maps
            them to the closest CRM fields. Review every mapping before
            continuing with the import.
          </p>

        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-6 py-4">

          <Database className="h-5 w-5 text-indigo-400" />

          <div>

            <p className="text-xs uppercase tracking-wider text-slate-400">
              Fields Detected
            </p>

            <p className="text-xl font-bold text-indigo-300">
              {mappings.length}
            </p>

          </div>

        </div>

      </div>

      {/* ================= Table ================= */}

      <MappingTable
        mappings={mappings}
        onChange={onMappingChange}
      />

      {/* ================= Footer ================= */}

      <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800 bg-slate-950 px-8 py-6 lg:flex-row">

        {/* Left */}

        <div>

          <h4 className="text-sm font-semibold text-white">
            Review Before Import
          </h4>

          <p className="mt-1 text-sm text-slate-400">
            You can manually change any AI detected CRM field before
            importing your data.
          </p>

        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center gap-4">

          <button
            onClick={onRunMapping}
            disabled={loading}
            className="
              flex
              items-center
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              px-6
              py-3
              font-semibold
              text-slate-200
              transition-all
              duration-300
              hover:border-indigo-500
              hover:bg-indigo-600
              hover:text-white
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Running AI...
              </>
            ) : (
              <>
                <WandSparkles className="mr-2 h-5 w-5" />
                Run AI Mapping
              </>
            )}
          </button>

          <button
            onClick={onApprove}
            disabled={mappings.length === 0}
            className="
              flex
              items-center
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              to-violet-600
              px-7
              py-3
              font-semibold
              text-white
              shadow-lg
              shadow-indigo-500/20
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-indigo-500/40
              active:scale-95
              disabled:cursor-not-allowed
              disabled:opacity-50
              disabled:hover:scale-100
            "
          >
            <CheckCircle2 className="mr-2 h-5 w-5" />

            Approve & Continue
          </button>

        </div>

      </div>

    </section>
  );
}