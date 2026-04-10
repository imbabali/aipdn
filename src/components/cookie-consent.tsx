"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

function getConsentSnapshot() {
  return typeof window !== "undefined" ? localStorage.getItem("cookie-consent") : "accepted";
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getConsentSnapshot, () => "accepted");

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    window.dispatchEvent(new Event("storage"));
  };

  if (consent) return null;

  return (
    <div role="region" aria-label="Cookie consent" className="fixed bottom-0 left-0 right-0 z-[60] border-t border-border bg-background p-4 shadow-lg sm:p-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          This site uses essential cookies to ensure proper functionality.
          By continuing to use this site, you agree to our{" "}
          <Link href="/privacy-policy" className="underline text-green-700 hover:text-green-600">
            Privacy Policy
          </Link>.
        </p>
        <button
          onClick={accept}
          className="shrink-0 rounded-full bg-green-700 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-800"
        >
          Accept cookies
        </button>
      </div>
    </div>
  );
}
