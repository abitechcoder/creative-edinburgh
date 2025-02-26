import { BecomeMentor } from "../assets";
import styles from "../style";
import Button from "./Button";

const BeAMentor = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-tertiary py-12 lg:py-20 overflow-hidden">
      {/* Left Text Section */}
      <div className="px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5">
          I WANT TO BE A MENTOR
        </h2>
        <p
          className={`${styles.paragraph} text-white font-normal leading-relaxed mb-4 max-w-lg`}
        >
          Find out everything you need to know about becoming a trained mentor
          as part of the Creative Hub Africa Mentoring Programme
        </p>
        <Button className="text-white" text="Learn more about becoming a Creative Hub Africa mentor" />
      </div>

      <div className="relative ">
        <img
          src={BecomeMentor}
          alt="Be a Mentor"
          className="w-full h-full object-cover rounded-s-2xl"
        />
      </div>
    </div>
  );
};

export default BeAMentor;
