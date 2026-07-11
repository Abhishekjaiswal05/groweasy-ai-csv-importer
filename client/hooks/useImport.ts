"use client";

import { useState } from "react";
import {
  importCustomers,
  ImportReport,
} from "@/services/import.service";

export default function useImport() {
  const [loading, setLoading] = useState(false);

  const [progress, setProgress] = useState(0);

  const [step, setStep] = useState("");

  const [report, setReport] =
    useState<ImportReport | null>(null);

  const [error, setError] =
    useState("");

  async function startImport(data: {
    fileName: string;
    customers: unknown[];
    mappings: unknown[];
    validationErrors: unknown[];
    uploadedBy?: string;
  }) {
    try {
      setLoading(true);

      setProgress(10);
      setStep("Preparing import...");
      setError("");

      setProgress(40);
      setStep("Sending data to server...");

      const result = await importCustomers(data);

      setProgress(80);
      setStep("Processing response...");

      setReport(result);

      setProgress(100);
      setStep("Import completed.");

    } catch (err) {
      console.error(err);
      setError("Import failed.");
    } finally {
      setLoading(false);
    }
  }
  return {
    loading,
    report,
    error,
    progress,
    step,
    startImport,
  };
}