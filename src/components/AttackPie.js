import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "SQL Injection", value: 32, color: "#6366f1" },
  { name: "XSS", value: 23, color: "#8b5cf6" },
  { name: "SSRF", value: 15, color: "#06b6d4" },
  { name: "Dir Traversal", value: 12, color: "#22c55e" },
  { name: "Cmd Injection", value: 10, color: "#f59e0b" },
  { name: "Others", value: 8, color: "#ef4444" },
];

export default function AttackPie() {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#020617] rounded-2xl p-6 shadow-xl border border-slate-800">
      
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">
          Attack Types Distribution
        </h3>
        <p className="text-sm text-slate-400">
          Breakdown of detected attack categories
        </p>
      </div>

      <div className="flex items-center justify-center gap-10">

        {/* Pie Chart */}
        <PieChart width={260} height={260}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={95}
            innerRadius={45}
            paddingAngle={2}
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
  contentStyle={{
    backgroundColor: "#020617",
    border: "1px solid #334155",
    borderRadius: "8px",
    color: "#ffffff",        // ✅ text color FIX
    fontSize: "14px",
  }}
  labelStyle={{
    color: "#e5e7eb",        // label color
    fontWeight: "600",
  }}
  itemStyle={{
    color: "#ffffff",        // value text color
  }}
/>

        </PieChart>

        {/* Labels */}
        <div className="space-y-3">
          {data.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <p
                className="text-sm font-medium"
                style={{ color: item.color }}
              >
                {item.name}: {item.value}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
