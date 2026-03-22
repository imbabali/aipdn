export const SITE_NAME = "AIPDN";
export const SITE_FULL_NAME = "African Inter-Party Dialogue Network";
export const SITE_DESCRIPTION =
  "Facilitating structured, inclusive dialogue among African political parties to strengthen democracy, promote peace, and foster inclusive governance.";
export const SITE_URL = "https://aipdn.org";

export const CONTACT = {
  email: "info@aipdn.org",
  phone: "+254 741 694 575",
  address: "Woodlands Office Park, Hurlingham, Nairobi, Kenya",
} as const;

export const SOCIAL_LINKS = {
  twitter: "https://x.com/aipdn",
  linkedin: "https://linkedin.com/company/aipdn",
  facebook: "https://facebook.com/aipdn",
  youtube: "https://youtube.com/@aipdn",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/about/team" },
      { label: "Governance", href: "/about/governance" },
    ],
  },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Dialogue Facilitation", href: "/what-we-do/dialogue-facilitation" },
      { label: "Training & Capacity Building", href: "/what-we-do/training" },
      { label: "Research & Knowledge", href: "/what-we-do/research" },
      { label: "Partnerships & Advisory", href: "/what-we-do/partnerships" },
      { label: "Regional Convening", href: "/what-we-do/regional-convening" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Publications", href: "/resources/publications" },
      { label: "Media Gallery", href: "/resources/gallery" },
      { label: "Toolkits & Guides", href: "/resources/toolkits" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "News & Insights", href: "/news" },
  {
    label: "Our Network",
    href: "/network",
    children: [
      { label: "Partners", href: "/network/partners" },
      { label: "Member Organizations", href: "/network/members" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Join the Network", href: "/get-involved/join" },
      { label: "Newsletter", href: "/get-involved/newsletter" },
      { label: "Contact Us", href: "/get-involved/contact" },
    ],
  },
] as const;

export const PILLARS = [
  {
    title: "Dialogue Facilitation",
    slug: "dialogue-facilitation",
    description:
      "Designing and supporting inter-party dialogues at national and regional levels to build consensus and resolve conflicts.",
    icon: "MessageCircle",
  },
  {
    title: "Training & Capacity Building",
    slug: "training",
    description:
      "Equipping political party officials, mediators, and civil society actors with skills for effective dialogue and negotiation.",
    icon: "GraduationCap",
  },
  {
    title: "Research & Knowledge",
    slug: "research",
    description:
      "Producing comparative studies, toolkits, and policy briefs that inform and strengthen inter-party dialogue practice.",
    icon: "BookOpen",
  },
  {
    title: "Partnerships & Advisory",
    slug: "partnerships",
    description:
      "Providing strategic advisory support to the African Union, regional bodies, and national governments on dialogue frameworks.",
    icon: "Handshake",
  },
  {
    title: "Regional Convening",
    slug: "regional-convening",
    description:
      "Hosting peer-learning conferences and regional forums that connect political actors across borders.",
    icon: "Globe",
  },
] as const;
