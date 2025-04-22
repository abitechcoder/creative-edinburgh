import CodeOfConduct from "@/components/landingpage/CodeOfConduct";
import Consequence from "@/components/landingpage/Consequence";
import Reporting from "@/components/landingpage/Reporting";
import HarassmentPolicy from "@/components/landingpage/Reporting";

const CodeOfConductPage = () => {
  return (
    <div className="py-10 bg-gray-50 mt-20 md:mt-28 lg:mt-32">
      <CodeOfConduct />
      <HarassmentPolicy />
      <Reporting />
      <Consequence />
    </div>
  );
};

export default CodeOfConductPage;
