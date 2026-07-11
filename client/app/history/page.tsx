"use client";

import useHistory from "@/hooks/useHistory";
import HistoryTable from "@/components/history/HistoryTable";

export default function HistoryPage() {
  const { history, loading } = useHistory();

  if (loading) {
    return (
      <div className="p-6">
        Loading history...
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">
        Import History
      </h1>

      <HistoryTable history={history} />
    </section>
  );
}