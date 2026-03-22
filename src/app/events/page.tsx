import type { Metadata } from "next";
import Image from "next/image";
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

const EVENTS = [
  {
    id: "1",
    title: "West Africa Diplomacy, Negotiation and Mediation Training",
    slug: "west-africa-training-2026",
    description:
      "A comprehensive diplomacy, negotiation and mediation training programme held in Dakar, Senegal, bringing together participants from across West Africa to strengthen conflict-resolution capabilities among emerging and established leaders.",
    location: "Dakar, Senegal",
    start_date: "2026-01-26",
    end_date: "2026-01-30",
    status: "past" as string,
    image: "/images/events/west-africa-training.jpg",
  },
  {
    id: "2",
    title: "Roundtable on the Role of Political Parties in Africa",
    slug: "roundtable-political-parties-2025",
    description:
      "Political parties remain indispensable pillars of democratic governance across the African continent. This roundtable addressed how parties can structure voting, enable representation, and combat declining democratic support — which is down 7% across 30 African countries per 2024 Afrobarometer data.",
    location: "Prospect Peace Institute – Africa (PPI-A), Nairobi, Kenya",
    start_date: "2025-12-02",
    end_date: "2025-12-03",
    status: "past" as string,
    image: "/images/events/roundtable-parties.jpg",
  },
];

export default function EventsPage() {
  const upcoming = EVENTS.filter((e) => e.status === "upcoming");
  const past = EVENTS.filter((e) => e.status === "past");

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
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl md:w-72 shrink-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Upcoming
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-bold text-foreground">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
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
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section className={upcoming.length > 0 ? "bg-muted" : ""}>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Past Events
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {past.map((event) => (
            <div
              key={event.id}
              className="overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-green-200 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                  Past Event
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {event.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(event.start_date)}
                    {event.end_date && ` — ${formatDate(event.end_date)}`}
                  </span>
                  {event.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
