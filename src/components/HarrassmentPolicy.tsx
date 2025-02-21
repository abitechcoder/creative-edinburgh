import { Harassment } from "../assets";
import styles from "../style";

const harassmentPoints = [
  "Offensive comments related to gender, gender identity and expression, sexual orientation, disability, mental illness, neuro(a)typicality, physical appearance, body size, age, race, or religion or belief.",
  "Unwelcome comments regarding a person’s lifestyle choices and practices, including those related to food, health, marriage, parenting, drugs, and employment.",
  "Deliberate misgendering or use of ‘dead’ or rejected names.",
  "Sharing/using NSFW/sexual images, language, or behavior in all spaces.",
  "Physical contact and simulated physical contact (e.g., textual descriptions like '*hug*' or '*backrub*') without consent or after a request to stop.",
  "Threats of violence.",
  "Incitement of violence towards any individual or group, including encouraging a person to commit suicide or to engage in self-harm.",
  "Deliberate intimidation.",
  "Stalking or following.",
  "Harassing photography or recording, including harassing someone online through unwarranted photography or recording.",
  "Sustained disruption of discussions, talks or events.",
  "Unwelcome sexual attention and/or behaviour.",
  "Pattern of inappropriate social contact, such as requesting/assuming inappropriate levels of intimacy with others.",
  "Continued one-on-one communication after any request(s) to cease.",
  "Deliberate “outing” of any aspect of a person’s identity without their consent except as necessary to protect vulnerable people from intentional abuse.",
  "Publication of non-harassing private communication.",
  "Patronising language. Avoid referring to adults as ‘girls’ or ‘boys’.",
];
const AdditionalHarassmentPoints = [
  "No feigned surprise. When someone says “I don’t know what X is”, it’s not appropriate to respond with “You don’t know what X is?!” or “I can’t believe you don’t know what X is!”.",
  "No well-actuallys. These are the pedantic corrections that don’t make a difference to the conversation that’s happening.",
];
const creativeEdinburghPriorities = [
  "‘Reverse’ -isms, including ‘reverse racism,’ ‘reverse sexism,’ and ‘cisphobia’.",
  "Reasonable communication of boundaries, such as “leave me alone,” “go away,” or “I’m not discussing this with you.”",
  "Communicating in a ‘tone’ you don’t find congenial.",
  "Criticising racist, sexist, cissexist, or otherwise oppressive behaviour or assumptions.",
];

const HarassmentPolicy = () => {
  return (
    <div className="py-12 mx-auto">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full mt-6 md:mt-0 pe-6">
          <img
            src={Harassment}
            alt="Harassment"
            className="rounded-e-2xl w-full"
          />
        </div>
        <div className="px-5 w-full">
          <h2 className="text-xl font-bold mb-4">
            Harassment includes, but is not limited to:
          </h2>
          <ul
            className={`${styles.paragraph}  font-normal leading-relaxed list-disc pl-5 space-y-2 text-gray-700`}
          >
            {harassmentPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div>
            <h2 className="text-xl font-bold my-5">
              Additionally, and more specifically to our sector, the following
              behaviours are unwelcome:
            </h2>
            <ul
              className={`${styles.paragraph}  font-normal leading-relaxed list-disc pl-5 space-y-2 text-gray-700`}
            >
              {AdditionalHarassmentPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold my-5">
              Creative Edinburgh prioritises marginalised people’s safety over
              privileged people’s comfort. The Creative Edinburgh team reserves
              the right not to act on complaints regarding:
            </h2>
            <ul
              className={`${styles.paragraph}  font-normal leading-relaxed list-disc pl-5 space-y-2 text-gray-700`}
            >
              {creativeEdinburghPriorities.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarassmentPolicy;
