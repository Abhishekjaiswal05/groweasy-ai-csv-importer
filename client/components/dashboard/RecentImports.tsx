"use client";

import { HistoryItem } from "@/services/history.service";
import {
  CheckCircle2,
  XCircle,
  Clock3,
  FileSpreadsheet,
} from "lucide-react";

interface Props {
  history: HistoryItem[];
}

export default function RecentImports({
  history,
}: Props) {
  if (history.length === 0) {
    return (
      <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

        <div className="border-b border-slate-800 p-6">

          <h2 className="text-2xl font-bold text-white">
            Recent Imports
          </h2>

          <p className="mt-2 text-slate-400">
            Your latest imported CSV files.
          </p>

        </div>

        <div className="flex flex-col items-center justify-center py-20">

          <FileSpreadsheet className="mb-5 h-16 w-16 text-slate-600" />

          <h3 className="text-xl font-semibold text-white">
            No Import History
          </h3>

          <p className="mt-2 text-slate-400">
            Import your first CSV file to see it here.
          </p>

        </div>

      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 p-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Recent Imports
          </h2>

          <p className="mt-2 text-slate-400">
            Latest CSV imports into your CRM.
          </p>

        </div>

        <div className="rounded-xl bg-indigo-500/10 px-4 py-2">

          <p className="font-semibold text-indigo-400">
            {history.length} Imports
          </p>

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-950">

            <tr>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400">
                File
              </th>

              <th className="px-6 py-4 text-left text-xs uppercase tracking-wider text-slate-400">
                Status
              </th>

              <th className="px-6 py-4 text-center text-xs uppercase tracking-wider text-slate-400">
                Imported
              </th>

              <th className="px-6 py-4 text-center text-xs uppercase tracking-wider text-slate-400">
                Failed
              </th>

              <th className="px-6 py-4 text-center text-xs uppercase tracking-wider text-slate-400">
                Success
              </th>

              <th className="px-6 py-4 text-center text-xs uppercase tracking-wider text-slate-400">
                Uploaded By
              </th>

              <th className="px-6 py-4 text-center text-xs uppercase tracking-wider text-slate-400">
                Date
              </th>

            </tr>

          </thead>

          <tbody>

            {history.map((item) => {

              const successRate =
                item.totalRows === 0
                  ? 0
                  : Math.round(
                      (item.importedRows / item.totalRows) * 100
                    );

              return (

                <tr
                  key={item._id}
                  className="border-t border-slate-800 transition hover:bg-slate-800/40"
                >

                  {/* File */}

                  <td className="px-6 py-5">

                    <div>

                      <h4 className="font-semibold text-white">
                        {item.fileName}
                      </h4>

                      <p className="mt-1 text-xs text-slate-500">
                        {item.totalRows} Rows
                      </p>

                    </div>

                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">

                    {item.status === "Completed" && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-green-500/15 px-3 py-1 text-sm font-semibold text-green-400">
                        <CheckCircle2 className="h-4 w-4" />
                        Completed
                      </span>
                    )}

                    {item.status === "Partial" && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-yellow-500/15 px-3 py-1 text-sm font-semibold text-yellow-400">
                        <Clock3 className="h-4 w-4" />
                        Partial
                      </span>
                    )}

                    {item.status === "Failed" && (
                      <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3 py-1 text-sm font-semibold text-red-400">
                        <XCircle className="h-4 w-4" />
                        Failed
                      </span>
                    )}

                  </td>

                  {/* Imported */}

                  <td className="px-6 py-5 text-center font-semibold text-green-400">
                    {item.importedRows}
                  </td>

                  {/* Failed */}

                  <td className="px-6 py-5 text-center font-semibold text-red-400">
                    {item.failedRows}
                  </td>

                  {/* Success */}

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-700">

                        <div
                          className="h-full rounded-full bg-green-500 transition-all duration-700"
                          style={{
                            width: `${successRate}%`,
                          }}
                        />

                      </div>

                      <span className="text-sm font-semibold text-green-400">
                        {successRate}%
                      </span>

                    </div>

                  </td>

                  {/* Uploaded By */}

                  <td className="px-6 py-5 text-center text-slate-300">
                    {item.uploadedBy}
                  </td>

                  {/* Date */}

                  <td className="px-6 py-5 text-center text-slate-400">
                    {new Date(item.createdAt).toLocaleDateString("en-IN")}
                  </td>

                </tr>

              );
            })}

          </tbody>

        </table>

      </div>

    </section>
  );
}