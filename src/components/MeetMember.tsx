import { members } from "../constant";
import styles from "../style";
import MeetMemberCard from "./MeetMemberCard";

const MeetMember = () => {
  return (
    <section className="px-4 lg:px-8 py-8 lg:py-20">
      <h2 className={`${styles.heading1} text-black mb-16`}>
        MEET MEMBERS OF OUR COMMUNITY
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mt-8 lg:mt-16">
        {members.map((member) => (
          <MeetMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default MeetMember;
