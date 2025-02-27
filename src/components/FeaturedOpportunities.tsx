import styles from "../style";
import { Agriculture, Circular, Creative, Manufacturing, Renewable, Tech } from "../assets";
import { Link } from "react-router";

interface SectorType {
  id: number;
  image: any;
  title: string;
  description: string;
}

const sectors: SectorType[] = [
  {
    id: 1,
    image: Agriculture,
    title: "Agriculture",
    description: "Partner with sustainable cocoa and coffee cooperatives."
  },
  {
    id: 2,
    image: Renewable,
    title: "Renewable Energy",
    description: "Invest in Solar farms powering rural communities."
  },
  // {
  //   id: 3,
  //   image: Mining,
  //   title: "Mining",
  //   description: "Ethically sourced diamond and iron ore projects."
  // },
  {
    id: 3,
    image: Tech,
    title: "Tech Innovation",
    description: "Support fintech startups revolutionizing financial inclusion."
  },
  {
    id: 4,
    image: Creative,
    title: "Creative",
    description: ""
  },
  {
    id: 5,
    image: Circular,
    title: "Circular",
    description: ""
  },
  {
    id: 6,
    image: Manufacturing,
    title: "New Manufacturing",
    description: ""
  },
]

const Featured = () => {
  return (
    <section className="py-15 lg:py-20 bg-secondary">
      <div className="container mx-auto  px-4">
      <h2 className={`${styles.heading1} lg:max-w-[70%] lg:mx-auto text-white text-center mb-8`}>
        Featured Opportunities
      </h2>
      <p className="text-xl lg:text-3xl font-bold text-white text-center">Sierra Leone's High-Growth Sectors</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-16">
        {sectors.map((sector) => (
          <div key={sector.id} className="bg-white h-[300px] lg:h-[450px] relative rounded-lg lg:p-12 lg:gap-8 text-center">
            <img src={sector.image} className="h-full w-full rounded-lg absolute top-0 left-0" />
            <div className="bg-black/70 w-full h-full rounded-lg absolute top-0 left-0 z-10 flex flex-col items-center justify-center gap-6
             p-6">
              <h3 className="font-bold text-4xl lg:text-6xl text-white">{sector.title}</h3>
              <p className="text-2xl text-white">{sector.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full pt-10 lg:pt-20 flex flex-col items-center gap-4 lg:gap-8">
        <h3 className="text-center text-2xl lg:text-4xl font-bold text-white">Over <span className="text-primary">$5M+</span> in deals closed through our platform in 2023</h3>
        <Link to="#" className="px-6 py-3 bg-primary font-bold rounded-lg">Browse All Sectors</Link>
      </div>
      </div>
    </section>
  );
};

export default Featured;
