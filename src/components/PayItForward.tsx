import { PeopleNetworking } from "../assets";
import styles from "../style";
import Button from "./Button";

const PayItForward = () => {
  return (
    <section className="bg-[#1e22aa] text-white pt-32 lg:pt-48 pb-12 gap-5 flex flex-col md:flex-row">
      {/* Left Side - Text */}
      <div className="md:w-1/2 space-y-6 px-6">
        <h2
          className={`${styles.heading1} mb-8 text-center lg:text-left uppercase`}
        >
          PAY IT FORWARD
        </h2>
        <p className={`${styles.paragraph}  font-normal leading-relaxed mb-4`}>
          All donations are invested back to the Creative Edinburgh community,
          so by supporting us, you support your fellow creatives! As a
          non-profit social enterprise, we rely on fundraising and donations,
          and we will be able to do even more for our creative community with
          your support.
        </p>
        <Button text="Donate Now" className=" text-white" />
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 ps-6 ">
        <img
          src={PeopleNetworking}
          alt="Creative Edinburgh Event"
          className="w-full rounded-s-2xl"
        />
      </div>
    </section>
  );
};

export default PayItForward;
