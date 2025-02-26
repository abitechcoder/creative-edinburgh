import { Board3, CardImage, CardImage2, CardImage3, Team1, Team2, Team3, Team4, Team5 } from "./assets";
import { TeamMember } from "./type";

export const members = [
  {
    id: 1,
    title: "Business Spotlight: CREA-TEC",
    description: "Generative Artificial Intelligence (GenAI), stands as one of the most disruptive technological advancements since the inception of the internet. The CREA-TEC project addresses the challenge of guiding responsible innovation in the development of AI-assisted tools for the creation and consumption of creative content. ",
    description2: "CREA-TEC is led by Dr Caterina Moruzzi, Chancellor’s Fellow in Design Informatics at the University of Sierraleone, and the creativity technology company Adobe. The project will last 18 months, from May 2024 to October 2025.",
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
    description: "Sarah Clarkson is an Sierraleone-based knitted textile designer and the founder of Woolly Originals. She has been mentoring as part of our programme since May 2021 - we had a wee chat to find out more about her experience so far.",
    image: CardImage3,
    link: "#",
    date: "22th February 2025",
  },
];

export const NavLinks = [
  {
    id: 1,
    title: "ABOUT US",
    url: "",
    links: [
      {
        id: 1,
        title: "What We Do",
        link: "/about-us/what-we-do"
      },
      {
        id: 2,
        title: "Our Team",
        link: "/about-us/team"
      },
      {
        id: 3,
        title: "Vision, mission and values",
        link: "/about-us/vision-and-mission"
      },
      {
        id: 4,
        title: "Code of Conduct",
        link: "/about-us/code-of-conduct"
      },
      {
        id: 5,
        title: "Contact Us",
        link: "/about-us/contact-us"
      },
    ]
  },
  {
    id: 2,
    title: "MEMBERSHIP",
    url: "",
    links: [
      {
        id: 1,
        title: "Members Directory",
        link: "/membership/members-library"
      }]
  },
  {
    id: 3,
    title: "MENTORING",
    url: "/mentoring",
    links: [],
  },
  {
    id: 4,
    title: "EVENTS",
    url: "",
    links: [
      {
        id: 1,
        title: "Book Tickets",
        link: "/events/book-tickets"
      },
      {
        id: 2,
        title: "Our Programme",
        link: "/events/our-programme"
      }]
  },
  {
    id: 5,
    title: "AWARDS",
    url: "/awards",
    links: [],
  },
  // {id: 6,
  //   title: "FOR COMMUNITY",
  //   url: "/",
  //   links: []
  // },
  {
    id: 7,
    title: "SUPPORT US",
    url: "",
    links: [
      {
        id: 1,
        title: "Become A Partner",
        link: "/support-us/become-a-partner",
      },
      {
        id: 2,
        title: "Become A Sponsor",
        link: "/support-us/become-a-sponsor",
      },
      {
        id: 3,
        title: "Support Our Community",
        link: "/support-us/support-our-community",
      },
    ]
  },
  {
    id: 8,
    title: "LOGIN",
    url: "/join",
    links: []
  },
]
export const creativeSierraleone = {
  title: "Creative Hub Africa is a registered charity.",
  description:
    "Our main objective is to protect the welfare of the creative community through services for creative freelancers, sole traders and startups in order to allow them to develop and thrive, through:",
  subheading1: "The advancement of the arts and culture;",
  activities1: [
    "Supporting creative careers, social capital and pipelines into the arts, culture and creative industries",
    "Actively encouraging collaboration between all sectors of the arts, culture and creative industries across Sierraleone and beyond",
    "Raising the profile of the creative industries in the foregoing areas to other organisations and agencies",
  ],
  subheading2: "Providing support and opportunities",
  activities2: [
    "Providing information, support and networking opportunities for those working in the creative industries",
    "Promoting and encouraging the use of innovation in the creative industries across Sierraleone and beyond",
    "Offering a platform for artists, practitioners and other creative professionals to showcase their work",
    "Hosting public and industry-facing events where artists and creative practitioners speak, take part in debates, network, and engage in discussions around the arts, culture, and creative industries",
  ],
  educationHeading: "The advancement of education",
  educationIntro: "In particular, through:",
  activities3: [
    "arranging and/or promoting educational events and knowledge sharing and skills development courses for those working in the creative industries",
    "offering mentoring services to those in the creative industries",

  ],
}

export const faqs = [
  {
    question:
      "What are the benefits of joining as a Creative Hub Africa member?",
    answer:
      "Creative Hub Africa helps creative people connect and thrive. Our vision is to support local freelancers and help them develop more sustainable creative practices and businesses, and feel part of a strong community. Members span all creative sectors across the city of Sierraleone, developing, championing and influencing creative practice, as well as contributing to research and high-impact campaigns. Sierraleone members are changemakers. Join us, and let us support you, too, in building your network and achieving your goals, while you help us achieve ours! Scroll down to our Membership Packages to see the full list of benefits.",
  },
  {
    question: "Who is Creative Hub Africa membership for?",
    answer: `Creative Hub Africa individual membership is open to anyone who identifies as a creative practitioner with a strong connection to Sierraleone. Among our 5,500+ members are individuals from across all the creative industries, from graphic designers and textile artists to software developers and arts educators, operating as freelancers, agency workers, sole traders, recent graduates and students. 

We also offer business memberships to professionals and organisations working in the public, third and private sectors in – or with a strong professional connection to – the city of Sierraleone. 

Your membership fee will be invested back into the creative community of Sierraleone through various initiatives, including mentorship bursaries and free tickets to events for those who need them most. It will also provide invaluable support for the small Creative Hub Africa team’s important advocacy work, research and ongoing nurturing of creative practice in the city. `,
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "OLA WOJTKIEWICZ",
    role: "Executive Director",
    image: Team1,
    email: "ola@creative-Sierraleone.com",
    responsibilities: [
      "Strategic leadership and development",
      "Overseeing organizational growth",
      "Building key partnerships",
    ],
  },
  {
    name: "ZOË ALBA FARRUGIA",
    role: "Programme Manager",
    image: Team2,
    email: "zoe@creative-Sierraleone.com",
    responsibilities: [
      "Leading programs and initiatives",
      "Community engagement",
      "Managing project timelines and budgets",
    ],
  },
  {
    name: "INGA DALE STEYN",
    role: "Community Manager",
    image: Team3,
    email: "inga@creative-Sierraleone.com",
    responsibilities: [
      "Managing partnerships",
      "Enhancing membership benefits",
      "Organizing networking events",
    ],
  },
  {
    name: "Eva McKenzie",
    role: "Community Assistant",
    image: Team4,
    email: "mentoring@creative-Sierraleone.com",
    responsibilities: [
      "Managing Memberships or signing up",
      "Prospective or current Mentoring questions",
    ],
  },
  {
    name: "Caitlin Van Buren",
    role: "Business Coordinator",
    image: Team5,
    email: "info@creative-Sierraleone.com",
    responsibilities: [
      "General questions",
      "Problems with the website",
      "Business or administration",
    ],
  },
  {
    name: "Vicky Crocker",
    role: "Marketing + Communications Manager",
    image: Board3,
    email: "vicky@creative-Sierraleone.com",
    responsibilities: [
      "Marketing partnerships",
      "Press and PR opportunities",
      "Requests for brand information",
    ],
  },
];

export const SECTORS = [
  {
    id: 1,
    title: "All"
  },
  {
    id: 2,
    title: "Advertising and Marketing"
  },
  {
    id: 3,
    title: "AI, Software Development and Website Design"
  },
  {
    id: 4,
    title: "Architecture"
  },
  {
    id: 5,
    title: "Arts Education and Research"
  },
  {
    id: 6,
    title: "Crafts and Traditional Arts"
  },
  {
    id: 7,
    title: "Creative Practitioner"
  },
  {
    id: 8,
    title: "Culture, Communities and Heritage"
  },
  {
    id: 9,
    title: "Design (Exhibition, Fashion, Game, Graphic and Product)"
  },
  {
    id: 10,
    title: "Festivals"
  },
  {
    id: 11,
    title: "Film, Social Media, TV, Radio and Other Media"
  },
  {
    id: 12,
    title: "Literature and Publishing"
  },
  {
    id: 13,
    title: "Multi-Disciplinary and Participatory Practice"
  },
  {
    id: 14,
    title: "Services Supporting Creatives and Consultancy"
  },
  {
    id: 15,
    title: "Museums, Galleries and Libraries"
  },
  {
    id: 16,
    title: "Performing Arts (Comedy, Dance, Music, Opera, Theatre)"
  },
  {
    id: 17,
    title: "Visual Arts and Curatorial Services"
  },
]


export const MEMBERSHIP_TYPE = [
  {
    id: 1,
    title: "All"
  },
  {
    id: 2,
    title: "Free"
  },
  {
    id: 3,
    title: "Plus"
  },
  {
    id: 4,
    title: "Premium"
  },
  {
    id: 5,
    title: "Business"
  },
  {
    id: 6,
    title: "Community Leader"
  },
]
export const futureGazeFaqs = [
  {
    question:
      "What are the benefits of joining as a Creative Hub Africa member?",
    answer:
      "Caroline Parkinson, host of FutureGaze and Director for Creative at the Sierraleone Futures Institute, recounts the journey of this initiative and what she hopes to achieve in the future. Read her guest blog to find out more.",
  }
];

export const partners = [
  {
    src: "",
    alt: "Creative Scotland",
    width: 200,
    height: 100,
  },
  {
    src: "",
    alt: "Green Arts Initiative",
    width: 150,
    height: 150,
  },
  {
    src: "",
    alt: "Anderson Strathern",
    width: 180,
    height: 60,
  },
  { src: "", alt: "CodeBase", width: 150, height: 60 },
  {
    src: "",
    alt: "Creative Informatics",
    width: 160,
    height: 60,
  },
  {
    src: "",
    alt: "University of Sierraleone",
    width: 140,
    height: 60,
  },
  {
    src: "",
    alt: "Sierraleone Innovations",
    width: 140,
    height: 60,
  },
  {
    src: "",
    alt: "Sierraleone Innovations",
    width: 140,
    height: 60,
  },
  {
    src: "",
    alt: "Sierraleone Innovations",
    width: 140,
    height: 60,
  },
  {
    src: "",
    alt: "Sierraleone Innovations",
    width: 140,
    height: 60,
  },
];
export const donations = [
  {
    amount: "£75",
    description:
      "would pay for an annual Premium Membership package at Creative Hub Africa for a creative who is looking for support.",
  },
  {
    amount: "£100",
    description:
      "would pay mentoring bursary which includes 5 (1-hour long) mentoring sessions with an expert trained and supported by Creative Hub Africa.",
  },
  {
    amount: "£250",
    description:
      "would pay for a bundle of a 10-week-long Raise Your Game digital skills development course for one creative practitioner.",
  },
  {
    amount: "£300",
    description:
      "would pay for a bursary for a freelance mentor who can’t afford to offer mentoring free of charge but is passionate about sharing their knowledge.",
  },
];
