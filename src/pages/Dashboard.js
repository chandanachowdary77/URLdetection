import StatsCard from "../components/StatsCard";
import AttackPie from "../components/AttackPie";
import AttackLine from "../components/AttackLine";
import AttackTable from "../components/AttackTable";

export default function Dashboard() {
  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-white">
          Dashboard
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Real-time URL attack detection and analysis
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatsCard title="Total URLs Analyzed" value="124,563" trend="+12.5%" />
        <StatsCard title="Attacks Detected" value="3,847" trend="+8.2%" />
        <StatsCard title="Successful Attacks" value="892" trend="-3.1%" />
        <StatsCard title="Suspicious IPs" value="1,234" trend="+15.3%" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <AttackPie />
        <AttackLine />
      </div>

      {/* Table */}
      <AttackTable />
    </>
  );
}
