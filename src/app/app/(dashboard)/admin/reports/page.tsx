import AttendanceChart from "@/components/AttendanceChart";
import BarReport from "@/components/BarRepor";
import CountChartContainer from "@/components/CountChartContainer";
import FinanceChart from "@/components/FinanceChart";
import PieReport from "@/components/PieReportChart";
import DisabilityInclusionChart from "@/components/Reports";

import {
  getBusinessesBySector,
  getDisabilityCountPerSector,
  getDisabilityInclusionStats,
  getRegisteredCountPerSector,
  getRegistrationStats,
  getRevenueBracketBySector,
} from "@/lib/actions";
import { defaultColors2 } from "@/lib/settings";

const AdminPage = async () => {
  const [
    sectorData,
    revenueData,
    disabilityData,
    registrationData,
    disabilityCountData,
    registerCountData,
  ] = await Promise.all([
    getBusinessesBySector(),
    getRevenueBracketBySector(),
    getDisabilityInclusionStats(),
    getRegistrationStats(),
    getDisabilityCountPerSector(),
    getRegisteredCountPerSector(),
  ]);

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full  flex flex-col gap-8">
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

        {/* businees by sector */}

        <div>
          <BarReport
            data={sectorData}
            colors={defaultColors2}
            title="Businesses by Sector"
          />
        </div>

        <div>
          <BarReport
            data={revenueData}
            // xKey="revenueBracket"
            title="Revenue Bracket"
          />
        </div>
        {/* disability dayta */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <PieReport
              data={disabilityData}
              dataKey="disabilityInclusion"
              title="Disability Inclusion"
            />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <BarReport
              title="Disability Inclusion per Sector"
              data={disabilityCountData}
            />
          </div>
        </div>

        {/* regisggration data */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <PieReport
              data={registrationData}
              dataKey="disabilityInclusion"
              title="Disability Inclusion"
            />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <BarReport
              title="Disability Inclusion per Sector"
              data={registerCountData}
              colors={defaultColors2}
            />
          </div>
        </div>
      </div>

      {/* RIGHT */}
    </div>
  );
};

export default AdminPage;
