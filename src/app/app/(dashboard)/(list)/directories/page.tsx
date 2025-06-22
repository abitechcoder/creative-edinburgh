import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";

import { role } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";

import { Business, Prisma, Sector } from "@prisma/client";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { p } from "framer-motion/client";
import FormContainer from "@/components/FormContainer";

type Directories = Business & { sector: Sector };

const columns = [
  {
    header: "Info",
    accessor: "info",
  },

  {
    header: "Sector",
    accessor: "sector",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Revenue",
    accessor: "revenue",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
const renderRow = (item: Directories) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleDeepLight"
  >
    <td className="flex items-center gap-4 p-4">
      <Image
        src={item.logo || "/logo.png"}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block rounded-full object-cover"
      />
      <div className="flex flex-col lg:w-52">
        <h3 className="font-semibold">{item.name}</h3>
        {/* <p className="text-xs text-gray-500">{item?.genderOfOwner}</p> */}
      </div>
    </td>
    {/* <td className="hidden md:table-cell">{item.genderOfOwner}</td> */}
    {/* <td className="hidden md:table-cell">{item.subjects.join(",")}</td> */}
    <td className="hidden md:table-cell">{item?.sector?.name}</td>
    <td className="hidden md:table-cell">
      {item?.email}
      <br></br>
      {item?.email}
    </td>
    <td className="hidden md:table-cell">{item.businessAddress}</td>
    <td className="hidden md:table-cell">{item.revenueBracket}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/app/directories/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-SkyBlue">
            <Image src="/view.png" alt="" width={16} height={16} />
          </button>
        </Link>
        {role === "admin" && (
          // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-PurpleDeep">
          //   <Image src="/delete.png" alt="" width={16} height={16} />
          // </button>
          <FormModal table="directory" type="delete" id={item.id} />
        )}
      </div>
    </td>
  </tr>
);

const TeacherListPage = async ({
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

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Directories</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-YellowDeep">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-YellowDeep">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-YellowDeep">
              //   <Image src="/plus.png" alt="" width={14} height={14} />
              // </button>
              <FormContainer table="directory" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default TeacherListPage;
