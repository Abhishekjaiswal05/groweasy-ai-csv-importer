"use client";

import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import type { ValidationError } from "@/validation/validateCRMData";

interface ValidationCardProps {
  errors: ValidationError[];
  totalRows: number;
}

export default function ValidationCard({
  errors,
  totalRows,
}: ValidationCardProps) {
  const validRows = totalRows - errors.length;

  const validationScore =
    totalRows === 0
      ? 0
      : Math.round((validRows / totalRows) * 100);

  return (
    <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900">

      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-slate-800 p-8 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            ✅ Validation Report
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Review the detected issues before importing your CRM data.
          </p>

        </div>

        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-5 py-3">

          <p className="text-sm font-semibold text-indigo-300">
            {totalRows} Records
          </p>

        </div>

      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">

        <div className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-slate-900 p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-green-400" />
            <div>
              <p className="text-sm text-slate-400">
                Valid Rows
              </p>

              <h3 className="text-3xl font-bold text-green-400">
                {validRows}
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-slate-900 p-6">
          <div className="flex items-center gap-3">
            <XCircle className="h-8 w-8 text-red-400" />

            <div>
              <p className="text-sm text-slate-400">
                Invalid Rows
              </p>

              <h3 className="text-3xl font-bold text-red-400">
                {errors.length}
              </h3>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-slate-900 p-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-8 w-8 text-yellow-400" />

            <div>
              <p className="text-sm text-slate-400">
                Total Rows
              </p>

              <h3 className="text-3xl font-bold text-yellow-400">
                {totalRows}
              </h3>
            </div>
          </div>
        </div>

      </div>

      <div className="px-6 pb-6">

        <div className="mb-2 flex justify-between text-sm">

          <span className="text-slate-400">
            Validation Score
          </span>

          <span className="font-semibold text-green-400">
            {Math.round((validRows / totalRows) * 100)}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-green-500 transition-all duration-700"
            style={{
              width: `${(validRows / totalRows) * 100}%`,
            }}
          />

        </div>

      </div>

      {/* Errors */}
      <div className="border-t border-slate-800 p-6">

        <h3 className="mb-4 text-xl font-semibold text-white">
          Validation Errors
        </h3>

        {errors.length === 0 ? (
          <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-8 text-center">

            <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-green-400" />

            <h3 className="text-2xl font-bold text-white">
              Everything Looks Good!
            </h3>

            <p className="mt-2 text-slate-400">
              No validation errors were detected.
              Your data is ready to import.
            </p>

          </div>
        ) : (
          <div className="space-y-3">

            {errors.map((error, index) => (

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

                <div className="flex items-center justify-between">

                  <h4 className="font-semibold text-red-400">
                    ❌ Row {error.row}
                  </h4>

                  <span className="rounded-lg bg-red-500/20 px-3 py-1 text-xs text-red-300">
                    Error
                  </span>

                </div>

                <div className="mt-4 space-y-2">

                  <div>

                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Field
                    </p>

                    <p className="font-medium text-white">
                      {error.field}
                    </p>

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Issue
                    </p>

                    <p className="text-slate-300">
                      {error.message}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

      {/* Continue Button */}

      <div className="border-t border-slate-800 bg-slate-950 p-6">

        <div className="flex justify-end">

          <button
            className="
        rounded-xl
        bg-gradient-to-r
        from-indigo-600
        to-violet-600
        px-7
        py-3
        font-semibold
        text-white
        transition
        hover:scale-105
      "
          >
            Continue to Import →
          </button>

        </div>

      </div>

    </section>
  );
}