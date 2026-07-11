import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export interface ImportError {
  row: number;
  errors: string[];
}

export interface ImportReport {
  totalRows: number;
  imported: number;
  failed: number;
  errors: ImportError[];
}

export async function importCustomers({
  fileName,
  customers,
  mappings,
  validationErrors,
  uploadedBy,
}: {
  fileName: string;
  customers: unknown[];
  mappings: unknown[];
  validationErrors: unknown[];
  uploadedBy?: string;
}) {
  const response = await api.post("/api/import", {
    fileName,
    customers,
    mappings,
    validationErrors,
    uploadedBy,
  });

  return response.data.report;
}