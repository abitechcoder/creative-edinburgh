"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const DisabilityInclusionChart = ({
  data,
}: {
  data: { sector: string; count: number }[];
}) => (
  <div className="bg-white p-4 rounded-lg shadow-md w-full h-[400px]">
    <h2 className="text-lg font-semibold mb-4 text-gray-700">
      Disability Inclusion per Sector
    </h2>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sector" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#4CAF50" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default DisabilityInclusionChart;
