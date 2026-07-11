"use client";

import { useState } from "react";
import { mapHeaders, MappingResult } from "@/services/ai.service";

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

        } catch (err) {
            console.error(err);

            setError("Unable to generate AI mapping.");
        } finally {
            setLoading(false);
        }
    }

    function updateMapping(
        originalColumn: string,
        mappedField: string
    ) {
        setMappings((prev) =>
            prev.map((mapping) =>
                mapping.originalColumn === originalColumn
                    ? {
                        ...mapping,
                        mappedField,
                    }
                    : mapping
            )
        );
    }

    return {
        mappings,
        loading,
        error,
        detectFields,
        updateMapping,
    };
}