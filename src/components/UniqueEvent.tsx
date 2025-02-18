import { CardImage } from "../assets";
import UniqueEventCard from "./UniqueEventCard";

const UniqueEvent = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center ">
      <UniqueEventCard
        title="UNIQUE EVENTS"
        description={[
          "We offer a variety of events, all of which provide the opportunity to connect, collaborate and get inspired.",
          "From casual monthly meet-ups to lively evening parties, careers and skills workshops to expert panels, we have something for every creative in Edinburgh.",
          "Our events are designed with the needs of the community at their heart - whether you're a freelancer, sole trader, student, working parent, business owner or anything in-between.",
          "Hosted in-person and online, Creative Edinburgh events span the city’s creative industries, helping you stay connected, build skills and knowledge and get inspired.",
        ]}
        imageSrc={CardImage}
        altText="People enjoying an event"
      />
    </div>
  );
};

export default UniqueEvent;
