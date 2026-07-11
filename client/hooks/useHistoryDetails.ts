"use client";

import { useEffect, useState } from "react";
import {
  getHistoryDetails,
  ImportHistoryDetails,
} from "@/services/historyDetails.service";

export default function useHistoryDetails(id: string) {
  const [history, setHistory] =
    useState<ImportHistoryDetails | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    async function load() {
      try {
        const data = await getHistoryDetails(id);

        setHistory(data);
      } catch {
        setError("Unable to load import details.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  return {
    history,
    loading,
    error,
  };
}