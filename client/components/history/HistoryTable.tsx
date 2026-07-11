"use client";

import { HistoryItem } from "@/services/history.service";
import { useRouter } from "next/navigation";

interface Props {
  history: HistoryItem[];
}

export default function HistoryTable({
  history,
}: Props) {
  const router = useRouter();

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg">

      <table className="w-full">

        <thead className="bg-slate-950">

          <tr>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              File
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
              Status
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
              Total
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
              Imported
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
              Failed
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
              Uploaded By
            </th>

            <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
              Date
            </th>

          </tr>

        </thead>

        <tbody>

          {history.map((item) => (

            <tr
              key={item._id}
              onClick={() => router.push(`/history/${item._id}`)}
              className="
                cursor-pointer
                border-t
                border-slate-800
                transition
                hover:bg-slate-800/40
              "
            >

              <td className="px-6 py-5">

                <div>

                  <h3 className="font-semibold text-white">
                    {item.fileName}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {item.totalRows} Rows
                  </p>

                </div>

              </td>

              <td className="px-6 py-5">

                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold
                    ${
                      item.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : item.status === "Partial"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }
                  `}
                >
                  {item.status}
                </span>

              </td>

              <td className="px-6 py-5 text-center text-slate-300">
                {item.totalRows}
              </td>

              <td className="px-6 py-5 text-center font-semibold text-green-400">
                {item.importedRows}
              </td>

              <td className="px-6 py-5 text-center font-semibold text-red-400">
                {item.failedRows}
              </td>

              <td className="px-6 py-5 text-center text-slate-300">
                {item.uploadedBy}
              </td>

              <td className="px-6 py-5 text-center">

                <div className="text-slate-300">
                  {new Date(item.createdAt).toLocaleDateString("en-IN")}
                </div>

                <div className="mt-1 text-xs text-slate-500">
                  {new Date(item.createdAt).toLocaleTimeString("en-IN")}
                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}