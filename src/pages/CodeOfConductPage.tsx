import {
  CodeOfConduct,
  Consequence,
  HarrasmentPolicy,
  Reporting,
} from "../components";

const CodeOfConductPage = () => {
  return (
    <div className="py-10 bg-gray-50 mt-20 md:mt-28 lg:mt-32">
      <CodeOfConduct />
      <HarrasmentPolicy />
      <Reporting />
      <Consequence />
    </div>
  );
};

export default CodeOfConductPage;
