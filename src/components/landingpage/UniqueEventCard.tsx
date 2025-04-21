import { UniqueEventsProps } from "@/type";
import styles from "../../style";
import Button from "./Button";
import Image from "next/image";

const UniqueEventCard = ({
  title,
  description,
  imageSrc,
  altText,
}: UniqueEventsProps) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-6 bg-white py-8 lg:py-20 ">
      {/* Text Section */}
      <div className="flex-1 px-6 mt-8">
        <h2 className={`${styles.heading1} text-black mb-6`}>{title}</h2>
        <div
          className={`${styles.paragraph} text-black mb-5 font-medium space-y-3 leading-relaxed`}
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
        <Image
          src={imageSrc}
          alt={altText}
          className="rounded-l-2xl object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default UniqueEventCard;
