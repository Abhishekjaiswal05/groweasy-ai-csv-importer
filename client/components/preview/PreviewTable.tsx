"use client";

import type { CSVData } from "@/types/csv";

interface PreviewTableProps {
  csvData: CSVData | null;
}

export default function PreviewTable({
  csvData,
}: PreviewTableProps) {

  if (!csvData) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 p-12 text-center">
        <h2 className="text-xl font-semibold text-white">
          CSV Preview
        </h2>

        <p className="mt-3 text-slate-400">
          Upload a CSV file to preview its contents.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        CSV Preview
      </h2>

      <div className="overflow-x-auto">

        <table className="min-w-full border-collapse">

          <thead>

            <tr>

              {csvData.headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-slate-700 px-4 py-3 text-left text-sm font-semibold text-slate-300"
                >
                  {header}
                </th>
              ))}

            </tr>

          </thead>

          <tbody>

            {csvData.rows.map((row, index) => (

              <tr
                key={index}
                className="border-b border-slate-800 hover:bg-slate-800"
              >

                {csvData.headers.map((header) => (

                  <td
                    key={header}
                    className="px-4 py-3 text-sm text-slate-300"
                  >
                    {row[header]}
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