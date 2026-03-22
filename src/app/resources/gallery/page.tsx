import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = {
  title: "Media Gallery",
  description:
    "Browse photos and media from AIPDN events, dialogues, and activities across Africa.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Media Gallery"
        description="Photos from our events, dialogues, training sessions, and activities across the continent."
        backgroundImage="/images/gallery/Img-274.jpg"
        imagePosition="center 20%"
        breadcrumbs={[
          { label: "Resources", href: "/resources" },
          { label: "Media Gallery" },
        ]}
      />
      <Section>
        <GalleryGrid />
      </Section>
    </>
  );
}
