import { OurMissionImage } from "../assets";
import VissionMisionCard from "./VissionMisionCard";

const Mission = () => {
  return (
    <div className="my-10 lg:my-20">
      <VissionMisionCard
        imageSrc={OurMissionImage}
        title="Our mission"
        text="Creative Edinburgh brings together creative thinkers and makers across the city. Through events, career development and advocacy, we support the city’s creative community, providing an inclusive space for collaboration and connection at every stage of their career. By amplifying and celebrating the success of local creative endeavours, we shape the creative legacy of the city through connecting its people, projects and places."
        isImageLeft={false}
      />
    </div>
  );
};

export default Mission;
