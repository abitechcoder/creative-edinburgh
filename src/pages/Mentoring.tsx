import {
  BeAMentee,
  BeAMentor,
  MenteeTestimony,
  MentoringImage,
  MentoringProgramme,
  MentoringProgrammeDescription,
  MentoringSection,
} from "../components";

const Mentoring = () => {
  return (
    <div className="overflow-hidden">
      <MentoringProgramme />
      <MentoringImage />
      <MentoringProgrammeDescription />
      <MentoringSection />
      <MenteeTestimony />
      <BeAMentee />
      <BeAMentor />
    </div>
  );
};

export default Mentoring;
