import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export interface HistoryItem {
  _id: string;
  fileName: string;
  status: string;
  totalRows: number;
  importedRows: number;
  failedRows: number;
  uploadedBy: string;
  createdAt: string;
}

export async function getHistory() {
  const response = await api.get("/api/history");

  return response.data.history as HistoryItem[];
}