import { OurVisionImage } from "../assets";
import VissionMisionCard from "./VissionMisionCard";

const VisionSection = () => {
  return (
    <div className="my-10 lg:my-20">
      <VissionMisionCard
        imageSrc={OurVisionImage}
        title="OUR VISION"
        text="We want Edinburgh to be a city that attracts creative people to contribute to its success, and where they feel included, connected, inspired, and supported, regardless of their background. Creatives in the city will thrive throughout their journey and their contributions will be seen and valued. They will be able to develop more sustainable creative practices and businesses and feel part of a strong community."
        isImageLeft={true}
      />
    </div>
  );
};

export default VisionSection;
