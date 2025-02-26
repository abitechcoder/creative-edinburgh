import {
  CreativeAward,
  CreativeEdinburghAward,
  TheAwardPillar,
} from "../components";

const Awards = () => {
  return (
    <div>
      <CreativeEdinburghAward />
      <TheAwardPillar />
      <CreativeAward />
      {/* <PreviousAwards /> */}
      {/* <BecomeOurPartner /> */}
    </div>
  );
};

export default Awards;
