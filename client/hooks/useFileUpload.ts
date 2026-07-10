"use client";

import { useState } from "react";
import type { UploadedFile } from "@/types/upload";

export default function useFileUpload() {
  const [selectedFile, setSelectedFile] =
    useState<UploadedFile | null>(null);

  const [error, setError] =
    useState<string | null>(null);

  function validate(file: File) {
    setError(null);

    if (!file.name.toLowerCase().endsWith(".csv")) {
      setError("Please upload a CSV file.");
      return false;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("File size must be less than 10 MB.");
      return false;
    }

    return true;
  }

  function selectFile(file: File) {
    if (!validate(file)) return;

    setSelectedFile({
      file,
      name: file.name,
      size: file.size,
      type: file.type,
    });
  }

  function clearFile() {
    setSelectedFile(null);
    setError(null);
  }

  return {
    selectedFile,
    error,
    selectFile,
    clearFile,
  };
}