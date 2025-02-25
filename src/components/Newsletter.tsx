import styles from "../style";
import { FaCheckSquare } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="bg-white">
      <div className="px-4 container mx-auto py-15 lg:py-20">
        <h2 className={`${styles.heading1} lg:max-w-[70%] lg:mx-auto text-black text-center mb-4`}>
          Stay Ahead with Our Newsletter
        </h2>
        <p className="text-xl lg:text-2xl font-bold text-gray-500 text-center">Weekly Market Intel Delivered to Your Inbox</p>
        <div className="grid gap-8 lg:gap-16">
          <div className="grid place-content-center gap-8 mt-10">
            <ul className="list-none lg:flex grid gap-4 lg:gap-8">
              <li className="flex items-center gap-4 text-lg lg:text-2xl font-bold"><FaCheckSquare size={50} className="text-secondary" /> Sector-specific trends</li>
              <li className="flex items-center gap-4 text-lg lg:text-2xl font-bold"><FaCheckSquare size={50} className="text-secondary" />Exclusive investment alerts</li>
              <li className="flex items-center gap-4 text-lg lg:text-2xl font-bold"><FaCheckSquare size={50} className="text-secondary" />SME success strategies</li>
            </ul>
          </div>
          <form className="flex flex-col lg:flex-row gap-2 w-full lg:w-[70%] mx-auto">
            <input type="email" placeholder="Email" className="border flex-1 rounded-lg p-4" />
            <button type="submit" className="bg-secondary py-4 px-8 rounded-lg text-white font-bold hover:cursor-pointer">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
