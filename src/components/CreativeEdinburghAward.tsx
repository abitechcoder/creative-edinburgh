import { PeopleNetworking } from "../assets";
import styles from "../style";

const CreativeEdinburghAwards = () => {
  return (
    <section className="pt-32 lg:pt-48 pb-12 flex flex-col md:flex-row gap-5 ">
      <div className="md:w-1/2 text-left px-6 ">
        <h1
          className={`${styles.heading1} text-black mb-8 text-center lg:text-left uppercase`}
        >
          THE CREATIVE EDINBURGH AWARDS
        </h1>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
        >
          Since 2012, we’ve been celebrating the city’s creative community at
          our annual Creative Edinburgh Awards, highlighting the projects,
          people and places that flourish across Edinburgh and continually
          ensuring its place on the cultural map, nationally and
          internationally!
        </p>
        <p
          className={`${styles.paragraph} text-black leading-relaxed mb-4 font-bold`}
        >
          That&apos;s a wrap on 2024! A huge thank you to everyone who joined us
          to celebrate{" "}
          <span className="italic">'the creatives who shape our city'</span> at
          the 2024 Awards Ceremony on Friday 15 November at Central Hall!
        </p>
        <a
          href=""
          className={`${styles.paragraph} text-black font-normal leading-relaxed border-b-2 border-pink-400`}
        >
          Find out more about the 2024 Creative Edinburgh Awards
        </a>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 ps-6">
        <img
          src={PeopleNetworking}
          alt="Creative Edinburgh Awards Audience"
          className="rounded-s-2xl w-full object-cover"
        />
      </div>
    </section>
  );
};

export default CreativeEdinburghAwards;
