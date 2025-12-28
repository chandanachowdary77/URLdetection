export default function AttackTable() {
  const attacks = [
    {
      id: "ATK-2025-0001",
      url: "http://192.168.1.105/admin.php?id=1' OR '1'='1",
      type: "SQL Injection",
      ip: "45.123.67.89",
      severity: "High",
      status: "Blocked",
      time: "2025-12-28 14:32:15",
    },
    {
      id: "ATK-2025-0002",
      url: "http://10.0.0.45/search?q=<script>alert('xss')</script>",
      type: "XSS",
      ip: "23.45.67.123",
      severity: "Medium",
      status: "Detected",
      time: "2025-12-28 14:29:43",
    },
    {
      id: "ATK-2025-0003",
      url: "http://172.16.0.88/files?path=../../etc/passwd",
      type: "Dir Traversal",
      ip: "89.234.56.78",
      severity: "Critical",
      status: "Blocked",
      time: "2025-12-28 14:27:08",
    },
    {
      id: "ATK-2025-0004",
      url: "http://192.168.5.12/api?url=http://internal-server/admin",
      type: "SSRF",
      ip: "156.78.90.12",
      severity: "High",
      status: "Blocked",
      time: "2025-12-28 14:25:56",
    },
    {
      id: "ATK-2025-0005",
      url: "http://10.10.10.23/exec?cmd=cat /etc/shadow",
      type: "Cmd Injection",
      ip: "67.89.123.45",
      severity: "Critical",
      status: "Blocked",
      time: "2025-12-28 14:23:12",
    },
  ];

  const severityStyle = {
    High: "bg-indigo-500/20 text-indigo-400",
    Medium: "bg-sky-500/20 text-sky-400",
    Critical: "bg-red-500/20 text-red-400",
  };

  const statusStyle = {
    Blocked: "bg-slate-700 text-white",
    Detected: "bg-slate-600 text-white",
  };

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#020617] rounded-2xl p-6 shadow-xl border border-slate-800">
      
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">
          Recent Attack Activity
        </h3>
        <p className="text-sm text-slate-400">
          Latest detected URL-based attacks
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-slate-300 border-b border-slate-700">
            <tr>
              <th className="py-3">ID</th>
              <th className="py-3">URL</th>
              <th className="py-3">Attack Type</th>
              <th className="py-3">Source IP</th>
              <th className="py-3">Severity</th>
              <th className="py-3">Status</th>
              <th className="py-3">Timestamp</th>
            </tr>
          </thead>

          <tbody>
            {attacks.map((a, i) => (
              <tr
                key={i}
                className="border-b border-slate-800 hover:bg-slate-800/40 transition"
              >
                <td className="py-3 font-mono text-indigo-400">{a.id}</td>
                <td className="py-3 text-sky-400 break-all max-w-xs">
                  {a.url}
                </td>
                <td className="py-3">{a.type}</td>
                <td className="py-3">{a.ip}</td>

                {/* Severity Badge */}
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${severityStyle[a.severity]}`}
                  >
                    {a.severity}
                  </span>
                </td>

                {/* Status Badge */}
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${statusStyle[a.status]}`}
                  >
                    {a.status}
                  </span>
                </td>

                <td className="py-3 text-slate-400">{a.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
