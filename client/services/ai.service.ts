import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface MappingRequest {
  headers: string[];
}

export interface MappingResult {
  originalColumn: string;
  mappedField: string;
  confidence: number;
}

export async function mapHeaders(
  headers: string[]
): Promise<MappingResult[]> {
  const response = await api.post("/ai/map-fields", {
    headers,
  });

  return response.data.mappings;
}