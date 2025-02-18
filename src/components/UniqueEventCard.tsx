import styles from "../style";
import { UniqueEventsProps } from "../type";
import Button from "./Button";

const UniqueEventCard = ({
  title,
  description,
  imageSrc,
  altText,
}: UniqueEventsProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 bg-white  py-6 lg:py-20 ">
      {/* Text Section */}
      <div className="flex-1 px-6">
        <h2 className={`${styles.heading1} text-black mb-10`}>{title}</h2>
        <div
          className={`${styles.paragraph} text-gray-700 mb-5 font-medium space-y-3 leading-relaxed`}
        >
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <Button
          text="See all our event"
          onClick={() => console.log("Clicked")}
        />
      </div>

      <div className="flex-1 w-full ps-6  ">
        <img
          src={imageSrc}
          alt={altText}
          className="rounded-l-2xl object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default UniqueEventCard;
