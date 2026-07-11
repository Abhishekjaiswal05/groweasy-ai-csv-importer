import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export interface MappingResult {
  originalColumn: string;
  mappedField: string;
  confidence: number;
}

export async function mapHeaders(headers: string[]) {
  const response = await api.post("/api/ai/map-fields", {
    headers,
  });

  if (!response.data.success) {
    throw new Error("AI Mapping Failed");
  }

  return response.data.mappings as MappingResult[];
}