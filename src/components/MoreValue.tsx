import { CardImage } from "../assets";
import VissionMisionCard from "./VissionMisionCard";

const MoreValue = () => {
  return (
    <div className="my-10 lg:my-20">
      <VissionMisionCard
        imageSrc={CardImage}
        subtitle="Curious"
        text="We believe in lifelong curiosity and learning and as such, we enable innovation and development opportunities for our members and the wider community. Through our ambitious events programme, training opportunities, and courses we help to upskill and educate generations of creative thinkers. As an organisation, we are never afraid to experiment and take creative risks in hope that this resonates with our members."
        subtitle2="Sustainable"
        text2="The principles of sustainable and circular practices are at the heart of all our initiatives. We strive to support freelance creatives to accelerate their professional journey through fostering sustainable practice and learning. Our forward-looking programmes aim to future-proof creative careers and grow professional confidence."
        subtitle3="Connected"
        text3="We are a well-connected network organisation partnering with a wide range of public and private sector industries and those whom they serve. We exist to facilitate the discovery and promotion of the creative sector in and around Edinburgh. Through our services, we help creatives feel and stay connected with like-minded people in Edinburgh, Scotland and beyond."
        isImageLeft={false}
      />
    </div>
  );
};

export default MoreValue;
