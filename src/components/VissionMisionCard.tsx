import styles from "../style";
import { VisionMissionProps } from "../type";

const VissionMisionCard = ({
  imageSrc,
  title,
  text,
  text2,
  text3,
  subtitle,
  subtitle2,
  subtitle3,
  isImageLeft,
}: VisionMissionProps) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-8 my-8   ${
        isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div
        className={`w-full lg:w-1/2 overflow-hidden   ${
          isImageLeft ? "pe-6 " : "ps-6"
        }`}
      >
        <img
          src={imageSrc}
          alt={title}
          className={`w-full  h-auto
          } ${isImageLeft ? "rounded-e-2xl " : "rounded-s-2xl"}`}
        />
      </div>
      <div className="w-full lg:w-1/2  px-6">
        <h2
          className={`${styles.heading1} text-black mb-10 text-center lg:text-left uppercase`}
        >
          {title}
        </h2>
        <p className={`${styles.paragraph} text-black font-bold mb-3`}>
          {subtitle}
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-5`}
        >
          {text}
        </p>
        <p className={`${styles.paragraph} text-black font-bold mb-3`}>
          {subtitle2}
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-5`}
        >
          {text2}
        </p>
        <p className={`${styles.paragraph} text-black font-bold mb-3`}>
          {subtitle3}
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-5`}
        >
          {text3}
        </p>
      </div>
    </div>
  );
};

export default VissionMisionCard;
