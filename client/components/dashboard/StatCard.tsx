"use client";

import { LucideIcon, TrendingUp } from "lucide-react";

interface StatCardProps {
    title: string;
    value: string | number;
    description?: string;
    trend?: string;
    icon?: LucideIcon;
    color?: "blue" | "green" | "red" | "yellow";
}

export default function StatCard({
    title,
    value,
    description,
    trend,
    icon: Icon,
    color = "blue",
}: StatCardProps) {
    const themes = {
        blue: {
            iconBg: "bg-blue-500/10",
            iconText: "text-blue-400",
            value: "text-blue-400",
            border: "border-blue-500/20",
            gradient: "from-blue-500 to-cyan-500",
        },
        green: {
            iconBg: "bg-green-500/10",
            iconText: "text-green-400",
            value: "text-green-400",
            border: "border-green-500/20",
            gradient: "from-green-500 to-emerald-500",
        },
        red: {
            iconBg: "bg-red-500/10",
            iconText: "text-red-400",
            value: "text-red-400",
            border: "border-red-500/20",
            gradient: "from-red-500 to-rose-500",
        },
        yellow: {
            iconBg: "bg-yellow-500/10",
            iconText: "text-yellow-400",
            value: "text-yellow-400",
            border: "border-yellow-500/20",
            gradient: "from-yellow-500 to-orange-500",
        },
    };

    const theme = themes[color];

    return (
        <div
            className={`
        group
        relative
        h-48
        overflow-hidden
        rounded-3xl
        border
        ${theme.border}
        bg-slate-900
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      `}
        >
            {/* Gradient Top Border */}

            <div
                className={`
          absolute
          left-0
          top-0
          h-1
          w-full
          bg-gradient-to-r
          ${theme.gradient}
        `}
            />

            {/* Header */}

            <div className="flex items-start justify-between">

                <div>

                    <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
                        {title}
                    </p>

                </div>

                {Icon && (

                    <div
                        className={`
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              ${theme.iconBg}
              transition-transform
              duration-300
              group-hover:scale-110
            `}
                    >
                        <Icon
                            className={`h-7 w-7 ${theme.iconText}`}
                        />
                    </div>

                )}

            </div>

            {/* Value */}

            <div className="mt-8">

                <h2
                    className={`
            text-5xl
            font-bold
            tracking-tight
            ${theme.value}
          `}
                >
                    {value}
                </h2>

            </div>

            {/* Footer */}

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">

                <div>

                    {description && (

                        <p className="text-sm text-slate-500">
                            {description}
                        </p>

                    )}

                </div>

                {trend && (

                    <div
                        className={`
              flex
              items-center
              gap-1
              rounded-full
              ${theme.iconBg}
              px-3
              py-1
              text-xs
              font-semibold
              ${theme.iconText}
            `}
                    >
                        <TrendingUp className="h-3 w-3" />

                        {trend}

                    </div>

                )}

            </div>

            {/* Decorative Glow */}

            <div
                className={`
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          ${theme.iconBg}
          opacity-30
          blur-3xl
        `}
            />

        </div>
    );
}