import { PeopleNetworking } from "../assets";
import styles from "../style";

const CodeOfConduct = () => {
  return (
    <section className="flex flex-col md:flex-row mx-auto py-12 gap-5 ">
      {/* Text Content */}
      <div className="md:w-1/2 px-6">
        <h2
          className={`${styles.heading1} text-black mb-8 text-center lg:text-left uppercase`}
        >
          CODE OF CONDUCT
        </h2>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
        >
          Across all our activities and channels, we ask participants to respect
          the Code of Conduct below. Whether you are attending our events/skills
          development programs, meeting our team, taking part in our Mentorship
          Programme, or using digital means (e.g., website or social media
          platforms), please read the below and respect it.
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-5`}
        >
          Creative Hub Africa is committed to providing a harassment-free
          experience for everyone. We do not tolerate harassment in any form.
          Anyone who violates this code of conduct may be removed from these
          activities and channels at the discretion of the Creative Hub Africa
          team.
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-5`}
        >
          Some Creative Hub Africa activities may have additional rules in place,
          which will be made clearly available to users at an event description.
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-5`}
        >
          All Creative Hub Africa members and visitors are responsible for
          knowing and abiding by these rules.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 pl-6">
        <img
          src={PeopleNetworking}
          alt="Code of Conduct"
          className="rounded-s-2xl w-full h-auto"
        />
      </div>
    </section>
  );
};

export default CodeOfConduct;
