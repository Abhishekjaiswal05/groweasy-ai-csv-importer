"use client";

import { Download } from "lucide-react";

interface DownloadButtonProps {
  data: unknown;
}

export default function DownloadButton({
  data,
}: DownloadButtonProps) {
  function handleDownload() {
    const json = JSON.stringify(data, null, 2);

    const blob = new Blob([json], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "crm-data.json";

    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 rounded-xl border border-indigo-500 px-5 py-3 text-indigo-400 transition hover:bg-indigo-500 hover:text-white"
    >
      <Download className="h-5 w-5" />

      Download JSON
    </button>
  );
}