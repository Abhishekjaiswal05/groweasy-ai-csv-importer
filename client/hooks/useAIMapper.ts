"use client";

import { useState } from "react";
import { mapHeaders } from "@/services/ai.service";
import type { MappingResult } from "@/services/ai.service";

export default function useAIMapper() {
  const [loading, setLoading] = useState(false);

  const [mappings, setMappings] = useState<MappingResult[]>([]);

  const [error, setError] = useState("");

  async function detectFields(headers: string[]) {
    try {
      setLoading(true);
      setError("");

      const result = await mapHeaders(headers);

      setMappings(result);
    } catch {
      setError("Unable to detect fields.");
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    mappings,
    error,
    detectFields,
  };
}