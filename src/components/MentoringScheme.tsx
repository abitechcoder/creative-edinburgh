import { MentorshipSchemeImage } from "../assets";
import styles from "../style";
import Button from "./Button";

const MentoringScheme = () => {
  return (
    <section className="bg-[#A78BFA] text-black flex flex-col md:flex-row items-center gap-12 py-8 lg:py-20 ">
      {/* Image Section */}
      <div className=" w-full md:w-1/2 pe-6">
        <img
          src={MentorshipSchemeImage}
          alt="Mentoring Scheme"
          className="w-full rounded-r-2xl "
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 px-6">
        <h2 className={`${styles.heading1} text-black mb-10`}>
          MENTORING SCHEME
        </h2>
        <p className={`${styles.paragraph} text-black mb-5 leading-relaxed`}>
          Mentoring can be the missing link between where you are now, and where
          you want to be. If you’re looking for accountability for your progress
          on a particular project, business or creative idea while gaining some
          diverse industry insight, the Creative Edinburgh mentoring scheme
          could be for you!
        </p>
        <Button
          text="Find out more about mentoring"
          onClick={() => console.log("Clicked")}
        />
      </div>
    </section>
  );
};

export default MentoringScheme;
