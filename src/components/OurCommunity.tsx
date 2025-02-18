import { CardImage } from "../assets";
import styles from "../style";
import FAQList from "./FAQList";

export default function OurCommunity() {
  return (
    <section className="container mx-auto  grid md:grid-cols-2 gap-12 py-6 lg:py-20 ">
      <div className="px-6">
        <h2 className={`${styles.heading1} text-black mb-10`}>OUR COMMUNITY</h2>
        <p className={`${styles.paragraph} text-black font-semibold mb-5`}>
          Build your skills. Grow your community. Get inspired.
        </p>
        <p className={`${styles.paragraph} text-black mb-5 font-semibold`}>
          Creative Edinburgh is the city’s largest network of multi-disciplinary
          creatives. Our members span every creative sector, from art and
          design, illustration and animation, to publishing, marketing and
          creative tech. And so much more.
        </p>
        <div className="mt-6">
          <FAQList />
        </div>
      </div>
      <div className="ps-6">
        <img
          src={CardImage}
          alt="Community Event"
          className="w-full rounded-l-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
