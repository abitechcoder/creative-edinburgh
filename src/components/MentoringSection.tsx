import { PeopleNetworking } from "../assets";
import styles from "../style";

const MentoringSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 mx-auto  py-12 lg:py-24">
      {/* Text Section */}
      <div className="md:w-1/2 text-left px-6">
        <h2
          className={`${styles.heading1} text-black mb-8 text-center lg:text-left uppercase`}
        >
          WHAT IS MENTORING?
        </h2>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed `}
        >
          Mentoring is a process where a seasoned professional supports someone
          with less experience in their field, helping them develop skills, gain
          knowledge, and advance in their career or personal growth. It’s a
          collaborative relationship in which the mentor shares insights and
          experiences, while the mentee actively seeks feedback and learning
          opportunities. Successful mentoring is grounded in mutual respect,
          open communication, and a shared commitment to the mentee's goals.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 ps-6">
        <img
          src={PeopleNetworking}
          alt="Mentoring"
          className="w-full rounded-s-2xl "
        />
      </div>
    </div>
  );
};

export default MentoringSection;
