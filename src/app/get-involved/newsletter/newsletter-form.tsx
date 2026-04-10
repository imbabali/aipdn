"use client";

import { useActionState } from "react";
import { submitNewsletter, type FormState } from "@/app/actions";
import { FormStatus } from "@/components/shared/form-status";

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitNewsletter,
    null
  );

  return (
    <form action={formAction} className="mt-8 space-y-5" aria-describedby={state ? "form-status-message" : undefined} noValidate>
      <FormStatus state={state} />
      <input type="text" name="website" className="absolute -left-[9999px]" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div>
        <label htmlFor="nl-name" className="block text-sm font-medium text-foreground">
          Name (optional)
        </label>
        <input
          type="text"
          id="nl-name"
          name="name"
          autoComplete="name"
          className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm placeholder:text-muted-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="nl-email" className="block text-sm font-medium text-foreground">
          Email Address <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="email"
          id="nl-email"
          name="email"
          required
          autoComplete="email"
          className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm placeholder:text-muted-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
          placeholder="you@example.com"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-teal-600 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Subscribing..." : "Subscribe"}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        By subscribing, you agree to receive emails from AIPDN. You can unsubscribe at any time.
      </p>
    </form>
  );
}
