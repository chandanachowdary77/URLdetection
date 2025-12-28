import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "URL Detection", path: "/url-detection" },
    { name: "IP Analysis", path: "/ip-analysis" },
    { name: "PCAP Analysis", path: "/pcap-analysis" },
    { name: "Reports", path: "/reports" },
  ];

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-[#0f172a] px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">

        {/* LEFT: Logo */}
        <h1 className="text-2xl font-bold text-indigo-400">
          CyberProtect
        </h1>

        {/* RIGHT: Nav Items + Logout */}
        <div className="flex items-center gap-6">
          {links.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-indigo-400 transition
                ${isActive ? "text-indigo-400" : "text-slate-200"}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="text-sm font-medium text-red-400 hover:text-red-500 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
