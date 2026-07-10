"use client";

import { useState } from "react";
import Papa from "papaparse";
import type { CSVData } from "@/types/csv";

export default function useCSVParser() {
  const [csvData, setCsvData] = useState<CSVData | null>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  function parseCSV(file: File) {
    setLoading(true);
    setError(null);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,

      complete(result) {
        const rows = result.data as Record<string, string>[];

        if (rows.length === 0) {
          setError("CSV file is empty.");
          setLoading(false);
          return;
        }

        setCsvData({
          headers: Object.keys(rows[0]),
          rows,
        });

        setLoading(false);
      },

      error() {
        setError("Unable to parse CSV.");
        setLoading(false);
      },
    });
  }

  return {
    csvData,
    loading,
    error,
    parseCSV,
  };
}