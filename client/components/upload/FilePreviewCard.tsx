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
    <div
      className="
    mt-6
    flex
    items-center
    justify-between
    rounded-3xl
    border
    border-slate-800
    bg-slate-900
    px-6
    py-5
    shadow-lg
    transition-all
    duration-300
    hover:border-indigo-500/40
  "
    >

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-indigo-500/10 p-4">
          <FileSpreadsheet className="h-10 w-10 text-indigo-400" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">
            {file.name}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {(Number(fileSize)).toFixed(2)} KB
          </p>


          <div className="mt-3 inline-flex rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
            Ready to Import
          </div>
        </div>

      </div>

      <button
        onClick={onRemove}
        className="
    flex
    items-center
    gap-2
    rounded-xl
    border
    border-red-500/20
    bg-red-500/10
    px-4
    py-2
    text-red-400
    transition
    hover:bg-red-500/20
  "
      >

        <>
          <Trash2 className="h-4 w-4" />
          <span className="text-sm font-medium">
            Remove
          </span>
        </>
      </button>

    </div>
  );
}