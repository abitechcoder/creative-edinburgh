import { MeetMember } from "../components";
import TeamSection from "./TeamSection";

const Home = () => {
  return (
    <div className="text-3xl font-bold  text-secondary">
      <MeetMember />
      <TeamSection />
    </div>
  );
};

export default Home;
