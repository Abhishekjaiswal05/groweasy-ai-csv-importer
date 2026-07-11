"use client";

import { useEffect, useState } from "react";
import {
  DashboardStats,
  getDashboardStats,
} from "@/services/dashboard.service";

export default function useDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        setLoading(true);

        const data = await getDashboardStats();

        setStats(data);
      } catch (err) {
        console.error(err);

        setError("Unable to load dashboard.");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return {
    stats,
    loading,
    error,
  };
}