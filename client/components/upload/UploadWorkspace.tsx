"use client";

import { useEffect } from "react";

import UploadDropzone from "./UploadDropzone";
import PreviewTable from "@/components/preview/PreviewTable";
import useFileUpload from "@/hooks/useFileUpload";
import useCSVParser from "@/hooks/useCSVParser";

export default function UploadWorkspace() {

  const {
    selectedFile,
    error,
    selectFile,
    clearFile,
  } = useFileUpload();

  const {
    csvData,
    loading,
    parseCSV,
  } = useCSVParser();

  useEffect(() => {

    if (selectedFile) {
      parseCSV(selectedFile.file);
    }

  }, [selectedFile]);

  return (

    <section className="mx-auto max-w-7xl">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-white">
          Import Customer Data
        </h1>

        <p className="mt-3 text-slate-400">
          Upload your CSV and let AI automatically map CRM fields.
        </p>

      </div>

      {/* Upload */}

      <UploadDropzone
        selectedFile={selectedFile}
        error={error}
        onFileSelect={selectFile}
        onRemove={clearFile}
      />

      {/* Loading */}

      {loading && (

        <div className="mt-8 rounded-xl bg-slate-900 p-6">

          Parsing CSV...

        </div>

      )}

      {/* Preview */}

      <div className="mt-10">

        <PreviewTable csvData={csvData} />

      </div>

    </section>

  );

}