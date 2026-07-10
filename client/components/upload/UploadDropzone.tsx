"use client";

import { useRef } from "react";
import { UploadCloud } from "lucide-react";

import type { UploadedFile } from "@/types/upload";
import FilePreviewCard from "./FilePreviewCard";

interface UploadDropzoneProps {
  selectedFile: UploadedFile | null;
  error: string | null;
  onFileSelect: (file: File) => void;
  onRemove: () => void;
}

export default function UploadDropzone({
  selectedFile,
  error,
  onFileSelect,
  onRemove,
}: UploadDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleBrowse() {
    inputRef.current?.click();
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    onFileSelect(file);
  }

  function handleDrop(
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();

    const file = event.dataTransfer.files?.[0];

    if (!file) return;

    onFileSelect(file);
  }

  function handleDragOver(
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();
  }

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept=".csv"
        hidden
        onChange={handleChange}
      />

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="rounded-3xl border-2 border-dashed border-slate-700 bg-slate-900 p-16 transition-all duration-300 hover:border-indigo-500"
      >
        <div className="flex flex-col items-center justify-center text-center">

          <div className="mb-6 rounded-full bg-indigo-500/10 p-6">
            <UploadCloud className="h-16 w-16 text-indigo-400" />
          </div>

          <h2 className="text-3xl font-bold text-white">
            Drag & Drop CSV Here
          </h2>

          <p className="mt-4 text-slate-400">
            or click the button below to browse your computer
          </p>

          <button
            type="button"
            onClick={handleBrowse}
            className="mt-8 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-500"
          >
            Browse CSV File
          </button>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span>✓ CSV Only</span>
            <span>✓ Maximum 10 MB</span>
            <span>✓ AI Ready</span>
          </div>

          {error && (
            <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400">
              {error}
            </div>
          )}
        </div>
      </div>

      {selectedFile && (
        <FilePreviewCard
          file={selectedFile}
          onRemove={onRemove}
        />
      )}
    </>
  );
}