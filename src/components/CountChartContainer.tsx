import Image from "next/image";
import CountChart from "./CountChart";
import prisma from "@/lib/prisma";

const CountChartContainer = async () => {
  const data = await prisma.business.groupBy({
    by: ["genderOfOwner"],
    _count: true,
  });

  const male = data.find((d) => d.genderOfOwner === "Male")?._count || 0;
  const female = data.find((d) => d.genderOfOwner === "Female")?._count || 0;

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Business Owners</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <CountChart male={male} female={female} />
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">{female}</h1>
          <h2 className="text-xs text-gray-300">
            Female ({Math.round((female / (male + female)) * 100)}%)
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">{male}</h1>
          <h2 className="text-xs text-gray-300">
            Male ({Math.round((male / (male + female)) * 100)}%)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountChartContainer;
