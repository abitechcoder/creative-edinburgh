import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MyAccordion from "@/components/landingpage/MyAccordion";
import Image from "next/image";
import Analysis from "@/components/landingpage/Analysis";
import styles from "@/style";
import { Prisma, Sector } from "@prisma/client";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";

const MembersLibrary = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;

  const p = page ? parseInt(page) : 1;

  // URL PARAMS CONDITION

  const query: Prisma.BusinessWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "sectorId":
            query.sectorId = parseInt(value);
            break;
          case "search":
            query.name = { contains: value };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.business.findMany({
      where: query,
      include: {
        sector: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.business.count({ where: query }),
  ]);

  const [sectors] = await prisma.$transaction([prisma.sector.findMany()]);

  const registeredCount = await prisma.business.count({
    where: { registrationStatus: "Registered" },
  });

  return (
    <div className="pb-8 px-8 mt-[140px]">
      <section className="bg-gray-50 py-16 relative lg:min-h-[50vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="w-full h-full flex flex-col justify-center">
          <h2
            className={`${styles.heading1} text-black mb-6 lg:mb-10 mt-16 uppercase`}
          >
            Creative Hub Africa Members Directory
          </h2>
          <p
            className={`${styles.paragraph} text-gray-700 mb-5 font-medium leading-relaxed text-xl`}
          >
            Explore the Sierra Leone Bizness Directory! Connect with businesses
            across Sierra Leone from music and fashion to tech and are . Search
            by sector or location, discover local services, and grow your
            network. Support local. Discover more. Build connections.
          </p>
          <p
            className={`${styles.paragraph} text-gray-700 font-medium leading-relaxed text-xl`}
          >
            Our members are currently updating their own profiles - please bear
            with us, this can take some time!
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-[50%] left-20 w-[120px] h-[120px] bg-yellow-400 rounded-full hidden lg:block"></div>
        </div>
      </section>
      <Analysis />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-10">
        {sectors?.map((sector: Sector) => (
          <Link
            href={`/business-directory/sector/${sector.id}`}
            key={sector.id}
            className="group bg-secondary hover:bg-primary relative rounded-lg p-6 lg:p-12 lg:gap-8 text-center grid place-items-center"
          >
            <h3 className="font-bold text-lg lg:text-2xl text-white group-hover:text-secondary">
              {sector.name}
            </h3>
          </Link>
        ))}
      </div>
      <div className="my-8">
        <MyAccordion
          name={"FILTER BY SECTOR"}
          data={sectors}
          // selectedItem={selectedSector}
          // setSelectedItem={setSelectedSector}
        />
      </div>

      <div className="flex w-full md:w-1/3 ">
        <TableSearch />
      </div>

      <div>
        {data.length === 0 ? (
          <div className="px-8 py-16 grid place-items-center text-center">
            No Businesses found. Please try another filter
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-12 py-20">
            {data.map((business) => (
              <div
                key={business.id}
                className={`relative border-secondary border-4 p-8 rounded-lg flex flex-col gap-4 bg-[#faebe6] items-start`}
              >
                <div
                  className={`bg-secondary grid text-white place-items-center rounded-lg text-sm font-bold uppercase lg:h-[40px] lg:w-[250px] p-2 lg:absolute -top-[20px] left-8 z-10`}
                >
                  {sectors.find(
                    (sector: Sector) => sector.id === business.sector?.id
                  )?.name || "Unknown Sector"}
                </div>
                <Image
                  src={business.logo || "/logo.png"}
                  alt={`${business.name} logo`}
                  className="mt-8"
                  height={100}
                  width={150}
                />
                <h1 className="text-2xl font-bold">{business.name}</h1>
                <p>
                  {business.description.length > 200
                    ? `${business.description.substring(0, 200)}...`
                    : business.description}
                </p>
                <Link
                  href={`/business-directory/${business.id}`}
                  className="hover:cursor-pointer flex items-center gap-4 my-4"
                >
                  <p className="text-lg font-bold">Visit Profile</p>
                  <div className="bg-[#07081a] p-4 rounded-full">
                    <FaArrowRight className="text-white" size={16} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Pagination page={p} count={count} />
    </div>
  );
};

export default MembersLibrary;
