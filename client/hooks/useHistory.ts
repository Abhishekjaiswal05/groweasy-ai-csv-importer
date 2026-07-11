"use client";

import { useEffect, useState } from "react";

import {
  getHistory,
  HistoryItem,
} from "@/services/history.service";

export default function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadHistory() {
      try {
        setLoading(true);

        const data = await getHistory();

        setHistory(data);
      } catch (err) {
        setError("Failed to load history.");
      } finally {
        setLoading(false);
      }
    }

    loadHistory();
  }, []);

  return {
    history,
    loading,
    error,
  };
}