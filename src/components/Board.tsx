import { motion } from "framer-motion";
import { useState } from "react";
import { Board1, Board2, Board3, Board4, Board5, Board6, jessica, Profile1 } from "../assets";

interface BoardMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const boardMembers: BoardMember[] = [
  {
    name: "Marie Christie",
    role: "Co-Chair of the Board",
    image: Board3,
    description: "Marie Christie is currently Head of Development for Events at VisitScotland. She has more than 25 years of experience delivering and supporting festivals and events and raising the profile of Scotland as a cultural destination. Having worked across the public, private and third sectors she has run high profile campaigns, produced major events and led key national initiatives.",
  },
  {
    name: "CRISTINA ZANI",
    image: Board4,
    description: "Cristina Zani is an Italian born artist with a background in marketing and communication. She completed an MFA in Jewellery at Edinburgh College of Art in June 2012 and after living and working in different countries, she established her workshop at Coburg House Studios, in the vibrant area of Leith, Edinburgh. Prior to that she worked in corporate communication for the Royal Bank of Scotland Group, in internal communication for Direct Line Spain and in marketing for The National Trust.",
    role: ""
  },
  {
    name: "AMY KELLY",
    image: Board5,
    description: "Amy Kelly is a creative marketing leader, currently working in the B2B tech space as the EMEA Marketing Director at UserTesting, the leading Human Insight Platform. Amy, a graduate of Glasgow University, is also CIM certified and has over 10 years of global experience across both agency and brand and has previously held marketing roles at ITV, YouTube and Facebook.",
    role: ""
  },
  {
    name: "BRIAN BAGLOW",
    image: Board1,
    description: "Brian is a game/narrative designer, writer, business leader, serial entrepreneur and university lecturer, who focuses on the transformative power of interactive media within the creative industries.",
    role: ""
  },
  {
    name: "MICHAELA TURNER",
    image: Board6,
    description: "Michaela Turner has worked at supporting SME and start-ups in Edinburgh and the region for over the past 9 years. She currently leads on the industry engagement for the Creative Informatics program where she has been working to grow, develop and support the creative start up ecosystem. Prior to working in Creative Informatics, she has worked in knowledge exchange at the University of Edinburgh advising and supporting SME engagement.",
    role: ""
  },
  {
    name: "JESSICA ARMSTRONG",
    image: jessica,
    description: "Jessica Armstrong is a business development and project manager with a disposition for organisation, teamwork, efficiency and a drive to achieve goals. Her background is in marketing communications and operational management; but really, she is a project manager with a love for understanding process and a passion for all things inspired. Talk to her about: building and developing your networks, reaching new audiences and finding sponsorship.",
    role: ""
  },
  {
    name: "CHARLIE BELL",
    image: Board2,
    description: "Charlie has worked at Whitespace, an Edinburgh based creative agency working across digital, content, brand, experiential and campaigns since 2005, working his way up from Junior Designer to Creative Director as the company has grown over the years. A D&AD judge in 2016, Charlie is a creative thinker and designer delivering world-class courses throughout Scotland to help mentor young creatives.",
    role: ""
  },
  {
    name: "BRUCE FARQUHAR",
    image: Profile1,
    description: "Bruce is a corporate partner and chair of Anderson Strathern. His clients range for start up’s to global businesses - many in the creative sector.",
    role: ""
  },
];

const Board = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-black py-16 px-8 md:px-16"
    >
      <div className="flex justify-end flex-col items-end">
        <div className="md:w-[50%] w-full mb-20 flex flex-col gap-4 lg:gap-8">
          <h2 className="text-2xl lg:text-5xl font-bold">Board</h2>
          <p className="text-xl leading-relaxed">
            Creative Hub Africa’s independent Board are ardent supporters of the creative sectors. They meet every two months to support policy and strategic developments within the organisation, discussing how best to move forward.

          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {boardMembers.map((member) => (
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
                  className={`absolute inset-0 bg-[#1230AE] bg-opacity-80 text-white p-6 flex flex-col justify-center transition-all duration-[750ms] ease-out ${hoveredMember === member.name
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                    }`}
                >
                  <p className="text-sm font-medium">{member.description}</p>

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
    </motion.section>
  );
};

export default Board;
