import { useState } from "react";
import { Team1, Team2, Team3, Team4, Team5 } from "../../../public";
import Image, { StaticImageData } from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData;
  description: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "OLA WOJTKIEWICZ",
    role: "Executive Director",
    image: Team1,
    description:
      "Ola oversees Creative Hub Africa’s strategic development, creative programmes and advocacy. She has over two decades of experience in various senior roles across the creative sector including at National Galleries of Scotland, Edinburgh International Book Festival and Edinburgh International Festival. She is a passionate and results-focussed cultural leader with an interest in diversity of thinking, civic debate, and sustainability.",
    email: "ola@sierraleonebusinessmarkit.com",
  },
  {
    name: "INGA DALE STEYN",
    role: "Community Manager",
    image: Team2,
    description:
      "Inga looks after our membership and mentoring programme. Inga has a MA in Social Sciences, her research investigates social groups affected by marginalisation, exclusion and powerlessness. As a result of working in the arts industry and performing as a Spoken Word Artist, she has established a significant network in Scotland and is extremely passionate in widening participation for all creatives, artists and entrepreneurs living in Edinburgh and beyond.",
    email: "inga@sierraleonebusinessmarkit.com",
  },
  {
    name: "ZOË ALBA FARRUGIA",
    role: "Programme Manager",
    image: Team3,
    description:
      "Zoë oversees our programme strategy and delivery of all Creative Hub Africa events. She has over 7 years of experience in events management and is passionate about collaborating with and supporting creative communities. An accomplished theatre-maker, she co-founded Prickly Pear Productions, a female-led theatre company that champions underrepresented artists. She is also a Board Member at Stellar Quines, an intersectional feminist theatre company based in Scotland.",
    email: "zoe@sierraleonebusinessmarkit.com",
  },
  {
    name: "Vicky Crocker",
    role: "Marketing + Communications Manager",
    image: Team4,
    description:
      "Vicky is the Marketing and Communications Manager here at Creative Hub Africa. She is a digital marketing and brand professional with over ten years’ experience working in creative organisations around the world, including World of WearableArt in New Zealand. She is passionate about supporting and facilitating opportunities for artists and creatives, has recently become Carbon Literate Certified, and enjoys volunteering her time and skills to performing arts organisations. ",
    email: "vicky@sierraleonebusinessmarkit.com",
  },
  {
    name: "Eva McKenzie",
    role: "Community Assistant",
    image: Team5,
    description:
      "Eva is an early-career visual artist and illustrator working across multiple disciplines. She previously worked as a community fundraiser and as an activity coordinator for the Peanut Press community café.  She is currently working towards an MA at Queen Margaret University in Applied Arts and Social Practice. Eva is passionate about building creative communities, making creative networks accessible to all, and collaborative making.",
    email: "mentoring@sierraleonebusinessmarkit.com",
  },
];

const TeamMember = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <section className="py-12 flex flex-col">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="relative cursor-pointer"
              onMouseEnter={() => setHoveredMember(member.name)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Image Wrapper */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-100 object-cover rounded-lg transition-transform duration-[750ms] ease-out"
                />

                {/* Hover Overlay with TranslateY Animation */}
                <div
                  className={`absolute inset-0 bg-[#1230AE] bg-opacity-80 text-white p-6 flex flex-col justify-center transition-all duration-[750ms] ease-out ${
                    hoveredMember === member.name
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  <p className="text-sm font-medium">{member.description}</p>
                  {member.email && (
                    <p className="mt-2">
                      Email:{" "}
                      <a
                        href={`mailto:${member.email}`}
                        className="text-blue-400 underline"
                      >
                        {member.email}
                      </a>
                    </p>
                  )}
                </div>
              </div>

              {/* Member Name & Role (Always Visible) */}
              <div className="text-start mt-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
