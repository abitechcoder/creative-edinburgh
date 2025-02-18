import {
  CreativeEdinburgh,
  MentoringScheme,
  OurCommunity,
  UniqueEvent,
  WhatWeDo,
} from "../components";

const WhatWeDoPage = () => {
  return (
    <div className="overflow-x-hidden">
      <WhatWeDo />
      <CreativeEdinburgh />
      <OurCommunity />
      <MentoringScheme />
      <UniqueEvent />
    </div>
  );
};

export default WhatWeDoPage;
