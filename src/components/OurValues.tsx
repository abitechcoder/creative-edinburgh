import { OurValuesImage } from "../assets";
import VissionMisionCard from "./VissionMisionCard";

const OurValues = () => {
  return (
    <div className="my-10 lg:my-20">
      <VissionMisionCard
        imageSrc={OurValuesImage}
        title="Our values"
        subtitle="Inclusive"
        text="In order to represent the whole creative community in Edinburgh, we strive to support individuals through genuinely inclusive services, ensuring fair representation from all backgrounds and communities. Through celebrating people, projects and places in Edinburgh we proudly shine a light on our ever-growing creative community and strengthen its legacy."
        subtitle2="Collaborative"
        text2="From being the conduit that connects local creatives to sharing information around the community, collaboration is where it all begins. We believe that by forging meaningful connections we can inspire and nurture fruitful collaborations among our members. The services that we offer our members are built on a foundation of trust, principles of fair work, and mutual respect."
        isImageLeft={true}
      />
    </div>
  );
};

export default OurValues;
