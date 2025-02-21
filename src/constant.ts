import { Caitlin, CardImage, CardImage2, CardImage3, Eva, Inga, Ola, Vicky, Zoe } from "./assets";
import { TeamMember } from "./type";

export const members = [
  {
    id: 1,
    title: "Business Spotlight: CREA-TEC",
    description: "Generative Artificial Intelligence (GenAI), stands as one of the most disruptive technological advancements since the inception of the internet. The CREA-TEC project addresses the challenge of guiding responsible innovation in the development of AI-assisted tools for the creation and consumption of creative content. ",
    description2: "CREA-TEC is led by Dr Caterina Moruzzi, Chancellor’s Fellow in Design Informatics at the University of Edinburgh, and the creativity technology company Adobe. The project will last 18 months, from May 2024 to October 2025.",
    image: CardImage,
    link: "#",
    date: "22th February 2025",
  },
  {
    id: 2,
    title: "Member Spotlight: Michael Forrest",
    description: "As the director of app shop and consultancy, Good To Hear, Michael Forrest is devoted to creative and data-driven solutions designed to help improve our lives.",
    image: CardImage2,
    link: "#",
    date: "22th February 2025",
  },
  {
    id: 3,
    title: "Meet the Mentors: Sarah Clarkson",
    description: "Sarah Clarkson is an Edinburgh-based knitted textile designer and the founder of Woolly Originals. She has been mentoring as part of our programme since May 2021 - we had a wee chat to find out more about her experience so far.",
    image: CardImage3,
    link: "#",
    date: "22th February 2025",
  },
];

export const NavLinks = [
  {id: 1,
    title: "ABOUT US"
  },
  {id: 2,
    title: "MEMBERSHIP"
  },
  {id: 3,
    title: "MENTORSHIP"
  },
  {id: 4,
    title: "EVENTS"
  },
  {id: 5,
    title: "AWARDS"
  },
  {id: 6,
    title: "FOR COMMUNITY"
  },
  {id: 7,
    title: "SUPPORT US"
  },
  {id: 8,
    title: "LOGIN"
  },
]
export const creativeEdinburgh = {
  title: "Creative Edinburgh is a registered charity.",
  description:
    "Our main objective is to protect the welfare of the creative community through services for creative freelancers, sole traders and startups in order to allow them to develop and thrive, through:",
  subheading1: "The advancement of the arts and culture;",
  activities1: [
    "Supporting creative careers, social capital and pipelines into the arts, culture and creative industries;",
    "Actively encouraging collaboration between all sectors of the arts, culture and creative industries across Edinburgh, the Lothians, Scotland and beyond;",
    "Raising the profile of the creative industries in the foregoing areas to other organisations and agencies;",
  ],
  subheading2: "Providing support and opportunities;",
  activities2: [
    "Providing information, support and networking opportunities for those working in the creative industries;",
    "Promoting and encouraging the use of innovation in the creative industries across Edinburgh, the Lothians, Scotland and beyond;",
    "Offering a platform for artists, practitioners and other creative professionals to showcase their work;",
    "Hosting public and industry-facing events where artists and creative practitioners speak, take part in debates, network, and engage in discussions around the arts, culture, and creative industries;",
  ],
  educationHeading: "The advancement of education;",
  educationIntro: "In particular, through:",
  activities3: [
    "arranging and/or promoting educational events and knowledge sharing and skills development courses for those working in the creative industries",
    "offering mentoring services to those in the creative industries",
   
  ],
};

export const faqs = [
  {
    question:
      "What are the benefits of joining as a Creative Edinburgh member?",
    answer:
      "Creative Edinburgh helps creative people connect and thrive. Our vision is to support local freelancers and help them develop more sustainable creative practices and businesses, and feel part of a strong community. Members span all creative sectors across the city of Edinburgh, developing, championing and influencing creative practice, as well as contributing to research and high-impact campaigns. Edinburgh members are changemakers. Join us, and let us support you, too, in building your network and achieving your goals, while you help us achieve ours! Scroll down to our Membership Packages to see the full list of benefits.",
  },
  {
    question: "Who is Creative Edinburgh membership for?",
    answer: `Creative Edinburgh individual membership is open to anyone who identifies as a creative practitioner with a strong connection to Edinburgh. Among our 5,500+ members are individuals from across all the creative industries, from graphic designers and textile artists to software developers and arts educators, operating as freelancers, agency workers, sole traders, recent graduates and students. 

We also offer business memberships to professionals and organisations working in the public, third and private sectors in – or with a strong professional connection to – the city of Edinburgh. 

Your membership fee will be invested back into the creative community of Edinburgh through various initiatives, including mentorship bursaries and free tickets to events for those who need them most. It will also provide invaluable support for the small Creative Edinburgh team’s important advocacy work, research and ongoing nurturing of creative practice in the city. `,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "OLA WOJTKIEWICZ",
    role: "Executive Director",
    image: Ola,
    email: "ola@creative-edinburgh.com",
    responsibilities: [
      "Strategic leadership and development",
      "Overseeing organizational growth",
      "Building key partnerships",
    ],
  },
  {
    name: "ZOË ALBA FARRUGIA",
    role: "Programme Manager",
    image: Zoe,
    email: "zoe@creative-edinburgh.com",
    responsibilities: [
      "Leading programs and initiatives",
      "Community engagement",
      "Managing project timelines and budgets",
    ],
  },
  {
    name: "INGA DALE STEYN",
    role: "Community Manager",
    image: Inga,
    email: "inga@creative-edinburgh.com",
    responsibilities: [
      "Managing partnerships",
      "Enhancing membership benefits",
      "Organizing networking events",
    ],
  },
  {
    name: "Eva McKenzie",
    role: "Community Assistant",
    image: Eva,
    email: "mentoring@creative-edinburgh.com",
    responsibilities: [
      "Managing Memberships or signing up",
      "Prospective or current Mentoring questions",
    ],
  },
  {
    name: "Caitlin Van Buren",
    role: "Business Coordinator",
    image: Caitlin,
    email: "info@creative-edinburgh.com",
    responsibilities: [
      "General questions",
      "Problems with the website",
      "Business or administration",
    ],
  },
  {
    name: "Vicky Crocker",
    role: "Marketing + Communications Manager",
    image: Vicky,
    email: "vicky@creative-edinburgh.com",
    responsibilities: [
      "Marketing partnerships",
      "Press and PR opportunities",
      "Requests for brand information",
    ],
  },
];

export const futureGazeFaqs = [
  {
    question:
      "What are the benefits of joining as a Creative Edinburgh member?",
    answer:
      "Caroline Parkinson, host of FutureGaze and Director for Creative at the Edinburgh Futures Institute, recounts the journey of this initiative and what she hopes to achieve in the future. Read her guest blog to find out more.",
  }
];
