import { PeopleNetworking } from "../assets";
import styles from "../style";
import Button from "./Button";

const PartnerSection = () => {
  return (
    <section className="bg-secondary text-white mt-24 lg:mt-32   py-12 relative grid grid-cols-1 lg:grid-cols-2">
      <div className="max-w-4xl mx-auto px-6">
        <h2
          className={`${styles.heading1}  mb-8 text-center lg:text-left uppercase`}
        >
          Become a Sponsor
        </h2>
        <p className={`${styles.paragraph}  font-normal leading-relaxed mb-4`}>
          With more than <span className="font-bold">6,000 members</span>, we
          host the largest network of engaged creatives across Sierraleone. We
          bring together freelancers, students, and companies of all sizes and
          specialities, through our vibrant programme of events, career support
          and advocacy. Our mission is to support the city's diverse creative
          community at every stage of their career, future-proofing Sierraleone as
          the creative capital of the world. Read more about our sponsorship
          packages below and check out our{" "}
          <a href="#" className="underline font-semibold">
            Sponsorship Pack
          </a>
          .
        </p>{" "}
        <Button text="Become a partner" className="text-white" />
      </div>
      <div className="container mx-auto py-16 flex flex-col-reverse lg:flex-row">
        <div className="relative space-y-4 flex-1">
          <img
            src={PeopleNetworking}
            alt="Be a Mentee"
            className="w-full h-full object-cover rounded-s-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
