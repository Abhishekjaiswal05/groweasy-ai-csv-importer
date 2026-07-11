"use client";

import MappingRow from "./MappingRow";
import type { HeaderMapping } from "@/types/mapping";

interface MappingTableProps {
    mappings: HeaderMapping[];

    onChange: (
        originalColumn: string,
        mappedField: string
    ) => void;
}

export default function MappingTable({
    mappings,
    onChange,
}: MappingTableProps) {
    if (mappings.length === 0) {
        return (
            <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900 p-16 text-center">
                <h2 className="text-2xl font-bold text-white">
                    AI Mapping
                </h2>

                <p className="mx-auto mt-4 max-w-md text-slate-400">
                    Upload a CSV file and run AI mapping to see the detected fields.
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
            <div className="max-h-[500px] overflow-auto">

                <table className="min-w-full">

                    <thead className="sticky top-0 z-10 bg-slate-950">

                        <tr>

                            <th className="
border-b
border-slate-800
px-6
py-4
text-left
text-xs
font-semibold
uppercase
tracking-wider
text-slate-400
">
                                CSV Column
                            </th>

                            <th className="
border-b
border-slate-800
px-6
py-4
text-left
text-xs
font-semibold
uppercase
tracking-wider
text-slate-400
">
                                AI Detected CRM Field
                            </th>

                            <th className="
border-b
border-slate-800
px-6
py-4
text-left
text-xs
font-semibold
uppercase
tracking-wider
text-slate-400
">
                                Confidence
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {mappings.map((mapping, index) => (

                            <MappingRow
                                key={index}
                                originalColumn={mapping.originalColumn}
                                mappedField={mapping.mappedField}
                                confidence={mapping.confidence}
                                onChange={onChange}
                            />

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}