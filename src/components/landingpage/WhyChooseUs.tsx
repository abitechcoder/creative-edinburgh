import styles from "../../style";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { AiOutlineStock } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

interface ReasonType {
  id: number;
  icon: any;
  title: string;
  description: string;
}

const reasons: ReasonType[] = [
  {
    id: 1,
    icon: <FaGlobeAfrica size={50} className="text-secondary" />,
    title: "Comprehensive Directory",
    description:
      "Access 5,000+ verified businesses across agriculture, tech, mining, and more. Find partners, suppliers, and services tailored to your goals.",
  },
  {
    id: 2,
    icon: <FaBriefcase size={50} className="text-secondary" />,
    title: "Investment Hub",
    description:
      "Explore vetted projects in high-growth sectors backed by data-driven insights, risk assessments, and success stories.",
  },
  {
    id: 3,
    icon: <AiOutlineStock size={50} className="text-secondary" />,
    title: "SME Empowerment",
    description:
      "Free resources, workshops, and funding guides to help you start, scale, and sustain your business.",
  },
  {
    id: 4,
    icon: <FaSearch size={50} className="text-secondary" />,
    title: "Trusted Insights",
    description:
      "Real-time market reports, consumer trends, and policy updates-all in one place",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-secondary/5">
      <div className="px-4 container mx-auto py-15 lg:py-20">
        <h2
          className={`${styles.heading1} lg:max-w-[70%] lg:mx-auto text-black text-center mb-4`}
        >
          Why Choose Sierra Leone Business Markit?
        </h2>
        <p className="text-xl lg:text-2xl font-bold text-gray-500 text-center">
          Empowering Growth Through Innovation
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-16">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="bg-white border-4 border-secondary rounded-lg p-6 lg:p-12 flex flex-col items-center gap-4 lg:gap-8 text-center"
            >
              {reason.icon}
              <h3 className="font-bold text-2xl lg:text-3xl text-secondary">
                {reason.title}
              </h3>
              <p className="text-xl">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
