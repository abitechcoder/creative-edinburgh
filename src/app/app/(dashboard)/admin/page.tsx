import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import BarReport from "@/components/BarRepor";
import CountChartContainer from "@/components/CountChartContainer";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import Reports from "@/components/Reports";
import UserCard from "@/components/UserCard";
import { getRevenueBracketBySector } from "@/lib/actions";
import prisma from "@/lib/prisma";

import Link from "next/link";

const AdminPage = async () => {
  const events = await prisma.event.findMany({
    take: 3,
  });

  const [revenueBracketBySector] = await Promise.all([
    getRevenueBracketBySector(),
  ]);
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="business" />
          <UserCard type="registered" />
          <UserCard type="sector" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]">
          <BarReport
            data={revenueBracketBySector}
            xKey="revenueBracket"
            title="Revenue Bracket"
            color="#7b479c"
          />
        </div>
        <div className="flex align-middle justify-end  ">
          <Link
            className="p-3 rounded-md bg-SkyBlue w-40 text-center "
            href={`/app/admin/reports`}
          >
            More Reports
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar events={events} />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
