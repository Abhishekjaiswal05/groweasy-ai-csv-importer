"use client";

import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from "lucide-react";

import type { ImportReport } from "@/services/import.service";

interface ImportResultProps {
  report: ImportReport | null;
}

export default function ImportResult({
  report,
}: ImportResultProps) {

  if (!report) return null;

  const successRate =
      report.totalRows === 0
      ? 0
      : Math.round((report.imported / report.totalRows) * 100);

  return (
    <section className="mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="border-b border-slate-800 p-8">

        <div className="flex items-center gap-4">

          <div className="rounded-full bg-green-500/10 p-4">
            <CheckCircle2 className="h-10 w-10 text-green-400" />
          </div>

          <div>

            <h2 className="text-3xl font-bold text-white">
              🎉 Import Completed
            </h2>

            <p className="mt-2 text-slate-400">
              Your CRM import has finished successfully.
            </p>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">

        <div className="rounded-2xl bg-slate-950 p-6">

          <div className="flex items-center gap-3">

            <CheckCircle2 className="h-10 w-10 text-green-400" />

            <div>

              <p className="text-slate-400">
                Imported
              </p>

              <h3 className="text-4xl font-bold text-green-400">
                {report.imported}
              </h3>

            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-slate-950 p-6">

          <div className="flex items-center gap-3">

            <XCircle className="h-10 w-10 text-red-400" />

            <div>

              <p className="text-slate-400">
                Failed
              </p>

              <h3 className="text-4xl font-bold text-red-400">
                {report.failed}
              </h3>

            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-slate-950 p-6">

          <div className="flex items-center gap-3">

            <AlertTriangle className="h-10 w-10 text-yellow-400" />

            <div>

              <p className="text-slate-400">
                Total
              </p>

              <h3 className="text-4xl font-bold text-yellow-400">
                {report.totalRows}
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Success Rate */}

<div className="px-6 pb-6">

  <div className="mb-3 flex justify-between">

    <span className="text-sm text-slate-400">
      Import Success Rate
    </span>

    <span className="font-semibold text-green-400">
      {successRate}%
    </span>

  </div>

  <div className="h-3 overflow-hidden rounded-full bg-slate-800">

    <div
      className="h-full rounded-full bg-green-500 transition-all duration-700"
      style={{
        width: `${successRate}%`,
      }}
    />

  </div>

</div>


      {/* Errors */}

      <div className="border-t border-slate-800 p-6">

        <h3 className="mb-5 text-xl font-semibold text-white">
          Import Errors
        </h3>

        {report.errors.length === 0 ? (

          <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-8 text-center">

            <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-green-400" />

            <h3 className="text-2xl font-bold text-white">
              All Records Imported
            </h3>

            <p className="mt-2 text-slate-400">
              No import errors were detected.
            </p>

          </div>
        ) : (

          <div className="space-y-4">

            {report.errors.map((error, index) => (

              <div
                key={index}
                className="
rounded-2xl
border
border-red-500/20
bg-red-500/10
p-5
transition
hover:border-red-400
"
              >

                <h4 className="text-lg font-semibold text-red-400">

                  Row {error.row}

                </h4>

                <ul className="mt-2 list-disc pl-5 text-slate-300">

                  {error.errors.map((message, i) => (

                    <li key={i}>
                      {message}
                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        )}

      </div>

      <div className="flex flex-col gap-4 border-t border-slate-800 bg-slate-950 p-6 sm:flex-row sm:justify-end">

        <button
          className="
      rounded-xl
      border
      border-slate-700
      px-6
      py-3
      text-white
      transition
      hover:bg-slate-800
    "
        >
          View History
        </button>

        <button
          className="
      rounded-xl
      border
      border-indigo-500
      px-6
      py-3
      text-indigo-300
      transition
      hover:bg-indigo-500
      hover:text-white
    "
        >
          Go Dashboard
        </button>

        <button
          className="
      rounded-xl
      bg-gradient-to-r
      from-green-600
      to-emerald-600
      px-6
      py-3
      font-semibold
      text-white
      transition
      hover:scale-105
    "
        >
          Import Another File
        </button>

      </div>

    </section>
  );
}