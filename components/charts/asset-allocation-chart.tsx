"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Property", value: 45 },
  { name: "Stocks", value: 22 },
  { name: "Cash", value: 12 },
  { name: "EPF", value: 16 },
  { name: "Insurance", value: 5 },
];

const COLORS = [
  "#10b981",
  "#3b82f6",
  "#f59e0b",
  "#8b5cf6",
  "#ef4444",
];

export default function AssetAllocationChart() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Asset Allocation
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}