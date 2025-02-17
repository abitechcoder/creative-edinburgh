import { members } from "../constant";
import styles from "../style";
import MeetMemberCard from "./MeetMemberCard";

const MeetMember = () => {
  return (
    <section className="container mx-auto px-4 py-8 bg-gray-100">
      <h2 className={`${styles.heading1} text-black mb-16`}>
        MEET MEMBERS OF OUR COMMUNITY
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {members.map((member) => (
          <MeetMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default MeetMember;
