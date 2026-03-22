"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ArrowRight } from "lucide-react";

export function DonateBanner() {
  const pathname = usePathname();

  // Don't show on the donate page itself
  if (pathname === "/donate") return null;

  return (
    <section className="bg-gradient-to-r from-green-700 via-green-600 to-teal-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 py-6 sm:py-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
            <Heart className="h-5 w-5 text-white" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm sm:text-base font-semibold text-white">
              Support Democracy in Africa
            </p>
            <p className="text-xs sm:text-sm text-white/70">
              Your M-Pesa donation directly funds inter-party dialogue across the continent.
            </p>
          </div>
        </div>
        <Link
          href="/donate"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-green-700 shadow-sm transition-all hover:bg-green-50 hover:shadow-md shrink-0"
        >
          Donate Now
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
