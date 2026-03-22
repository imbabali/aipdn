import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Media Gallery",
  description:
    "Browse photos and media from AIPDN events, dialogues, and activities across Africa.",
};

// Placeholder — will be replaced by Supabase storage data
const PLACEHOLDER_GALLERY = Array.from({ length: 12 }, (_, i) => ({
  id: String(i + 1),
  title: `AIPDN Event Photo ${i + 1}`,
  category: ["Dialogues", "Training", "Conferences", "Partnerships"][i % 4],
}));

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Media Gallery"
        description="Photos and media from our events, dialogues, training sessions, and activities across the continent."
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Media Gallery" },
        ]}
      />

      <Section>
        <div className="flex flex-wrap gap-3 mb-10">
          {["All", "Dialogues", "Training", "Conferences", "Partnerships"].map(
            (cat) => (
              <button
                key={cat}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:border-green-200 hover:text-green-700 first:bg-green-700 first:text-white first:border-green-700"
              >
                {cat}
              </button>
            )
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {PLACEHOLDER_GALLERY.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-green-100 to-teal-50 cursor-pointer"
            >
              <div className="flex h-full w-full items-center justify-center">
                <Camera className="h-10 w-10 text-green-200" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-xs font-medium text-white/80">
                  {item.category}
                </span>
                <h3 className="mt-1 text-sm font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
