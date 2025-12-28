export default function StatsCard({ title, value, trend }) {
  return (
    <div className="bg-[#111827] p-5 rounded-xl shadow">
      <p className="text-sm text-gray-400">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
      <p className="text-sm text-green-400 mt-1">{trend} from last week</p>
    </div>
  );
}
