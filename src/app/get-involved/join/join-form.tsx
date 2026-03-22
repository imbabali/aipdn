"use client";

import { useActionState } from "react";
import { submitJoinForm, type FormState } from "@/app/actions";
import { FormStatus } from "@/components/shared/form-status";

export function JoinForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitJoinForm,
    null
  );

  return (
    <form action={formAction} className="mt-8 space-y-6">
      <FormStatus state={state} />
      <div>
        <label htmlFor="org-name" className="block text-sm font-medium text-foreground">
          Organization Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="org-name"
          name="org-name"
          required
          autoComplete="organization"
          className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          placeholder="Your organization"
        />
      </div>
      <div>
        <label htmlFor="org-type" className="block text-sm font-medium text-foreground">
          Organization Type <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <select
          id="org-type"
          name="org-type"
          required
          className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm text-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
        >
          <option value="">Select type</option>
          <option value="political-party">Political Party</option>
          <option value="civil-society">Civil Society Organization</option>
          <option value="academic">Academic Institution</option>
          <option value="government">Government Body</option>
          <option value="international">International Organization</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-foreground">
            Contact Person <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="contact-name"
            required
            autoComplete="name"
            className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="join-email" className="block text-sm font-medium text-foreground">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="join-email"
            name="email"
            required
            autoComplete="email"
            className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-base sm:text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
            placeholder="you@org.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-foreground">
          Country <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="country"
          name="country"
          required
          autoComplete="country-name"
          className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          placeholder="Country"
        />
      </div>
      <div>
        <label htmlFor="motivation" className="block text-sm font-medium text-foreground">
          Why do you want to join AIPDN?
        </label>
        <textarea
          id="motivation"
          name="motivation"
          rows={4}
          className="mt-2 block w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 resize-none"
          placeholder="Tell us about your interest..."
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-green-700 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-800 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? "Submitting..." : "Submit Expression of Interest"}
      </button>
    </form>
  );
}
