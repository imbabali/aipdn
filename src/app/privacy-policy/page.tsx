import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { SITE_FULL_NAME, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for the ${SITE_FULL_NAME} website.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                1. Introduction
              </h2>
              <p className="mt-3">
                The {SITE_FULL_NAME} (&quot;AIPDN&quot;, &quot;we&quot;, &quot;us&quot;) is committed to protecting
                your privacy. This policy explains how we collect, use, and safeguard
                information when you visit our website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                2. Information We Collect
              </h2>
              <p className="mt-3">We collect information that you voluntarily provide through:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li><strong>Contact Form:</strong> name, email address, subject, and message</li>
                <li><strong>Newsletter Subscription:</strong> name (optional) and email address</li>
                <li><strong>Membership Application:</strong> organization name, type, contact person, email, country, and motivation</li>
                <li><strong>Donations:</strong> we do not collect payment information directly; M-Pesa transactions are processed by Safaricom</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                3. How We Use Your Information
              </h2>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>To respond to your enquiries and messages</li>
                <li>To process membership applications</li>
                <li>To send newsletter updates (with your consent)</li>
                <li>To improve our website and services</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                4. Data Storage and Security
              </h2>
              <p className="mt-3">
                Your data is stored securely using Supabase, a trusted cloud database
                provider with encryption at rest and in transit. We implement
                row-level security policies to protect your information. Only
                authorized AIPDN staff can access submitted data.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                5. Cookies
              </h2>
              <p className="mt-3">
                This website uses only essential cookies required for the site to
                function properly. We do not use tracking cookies, advertising
                cookies, or third-party analytics cookies.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                6. Third-Party Services
              </h2>
              <p className="mt-3">
                Our website is hosted on Vercel. When you interact with our WhatsApp
                chat feature, you are redirected to WhatsApp (operated by Meta
                Platforms, Inc.), which has its own privacy policy. M-Pesa donations
                are processed by Safaricom under their terms.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                7. Your Rights
              </h2>
              <p className="mt-3">You have the right to:</p>
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>Request access to the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Unsubscribe from our newsletter at any time</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                8. Contact Us
              </h2>
              <p className="mt-3">
                For any privacy-related questions or requests, please contact us at{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-green-700 underline hover:text-green-600"
                >
                  {CONTACT.email}
                </a>{" "}
                or visit our{" "}
                <a href="/get-involved/contact" className="text-green-700 underline hover:text-green-600">
                  Contact page
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-foreground">
                9. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this privacy policy from time to time. Any changes will
                be posted on this page with an updated effective date.
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                Effective date: March 24, 2026
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
