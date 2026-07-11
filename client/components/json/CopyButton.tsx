"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  data: unknown;
}

export default function CopyButton({
  data,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(
        JSON.stringify(data, null, 2)
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed", error);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white transition hover:bg-indigo-500"
    >
      {copied ? (
        <>
          <Check className="h-5 w-5" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-5 w-5" />
          Copy JSON
        </>
      )}
    </button>
  );
}