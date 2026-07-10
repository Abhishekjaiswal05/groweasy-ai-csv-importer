"use client";

import { FileSpreadsheet, Trash2 } from "lucide-react";
import type { UploadedFile } from "@/types/upload";

interface Props {
  file: UploadedFile;
  onRemove: () => void;
}

export default function FilePreviewCard({
  file,
  onRemove,
}: Props) {
  const fileSize = (file.size / 1024).toFixed(2);

  return (
    <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-indigo-500/20 p-3">
          <FileSpreadsheet className="h-8 w-8 text-indigo-400" />
        </div>

        <div>
          <h3 className="font-semibold text-white">
            {file.name}
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            {(Number(fileSize)).toFixed(2)} KB
          </p>
        </div>

      </div>

      <button
        onClick={onRemove}
        className="rounded-xl bg-red-500/20 p-3 transition hover:bg-red-500/30"
      >
        <Trash2 className="h-5 w-5 text-red-400" />
      </button>

    </div>
  );
}