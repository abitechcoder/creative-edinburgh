import { Mission, MoreValue, OurValue, VisionSection } from "../components";
const VissionMissionPage = () => {
  return (
    <div className="bg-gray-50 py-5">
      <div className="my-10 lg:my-20 px-6 grid grid-cols-1 lg:grid-cols-2 ">
        <h1
          className={`text-5xl lg:text-7xl font-extrabold text-black mb-10 uppercase max-w-lg  `}
        >
          Vision, mission and values
        </h1>
      </div>
      <div>
        <VisionSection />
        <Mission />
        <OurValue />
        <MoreValue />
      </div>
    </div>
  );
};

export default VissionMissionPage;
