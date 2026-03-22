"use client";

import type { FormState } from "@/app/actions";
import { CheckCircle, AlertCircle } from "lucide-react";

export function FormStatus({ state }: { state: FormState }) {
  if (!state) return null;

  return (
    <div
      role="alert"
      className={`flex items-start gap-3 rounded-xl p-4 text-sm ${
        state.success
          ? "bg-green-50 text-green-800 border border-green-200"
          : "bg-red-50 text-red-800 border border-red-200"
      }`}
    >
      {state.success ? (
        <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
      ) : (
        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
      )}
      <p>{state.message}</p>
    </div>
  );
}
