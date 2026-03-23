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
    objectPosition: "top",  // seated full-body, face at top
    bio: "Kenneth Mpyisi is a seasoned diplomat, mediator, and governance expert with over 30 years of experience in diplomacy and international affairs. His work focuses on peacebuilding, dialogue, and democratic transformation across Africa. A former Ugandan career diplomat, he has developed strong expertise in negotiation and international engagement, with a proven ability to navigate complex political environments. His career includes leadership roles in major regional and international organizations, including the Institute for Security Studies (ISS) and International IDEA. He has also served as an expert with the United Nations Development Programme (UNDP), the East African Community (EAC), and the Intergovernmental Authority on Development (IGAD). He holds master's degrees in International Relations from the University of Kent and in International Policy Studies from the Monterey Institute of International Studies.",
  },
  {
    name: "Dr. Kennedy Masime",
    role: "Democracy & Elections Specialist",
    image: "/images/team/kennedy-masime.jpg",
    objectPosition: "top",  // seated speaking, face at top
    bio: "Dr. Kennedy Masime is an accomplished governance and democracy expert with over two decades of experience in political reform, institutional development, and civil society leadership. He holds a Doctor of Literature and Philosophy (D Litt et Phil) in Political Studies from the University of Johannesburg. He serves as Executive Director of the Centre for Governance and Development (CGD). In 2004, he established the Coalition for Accountable Political Financing (CAPF), contributing to the Political Parties Act 2007 and Elections Campaign Financing Act 2013. He is a founding chairman of the Elections Observation Group (ELOG), Board Member of E-HORN, and a Chevening Fellow in Economic Governance.",
  },
  {
    name: "Hon. Regina Macharia",
    role: "Expert - Civil Society Engagement",
    image: "/images/team/regina-macharia.png",
    objectPosition: "center 20%",  // headshot with white bg, face near top
    bio: "Hon. Regina Macharia is a dynamic figure at the intersection of mental health advocacy, entrepreneurship, and politics. She serves as CEO of Africa International Pride. Her political journey began in 2012 as one of the pioneer Members of County Assembly (MCA) in Kenya, serving Nyeri County under The National Alliance (TNA) Party from 2013 to 2017. She currently holds the position of Nyeri County Chair for the Jubilee Party. Beyond politics, she remains committed to the NGO world, leveraging her experiences and training in Strategic Leadership to foster community cohesion and engagement. She is a mentor and trainer in mental wellness, leadership, and social skills.",
  },
  {
    name: "Mr. Alex Rusita",
    role: "Senior Advisor",
    image: "/images/team/alex-rusita.jpg",
    objectPosition: "center 15%",  // tight headshot, face fills frame
    bio: "Alex Rusita possesses extensive expertise in development planning and management across the aid programme cycle, with emphasis on results-based management, monitoring and evaluation, and development policy analysis. He has served across Eastern and Southern Africa, the Horn, and the Caribbean, delivering policy guidance and humanitarian assistance. Over three decades, he has collaborated with multilateral and bilateral organizations, alongside local and international NGOs and think tanks. His multisectoral career encompasses Public Health, Public Sector Development, Capacity Building, Trade, Humanitarian Assistance, and Peace Building. His current focus centers on job creation for the youth in Africa.",
  },
  {
    name: "Ms. Lavin Atieno",
    role: "Liaison Officer, PPI-A / AIPDN",
    image: "/images/team/lavin-atieno.jpg",
    objectPosition: "center 20%",  // upper body at table, face at top
    bio: "Lavin Atieno is a passionate advocate for peace, diplomacy, and inclusive governance across Africa. She plays a key role in fostering dialogue, strengthening stakeholder engagement, and advancing peacebuilding initiatives throughout the continent. She holds a Bachelor of Arts in International Relations with IT from Maseno University, with professional certifications in Diplomacy, Negotiation, and Mediation from the University of Nairobi, and training in Gender-Responsive Communication, Data Protection, and Child Protection in Peace Operations. She is multilingual, speaking English, Swahili, and French, with strong analytical and interpersonal skills.",
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        description="A dedicated team of professionals committed to advancing inter-party dialogue and democratic governance in Africa."
        backgroundImage="/images/gallery/Img-194.jpg"
        imagePosition="center 30%"
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
              className={`flex flex-col gap-6 sm:gap-8 rounded-2xl border border-border bg-background p-5 sm:p-8 transition-all hover:border-green-200 hover:shadow-lg md:flex-row ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="shrink-0">
                <div className="relative h-52 w-48 sm:h-64 sm:w-56 md:h-72 md:w-64 overflow-hidden rounded-2xl mx-auto md:mx-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: member.objectPosition }}
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
