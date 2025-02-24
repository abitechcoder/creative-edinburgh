import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const communityData = [
  { icon: <FaTwitter size={50} />, text: "24.5K+ followers" },
  { icon: <FaInstagram size={50} />, text: "15K+ followers" },
  { icon: <FaFacebook size={50} />, text: "12.5K+ followers" },
  { icon: <MdEmail size={50} />, text: "55% open rate" },
];

const OurCommunitySocialMedias = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 my-10">
        Our Community
      </h2>
      <div className="flex justify-evenly gap-8 flex-wrap">
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 flex items-center justify-center rounded-full border-2 border-blue-600">
            {/* Custom icon (replace with actual component if needed) */}
            <span className="text-4xl font-bold text-blue-600">?</span>
          </div>
          <p className="mt-2 font-semibold">6,200+ members</p>
        </div>
        {communityData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-28 h-28 flex items-center justify-center rounded-full border-2 border-blue-600 text-blue-600">
              {item.icon}
            </div>
            <p className="mt-2 font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCommunitySocialMedias;
