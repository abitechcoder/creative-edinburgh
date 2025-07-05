"use client";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieReportChart = ({
  data,
  dataKey,
  title,
}: {
  data: any[];
  dataKey: string;
  title: string;
}) => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <h1 className="text-lg font-semibold">{title}</h1>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="_count"
          nameKey={dataKey}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieReportChart;
