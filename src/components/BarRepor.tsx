"use client";
import { defaultColors } from "@/lib/settings";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

// Optional: A fallback palette if you don’t pass custom colors

const BarReport = ({
  data,
  title,
  colors,
}: {
  data: { name: string; count: number }[];
  title: string;
  colors?: string[]; // Optional custom color array
}) => {
  const barColors = colors || defaultColors;

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={barColors[index % barColors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarReport;
