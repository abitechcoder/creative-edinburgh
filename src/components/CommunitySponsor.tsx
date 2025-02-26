import { PeopleNetworking } from "../assets";
import SponsorCard from "./SponsorCard";

const CommunitySponsor = () => {
  return (
    <header className="relative overflow-hidden py-10 lg:py-20 bg-red-50">
      {/* Yellow Arc */}
      <svg
        viewBox="0 0 467.23 585.48"
        preserveAspectRatio="xMinYMin meet"
        className="fill-purple-400 absolute z-10 -top-10 -right-20 lg:-top-40 lg:-right-30 w-48 h-48 lg:w-[500px] lg:h-[500px] rotate-120"
      >
        <path
          d="M1160.562,468.741c-48.074,84.29-155.091,113.632-239.217,65.587L853.47,653.7c149.823,85.752,340.52,33.449,426.1-116.868s33.27-341.638-116.538-427.375L1095.141,228.8c84.018,48.207,113.285,155.544,65.421,239.94"
          transform="translate(-853.47 -109.457)"
        ></path>
      </svg>

      {/* Small Yellow Circle */}
      <svg
        viewBox="0 0 137.169 137.76"
        preserveAspectRatio="xMinYMin meet"
        className="fill-yellow-400 absolute z-10 w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] -left-[20px] lg:-left-[60px] top-[20%] lg:top-[20%]"
      >
        <path
          d="M1084.917,899.655a68.544,68.544,0,1,0-66.638,70.775,68.863,68.863,0,0,0,66.638-70.775"
          transform="translate(-947.774 -832.697)"
        ></path>
      </svg>

      {/* Large Purple Arc - Top Right */}
      <svg
        viewBox="0 0 304.343 675.885"
        preserveAspectRatio="xMinYMin meet"
        className="absolute hidden lg:block z-10 top-[10px] -right-[100px] lg:top-[50%] lg:-right-[45px] w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] fill-[#a08cff] rotate-120"
      >
        <path
          d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
          transform="translate(-557.701 -242.912)"
        />
      </svg>

      {/* Pink Arc - Bottom Left */}
      <svg
        viewBox="0 0 304.343 675.885"
        preserveAspectRatio="xMinYMin meet"
        className="absolute hidden lg:block z-10 bottom-[-60px] -left-[125px] lg:bottom-[15%] lg:-left-56 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] fill-[#ff8cb8] rotate-150"
      >
        <path
          d="M694.788,530.1a310.655,310.655,0,0,1,67.419-202.566l-107.4-84.624a446.92,446.92,0,0,0-96.925,291c4.705,167.8,101.443,311.731,240.34,384.88l63.818-120.969A311.986,311.986,0,0,1,694.788,530.1"
          transform="translate(-557.701 -242.912)"
        />
      </svg>

      {/* Sponsor Cards Container */}
      <div className="relative container mx-auto z-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto grid-flow-row dense px-4">
        {/* HEADLINE SPONSOR */}
        <div className="h-auto">
          <SponsorCard
            imageSrc={PeopleNetworking}
            title="HEADLINE SPONSOR BENEFITS"
            price="£20,000"
            benefits={[
              "Exclusive branding - a Headline Sponsor spotlight and logo on the Creative Hub Africa website and a bespoke introduction in a monthly newsletter to our members, which has an open rate of more than 40%.",
              "Opportunity for self-promotion through social posts, Instagram takeovers and event speaking opportunities.",
              "Guest participation at an event with Creative Hub Africa to showcase your brand, invite your staff or/and benefit from a speaking slot.",
              "Co-presenting the Creative Hub Africa Awards or Summer Party with the Creative Hub Africa team.",
              "Introductory promotional video at the Creative Hub Africa Awards Ceremony and Summer Party.",
              "15 tickets to the annual Awards Ceremony and Summer Party.",
              "A bespoke creative workshop tailored to your organisation’s needs, co-curated by the Creative Hub Africa team.",
            ]}
            buttonText="EMAIL US"
          />
        </div>

        {/* COMMUNITY SPONSOR */}
        <div className="h-auto">
          <SponsorCard
            imageSrc={PeopleNetworking}
            title="COMMUNITY SPONSOR BENEFITS"
            price="£10,000"
            benefits={[
              "Dedicated Community Sponsor spotlight on the Creative Hub Africa website, detailing your company.",
              "Exclusive introduction in the newsletter to our members, which has an open rate of more than 40%.",
              "Showcase your business with sponsor guest invitations and branding touchpoints at Creative Hub Africa’s well-attended events.",
              "8 tickets to the annual Awards Ceremony and Summer Party.",
              "Exclusive speaking opportunities to position your thought leaders within the creative industry through a variety of hosted events.",
            ]}
            buttonText="EMAIL US"
          />
        </div>

        {/* AWARDS SPONSOR */}
        <div className="h-auto">
          <SponsorCard
            imageSrc={PeopleNetworking}
            title="AWARDS SPONSOR BENEFITS"
            price="£1500-£3000"
            heading="Sponsorship of one of the 10 Creative Hub Africa Awards, and supporting five months of professional mentoring to the individual winners. Other benefits include:"
            benefits={[
              "Co-presenting the Award with a previous winner.",
              "Branding across Creative Hub Africa event pages, content and communications.",
              "4 complimentary Award ceremony tickets for your team.",
              "Your logo included on the Creative Hub Africa website, social media, newsletter, and communications.",
              "Instagram story takeover for one day leading up to the Awards.",
            ]}
            buttonText="EMAIL US"
          />
        </div>

        {/* SUMMER PARTY SPONSOR */}
        <div className="h-auto">
          <SponsorCard
            imageSrc={PeopleNetworking}
            title="SUMMER PARTY SPONSOR BENEFITS"
            heading="Summer Party Sponsorship is bespoke and could be:"
            benefits={[
              "Providing food catering for the 100 ticket holders (in-kind).",
              "Providing a keg of beer/soft drinks for the ticket holders (in-kind).",
              "£2000 contribution to become a Headline Sponsor of the Summer Party (exclusive opportunity).",
              "£1000 contribution to become a Sponsor of the Summer Party (opportunity limited to up to 3 companies).",
            ]}
            heading2="The benefits include:"
            additionalBenefits={[
              "Branding and logo across Creative Hub Africa website, newsletter, and social media platforms.",
              "6 complimentary tickets for your team to the Summer Party.",
              "An Instagram story takeover leading up to the event.",
            ]}
            buttonText="EMAIL US"
          />
        </div>

        {/* CREATIVE CIRCLES SPONSOR */}
        <div className="h-auto">
          <SponsorCard
            imageSrc={PeopleNetworking}
            title="CREATIVE CIRCLES SPONSOR BENEFITS"
            heading="As an exclusive sponsor of Creative Circles, Creative Hub Africa's flagship monthly networking event, you receive access to an engaged, socially conscious group of freelancers, businesses, and organisations. As well as increased brand awareness and access to different communities of creatives in the Edinburgh city region."
            benefits={[
              "Your company will be given brand visibility throughout 10 events: your organisation's name will be highlighted in each event venue and featured on banners as well as the welcome desk.",
              "Your logo included on the Creative Hub Africa website, social media, newsletter, and communications.",
              "Instagram story takeover for one day across the year.",
            ]}
            buttonText="EMAIL US"
          />
        </div>

        {/* ROUNDTABLE SPONSOR */}
        <div className="h-auto">
          <SponsorCard
            imageSrc={PeopleNetworking}
            title="ROUNDTABLE SPONSOR BENEFITS"
            heading="As an exclusive sponsor of the Roundtable event series, you receive access to an engaged, socially conscious group of freelancers, businesses, and organisations. As well as increased brand awareness and access to different communities of creatives in the Edinburgh city region."
            benefits={[
              "Your company will be given brand visibility throughout all our panel events: your organisation's name will be highlighted in each event venue and featured on banners as well as the welcome desk.",
              "Your logo included on the Creative Hub Africa website, social media, newsletter, and communications.",
              "Instagram story takeover for one day across the year.",
            ]}
            heading2="Sponsorship Cost:"
            additionalBenefits={[
              "We ask for the support of £2,000 for three events over the year.",
            ]}
            buttonText="EMAIL US"
          />
        </div>
      </div>
    </header>
  );
};

export default CommunitySponsor;
