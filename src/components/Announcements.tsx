import prisma from "@/lib/prisma";
import moment from "moment";
import Link from "next/link";

const Announcements = async () => {
  const data = await prisma.announcement.findMany({
    take: 3,
  });

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <Link className="text-xs text-gray-400" href={`/app/announcements`}>
          View All
        </Link>
      </div>

      {data.map((item) => (
        <div key={item.id} className="flex flex-col gap-4 mt-4">
          <div className="bg-SkyBlueLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <p className="text-md">{item.title}</p>
              <span className="text-xs w-32 text-gray-400 bg-white rounded-md px-1 py-1 text-center">
                {moment(item?.date).format("YYYY-MM-DD ")}
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              {item?.description.length > 50
                ? `${item.description.substring(0, 50)}...`
                : item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
