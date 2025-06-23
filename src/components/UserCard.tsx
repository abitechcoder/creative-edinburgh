import prisma from "@/lib/prisma";
import Image from "next/image";

const UserCard = async ({
  type,
}: {
  type: "business" | "registered" | "sector" | "staff";
}) => {
  let count = 0;

  if (type === "registered") {
    count = await prisma.business.count({
      where: { registrationStatus: "Yes" },
    });
  } else if (type === "staff") {
    const result = await prisma.workforce.aggregate({
      _sum: { total: true },
    });
    count = result._sum.total ?? 0;
  } else {
    // fallback for other models in modelMap
    const modelMap: Record<string, any> = {
      business: prisma.business,
      sector: prisma.sector,
    };

    if (!modelMap[type]) {
      throw new Error(`Invalid type: ${type}`);
    }

    count = await modelMap[type].count();
  }

  return (
    <div className="rounded-2xl odd:bg-PurpleDeep even:bg-YellowDeep p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        {/* <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span> */}
        <Image src="/more.png" alt="More" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">{count}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">
        {type === "staff"
          ? "Staff Employed"
          : type === "registered"
          ? "registered"
          : `${type}s`}
      </h2>
    </div>
  );
};

export default UserCard;
