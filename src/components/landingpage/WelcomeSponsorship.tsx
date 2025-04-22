import styles from "@/style";
import { PeopleNetworking } from "../../../public";
import Image from "next/image";

const WelcomeSponsorship = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start gap-5 py-28 bg-white">
      {/* Image Section */}
      <div className="lg:w-1/2 w-full pe-6">
        <Image
          src={PeopleNetworking}
          alt="Creative Hub Africa Event"
          className="rounded-e-2xl w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2 w-full px-6">
        <p
          className={`${styles.paragraph} text-gray-700 font-normal leading-relaxed mb-4`}
        >
          Creative Hub Africa welcomes sponsorships from organisations that
          align with our <strong>Mission, Vision and Values</strong> and those
          that wish to be part of the growth of the creative sector in Scotland.
          Partner with us to not only positively align your reputation with ours
          but also strengthen and empower small creative businesses that uphold
          the culture and success of the city of Edinburgh.
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
        >
          Join us to embark upon a partnership which will ensure your investment
          in Creative Hub Africa aligns with your business objectives,
          reputation aspirations, and specific areas of interest. Our dedicated
          team will work with you to ensure the sponsorship includes
          high-quality benefits that matter most to you.
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
        >
          Take a look at our{" "}
          <a href="#" className="text-pink-400 underline">
            Sponsorship Pack
          </a>{" "}
          and our Community Manager,{" "}
          <a href="mailto:inga@creative-edinburgh.com">
            inga@creative-edinburgh.com
          </a>
          , to get more information.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSponsorship;
