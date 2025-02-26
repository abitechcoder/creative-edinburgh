import {
  BecomeASponsorTestimonial,
  BecomeOurPartner,
  CommunitySponsor,
  CreativeCommunity,
  OurCommunitySocialMedias,
  SponsorSection,
  SponsorTestimonials,
  WelcomeSponsorship,
} from "../components";

const BecomeASponsor = () => {
  return (
    <div className="overflow-hidden bg-white">
      <SponsorSection />
      <SponsorTestimonials />
      <CommunitySponsor />
      {/* <PreviousSponsor /> */}
      <BecomeASponsorTestimonial />
      <CreativeCommunity />
      <OurCommunitySocialMedias />
      <WelcomeSponsorship />
      <BecomeOurPartner />
    </div>
  );
};

export default BecomeASponsor;
