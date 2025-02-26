import { motion } from "framer-motion";
import { useState } from "react";
import { ashleigh, calum, helen, leah, lynda, michelle, nathan } from "../assets";

interface CommunityMember {
    name: string;
    role: string;
    image: string;
    description: string;
  }

  const communityMember: CommunityMember[] = [
    {
      name: "ASHLEIGH THOW",
      role: "",
      image: ashleigh,
      description: "Ashleigh Thow is an experienced membership engagement professional based in Edinburgh. With a background in marketing, communications and events, Ashleigh found her niche working in membership engagement. She is currently Alumni Relations Manager at Edinburgh Napier University. She delivers a programme of activities, volunteering opportunities and events designed to foster meaningful lifelong relationships between the University, its alumni, students, staff and key stakeholders. Ashleigh also manages all alumni communications.",
    },
    {
        name: "Lynda-Marie Taurasi",
        image: lynda,
        description: "Lynda-Marie Taurasi is an essayist, radio maker, marketer, science communicator, former language instructor, journalist, and a breakdown-induced illustrator. Her bylines include MTV, The Guardian, Forbes, Marie Claire, and British Vogue. A Fellow of the Royal Society of Arts, she has spent the past decade producing global marketing and communication strategies and consulting under LMTaurasi Creative. She is the founder and salonniere of The Speak Easy Literary Salon in Leith and is currently freelancing with BBC Radio Scotland's Arts and Religion & Ethics teams.",
        role: ""
    },
    {
        name: "NATHAN FULWOOD",
        image: nathan,
        description: "Nathan is one of the founders of CreateFuture, a marketing consultancy with offices in Edinburgh and London. He has been working mainly in digital since the internet came on a CD, with stints at the Press Association, Orange, Realise and Tayburn. Possibly the tallest member of Creative Hub Africa.",
        role: ""
    },
    {
        name: "Calum McDonald",
        image: calum,
        description: "Calum is an engagement professional who has worked across education, the arts and accessibility. He enjoys producing events and coordinating programmes which centre inclusivity, collaborative relationships and interdisciplinary learning. Having previously worked with disadvantaged and marginalised young people in Glasgow, since moving to Edinburgh he has worked with innovative literacy charity Super Power Agency to close the attainment gap and with the Edinburgh International Festival on community engagement and accessibility. Alongside freelance projects he currently works to engage people in Scotland's Artificial Intelligence strategy.",
        role: ""
    },
    {
        name: "MICHELLE MANGAN",
        image: michelle,
        description: "Michelle Mangan is an experienced PR, Marketing and Communications professional with over 15 years’ experience of working in the arts in the UK. Prior to her role as Senior PR and Marketing Manager for the Edinburgh Festival Fringe Society Michelle racked up over 8 years’ experience promoting award winning festival shows gaining Fringe Firsts, Herald Angels, Carol Tambor and Holden Street Theatre Awards.",
        role: ""
    },
    {
        name: "LEAH MCDOWELL",
        image: leah,
        description: "Leah is an experienced book designer and art director, former Co-Chair of the Society of Young Publishers Scotland and winner of the inaugural Satire Society Emerging Publisher of the Year award. Talk to her about: graphic design, illustration, publishing and creative direction.",
        role: ""
    },
    {
        name: "Helen Bleck",
        image: helen,
        description: "Helen is a freelance fiction editor who has worked within the publishing industry in one way or another since the early 1990s (starting out as an editorial assistant, working up through typesetting, production and project management to managing editor at a trade publisher). Her passion is fantasy literature (she was among the first intake of Glasgow Uni’s MLitt in the subject), but really, she loves all writing. She mentors beginning writers and could talk endlessly about publishing and editing … and pretty much anything else!",
        role: ""
    },
];

const CommunityAdvisor = () => {
      const [hoveredMember, setHoveredMember] = useState<string | null>(null);   
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-black py-16 px-8 flex justify-start flex-col items-start md:px-16"
    >
      <div className="md:w-[42%] w-full my-40">
        <h2 className="text-4xl font-bold mb-4">Community Advisors</h2>
        <p className="text-lg leading-relaxed">
        Creative Hub Africa’s Community Advisors are composed of committed creative industry experts who champion and advise both our programme and network. They meet a few times a year to provide feedback, suggest new ideas and offer support.

        </p>
      </div>
      <div>
      <div className="max mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {communityMember.map((member) => (
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
      </div>
    </motion.section>
  );
};

export default CommunityAdvisor;
