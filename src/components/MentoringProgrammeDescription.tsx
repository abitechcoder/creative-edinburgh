import styles from "../style";

const MentoringProgrammeDescription = () => {
  return (
    <div className="p-6  flex items-center py-12 lg:py-24">
      <div className="max-w-lg text-left">
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
        >
          The Creative Edinburgh Mentoring Programme is perfect for creatives
          who are seeking guidance, advice, and expertise in their respective
          creative fields. It is your go-to resource for boosting confidence,
          acquiring knowledge, honing skills, and unlocking your full potential!
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed `}
        >
          We currently have over 110 trained mentors, offering a wide range of
          expertise, from brand strategy and business development to
          illustration and writing.
        </p>
      </div>
    </div>
  );
};

export default MentoringProgrammeDescription;
