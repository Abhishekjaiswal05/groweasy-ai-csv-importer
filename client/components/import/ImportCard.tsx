"use client";

import {
  CheckCircle2,
  Loader2,
  Rocket,
  Clock3,
  FileSpreadsheet,
  ShieldCheck,
  XCircle,
} from "lucide-react";

interface ImportCardProps {
  totalRows: number;
  validRows: number;
  invalidRows: number;
  onImport: () => void;
  loading?: boolean;
}

export default function ImportCard({
  totalRows,
  validRows,
  invalidRows,
  onImport,
  loading = false,
}: ImportCardProps) {
  const readyPercentage =
    totalRows === 0
      ? 0
      : Math.round((validRows / totalRows) * 100);

  const estimatedTime = Math.max(
    1,
    Math.ceil(totalRows / 100)
  );

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* ================= Header ================= */}

      <div className="flex flex-col gap-5 border-b border-slate-800 p-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-green-500/10 p-3">
              <Rocket className="h-6 w-6 text-green-400" />
            </div>

            <h2 className="text-3xl font-bold text-white">
              Ready to Import
            </h2>

          </div>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Review the import summary before saving customer
            records into your CRM.
          </p>

        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 px-5 py-4">

          <Clock3 className="h-5 w-5 text-indigo-400" />

          <div>

            <p className="text-xs uppercase tracking-wider text-slate-400">
              Estimated Time
            </p>

            <p className="font-bold text-indigo-300">
              {estimatedTime} sec
            </p>

          </div>

        </div>

      </div>

      {/* ================= Summary Cards ================= */}

      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">

        {/* Total */}

        <div className="rounded-2xl border border-slate-700 bg-slate-950 p-6">

          <div className="flex items-center gap-3">

            <FileSpreadsheet className="h-8 w-8 text-blue-400" />

            <div>

              <p className="text-sm text-slate-400">
                Total Records
              </p>

              <h3 className="text-3xl font-bold text-white">
                {totalRows}
              </h3>

            </div>

          </div>

        </div>

        {/* Valid */}

        <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

          <div className="flex items-center gap-3">

            <ShieldCheck className="h-8 w-8 text-green-400" />

            <div>

              <p className="text-sm text-slate-400">
                Ready to Import
              </p>

              <h3 className="text-3xl font-bold text-green-400">
                {validRows}
              </h3>

            </div>

          </div>

        </div>

        {/* Invalid */}

        <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6">

          <div className="flex items-center gap-3">

            <XCircle className="h-8 w-8 text-red-400" />

            <div>

              <p className="text-sm text-slate-400">
                Need Attention
              </p>

              <h3 className="text-3xl font-bold text-red-400">
                {invalidRows}
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* ================= Readiness ================= */}

      <div className="px-6 pb-6">

        <div className="mb-3 flex items-center justify-between">

          <span className="text-sm text-slate-400">
            Import Readiness
          </span>

          <span className="font-semibold text-green-400">
            {readyPercentage}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-green-500 transition-all duration-700"
            style={{
              width: `${readyPercentage}%`,
            }}
          />

        </div>

      </div>

      {/* ================= Footer ================= */}

      <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-800 bg-slate-950 px-8 py-6 lg:flex-row">

        <div>

          <h4 className="text-sm font-semibold text-white">
            Final Review
          </h4>

          <p className="mt-1 text-sm text-slate-400">
            Import will create CRM customer records using the
            approved mappings.
          </p>

        </div>

        <button
          disabled={invalidRows > 0 || loading}
          onClick={onImport}
          className="
            flex
            items-center
            rounded-xl
            bg-gradient-to-r
            from-green-600
            to-emerald-600
            px-8
            py-4
            font-semibold
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-green-500/30
            disabled:cursor-not-allowed
            disabled:opacity-50
            disabled:hover:scale-100
          "
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Importing...
            </>
          ) : (
            <>
              <CheckCircle2 className="mr-2 h-5 w-5" />
              Import Customers
            </>
          )}
        </button>

      </div>

    </section>
  );
}