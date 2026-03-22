import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-teal-600 py-24">
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Join the Dialogue Movement
        </h2>
        <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/80">
          Whether you represent a political party, civil society organization,
          or academic institution, there&apos;s a place for you in the AIPDN
          network.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/get-involved/join"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-green-800 shadow-lg transition-all hover:bg-green-50 hover:shadow-xl"
          >
            Join the Network
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/get-involved/contact"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
