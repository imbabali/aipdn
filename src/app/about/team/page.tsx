import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind the African Inter-Party Dialogue Network working to strengthen democracy across Africa.",
};

const TEAM = [
  {
    name: "Mr. Kenneth Mpyisi",
    role: "Head, African Inter-Party Dialogue Network (AIPDN)",
    image: "/images/team/kenneth-mpyisi.jpg",
    bio: "Kenneth Mpyisi is a seasoned diplomat, mediator, and governance expert with over 25 years in diplomacy and international affairs, focused on peace, dialogue, and democratic transformation across Africa. A former Ugandan career diplomat, he built expertise in negotiation and international engagement, developing skills to navigate complex political landscapes. As Director of the Governance, Peace & Security Programme and Head of AIPDN, he leads initiatives that promote inclusive governance and strengthen political institutions. He is an accredited BRIDGE facilitator with expertise in electoral processes and institutional resilience. He has advised the United Nations, IGAD, and the East African Community, and holds two master's degrees in International Relations and International Policy Studies.",
  },
  {
    name: "Dr. Kennedy Masime",
    role: "Democracy & Elections Specialist",
    image: "/images/team/kennedy-masime.jpg",
    bio: "Dr. Kennedy Masime is an accomplished governance and democracy expert with over two decades of experience in political reform, institutional development, and civil society leadership. He holds a Doctor of Literature and Philosophy (D Litt et Phil) in Political Studies from the University of Johannesburg. He serves as Executive Director of the Centre for Governance and Development (CGD). In 2004, he established the Coalition for Accountable Political Financing (CAPF), contributing to the Political Parties Act 2007 and Elections Campaign Financing Act 2013. He is a founding chairman of the Elections Observation Group (ELOG), Board Member of E-HORN, and a Chevening Fellow in Economic Governance.",
  },
  {
    name: "Hon. Regina Macharia",
    role: "Expert - Civil Society Engagement",
    image: "/images/team/regina-macharia.png",
    bio: "Hon. Regina Macharia is a dynamic figure at the intersection of mental health advocacy, entrepreneurship, and politics. She serves as CEO of Africa International Pride. Her political journey began in 2012 as one of the pioneer Members of County Assembly (MCA) in Kenya, serving Nyeri County under The National Alliance (TNA) Party from 2013 to 2017. She currently holds the position of Nyeri County Chair for the Jubilee Party. Beyond politics, she remains committed to the NGO world, leveraging her experiences and training in Strategic Leadership to foster community cohesion and engagement. She is a mentor and trainer in mental wellness, leadership, and social skills.",
  },
  {
    name: "Mr. Alex Rusita",
    role: "Director of Programmes",
    image: "/images/team/alex-rusita.jpg",
    bio: "Alex Rusita possesses extensive expertise in development planning and management across the aid programme cycle, with emphasis on results-based management, monitoring and evaluation, and development policy analysis. He has served across Eastern and Southern Africa, the Horn, and the Caribbean, delivering policy guidance and humanitarian assistance. Over three decades, he has collaborated with multilateral and bilateral organizations, alongside local and international NGOs and think tanks. His multisectoral career encompasses Public Health, Public Sector Development, Capacity Building, Trade, Humanitarian Assistance, and Peace Building. His current focus centers on job creation for the youth in Africa.",
  },
  {
    name: "Ms. Lavin Atieno",
    role: "Liaison Officer, PPI-A / AIPDN",
    image: "/images/team/lavin-atieno.jpg",
    bio: "Lavin Atieno is a passionate advocate for peace, diplomacy, and inclusive governance across Africa. She plays a key role in fostering dialogue, strengthening stakeholder engagement, and advancing peacebuilding initiatives throughout the continent. She holds a Bachelor of Arts in International Relations with IT from Maseno University, with professional certifications in Diplomacy, Negotiation, and Mediation from the University of Nairobi, and training in Gender-Responsive Communication, Data Protection, and Child Protection in Peace Operations. She is multilingual, speaking English, Swahili, and French, with strong analytical and interpersonal skills.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        description="A dedicated team of professionals committed to advancing inter-party dialogue and democratic governance in Africa."
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Our Team" },
        ]}
      />

      <Section>
        <div className="space-y-12">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className={`flex flex-col gap-8 rounded-2xl border border-border bg-background p-8 transition-all hover:border-green-200 hover:shadow-lg md:flex-row ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="shrink-0">
                <div className="relative h-64 w-64 overflow-hidden rounded-2xl mx-auto md:mx-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-green-700">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
