"use client";

import { useActionState } from "react";
import { submitContactForm, type FormState } from "@/app/actions";
import { FormStatus } from "@/components/shared/form-status";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitContactForm,
    null
  );

  return (
    <form action={formAction} className="mt-8 space-y-6" aria-describedby={state ? "form-status-message" : undefined} noValidate>
      <FormStatus state={state} />
      <input type="text" name="website" className="absolute -left-[9999px]" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Full Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email Address <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground">
          Subject <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          placeholder="What's this about?"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm text-foreground placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 resize-none"
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="rounded-full bg-green-700 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-800 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
