import { useState } from "react";
import { dale, eva, ola, vicky, zoe } from "../assets";
import PastTeam from "./PastTeam";
import WorkWithUs from "./WorkWithUs";
import ExecutiveTeam from "./ExecutiveTeam";
import Board from "./Board";
import PastMember from "./PastMember";
import CommunityAdvisor from "./CommunityAdvisor";
import SteeringGroup from "./SteeringGroup";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "OLA WOJTKIEWICZ",
    role: "Executive Director",
    image: ola, // Update with correct paths
    description: "Ola oversees Creative Edinburgh’s strategic development, creative programmes and advocacy. She has over two decades of experience in various senior roles across the creative sector including at National Galleries of Scotland, Edinburgh International Book Festival and Edinburgh International Festival. She is a passionate and results-focussed cultural leader with an interest in diversity of thinking, civic debate, and sustainability.",
    email: "ola@creative-edinburgh.com",
  },
  {
    name: "INGA DALE STEYN",
    role: "Community Manager",
    image: dale,
    description: "Inga looks after our membership and mentoring programme. Inga has a MA in Social Sciences, her research investigates social groups affected by marginalisation, exclusion and powerlessness. As a result of working in the arts industry and performing as a Spoken Word Artist, she has established a significant network in Scotland and is extremely passionate in widening participation for all creatives, artists and entrepreneurs living in Edinburgh and beyond.",
    email: "inga@creative-edinburgh.com",
  },
  {
    name: "ZOË ALBA FARRUGIA",
    role: "Programme Manager",
    image: zoe,
    description: "Zoë oversees our programme strategy and delivery of all Creative Edinburgh events. She has over 7 years of experience in events management and is passionate about collaborating with and supporting creative communities. An accomplished theatre-maker, she co-founded Prickly Pear Productions, a female-led theatre company that champions underrepresented artists. She is also a Board Member at Stellar Quines, an intersectional feminist theatre company based in Scotland.",
    email: "zoe@creative-edinburgh.com",
  },
  {
    name: "Vicky Crocker",
    role: "Marketing + Communications Manager",
    image: vicky,
    description: "Vicky is the Marketing and Communications Manager here at Creative Edinburgh. She is a digital marketing and brand professional with over ten years’ experience working in creative organisations around the world, including World of WearableArt in New Zealand. She is passionate about supporting and facilitating opportunities for artists and creatives, has recently become Carbon Literate Certified, and enjoys volunteering her time and skills to performing arts organisations. ",
    email: "vicky@creative-edinburgh.com",
  },
  {
    name: "Eva McKenzie",
    role: "Community Assistant",
    image: eva,
    description: "Eva is an early-career visual artist and illustrator working across multiple disciplines. She previously worked as a community fundraiser and as an activity coordinator for the Peanut Press community café.  She is currently working towards an MA at Queen Margaret University in Applied Arts and Social Practice. Eva is passionate about building creative communities, making creative networks accessible to all, and collaborative making.",
    email: "mentoring@creative-edinburgh.com",
  },
];

const TeamMember = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <section className="py-12 flex flex-col">
      <ExecutiveTeam />
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
                <img
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
      <PastTeam />
      <WorkWithUs />
      <Board />
      <PastMember />
      <CommunityAdvisor />
      <SteeringGroup />
    </section>
  );
};

export default TeamMember;
