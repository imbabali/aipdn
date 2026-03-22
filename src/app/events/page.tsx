import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore upcoming and past AIPDN events including dialogues, training workshops, roundtables, and regional forums.",
};

// Placeholder — will be replaced by Supabase data
const PLACEHOLDER_EVENTS = [
  {
    id: "1",
    title: "West Africa Diplomacy & Dialogue Training",
    slug: "west-africa-training-2026",
    description:
      "A comprehensive training programme for political party officials and mediators from West African nations.",
    location: "Accra, Ghana",
    start_date: "2026-04-15",
    end_date: "2026-04-18",
    status: "upcoming" as const,
  },
  {
    id: "2",
    title: "Rethinking Inter-Party Dialogue: Regional Roundtable",
    slug: "regional-roundtable-2025",
    description:
      "Political leaders from across the region convened to discuss new approaches to cross-party engagement.",
    location: "Nairobi, Kenya",
    start_date: "2025-12-10",
    end_date: "2025-12-12",
    status: "past" as const,
  },
  {
    id: "3",
    title: "Annual Continental Dialogue Forum",
    slug: "annual-forum-2025",
    description:
      "The flagship AIPDN event bringing together political actors from across the continent for peer learning.",
    location: "Addis Ababa, Ethiopia",
    start_date: "2025-09-20",
    end_date: "2025-09-22",
    status: "past" as const,
  },
];

export default function EventsPage() {
  const upcoming = PLACEHOLDER_EVENTS.filter((e) => e.status === "upcoming");
  const past = PLACEHOLDER_EVENTS.filter((e) => e.status === "past");

  return (
    <>
      <PageHero
        title="Events"
        description="Join us at dialogues, training workshops, roundtables, and regional forums advancing democracy across Africa."
        breadcrumbs={[{ label: "Events" }]}
      />

      {upcoming.length > 0 && (
        <Section>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            Upcoming Events
          </h2>
          <div className="mt-8 space-y-6">
            {upcoming.map((event) => (
              <div
                key={event.id}
                className="flex flex-col gap-6 rounded-2xl border border-green-200 bg-green-50/50 p-8 md:flex-row md:items-center"
              >
                <div className="flex-1">
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Upcoming
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold text-foreground">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {event.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {formatDate(event.start_date)}
                      {event.end_date && ` — ${formatDate(event.end_date)}`}
                    </span>
                    {event.location && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </span>
                    )}
                  </div>
                </div>
                <Link
                  href={`/events/${event.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 text-sm font-semibold text-white hover:bg-green-800 transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section className={upcoming.length > 0 ? "bg-muted" : ""}>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Past Events
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {past.map((event) => (
            <div
              key={event.id}
              className="rounded-2xl border border-border bg-background p-6 transition-all hover:border-green-200 hover:shadow-lg"
            >
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-green-100 to-teal-50 flex items-center justify-center mb-5">
                <Calendar className="h-10 w-10 text-green-200" />
              </div>
              <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                Past Event
              </span>
              <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
                {event.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {event.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(event.start_date)}
                </span>
                {event.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
