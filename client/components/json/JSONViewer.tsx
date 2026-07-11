"use client";


import CopyButton from "./CopyButton";
import DownloadButton from "./DownloadButton";
interface JSONViewerProps {
    data: unknown;
}

export default function JSONViewer({
    data,
}: JSONViewerProps) {
    if (!data) {
        return (
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">

                <div>
                    <h2 className="text-2xl font-bold text-white">
                        CRM JSON
                    </h2>

                    <p className="mt-2 text-slate-400">
                        Final payload ready for CRM import.
                    </p>
                </div>

                <div className="flex gap-3">
                    <CopyButton data={data} />
                    <DownloadButton data={data} />
                </div>

            </div>
        );
    }

    return (
        <section className="rounded-3xl border border-slate-800 bg-slate-900">

            <div className="border-b border-slate-800 px-6 py-5">

                <h2 className="text-2xl font-bold text-white">
                    CRM JSON
                </h2>

                <p className="mt-2 text-slate-400">
                    Final payload ready for CRM import.
                </p>

            </div>

            <pre className="max-h-[600px] overflow-auto bg-slate-950 p-6 text-sm text-green-400">
                {JSON.stringify(data, null, 2)}
            </pre>

        </section>
    );
}