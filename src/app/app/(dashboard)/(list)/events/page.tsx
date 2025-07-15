import FormContainer from "@/components/FormContainer";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";

import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { currentUser } from "@clerk/nextjs/server";
import { Event, Prisma } from "@prisma/client";
import moment from "moment";
import Image from "next/image";

const EventListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const user = await currentUser();
  const role = user?.publicMetadata.role as string;

  const { page, ...queryParams } = searchParams;

  const columns = [
    {
      header: "Title",
      accessor: "title",
    },
    {
      header: "Description",
      accessor: "description",
    },

    {
      header: "Start Time",
      accessor: "startTime",
      className: "hidden md:table-cell",
    },
    {
      header: "End Time",
      accessor: "endTime",
      className: "hidden md:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];

  const renderRow = (item: Event) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PurpleDeepLight"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td className="hidden md:table-cell">
        {item?.description.length > 50
          ? `${item.description.substring(0, 50)}...`
          : item.description}
      </td>
      <td className="hidden md:table-cell">
        {moment(item?.startTime).format("YYYY-MM-DD HH:mm")}
      </td>
      <td className="hidden md:table-cell">
        {moment(item?.endTime).format("YYYY-MM-DD HH:mm")}
      </td>
      <td>
        <div className="flex items-center gap-2">
          <FormContainer table="event" type="view" data={item} />
          {role === "admin" && (
            <>
              <FormContainer table="event" type="update" data={item} />
              <FormContainer table="event" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
  const p = page ? parseInt(page) : 1;

  const userBusiness = await prisma.business.findUnique({
    where: { userId: user?.id },
    select: { id: true, sectorId: true },
  });

  const query: Prisma.EventWhereInput = {};

  const searchFilter =
    queryParams.search && queryParams.search.length > 0
      ? { title: { contains: queryParams.search } }
      : undefined;

  if (role === "member") {
    if (userBusiness) {
      query.AND = [
        searchFilter || {}, // Add search if present
        {
          OR: [
            { businessId: userBusiness.id, sectorId: null }, // Business-specific
            { sectorId: userBusiness.sectorId, businessId: null }, // Sector-specific
            { sectorId: null, businessId: null }, // General
          ],
        },
      ];
    } else {
      query.AND = [
        searchFilter || {},
        { sectorId: null, businessId: null }, // Only general events
      ];
    }
  } else {
    if (searchFilter) {
      query.title = searchFilter.title;
    }
  }

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            query.title = { contains: value };
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.event.findMany({
      where: query,
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.event.count({ where: query }),
  ]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-YellowDeep">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-YellowDeep">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && <FormContainer table="event" type="create" />}
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

export default EventListPage;
