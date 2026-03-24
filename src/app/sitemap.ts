import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { PILLARS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/about/team",
    "/about/governance",
    "/what-we-do",
    "/events",
    "/news",
    "/resources",
    "/resources/publications",
    "/resources/gallery",
    "/resources/toolkits",
    "/network",
    "/network/partners",
    "/network/members",
    "/get-involved",
    "/get-involved/join",
    "/get-involved/newsletter",
    "/get-involved/contact",
    "/donate",
    "/privacy-policy",
  ];

  const pillarPages = PILLARS.map((pillar) => `/what-we-do/${pillar.slug}`);

  const newsSlugs = [
    "/news/mou-ips-aipdn",
    "/news/rethinking-inter-party-dialogue",
    "/news/ppi-africa-partnership",
  ];

  const allPages = [...staticPages, ...pillarPages, ...newsSlugs];

  return allPages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
