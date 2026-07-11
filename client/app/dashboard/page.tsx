"use client";

import { useRouter } from "next/navigation";
import useDashboard from "@/hooks/useDashboard";
import useHistory from "@/hooks/useHistory";
import StatCard from "@/components/dashboard/StatCard";

import {
    Database,
    Users,
    XCircle,
    TrendingUp,
} from "lucide-react";
import RecentImports from "@/components/dashboard/RecentImports";

export default function DashboardPage() {

    const router = useRouter();

    const {
        stats,
        loading,
        error,
    } = useDashboard();

    const {
        history,
        loading: historyLoading,
        error: historyError,
    } = useHistory();

    if (loading)
        return (
            <div className="p-10 text-white">
                Loading Dashboard...
            </div>
        );

    if (error)
        return (
            <div className="p-10 text-red-400">
                {error}
            </div>
        );



    return (
        <section
            className="
    mx-auto
    max-w-[1600px]
    px-8
    py-10
    space-y-10
  "
        >

            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div>

                    <p className="text-sm font-medium uppercase tracking-wider text-indigo-400">
                        Dashboard
                    </p>

                    <h1 className="mt-2 text-4xl font-bold text-white">
                        Welcome back,
                        <span className="text-indigo-400"> Abhishek</span> 👋
                    </h1>

                    <p className="mt-3 max-w-2xl text-slate-400">
                        Manage imports, monitor customer records,
                        validate CSV files, and track AI processing
                        from one unified dashboard
                    </p>

                </div>

                <div className="flex gap-4">

                    <button
                        onClick={() => router.push("/")}
                        className="
        rounded-xl
        bg-indigo-600
        px-6
        py-3
        font-semibold
        text-white
        transition
        hover:bg-indigo-500
      "
                    >
                        + Import CSV
                    </button>

                    <button
                        onClick={() => router.push("/history")}
                        className="
        rounded-xl
        border
        border-slate-700
        px-6
        py-3
        font-semibold
        text-white
        transition
        hover:bg-slate-800
      "
                    >
                        View History
                    </button>

                </div>

            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Total Imports"
                    value={stats?.totalImports ?? 0}
                    description="CSV files imported"
                    trend="+12%"
                    icon={Database}
                    color="blue"
                />

                <StatCard
                    title="Customers Imported"
                    value={stats?.totalCustomers ?? 0}
                    description="Customer records"
                    trend="+8%"
                    icon={Users}
                    color="green"
                />

                <StatCard
                    title="Failed Rows"
                    value={stats?.failedRows ?? 0}
                    description="Rows requiring attention"
                    icon={XCircle}
                    color="red"
                />

                <StatCard
                    title="Success Rate"
                    value={`${stats?.successRate ?? 0}%`}
                    description="Overall import success"
                    icon={TrendingUp}
                    color="yellow"
                />

            </div>

            <div className="mt-8">

                <div className="lg:col-span-2 rounded-3xl border border-slate-800 bg-slate-900 p-8">

                    <h2 className="text-2xl font-bold text-white">
                        Monthly Import Activity
                    </h2>

                    <p className="mt-2 text-slate-400">
                        Import statistics over the last six months.
                    </p>

                    <div className="mt-10 flex h-72 items-center justify-center rounded-2xl border border-dashed border-slate-700 text-slate-500">

                        Chart Coming Soon

                    </div>

                </div>

            </div>

            <div className="mt-10">

                <RecentImports
                    history={history}
                />

            </div>

        </section>
    );
}