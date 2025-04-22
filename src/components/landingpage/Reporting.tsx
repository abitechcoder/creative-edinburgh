import styles from "@/style";
import { ReportingImage } from "../../../public";
import Image from "next/image";

const codeOfConduct = [
  "Harassment outside official channels.",
  "Harassment that took place at any point in time. ",
];

const Reporting = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 py-12">
      <div className="md:w-1/2 px-6">
        <h2
          className={`${styles.heading1} text-black mb-8 text-center lg:text-left uppercase`}
        >
          REPORTING
        </h2>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
        >
          If you are being harassed, notice that someone else is being harassed,
          or have any other concerns, please contact us via our{" "}
          <a
            href="mailto:connect@sierraleonebusinessmarkit.com"
            className="text-blue-600 underline"
          >
            email
          </a>
          . Emails to this address will be forwarded to the Creative Hub Africa
          Executive Director and will remain confidential unless otherwise
          required. After receiving the complaint, somebody will be in touch to
          discuss further and take a record of your account. We will respond as
          promptly as we can. If other parties need to become involved in the
          process as your complaint progresses, we'll work with you to ensure
          that you're comfortable and that we have your consent to share
          information.
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
        >
          This code of conduct applies to Creative Hub Africa activities, but if
          you are being harassed by a user within or in the social orbit of
          Creative Hub Africa, we still want to know about it. We will take all
          good-faith reports of harassment by Creative Hub Africa seriously.
        </p>
        <div className="md:pe-6 w-full mb-4">
          <h2 className="text-xl font-bold mb-4">This includes</h2>
          <ul
            className={`${styles.paragraph}  font-normal leading-relaxed list-disc pl-5 space-y-2 text-gray-700`}
          >
            {codeOfConduct.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
        >
          The Creative Hub Africa team reserves the right to exclude people from
          Creative Hub Africa activities based on their past behaviour,
          including behaviour outside of Creative Hub Africa, and behaviour
          towards people who are not members of Creative Hub Africa.
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
        >
          In order to protect volunteers from abuse and burnout, we reserve the
          right to reject any report we believe to have been made in bad faith.
          Reports intended to silence legitimate criticism may be deleted
          without response.
        </p>
        <p
          className={`${styles.paragraph} text-black font-normal leading-relaxed mb-4`}
        >
          We will respect confidentiality requests for the purpose of protecting
          victims of abuse. At our discretion, we may publicly name a person
          about whom we’ve received harassment complaints, or privately warn
          third parties about them, if we believe that doing so will increase
          the safety of Creative Hub Africa members or the general public. We
          will not name harassment victims without their affirmative consent.
        </p>
      </div>
      <div className="md:w-1/2 ps-6">
        <Image
          src={ReportingImage}
          alt="Reporting an harassment"
          className="w-full rounded-s-2xl "
        />
      </div>
    </section>
  );
};
export default Reporting;
