"use client";

import { useParams } from "next/navigation";
import useHistoryDetails from "@/hooks/useHistoryDetails";

export default function HistoryDetailsPage() {
  const params = useParams();

  const id = params.id as string;

  const {
    history,
    loading,
    error,
  } = useHistoryDetails(id);

  if (loading) {
    return (
      <div className="p-10 text-white">
        Loading Import Details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-red-400">
        {error}
      </div>
    );
  }

  if (!history) {
    return (
      <div className="p-10 text-red-400">
        Import not found.
      </div>
    );
  }

  return (
  <section className="mx-auto max-w-7xl space-y-8 p-8">

    {/* Header */}

    <div>

      <h1 className="text-4xl font-bold text-white">
        {history.fileName}
      </h1>

      <p className="mt-2 text-slate-400">
        Import Details
      </p>

    </div>

    {/* Summary Cards */}

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-slate-400">Total Rows</p>
        <h2 className="mt-3 text-4xl font-bold text-white">
          {history.totalRows}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-slate-400">Imported</p>
        <h2 className="mt-3 text-4xl font-bold text-green-400">
          {history.importedRows}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-slate-400">Failed</p>
        <h2 className="mt-3 text-4xl font-bold text-red-400">
          {history.failedRows}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-slate-400">Status</p>
        <h2 className="mt-3 text-2xl font-bold text-indigo-400">
          {history.status}
        </h2>
      </div>

    </div>

    {/* File Information */}

    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="text-2xl font-bold text-white">
        File Information
      </h2>

      <div className="mt-6 grid gap-6 md:grid-cols-2">

        <div>
          <p className="text-slate-400">Uploaded By</p>
          <h3 className="mt-2 text-xl text-white">
            {history.uploadedBy}
          </h3>
        </div>

        <div>
          <p className="text-slate-400">Imported On</p>
          <h3 className="mt-2 text-xl text-white">
            {new Date(history.createdAt).toLocaleString("en-IN")}
          </h3>
        </div>

      </div>

    </div>

  </section>
);
}