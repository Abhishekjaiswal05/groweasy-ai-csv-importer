"use client";

import type { CSVData } from "@/types/csv";

interface PreviewTableProps {
  csvData: CSVData | null;
}

export default function PreviewTable({
  csvData,
}: PreviewTableProps) {
  // Empty State
  if (!csvData) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900 p-16 text-center">
        <h2 className="text-2xl font-bold text-white">
          CSV Preview
        </h2>

        <p className="mt-3 text-slate-400">
          Preview your uploaded CSV before importing.
        </p>

        <p className="mx-auto mt-6 max-w-md text-slate-500">
          Upload a CSV file to preview its contents.
        </p>
      </div>
    );
  }

  const { rows, headers } = csvData;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 p-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            CSV Preview
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Preview your uploaded CSV before importing.
          </p>
        </div>

        <div className="rounded-xl bg-indigo-500/10 px-4 py-2">
          <p className="text-sm font-medium text-indigo-400">
            {rows.length} Rows • {headers.length} Columns
          </p>
        </div>

      </div>

      {/* Table */}
      <div className="max-h-[450px] overflow-auto">

        <table className="min-w-full">

          <thead className="sticky top-0 bg-slate-950 z-10">

            <tr>

              {headers.map((header) => (
                <th
                  key={header}
                  className="
                    border-b
                    border-slate-800
                    px-6
                    py-4
                    text-left
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-slate-400
                  "
                >
                  {header}
                </th>
              ))}

            </tr>

          </thead>

          <tbody>

            {rows.map((row, index) => (

              <tr
                key={index}
                className="
                  border-b
                  border-slate-800
                  transition-colors
                  hover:bg-slate-800/60
                "
              >

                {headers.map((header) => (

                  <td
                    key={header}
                    className="
                      whitespace-nowrap
                      px-6
                      py-4
                      text-sm
                      text-slate-300
                    "
                  >
                    {row[header] || "-"}
                  </td>

                ))}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}