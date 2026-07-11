import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export interface DashboardStats {
  totalImports: number;
  totalCustomers: number;
  failedRows: number;
  successRate: number;
}

export async function getDashboardStats() {
  const response = await api.get("/api/dashboard/stats");

  return response.data.stats as DashboardStats;
}