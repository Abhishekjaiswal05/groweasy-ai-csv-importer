import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export interface ImportHistoryDetails {
  _id: string;
  fileName: string;
  totalRows: number;
  importedRows: number;
  failedRows: number;
  uploadedBy: string;
  status: "Completed" | "Partial" | "Failed";
  createdAt: string;

  mappings: {
    originalColumn: string;
    mappedField: string;
    confidence: number;
  }[];

  validationErrors: {
    row: number;
    field: string;
    message: string;
  }[];
}

export async function getHistoryDetails(id: string) {
  const response = await api.get(`/api/history/${id}`);

  return response.data.history as ImportHistoryDetails;
}