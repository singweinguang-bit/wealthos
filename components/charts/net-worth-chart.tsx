"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", value: 1080000 },
  { month: "Feb", value: 1115000 },
  { month: "Mar", value: 1140000 },
  { month: "Apr", value: 1185000 },
  { month: "May", value: 1210000 },
  { month: "Jun", value: 1240000 },
  { month: "Jul", value: 1286520 },
];

export default function NetWorthChart() {
  return (
    <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Net Worth Trend
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}