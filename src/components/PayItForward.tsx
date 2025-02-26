import { PeopleNetworking } from "../assets";
import styles from "../style";
import Button from "./Button";

const PayItForward = () => {
  return (
    <section className="bg-secondary text-white mt-24 lg:mt-32 p-4 lg:py-12 relative grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Left Side - Text */}
      <div className="space-y-6 px-6 lg:flex flex-col justify-center">
        <h2
          className={`${styles.heading1} mb-8 text-center lg:text-left uppercase`}
        >
          PAY IT FORWARD
        </h2>
        <p className={`${styles.paragraph}  font-normal leading-relaxed mb-4`}>
          All donations are invested back to the Creative Hub Africa community,
          so by supporting us, you support your fellow creatives! As a
          non-profit social enterprise, we rely on fundraising and donations,
          and we will be able to do even more for our creative community with
          your support.
        </p>
        <Button text="Donate Now" className=" text-white" />
      </div>

      {/* Right Side - Image */}
      <div className=" ">
        <img
          src={PeopleNetworking}
          alt="Creative Hub Africa Event"
          className="w-full rounded-s-2xl"
        />
      </div>
    </section>
  );
};

export default PayItForward;
