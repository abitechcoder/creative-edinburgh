import BecomeOurPartner from "@/components/landingpage/BecomeOurPartner";
import CommunitySponsor from "@/components/landingpage/CommunitySponsor";
import CreativeCommunity from "@/components/landingpage/CreativeCommunity";
import OurCommunitySocialMedias from "@/components/landingpage/OurCommunitySocialMedias";
import SponsorSection from "@/components/landingpage/SponsorSection";
import SponsorTestimonial from "@/components/landingpage/SponsorTestimonial";
import WelcomeSponsorship from "@/components/landingpage/WelcomeSponsorship";

const BecomeASponsor = () => {
  return (
    <div className="overflow-hidden bg-white">
      <SponsorSection />
      <SponsorTestimonial />
      <CommunitySponsor />
      <SponsorTestimonial />
      <CreativeCommunity />
      <OurCommunitySocialMedias />
      <WelcomeSponsorship />
      <BecomeOurPartner />
    </div>
  );
};

export default BecomeASponsor;
