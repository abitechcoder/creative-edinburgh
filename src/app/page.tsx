import Analysis from "@/components/landingpage/Analysis";
import ConnectSection from "@/components/landingpage/ConnectSection";
import Featured from "@/components/landingpage/Featured";
import Hero from "@/components/landingpage/Hero";
import Newsletter from "@/components/landingpage/Newsletter";
import StepsToSuccess from "@/components/landingpage/StepsToSuccess";
import Testimonials from "@/components/landingpage/Testimonials";
import WhyChooseUs from "@/components/landingpage/WhyChooseUs";

const Homepage = () => {
  return (
    <div className="mt-8">
      <svg
        viewBox="0 0 304.343 675.885"
        preserveAspectRatio="xMinYMin meet"
        className="hidden lg:block absolute z-10 top-[600px] right-[50%] lg:top-[550px] lg:right-[10%] w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] fill-[#a08cff] rotate-90"
      >
        <path
          d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
          transform="translate(-557.701 -242.912)"
        ></path>
      </svg>
      <Hero />
      <Analysis />
      <ConnectSection />
      <WhyChooseUs />
      <Featured />
      <Testimonials />
      <StepsToSuccess />
      <Newsletter />
    </div>
  );
};

export default Homepage;
