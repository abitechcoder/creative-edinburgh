import { CardImage } from "../assets";
import styles from "../style";

const Consequences = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 py-12 mx-auto">
      <div className="md:w-1/2 pe-6">
        <img
          src={CardImage}
          alt="Typing on keyboard"
          className="w-full rounded-e-2xl "
        />
      </div>
      <div className="md:w-1/2 px-6">
        <h2
          className={`${styles.heading1} text-black mb-8 text-center lg:text-left uppercase`}
        >
          CONSEQUENCES
        </h2>
        <p
          className={`${styles.paragraph} text-gray-700 font-normal leading-relaxed mb-4`}
        >
          Participants asked to stop any harassing behaviour are expected to
          comply immediately.
        </p>
        <p
          className={`${styles.paragraph} text-gray-700 font-normal leading-relaxed mb-4`}
        >
          If a participant engages in harassing behaviour, the Creative
          Edinburgh team may take any action they deem appropriate, up to and
          including expulsion from all Creative Edinburgh community events and
          channels, and identification of the participant as a harasser to other
          Creative Edinburgh members or the general public.
        </p>
        <p
          className={`${styles.paragraph} text-gray-700 font-normal leading-relaxed mb-4`}
        >
          This anti-harassment policy is based on{" "}
          <a href="#" className="text-pink-500 underline">
            the example policy from the Geek Feminism wiki
          </a>
          , created by the Geek Feminism community and inspired by the code of
          conduct developed by{" "}
          <a href="#" className="text-pink-500 underline">
            CodeBase Ltd.
          </a>
        </p>
        <p
          className={`${styles.paragraph} text-gray-700 font-normal leading-relaxed mb-4`}
        >
          This Code of Conduct was developed in January 2023.
        </p>
        <p
          className={`${styles.paragraph} text-gray-700 font-normal leading-relaxed mb-4`}
        >
          If you have any feedback about it, we’d welcome your thoughts via
          info@creative-edinburgh.com rather than in public channels.
        </p>
      </div>
    </div>
  );
};

export default Consequences;
