import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { Axios } from "@/lib/Axios";
import { role } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "../../../../../public";
import { Business } from "@prisma/client";
import prisma from "@/lib/prisma";

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
const renderRow = (item: Business) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleDeepLight"
  >
    <td className="flex items-center gap-4 p-4">
      <Image
        src={Logo}
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
    <td className="hidden md:table-cell">{item.sectorId}</td>
    {/* <td className="hidden md:table-cell">{item.contactDetails}</td> */}
    <td className="hidden md:table-cell">{item.businessAddress}</td>
    <td className="hidden md:table-cell">{item.revenueBracket}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`/list/teachers/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-SkyBlue">
            <Image src="/view.png" alt="" width={16} height={16} />
          </button>
        </Link>
        {role === "admin" && (
          // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-PurpleDeep">
          //   <Image src="/delete.png" alt="" width={16} height={16} />
          // </button>
          <FormModal table="teacher" type="delete" id={item.id} />
        )}
      </div>
    </td>
  </tr>
);

const TeacherListPage = async () => {
  const data = await prisma.business.findMany();

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
              <FormModal table="teacher" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
