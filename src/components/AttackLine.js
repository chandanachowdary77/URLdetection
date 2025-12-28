import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { time: "00:00", value: 40 },
  { time: "04:00", value: 32 },
  { time: "08:00", value: 68 },
  { time: "12:00", value: 90 },
  { time: "16:00", value: 120 },
  { time: "20:00", value: 95 },
];

export default function AttackLine() {
  return (
    <div className="bg-[#111827] p-6 rounded-xl">
      <h3 className="mb-4 font-semibold">Attack Timeline (24h)</h3>
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="time" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#6366f1" />
      </LineChart>
    </div>
  );
}
