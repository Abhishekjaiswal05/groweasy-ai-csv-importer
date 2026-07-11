"use client";

import {
  Loader2,
  UploadCloud,
  BrainCircuit,
  Database,
  CheckCircle2,
} from "lucide-react";

interface ImportProgressProps {
  progress: number;
  step: string;
}

export default function ImportProgress({
  progress,
  step,
}: ImportProgressProps) {
  const estimatedTime =
    progress >= 100
      ? "Completed"
      : `${Math.max(1, Math.ceil((100 - progress) / 20))} sec remaining`;

  function getStepIcon() {
    switch (step) {
      case "Uploading":
        return <UploadCloud className="h-6 w-6 text-indigo-400" />;

      case "Processing":
        return <BrainCircuit className="h-6 w-6 text-yellow-400" />;

      case "Saving":
        return <Database className="h-6 w-6 text-green-400" />;

      default:
        return (
          <Loader2 className="h-6 w-6 animate-spin text-indigo-400" />
        );
    }
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-800 p-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Import Progress
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Please wait while we import your customer records.
          </p>

        </div>

        <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-2">

          <p className="text-lg font-bold text-indigo-300">
            {progress}%
          </p>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-6 p-6">

        <div className="flex items-center gap-4">

          <div className="rounded-xl bg-slate-800 p-3">
            {getStepIcon()}
          </div>

          <div>

            <h3 className="font-semibold text-white">
              {step}
            </h3>

            <p className="text-sm text-slate-400">
              {estimatedTime}
            </p>

          </div>

        </div>

        {/* Progress Bar */}

        <div>

          <div className="mb-2 flex justify-between text-sm">

            <span className="text-slate-400">
              Overall Progress
            </span>

            <span className="font-semibold text-indigo-300">
              {progress}%
            </span>

          </div>

          <div className="h-4 overflow-hidden rounded-full bg-slate-800">

            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Success */}

        {progress === 100 && (

          <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5">

            <div className="flex items-center gap-3">

              <CheckCircle2 className="h-8 w-8 text-green-400" />

              <div>

                <h4 className="font-semibold text-white">
                  Import Completed Successfully
                </h4>

                <p className="text-sm text-slate-400">
                  All customer records have been imported.
                </p>

              </div>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}